class Wedge {
    constructor(start, end, colour, dist) {
        this.start = start;
        this.end = end;
        this.colour = colour;
        this.dist = dist;
    }
    set_dist(dist){
        this.dist = dist;
    }
}

var rightPressed = false;
var leftPressed = false;

var col1 = 'orange';
var col2 = 'blue';
var SCORE = 0;

var test_wedge = new Wedge(0, 70, col1, 200);
var test_wedge_2 = new Wedge(70, 140, col2, 290);
var test_wedge_3 = new Wedge(200, 270, col1, 370);
var wedges = [test_wedge, test_wedge_2, test_wedge_3];

var catcher = {
    'bearing': 0,
    'colour': col1,
    'width': 260,
    'size': 100,
    'set_bearing': function(deg) { 
        catcher['bearing'] = deg%360;
    },
    'set_colour': function(col) {
        catcher['colour'] = col;
    }
}

function check(wedges) {
    var start = Math.min(catcher.bearing, (catcher.bearing + catcher.width) % 360); 
    var end = Math.max(catcher.bearing, (catcher.bearing + catcher.width) % 360);  
    var wedge = wedges[0];
    if (wedge.dist > catcher.size) {
        return 0;
    }
    if (start > wedge.start || end < wedge.end) {
        console.log(start, end, wedge.start, wedge.end);
        return -1;
    }
    if (wedge.colour !== catcher.colour) {
        return -1; // Collision 
    }
    return(2);
}

function readline(line) {
    // Reads a 72-column row vector which can take the following values: 0, 1, 2
    
    arr = [];
    return(arr); 
}

function keyDownHandler(e) {
    if(e.keyCode == 39) {
        rightPressed = true;
    }
    else if(e.keyCode == 37) {
        leftPressed = true;
    }
    else if (e.keyCode == 49) {
        catcher.set_colour(col1);
    }
    else if (e.keyCode == 50) {
        catcher.set_colour(col2);
    }
}

function keyUpHandler(e) {
    if(e.keyCode == 39) {
        rightPressed = false;
    }
    else if(e.keyCode == 37) {
        leftPressed = false;
    }
}


function draw_score() {
    var canvas = document.getElementById("c");
    var ctx = canvas.getContext("2d");
    
    ctx.save();
    ctx.translate(canvas.width/2, canvas.height/2);
    ctx.font = '48px serif';
    ctx.textAlign = 'center';
    ctx.textBaseline= 'middle';
    ctx.fillText(SCORE, 0, 0);
    ctx.restore();
}

function draw_wedge(wedges) {
    var canvas = document.getElementById("c");
    var ctx = canvas.getContext("2d");
    var t = Math.PI*2;
    
    ctx.save();
    ctx.translate(canvas.width/2, canvas.height/2);

    for (let wedge of wedges) {
        var start = (wedge.start/360 * t) % t;
        var end = ((wedge.end)/360 * t) % t;
        if (wedge.dist > catcher.size) {
            wedge.set_dist(wedge.dist - 1);
            ctx.beginPath();
            ctx.arc(0, 0, wedge.dist, start, end); 
            ctx.lineWidth = 9;
            ctx.strokeStyle = wedge.colour;
            ctx.stroke();
            ctx.closePath();
        }
        else {
            // Remove the wedge: JS will GC it
            var idx = wedges.indexOf(wedge);
            wedges.splice(idx, 1);
            var min = 0;
            var max = 290;
            var start = Math.floor(Math.random() * (max - min)) + min;
            var end = start + 70;
            var colour = (Math.random() >= 0.5 ? col1 : col2);
            var dist = 350;
            wedges.push(new Wedge(start, end, colour, dist));
        }
    }
    ctx.restore();
}

function draw_catcher() {
    var canvas = document.getElementById("c");
    var ctx = canvas.getContext("2d");
    var t = Math.PI*2;

    var start = Math.min(catcher.bearing, catcher.bearing + catcher.width)/360 * t % t;
    var end = Math.max(catcher.bearing, catcher.bearing + catcher.width)/360 * t % t;

    ctx.save();
    ctx.translate(canvas.width/2, canvas.height/2);
    ctx.beginPath();
    ctx.arc(0, 0, catcher.size, start, end); 
    ctx.lineWidth = 9;
    ctx.strokeStyle = catcher.colour;
    ctx.stroke();
    ctx.closePath();
    ctx.restore();
}

function draw() {
    var canvas = document.getElementById("c");
    var ctx = canvas.getContext("2d");
    ctx.clearRect(0, 0, canvas.width, canvas.height); // clear canvas
    
    if (rightPressed) {
        catcher.set_bearing((catcher.bearing+3) % 360);
    }
    if (leftPressed) {
        b = catcher.bearing-3
        b = (b < 0 ? 360+b : b);
        catcher.set_bearing(b % 360);
    }

    draw_catcher();
    draw_wedge(wedges);
    SCORE = SCORE + check(wedges);
    draw_score();
    
    ctx.save();
    ctx.translate(canvas.width/2, canvas.height/2);
    ctx.beginPath();
    ctx.stroke();
    ctx.closePath();
    ctx.restore();

    window.requestAnimationFrame(draw);
}

function init(){
    var canvas = document.getElementById("c");
    var ctx = canvas.getContext("2d");
    document.addEventListener("keydown", keyDownHandler, false);
    document.addEventListener("keyup", keyUpHandler, false);
    window.requestAnimationFrame(draw);
}
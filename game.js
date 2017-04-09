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

var t1 = new Wedge(0, 90, col1, 200);
var t2 = new Wedge(90, 180, col2, 240);
var t3 = new Wedge(180, 270, col1, 280);
var t4 = new Wedge(270, 360, col2, 320);
var wedges = [t1, t2, t3, t4];

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
    var start = catcher.bearing;
    var end = (start + (360-catcher.width) % 360);
    var wedge = wedges[0];
    if (wedge.dist > catcher.size) {
        return 0;
    }
    if (wedge.colour !== catcher.colour) {
        return -1; // Collision 
    }
    // The following code is cheem. Idea by marvin
    var s = 0;
    var e = ((end - start) < 0 ? 360-(end-start): end-start);
    var ws = ((wedge.start - start) < 0 ? 360+(wedge.start-start) : wedge.start - start);
    var we = ((wedge.end- start) < 0 ? 360+(wedge.end-start) : wedge.end- start);
    if (s > ws || e < we) {
        console.log(s, e, ws, we);
        return -1;
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
    ctx.fillStyle = 'white';
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
        var start = ((wedge.start/360) * t) % t;
        var end = ((wedge.end/360) * t) % t;
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
            var start = Math.floor(Math.random() * 290);
            var end = start + 70;
            var colour = (Math.random() >= 0.5 ? col1 : col2);
            var dist = 260;
            wedges.push(new Wedge(start, end, colour, dist));
        }
    }
    ctx.restore();
}

function draw_catcher() {
    var canvas = document.getElementById("c");
    var ctx = canvas.getContext("2d");
    var t = Math.PI*2;

    var start = Math.min(catcher.bearing, catcher.bearing + 360 -catcher.width)/360 * t % t;
    var end = Math.max(catcher.bearing, catcher.bearing + 360 - catcher.width)/360 * t % t;

    ctx.save();
    ctx.translate(canvas.width/2, canvas.height/2);
    ctx.beginPath();
    ctx.arc(0, 0, catcher.size, start, end, true); 
    ctx.lineWidth = 19;
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
        catcher.set_bearing((catcher.bearing+5) % 360);
    }
    if (leftPressed) {
        b = catcher.bearing-5
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
    ctx.strokeStyle = 'grey';
    ctx.arc(0, 0, 150, 0, 360); 
    ctx.arc(0, 0, 250, 0, 360); 
    ctx.arc(0, 0, 350, 0, 360); 
    ctx.moveTo(60, 0);
    ctx.lineTo(200, 0);
    ctx.moveTo(-60, 0);
    ctx.lineTo(-200, 0);
    ctx.moveTo(40 * 0.5, 40 * 0.866);
    ctx.lineTo(canvas.width * 0.5, canvas.height * 0.866);
    ctx.moveTo(-40 * 0.5, 40 * 0.866);
    ctx.lineTo(canvas.width * -0.5, canvas.height * 0.866);
    ctx.moveTo(40 * 0.5, 40 * -0.866);
    ctx.lineTo(canvas.width * 0.5, canvas.height * -0.866);
    ctx.moveTo(40 * -0.5, 40 * -0.866);
    ctx.lineTo(canvas.width * -0.5, canvas.height * -0.866);
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

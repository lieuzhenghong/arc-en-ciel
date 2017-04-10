'use strict';
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
    'width': 100,
    'size': 100,
    'set_bearing': function(deg) { 
        catcher['bearing'] = (deg < 0 ? (360 + deg)%360 : deg%360);
    },
    'set_colour': function(col) {
        catcher['colour'] = col;
    }
};

function generate_wedge() {
    let start = Math.floor(Math.random() * 290);
    let end = start + 60;
    let colour = (Math.random() >= 0.5 ? col1 : col2);
    let dist = 260;
    return(new Wedge(start, end, colour, dist));
}


function check(wedges) {
    var start = catcher.bearing;
    var end = (start + (catcher.width));
    var wedge = wedges[0];
    var ws = wedge.start;
    var we = wedge.end;
    var wedge_size = (ws - we < 0) ? we-ws : ws-we;
    var overlap = 0;

    if (wedge.dist > catcher.size) {
        overlap = 0;
    }
    else {
        var s = start-start;
        var e = (end-start < 0) ? (end-start+360) : (end-start);
        var w_s = (ws-start < 0) ? (360+(ws-start)) : (ws-start);
        var w_e = (we-start < 0) ? (360+(we-start)): (we-start);
        var overlap = 0;
        if (wedge.colour !== catcher.colour) {
            overlap = 0;
        }
        else if (w_s > w_e && w_e < s) { // Missed on the left 
            overlap = 0;
        }
        else if (w_s < w_e && w_s > e) { // Missed on the right
            overlap = 0;
        }
        else if (w_s > w_e) { // Overlap from the right (hanging left)
            overlap = Math.round((w_e / wedge_size * 100 ));
        }
        else if (w_e > w_s && w_e < e) { // Firmly within
            overlap = 100;
        }
        else {
            overlap = Math.round((wedge_size - (w_e-e)) / wedge_size * 100);
        }
        let idx = wedges.indexOf(wedge);
        wedges.splice(idx, 1);
        wedges.push(generate_wedge(wedges));
    }
    return(overlap)
}

function readline(line) {
    var arr = [];
    return(arr); 
}

function keyDownHandler(e) {
    if (e.keyCode == 49) {
        catcher.set_colour(col1);
    }
    else if (e.keyCode == 50) {
        catcher.set_colour(col2);
    }
}

function draw_score() {
    var canvas = document.getElementById('c');
    var ctx = canvas.getContext('2d');
    
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
    var canvas = document.getElementById('c');
    var ctx = canvas.getContext('2d');
    var t = Math.PI*2;
    
    ctx.save();
    ctx.translate(canvas.width/2, canvas.height/2);

    for (let wedge of wedges) {
        let start = ((wedge.start/360) * t) % t;
        let end = ((wedge.end/360) * t) % t;
        ctx.beginPath();
        ctx.arc(0, 0, wedge.dist, start, end, false); 
        ctx.lineWidth = 9;
        ctx.strokeStyle = wedge.colour;
        ctx.stroke();
        ctx.closePath();
    }
    ctx.restore();
}

function draw_catcher() {
    var canvas = document.getElementById('c');
    var ctx = canvas.getContext('2d');
    var t = Math.PI*2;

    var start = Math.min(catcher.bearing, catcher.bearing + catcher.width)/360 * t % t;
    var end = Math.max(catcher.bearing, catcher.bearing + catcher.width)/360 * t % t;

    ctx.save();
    ctx.translate(canvas.width/2, canvas.height/2);
    ctx.beginPath();
    ctx.arc(0, 0, catcher.size, start, end, false); 
    ctx.lineWidth = 19;
    ctx.strokeStyle = catcher.colour;
    ctx.stroke();
    ctx.closePath();
    ctx.restore();
}

function draw_stage(){
    var canvas = document.getElementById('c');
    var ctx = canvas.getContext('2d');
    ctx.save();
    ctx.translate(canvas.width/2, canvas.height/2);
    ctx.beginPath();
    ctx.strokeStyle = 'grey';
    ctx.arc(0, 0, 100, 0, 360); 
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
}

function draw() {
    var canvas = document.getElementById('c');
    var ctx = canvas.getContext('2d');
    ctx.clearRect(0, 0, canvas.width, canvas.height); // clear canvas

    draw_catcher();
    draw_wedge(wedges);
    SCORE = SCORE + check(wedges);
    draw_score();
    draw_stage();

    window.requestAnimationFrame(draw);
}

function get_mouse_pos(e) {
    var canvas = document.getElementById('c');
    var rect = canvas.getBoundingClientRect(); 
    return {
        x: e.clientX - rect.left,
        y: e.clientY - rect.top
    };
}

function mouseMoveHandler(e) {
    var canvas = document.getElementById('c');
    var pos = get_mouse_pos(e); 
    var x = pos.x - canvas.width/2;
    var y = pos.y - canvas.height/2;
    var angle = Math.atan2(y, x) / (Math.PI * 2) * 360;
    var w = (catcher.width)
    catcher.set_bearing((angle - w/2) < 0 ? 360+(angle-w/2) : (angle-w/2));
}

function update_wedges(wedges) {
    for (let wedge of wedges) {
        wedge.dist -= 10;
    }
}

function update(){
    update_wedges(wedges);
    SCORE += check(wedges);
}

function init(){
    document.addEventListener('keydown', keyDownHandler, false);
    document.addEventListener('mousemove', mouseMoveHandler, false);
    window.requestAnimationFrame(draw);
    window.setInterval(update, 100);
}

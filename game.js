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
var SPEED = 10;
var TICK_COUNT = 0;
const CATCHER_THICKNESS = 15;
const WEDGE_THICKNESS = 10;
const RENDER_DIST = 600;
const TICK_LENGTH = 40;
const LEEWAY = 20;
var KEY_PRESSED = 0;

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

/*
var DATA = ['0 60 1 400 13', 
            '50 110 1 400 16',
            '100 160 1 400 19',
            '150 210 1 400 22'
            ]
*/

var DATA = [
'0 60 1 400 3.3',
'0 60 2 400 3.7',
'0 60 1 400 4.1',
'0 60 2 400 4.5',
'60 120 1 400 4.9',
'60 120 2 400 5.3',
'60 120 1 400 5.7',
'60 120 2 400 6.1',
'120 180 2 400 6.5', 
'130 190 2 400 6.9', 
'140 200 1 400 7.3', 
'150 210 1 400 7.7', 
'220 280 2 400 8.1', 
'250 310 2 400 8.5', 
'280 360 1 400 8.9', 
'0 60 1 400 9.3', 
'0 60 2 400 9.7', 
'0 60 1 400 10.1',
'0 60 2 400 10.5',
'0 60 1 400 10.9',
'60 120 2 400 11.4',
'60 120 2 400 11.8',
'60 120 2 400 12.2',
'60 120 2 400 12.6',
'120 180 2 400 13.0', 
'130 190 2 400 13.4', 
'140 200 1 400 13.8', 
'150 210 1 400 14.2', 
'220 280 2 400 14.6', 
'250 310 2 400 15.0', 
'280 360 1 400 15.4',
'300 20 2 400 15.8',
'0 60 1 400 16.4', 
'0 60 2 400 16.8',
'0 60 1 400 17.2',
'0 60 2 400 17.6',
'60 120 2 400 18.0',
'60 120 2 400 18.3',
'60 120 2 400 18.7',
'60 120 2 400 19.1',
'60 120 2 400 19.5',
'120 180 2 400 19.9', 
'130 190 2 400 20.3', 
'140 200 1 400 20.7', 
'150 210 1 400 21.1', 
'220 280 2 400 21.5', 
'250 310 2 400 21.9', 
'280 360 1 400 22.3',
'300 20 2 400 22.7',
'0 60 2 400 23.2',
'0 60 2 400 23.6',
'0 60 2 400 24.0',
'0 60 2 400 24.4',
'60 120 1 400 24.8',
'90 150 1 400 25.2',
'120 180 1 400 25.6',
'150 210 1 400 26.0',
//////////////////////////
'90 130 2 400 26.6',
'110 150 2 400 26.7',
'130 170 2 400 26.8',

'0 40 1 400 27.0',
'20 60 1 400 27.1',
'40 80 1 400 27.2',

'90 130 2 400 27.4',
'110 150 2 400 27.5',
'130 170 2 400 27.6',

'200 240 1 400 27.8',
'220 260 1 400 27.9',
'240 280 1 400 28.0',
//////////////////////////
'90 130 1 400 28.2',
'120 160 1 400 28.3',
'160 200 1 400 28.4',

'180 220 1 400 28.6',
'210 250 1 400 28.7',
'250 290 1 400 28.8',

'300 340 1 400 29.0',
'340 20 1 400 29.1',
'20 60 1 400 29.2',

'90 130 1 400 29.4',
'120 160 1 400 29.5',
'160 200 1 400 29.6',
//////////////////////////
'180 220 2 400 29.8',
'210 250 2 400 29.9',
'250 290 2 400 30.0',

'300 340 2 400 30.2',
'340 20 2 400 30.3',
'20 60 2 400 30.4',

'90 130 2 400 30.6',
'120 160 2 400 30.7',
'160 200 2 400 30.8',

'180 220 2 400 31.0',
'210 250 2 400 31.1',
'250 290 2 400 31.2',
//////////////////////////
'300 340 1 400 31.4',
'340 20 1 400 31.5',
'20 60 1 400 31.6',

'90 130 1 400 31.8',
'120 160 1 400 31.9',
'160 200 1 400 32.0',

'180 220 1 400 32.2',
'210 250 1 400 32.3',
'250 290 1 400 32.4',

'300 340 1 400 32.6',
'340 20 1 400 32.7',
'20 60 1 400 32.8'
//////////////////////////
    ];

var WEDGES = []

function read_beatmap(beatmap) {
    for (var line of beatmap) {
        var beat = line.split(' '); 
        // Conversion
        for (let i = 0; i < beat.length; i++) {
            beat[i] = parseFloat(beat[i]);
        }
        WEDGES.push(generate_wedge(
                    beat[0],
                    beat[1],
                    beat[2], 
                    catcher.size + WEDGE_THICKNESS + (SPEED * 1000/TICK_LENGTH * beat[4])
                    )
        );
    }
}

function generate_wedge(start, end, colour, dist) {
    /*
    let start = Math.floor(Math.random() * 290);
    let end = start + 60;
    let colour = (Math.random() >= 0.5 ? col1 : col2);
    let dist = 400;
    */
    let col = (colour == '1' ? col1 : col2);
    return(new Wedge(start, end, col, dist));
}


function check(wedges) {
    if (wedges.length == 0) {
        return (0);
    }
    var start = catcher.bearing;
    var end = (start + (catcher.width));
    var overlap = 0;
    var hit = false;
    for (var wedge of wedges) {
        var ws = wedge.start;
        var we = wedge.end;
        var s = start-start;
        var e = (end-start < 0) ? (end-start+360) : (end-start);
        var w_s = (ws-start < 0) ? (360+(ws-start)) : (ws-start);
        var w_e = (we-start < 0) ? (360+(we-start)): (we-start);
        var wedge_size = (ws - we < 0) ? we-ws : ws-we;

        if (wedge.dist > catcher.size + LEEWAY + WEDGE_THICKNESS) {
            return(overlap);
        }
        else if (wedge.dist > catcher.size + WEDGE_THICKNESS) {
            if (KEY_PRESSED !== 0 && catcher.colour == wedge.colour) {
                hit = true;
                if (w_s > w_e) { // Overlap from the right (hanging left)
                    overlap = Math.round((w_e / wedge_size * 100 ));
                }
                else if (w_e > w_s && w_e < e) { // Firmly within
                    overlap = 100;
                }
                else {
                    overlap = Math.round((wedge_size - (w_e-e)) / 
                                          wedge_size * 100
                                         );
                }
            }
            if (hit) {
                let idx = wedges.indexOf(wedge);
                wedges.splice(idx, 1);
            }
        }
        else if (wedge.dist > catcher.size + WEDGE_THICKNESS - LEEWAY) {
            if (KEY_PRESSED !==0 && catcher.colour == wedge.colour) {
                hit = true;
                if (w_s > w_e) { // Overlap from the right (hanging left)
                    overlap = Math.round((w_e / wedge_size * 100 ));
                }
                else if (w_e > w_s && w_e < e) { // Firmly within
                    overlap = 100;
                }
                else {
                    overlap = Math.round((wedge_size - (w_e-e)) / wedge_size * 100);
                    console.log(overlap);
                }
            }
            else if (KEY_PRESSED !== 0 && catcher.colour !== wedge.colour) {
                hit = true;
                overlap = -100;
            }
            if (hit) {
                let idx = wedges.indexOf(wedge);
                wedges.splice(idx, 1);
            }
        }
        else {
            overlap = -100;
            let idx = wedges.indexOf(wedge);
            wedges.splice(idx, 1);
        }
        return(overlap);
    }
}

function keyDownHandler(e) {
    if (e.keyCode == 49) {
        catcher.set_colour(col1);
        KEY_PRESSED = 1;
    }
    else if (e.keyCode == 50) {
        catcher.set_colour(col2);
        KEY_PRESSED = 2;
    }
}
function keyUpHandler(e) {
    if (e.keyCode == 49) {
        catcher.set_colour(col1);
        KEY_PRESSED = 0;
    }
    else if (e.keyCode == 50) {
        catcher.set_colour(col2);
        KEY_PRESSED = 0;
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
        if (wedge.dist > RENDER_DIST) {
            break;
        }
        if (wedge.dist <= RENDER_DIST) {
            let start = ((wedge.start/360) * t) % t;
            let end = ((wedge.end/360) * t) % t;
            ctx.beginPath();
            ctx.arc(0, 0, wedge.dist, start, end, false); 
            ctx.lineWidth = WEDGE_THICKNESS;
            ctx.strokeStyle = wedge.colour;
            ctx.stroke();
            ctx.closePath();
        }
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
    ctx.lineWidth = CATCHER_THICKNESS;
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
    draw_wedge(WEDGES);
    SCORE = SCORE + check(WEDGES);
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
        wedge.dist -= SPEED;
    }
}

function update(){
    TICK_COUNT++;
    update_wedges(WEDGES);
    SCORE += check(WEDGES);
}

function init(){
    var canvas = document.getElementById('c');
    // Set canvas dimensions
    canvas.width = (document.documentElement.clientWidth);
    canvas.height = document.documentElement.clientHeight;
    document.addEventListener('keydown', keyDownHandler, false);
    document.addEventListener('keyup', keyUpHandler, false);
    document.addEventListener('mousemove', mouseMoveHandler, false);
    var audio = new Audio('jubeat.mp3');
    audio.addEventListener("canplaythrough", function(){
        audio.play(); 
        window.setInterval(update, TICK_LENGTH);
    }, false); 
    window.requestAnimationFrame(draw);
    read_beatmap(DATA);
}

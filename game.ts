'use strict'
var DATA: string[] =  [
    'START 2.80',
    '0 60 1 400 0.425',
    '0 60 2 400 0.425',
    '0 60 1 400 0.425',
    '0 60 2 400 0.425',

    '0 60 1 400 0.425',
    '0 60 2 400 0.425',
    '0 60 1 400 0.425',
    '0 60 2 400 0.425',

    '0 60 1 400 0.425',
    '0 60 2 400 0.425',
    '0 60 1 400 0.425',
    '0 60 2 400 0.425',

    '0 60 1 400 0.425',
    '0 60 2 400 0.425',
    '0 60 1 400 0.425',
    '0 60 2 400 0.425',

    '0 60 1 400 0.425',
    '0 60 2 400 0.425',
    '0 60 1 400 0.425',
    '0 60 2 400 0.425',

    '0 60 1 400 0.425',
    '0 60 2 400 0.425',
    '0 60 1 400 0.425',
    '0 60 2 400 0.425',

    '0 60 1 400 0.425',
    '0 60 2 400 0.425',
    '0 60 1 400 0.425',
    '0 60 2 400 0.425',

    '0 60 1 400 0.425',
    '0 60 2 400 0.425',
    '0 60 1 400 0.425',
    '0 60 2 400 0.425',

    '0 60 1 400 0.425',
    '0 60 2 400 0.425',
    '0 60 1 400 0.425',
    '0 60 2 400 0.425',

    '0 60 1 400 0.425',
    '0 60 2 400 0.425',
    '0 60 1 400 0.425',
    '0 60 2 400 0.425',

    '0 60 1 400 0.425',
    '0 60 2 400 0.425',
    '0 60 1 400 0.425',
    '0 60 2 400 0.425',

    '0 60 1 400 0.425',
    '0 60 2 400 0.425',
    '0 60 1 400 0.425',
    '0 60 2 400 0.425',

    '0 60 1 400 0.425',
    '0 60 2 400 0.425',
    '0 60 1 400 0.425',
    '0 60 2 400 0.425',

    '0 60 1 400 0.425',
    '0 60 2 400 0.425',
    '0 60 1 400 0.425',
    '0 60 2 400 0.425',

    '0 60 1 400 0.425',
    '0 60 1 400 0.10',
    '0 60 1 400 0.10',

    '0 60 1 400 0.23',
    '0 60 1 400 0.10',
    '0 60 1 400 0.10',

    '0 60 1 400 0.23',
    '0 60 1 400 0.10',
    '0 60 1 400 0.10',

    '0 60 1 400 0.23',
    '0 60 1 400 0.10',
    '0 60 1 400 0.10',

    '0 60 1 400 0.23',
    '0 60 1 400 0.10',
    '0 60 1 400 0.10',

    '0 60 1 400 0.23',
    '0 60 1 400 0.10',
    '0 60 1 400 0.10',

    '0 60 2 400 0.23',
    '10 70 2 400 0.10',
    '20 80 2 400 0.10',

    '30 90 2 400 0.23',
    '40 100 2 400 0.10',
    '50 110 2 400 0.10',

    '60 120 2 400 0.23',
    '70 130 2 400 0.10',
    '80 140 2 400 0.10',

    '90 150 2 400 0.23',
    '100 160 2 400 0.10',
    '110 170 2 400 0.10',

    '120 180 2 400 0.23',
    '130 190 2 400 0.10',
    '140 200 2 400 0.10',

    '150 210 2 400 0.23',
    '160 220 2 400 0.10',
    '170 230 2 400 0.10',

    '180 240 2 400 0.23',
    '190 250 2 400 0.10',
    '200 260 2 400 0.10',

    '210 270 2 400 0.23',
    '220 280 2 400 0.10',
    '230 290 2 400 0.10',

    '240 300 2 400 0.23',
    '250 310 2 400 0.10',
    '260 320 2 400 0.10',

////////////////////////////

    '0 60 1 400 0.20',
    '0 60 2 400 0.20',
    '0 60 1 400 0.20',
    
    '0 60 1 400 0.42',
    '0 60 2 400 0.20',
    '0 60 1 400 0.20',

    '0 60 1 400 0.42',
    '0 60 2 400 0.20',
    '0 60 1 400 0.20',

    '0 60 1 400 0.40',
    '0 60 2 400 0.17',
    '0 60 1 400 0.17',
    '0 60 1 400 0.17',

    '0 60 1 400 0.42',
    '0 60 2 400 0.20',
    '0 60 1 400 0.20',
    
    '0 60 1 400 0.42',
    '0 60 2 400 0.20',
    '0 60 1 400 0.20',

    '0 60 1 400 0.42',
    '0 60 2 400 0.20',
    '0 60 1 400 0.20',

    '0 60 1 400 0.42',
    '0 60 2 400 0.17',
    '0 60 1 400 0.17',
    '0 60 1 400 0.17',

    /////////////////////////
    
    '0 60 1 400 0.30',
    '0 60 2 400 0.30',
    '0 60 1 400 0.30',
    '0 60 1 400 0.32',
    '0 60 2 400 0.32',
    '0 60 1 400 0.52',
    '0 60 1 400 0.17',
    '0 60 1 400 0.17',

    '0 60 1 400 1.32',
    '0 60 2 400 0.30',
    '0 60 1 400 0.30',
    '0 60 1 400 0.32',
    '0 60 1 400 0.32',
    '0 60 2 400 0.52',
    '0 60 2 400 0.20',
    '0 60 2 400 0.20',

    /////////////////////////

    '0 60 1 400 1.32',
    '0 60 2 400 0.20',
    '0 60 1 400 0.20',
    
    '0 60 1 400 0.42',
    '0 60 2 400 0.20',
    '0 60 1 400 0.20',

    '0 60 1 400 0.42',
    '0 60 2 400 0.20',
    '0 60 1 400 0.20',

    '0 60 1 400 0.42',
    '0 60 2 400 0.17',
    '0 60 1 400 0.17',
    '0 60 1 400 0.17',

    '0 60 1 400 0.42',
    '0 60 2 400 0.20',
    '0 60 1 400 0.20',
    
    '0 60 1 400 0.42',
    '0 60 2 400 0.20',
    '0 60 1 400 0.20',

    '0 60 1 400 0.42',
    '0 60 2 400 0.20',
    '0 60 1 400 0.20',

    '0 60 1 400 0.42',
    '0 60 2 400 0.17',
    '0 60 1 400 0.17',
    '0 60 1 400 0.17',

    /////////////////////////
    
    '0 60 1 400 0.30',
    '0 60 2 400 0.30',
    '0 60 1 400 0.30',
    '0 60 1 400 0.32',
    '0 60 2 400 0.32',
    '0 60 1 400 0.52',
    '0 60 1 400 0.17',
    '0 60 1 400 0.17',

    '0 60 1 400 1.32',
    '0 60 2 400 0.30',
    '0 60 1 400 0.30',
    '0 60 1 400 0.32',
    '0 60 1 400 0.32',
    '0 60 2 400 0.52',
    '0 60 2 400 0.20',
    '0 60 2 400 0.22',

    /////////////////////////

    '0 60 1 400 1.62',
    '0 60 1 400 0.42',
    '0 60 1 400 0.42',
    '0 60 1 400 0.21',
    '0 60 1 400 0.21',
    '0 60 1 400 0.21',
    '0 60 1 400 0.42',
    '0 60 1 400 0.42',

    '0 60 1 400 0.42',
    '0 60 1 400 0.21',
    '0 60 1 400 0.21',
    '0 60 1 400 0.42',
    '0 60 1 400 0.42',
    '0 60 1 400 0.21',
    '0 60 1 400 0.21',
    '0 60 1 400 0.21',

    '0 60 1 400 0.82'
];

interface wedge {
    start: number;
    end: number;
    colour: string;
    dist: number;
    set_dist: (dist: number) => void;
    update: (speed: number) => void;
}

class Wedge {
    start: number;
    end: number;
    colour: string;
    dist: number;
    constructor(start: number, end: number, colour: string, dist: number) {
        this.start = start;
        this.end = end;
        this.colour = colour;
        this.dist = dist;
    }
    set_dist(dist: number){
        this.dist = dist;
    }
    update(speed: number) {
        this.set_dist(this.dist-speed);
    }
}

var COL1 = 'orange';
var COL2 = 'blue';
var SCORE = 0;
var SPEED = 400;
var TICK_COUNT = 0;
const CATCHER_THICKNESS = 15;
const WEDGE_THICKNESS = 10;
const RENDER_DIST = 600;
const LEEWAY = 20;
var KEY_PRESSED = 0;
var WEDGES: wedge[] = [];
var TIME_PREV = 0;
var TIME_THIS = 0;
var TIME_DIFF = 0;

// Will be initialised during init() function call
var CANVAS = null;
var CTX = null;

interface catcher {
    bearing: number;
    colour: string;
    width: number;
    radius: number;
    distance: number;
    set_bearing: (bearing: number) => void;
    set_colour: (colour: string) => void;
};

var CATCHER = {
    'bearing': 0,
    'colour': COL1,
    'width': 100,
    'radius': 100,
    'distance': 100 + CATCHER_THICKNESS,
    'set_bearing': function(deg: number) { 
        CATCHER['bearing'] = (deg < 0 ? (360 + deg)%360 : deg%360);
    },
    'set_colour': function(col: string) {
        CATCHER['colour'] = col;
    }
};



function read_beatmap(beatmap: string[]) {
    var time: number = 0;

    for (var line of beatmap) {
        if (line === beatmap[0]) {
            var time = parseFloat(line.split(' ')[1]);
        }
        else {
            var line_arr: string[] = line.split(' '); 
            var beat : number[] = [];
            // Conversion
            for (let i = 0; i < line_arr.length; i++) {
                if (i == 4) {
                time += parseFloat(line_arr[i]); 
                }
                else {
                    beat[i] = parseFloat(line_arr[i]);
                }
            }
            WEDGES.push(generate_wedge(
                        beat[0],
                        beat[1],
                        beat[2], 
                        CATCHER.distance + (SPEED * (time))
                        )
            );
        }
    }
}

function generate_wedge(start: number, end: number, colour: number, dist: number) {
    /*
    let start = Math.floor(Math.random() * 290);
    let end = start + 60;
    let colour = (Math.random() >= 0.5 ? COL1 : COL2);
    let dist = 400;
    */
    let col: string = (colour === 1 ? COL1 : COL2);
    return(new Wedge(start, end, col, dist));
}


function check(wedges) {
    if (wedges.length == 0) {
        return 0;
    }
    var start = CATCHER.bearing;
    var end = (start + (CATCHER.width));
    var overlap = 0;
    var hit = false;

    // I only want to check the first wedge so I don't have to iterate through them
    var wedge = wedges[0];
    var ws = wedge.start;
    var we = wedge.end;
    var s = start-start;
    var e = (end-start < 0) ? (end-start+360) : (end-start);
    var w_s = (ws-start < 0) ? (360+(ws-start)) : (ws-start);
    var w_e = (we-start < 0) ? (360+(we-start)): (we-start);
    var wedge_radius = (ws - we < 0) ? we-ws : ws-we;

    if (wedge.dist > CATCHER.distance + LEEWAY) {
        return(overlap);
    }

    else if (wedge.dist > CATCHER.distance) {
        if (KEY_PRESSED !== 0 && CATCHER.colour == wedge.colour) {
            hit = true;
            if (w_s > w_e) { // Overlap from the right (hanging left)
                overlap = Math.round((w_e / wedge_radius * 100 ));
            }
            else if (w_e > w_s && w_e < e) { // Firmly within
                overlap = 100;
            }
            else {
                overlap = Math.round((wedge_radius - (w_e-e)) / 
                                        wedge_radius * 100
                                        );
            }
        }
        if (hit) {
            let idx = wedges.indexOf(wedge);
            wedges.splice(idx, 1);
        }
    }

    else if (wedge.dist > CATCHER.distance-LEEWAY) {
        if (KEY_PRESSED !== 0 && CATCHER.colour == wedge.colour) {
            hit = true;
            if (w_s > w_e) { // Overlap from the right (hanging left)
                overlap = Math.round((w_e / wedge_radius * 100 ));
            }
            else if (w_e > w_s && w_e < e) { // Firmly within
                overlap = 100;
            }
            else {
                overlap = Math.round((wedge_radius - (w_e-e)) / wedge_radius * 100);
            }
        }
        else if (KEY_PRESSED !== 0 && CATCHER.colour !== wedge.colour) {
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
        let idx:number = wedges.indexOf(wedge);
        wedges.splice(idx, 1);
    }
    return(overlap);
}

function keyDownHandler(e) {
    if (e.keyCode == 49) {
        CATCHER.set_colour(COL1);
        KEY_PRESSED = 1;
    }
    else if (e.keyCode == 50) {
        CATCHER.set_colour(COL2);
        KEY_PRESSED = 2;
    }
}

function keyUpHandler(e) {
    if (e.keyCode == 49) {
        CATCHER.set_colour(COL1);
        KEY_PRESSED = 0;
    }
    else if (e.keyCode == 50) {
        CATCHER.set_colour(COL2);
        KEY_PRESSED = 0;
    }
}

function draw_score() {
    CTX.save();
    CTX.translate(CANVAS.width/2, CANVAS.height/2);
    CTX.font = '48px serif';
    CTX.textAlign = 'center';
    CTX.textBaseline= 'middle';
    CTX.fillStyle = 'white';
    CTX.fillText(SCORE.toString(), 0, 0);
    CTX.restore();
}

function draw_wedge(wedges: wedge[]) {
    var t = Math.PI*2;
    
    CTX.save();
    CTX.translate(CANVAS.width/2, CANVAS.height/2);

    for (let wedge of wedges) {
        if (wedge.dist > CATCHER.distance + RENDER_DIST) {
            break;
        }
        else {
            let start = ((wedge.start/360) * t) % t;
            let end = ((wedge.end/360) * t) % t;
            CTX.beginPath();
            CTX.arc(0, 0, wedge.dist-CATCHER.distance+CATCHER.radius, start, end, false); 
            CTX.lineWidth = WEDGE_THICKNESS;
            CTX.strokeStyle = wedge.colour;
            CTX.stroke();
            CTX.closePath();
        }
    }
    CTX.restore();
}

function draw_catcher(catcher: catcher) {
    var t = Math.PI*2;

    var start = Math.min(CATCHER.bearing, CATCHER.bearing + CATCHER.width)/360 * t % t;
    var end = Math.max(CATCHER.bearing, CATCHER.bearing + CATCHER.width)/360 * t % t;

    CTX.save();
    CTX.translate(CANVAS.width/2, CANVAS.height/2);
    CTX.beginPath();
    CTX.arc(0, 0, CATCHER.radius, start, end, false); 
    CTX.lineWidth = CATCHER_THICKNESS;
    CTX.strokeStyle = CATCHER.colour;
    CTX.stroke();
    CTX.closePath();
    CTX.restore();
}

function draw_stage(){
    CTX.save();
    CTX.translate(CANVAS.width/2, CANVAS.height/2);
    CTX.beginPath();
    CTX.strokeStyle = 'grey';
    CTX.arc(0, 0, 100, 0, 360); 
    CTX.arc(0, 0, 150, 0, 360); 
    CTX.arc(0, 0, 250, 0, 360); 
    CTX.arc(0, 0, 350, 0, 360); 
    CTX.moveTo(60, 0);
    CTX.lineTo(200, 0);
    CTX.moveTo(-60, 0);
    CTX.lineTo(-200, 0);
    CTX.moveTo(40 * 0.5, 40 * 0.866);
    CTX.lineTo(CANVAS.width * 0.5, CANVAS.height * 0.866);
    CTX.moveTo(-40 * 0.5, 40 * 0.866);
    CTX.lineTo(CANVAS.width * -0.5, CANVAS.height * 0.866);
    CTX.moveTo(40 * 0.5, 40 * -0.866);
    CTX.lineTo(CANVAS.width * 0.5, CANVAS.height * -0.866);
    CTX.moveTo(40 * -0.5, 40 * -0.866);
    CTX.lineTo(CANVAS.width * -0.5, CANVAS.height * -0.866);
    CTX.stroke();
    CTX.closePath();
    CTX.restore();
}

function draw() {
    TIME_PREV = TIME_THIS;
    TIME_THIS = performance.now();
    TIME_DIFF = TIME_THIS - TIME_PREV;

    CTX.clearRect(0, 0, CANVAS.width, CANVAS.height); // clear CANVAS
    update();

    draw_catcher(CATCHER);
    draw_wedge(WEDGES);
    SCORE = SCORE + check(WEDGES);
    draw_score();
    draw_stage();

    window.requestAnimationFrame(draw);
}

function get_mouse_pos(e) {
    var rect = CANVAS.getBoundingClientRect(); 
    return {
        x: e.clientX - rect.left,
        y: e.clientY - rect.top
    };
}

function mouseMoveHandler(e) {
    var pos = get_mouse_pos(e); 
    var x = pos.x - CANVAS.width/2;
    var y = pos.y - CANVAS.height/2;
    var angle = Math.atan2(y, x) / (Math.PI * 2) * 360;
    var w = (CATCHER.width);
    CATCHER.set_bearing((angle - w/2) < 0 ? 360+(angle-w/2) : (angle-w/2));
}

function update_wedges(wedges) {
    CATCHER.distance += SPEED * (TIME_DIFF / 1000);
}

function update(){
    TICK_COUNT++;
    update_wedges(WEDGES);
    SCORE += check(WEDGES);
}

function init(){
    CANVAS = document.getElementById('c');
    CTX = CANVAS.getContext('2d');
    CANVAS.width = (document.documentElement.clientWidth);
    CANVAS.height = (document.documentElement.clientHeight);

    document.addEventListener('keydown', keyDownHandler, false);
    document.addEventListener('keyup', keyUpHandler, false);
    document.addEventListener('mousemove', mouseMoveHandler, false);

    const audio = new Audio('beatmaps/jubeat/song.mp3');
    audio.addEventListener('canplaythrough', function(){
        audio.play(); 
        window.requestAnimationFrame(draw);
    }, false); 
    read_beatmap(DATA);
}

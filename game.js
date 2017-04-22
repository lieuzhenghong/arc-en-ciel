'use strict';
var Wedge = (function () {
    function Wedge(start, end, colour, dist) {
        this.start = start;
        this.end = end;
        this.colour = colour;
        this.dist = dist;
    }
    Wedge.prototype.set_dist = function (dist) {
        this.dist = dist;
    };
    Wedge.prototype.update = function (speed) {
        this.set_dist(this.dist - speed);
    };
    return Wedge;
}());
var COL1 = 'orange';
var COL2 = 'blue';
var SCORE = 0;
var SPEED = 7;
var TICK_COUNT = 0;
var CATCHER_THICKNESS = 15;
var WEDGE_THICKNESS = 10;
var RENDER_DIST = 600;
var TICK_LENGTH = 30;
var LEEWAY = 20;
var KEY_PRESSED = 0;
var WEDGES = [];
;
var CATCHER = {
    'bearing': 0,
    'colour': COL1,
    'width': 100,
    'radius': 100,
    'distance': 100 + CATCHER_THICKNESS,
    'set_bearing': function (deg) {
        CATCHER['bearing'] = (deg < 0 ? (360 + deg) % 360 : deg % 360);
    },
    'set_colour': function (col) {
        CATCHER['colour'] = col;
    }
};
console.log(CATCHER.distance);
var DATA = [
    'START 2.80',
    '0 60 1 400 0.42',
    '0 60 2 400 0.42',
    '0 60 1 400 0.42',
    '0 60 2 400 0.42',
    '0 60 1 400 0.42',
    '0 60 2 400 0.42',
    '0 60 1 400 0.42',
    '0 60 2 400 0.42',
    '0 60 1 400 0.42',
    '0 60 2 400 0.42',
    '0 60 1 400 0.42',
    '0 60 2 400 0.42',
    '0 60 1 400 0.42',
    '0 60 2 400 0.42',
    '0 60 1 400 0.42',
    '0 60 2 400 0.42',
    '0 60 1 400 0.42',
    '0 60 2 400 0.42',
    '0 60 1 400 0.42',
    '0 60 2 400 0.42',
    '0 60 1 400 0.42',
    '0 60 2 400 0.42',
    '0 60 1 400 0.42',
    '0 60 2 400 0.42',
    '0 60 1 400 0.42',
    '0 60 2 400 0.42',
    '0 60 1 400 0.42',
    '0 60 2 400 0.42',
    '0 60 1 400 0.42',
    '0 60 2 400 0.42',
    '0 60 1 400 0.42',
    '0 60 2 400 0.42',
    '0 60 1 400 0.42',
    '0 60 2 400 0.42',
    '0 60 1 400 0.42',
    '0 60 2 400 0.42',
    '0 60 1 400 0.42',
    '0 60 2 400 0.42',
    '0 60 1 400 0.42',
    '0 60 2 400 0.42',
    '0 60 1 400 0.42',
    '0 60 2 400 0.42',
    '0 60 1 400 0.42',
    '0 60 2 400 0.42',
    '0 60 1 400 0.42',
    '0 60 2 400 0.42',
    '0 60 1 400 0.42',
    '0 60 2 400 0.42',
    '0 60 1 400 0.42',
    '0 60 2 400 0.42',
    '0 60 1 400 0.42',
    '0 60 2 400 0.42',
    '0 60 1 400 0.42',
    '0 60 2 400 0.42',
    '0 60 1 400 0.42',
    '0 60 2 400 0.42',
    '0 60 1 400 0.42',
    '0 60 2 400 0.10',
    '0 60 1 400 0.10',
    '0 60 2 400 0.20',
    '0 60 1 400 0.10',
    '0 60 2 400 0.10',
    '0 60 1 400 0.20',
    '0 60 2 400 0.10',
    '0 60 1 400 0.10',
    '0 60 2 400 0.20',
    '0 60 1 400 0.10',
    '0 60 2 400 0.10',
    '0 60 1 400 0.20',
    '0 60 2 400 0.10',
    '0 60 1 400 0.10',
    '0 60 2 400 0.20',
    '0 60 1 400 0.10',
    '0 60 2 400 0.10',
    '0 60 1 400 0.20',
    '0 60 2 400 0.10',
    '0 60 1 400 0.10',
    '0 60 2 400 0.20',
    '0 60 1 400 0.10',
    '0 60 2 400 0.10',
    '0 60 1 400 0.20',
    '0 60 2 400 0.10',
    '0 60 1 400 0.10',
    '0 60 2 400 0.20',
    '0 60 1 400 0.10',
    '0 60 2 400 0.10',
    '0 60 1 400 0.20',
    '0 60 2 400 0.10',
    '0 60 1 400 0.10',
    '0 60 2 400 0.20',
    '0 60 1 400 0.10',
    '0 60 2 400 0.10',
    '0 60 1 400 0.20',
    '0 60 2 400 0.10',
    '0 60 1 400 0.10',
    '0 60 2 400 0.20',
    '0 60 1 400 0.10',
    '0 60 2 400 0.10',
    '0 60 1 400 0.20',
    '0 60 2 400 0.10',
    '0 60 1 400 0.10'
];
function read_beatmap(beatmap) {
    var time = 0;
    for (var _i = 0, beatmap_1 = beatmap; _i < beatmap_1.length; _i++) {
        var line = beatmap_1[_i];
        if (line === beatmap[0]) {
            var time = parseFloat(line.split(' ')[1]);
        }
        else {
            var line_arr = line.split(' ');
            var beat = [];
            // Conversion
            for (var i = 0; i < line_arr.length; i++) {
                if (i == 4) {
                    time += parseFloat(line_arr[i]);
                }
                else {
                    beat[i] = parseFloat(line_arr[i]);
                }
            }
            WEDGES.push(generate_wedge(beat[0], beat[1], beat[2], CATCHER.distance + (SPEED * 1000 / TICK_LENGTH * (time))));
        }
    }
}
function generate_wedge(start, end, colour, dist) {
    /*
    let start = Math.floor(Math.random() * 290);
    let end = start + 60;
    let colour = (Math.random() >= 0.5 ? COL1 : COL2);
    let dist = 400;
    */
    var col = (colour === 1 ? COL1 : COL2);
    return (new Wedge(start, end, col, dist));
}
function check(wedges) {
    if (wedges.length == 0) {
        return 0;
    }
    var start = CATCHER.bearing;
    var end = (start + (CATCHER.width));
    var overlap = 0;
    var hit = false;
    // I only want to check the first wedge so why am I iterating through them
    var wedge = wedges[0];
    var ws = wedge.start;
    var we = wedge.end;
    var s = start - start;
    var e = (end - start < 0) ? (end - start + 360) : (end - start);
    var w_s = (ws - start < 0) ? (360 + (ws - start)) : (ws - start);
    var w_e = (we - start < 0) ? (360 + (we - start)) : (we - start);
    var wedge_radius = (ws - we < 0) ? we - ws : ws - we;
    if (wedge.dist > CATCHER.distance + LEEWAY) {
        return (overlap);
    }
    else if (wedge.dist > CATCHER.distance) {
        if (KEY_PRESSED !== 0 && CATCHER.colour == wedge.colour) {
            hit = true;
            if (w_s > w_e) {
                overlap = Math.round((w_e / wedge_radius * 100));
            }
            else if (w_e > w_s && w_e < e) {
                overlap = 100;
            }
            else {
                overlap = Math.round((wedge_radius - (w_e - e)) /
                    wedge_radius * 100);
            }
        }
        if (hit) {
            var idx = wedges.indexOf(wedge);
            wedges.splice(idx, 1);
        }
    }
    else if (wedge.dist > CATCHER.distance - LEEWAY) {
        if (KEY_PRESSED !== 0 && CATCHER.colour == wedge.colour) {
            hit = true;
            if (w_s > w_e) {
                overlap = Math.round((w_e / wedge_radius * 100));
            }
            else if (w_e > w_s && w_e < e) {
                overlap = 100;
            }
            else {
                overlap = Math.round((wedge_radius - (w_e - e)) / wedge_radius * 100);
            }
        }
        else if (KEY_PRESSED !== 0 && CATCHER.colour !== wedge.colour) {
            hit = true;
            overlap = -100;
        }
        if (hit) {
            var idx = wedges.indexOf(wedge);
            wedges.splice(idx, 1);
        }
    }
    else {
        overlap = -100;
        var idx = wedges.indexOf(wedge);
        console.log(idx);
        wedges.splice(idx, 1);
    }
    return (overlap);
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
    var canvas = document.getElementById('c');
    var ctx = canvas.getContext('2d');
    ctx.save();
    ctx.translate(canvas.width / 2, canvas.height / 2);
    ctx.font = '48px serif';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillStyle = 'white';
    ctx.fillText(SCORE.toString(), 0, 0);
    ctx.restore();
}
function draw_wedge(wedges) {
    var canvas = document.getElementById('c');
    var ctx = canvas.getContext('2d');
    var t = Math.PI * 2;
    ctx.save();
    ctx.translate(canvas.width / 2, canvas.height / 2);
    for (var _i = 0, wedges_1 = wedges; _i < wedges_1.length; _i++) {
        var wedge = wedges_1[_i];
        if (wedge.dist > CATCHER.distance + RENDER_DIST) {
            break;
        }
        else {
            var start = ((wedge.start / 360) * t) % t;
            var end = ((wedge.end / 360) * t) % t;
            ctx.beginPath();
            ctx.arc(0, 0, wedge.dist - CATCHER.distance + CATCHER.radius, start, end, false);
            ctx.lineWidth = WEDGE_THICKNESS;
            ctx.strokeStyle = wedge.colour;
            ctx.stroke();
            ctx.closePath();
        }
    }
    ctx.restore();
}
function draw_catcher(catcher) {
    var canvas = document.getElementById('c');
    var ctx = canvas.getContext('2d');
    var t = Math.PI * 2;
    var start = Math.min(CATCHER.bearing, CATCHER.bearing + CATCHER.width) / 360 * t % t;
    var end = Math.max(CATCHER.bearing, CATCHER.bearing + CATCHER.width) / 360 * t % t;
    ctx.save();
    ctx.translate(canvas.width / 2, canvas.height / 2);
    ctx.beginPath();
    ctx.arc(0, 0, CATCHER.radius, start, end, false);
    ctx.lineWidth = CATCHER_THICKNESS;
    ctx.strokeStyle = CATCHER.colour;
    ctx.stroke();
    ctx.closePath();
    ctx.restore();
}
function draw_stage() {
    var canvas = document.getElementById('c');
    var ctx = canvas.getContext('2d');
    ctx.save();
    ctx.translate(canvas.width / 2, canvas.height / 2);
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
    draw_catcher(CATCHER);
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
    var x = pos.x - canvas.width / 2;
    var y = pos.y - canvas.height / 2;
    var angle = Math.atan2(y, x) / (Math.PI * 2) * 360;
    var w = (CATCHER.width);
    CATCHER.set_bearing((angle - w / 2) < 0 ? 360 + (angle - w / 2) : (angle - w / 2));
}
function update_wedges(wedges) {
    /*
    for (let wedge of wedges) {
        wedge.update(SPEED);
    }
    */
    CATCHER.distance += SPEED;
}
function update() {
    TICK_COUNT++;
    update_wedges(WEDGES);
    SCORE += check(WEDGES);
}
function init() {
    var canvas = document.getElementById('c');
    // Set canvas dimensions
    canvas.width = (document.documentElement.clientWidth);
    canvas.height = document.documentElement.clientHeight;
    document.addEventListener('keydown', keyDownHandler, false);
    document.addEventListener('keyup', keyUpHandler, false);
    document.addEventListener('mousemove', mouseMoveHandler, false);
    var audio = new Audio('beatmaps/jubeat/song.mp3');
    audio.addEventListener('canplaythrough', function () {
        audio.play();
        window.setInterval(update, TICK_LENGTH);
    }, false);
    window.requestAnimationFrame(draw);
    read_beatmap(DATA);
}

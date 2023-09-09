"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var DrawParticles = /** @class */ (function () {
    function DrawParticles(x, y, r, ctx) {
        this.x = x;
        this.y = y;
        this.r = r;
        this.dx = Math.random() * 1;
        this.dy = Math.random() * 1;
        this.ctx = ctx;
        this.maxY = Math.floor(Math.random() * this.y * 1.5) + this.y;
        this.maxX = Math.floor(Math.random() * this.x * 1.5) + this.x;
        this.random = Math.floor(Math.random() * 2) + 1;
        this.minX = Math.floor(Math.random() * this.x) + 10;
        this.minY = Math.floor(Math.random() * this.y) + 10;
    }
    DrawParticles.prototype.draw = function () {
        this.ctx.beginPath();
        this.ctx.arc(this.x, this.y, this.r, 0, Math.PI * 2, true);
        this.ctx.fillStyle = "black";
        this.ctx.shadowColor = 'red';
        this.ctx.shadowBlur = 5;
        this.ctx.shadowOffset = 3;
        this.ctx.shadowOffsetY = 3;
        this.ctx.fill();
        this.ctx.closePath();
    };
    DrawParticles.prototype.move = function () {
        if (this.random == 1)
            this.left();
        if (this.random == 2)
            this.right();
    };
    DrawParticles.prototype.right = function () {
        if (this.y + this.r > this.maxY) {
            this.dy = 0;
            this.dx = 0;
        }
        ;
        if (this.x + this.r > this.maxX) {
            this.dx = 0;
            this.dy = 0;
        }
        ;
        this.x += this.dx;
        this.y += this.dy;
        this.draw();
    };
    DrawParticles.prototype.left = function () {
        if (this.y + this.r < 10) {
            this.dy = 0;
            this.dx = 0;
        }
        ;
        if (this.x + this.r < 40) {
            this.dx = 0;
            this.dy = 0;
        }
        ;
        this.x -= this.dx;
        this.y -= this.dy;
        this.draw();
    };
    return DrawParticles;
}());
exports.default = DrawParticles;
;

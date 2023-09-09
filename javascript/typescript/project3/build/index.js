"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
var CanvasContext = /** @class */ (function () {
    function CanvasContext(canvas) {
        this.canvas = canvas;
    }
    CanvasContext.prototype.init = function () {
        this.setSize();
        window.addEventListener('resize', this.setSize);
    };
    Object.defineProperty(CanvasContext.prototype, "contextCanvas", {
        get: function () {
            return this.canvas.getContext('2d');
        },
        enumerable: true,
        configurable: true
    });
    CanvasContext.prototype.setSize = function () {
        this.canvas.width = window.innerWidth;
        this.canvas.height = window.innerHeight;
    };
    return CanvasContext;
}());
var DrawCharacter = /** @class */ (function (_super) {
    __extends(DrawCharacter, _super);
    function DrawCharacter(canvas, selfctx, DrawParticles) {
        var _this = _super.call(this, canvas) || this;
        _this.selfctx = selfctx;
        _this.array = [];
        _this.init();
        _this.cloneParticles(DrawParticles);
        return _this;
    }
    Object.defineProperty(DrawCharacter.prototype, "particles", {
        get: function () {
            return this.array;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DrawCharacter.prototype, "setparticles", {
        set: function (value) {
            this.array = __spreadArrays(this.array, [value]);
        },
        enumerable: true,
        configurable: true
    });
    DrawCharacter.prototype.cloneParticles = function (DrawParticles) {
        var _this = this;
        setInterval(function () {
            _this.suscribe(new DrawParticles(window.innerWidth / 2, window.innerHeight / 2.5, Math.random() * 3, _this.canvas.getContext('2d')), function (result) { return _this.setparticles = result; } // composeArra
            , function () { return console.log('null object'); });
        }, 2000);
    };
    DrawCharacter.prototype.suscribe = function (value, callback, err) {
        (value) ? callback(value) : err();
    };
    DrawCharacter.prototype.draw = function () {
        var r = this.selfctx.r;
        this.contextCanvas.beginPath();
        this.contextCanvas.arc(window.innerWidth / 2, window.innerHeight / 2.5, r, 0, Math.PI * 2, true);
        this.contextCanvas.shadowColor = 'white';
        this.contextCanvas.shadowBlur = 5;
        this.contextCanvas.shadowOffset = 3;
        this.contextCanvas.shadowOffsetY = 2.5;
        this.contextCanvas.fillStyle = "black";
        this.contextCanvas.fill();
        this.contextCanvas.closePath();
    };
    DrawCharacter.prototype.particlesAnimation = function () {
        var _this = this;
        requestAnimationFrame(this.particlesAnimation.bind(this)); // bind
        this.contextCanvas.clearRect(0, 0, this.canvas.width, this.canvas.height);
        this.draw();
        this.array.forEach(function (item) {
            item.move();
            if (item.y + item.r > item.maxY)
                _this.childParticles(item);
            else if (item.x - item.r < item.minX)
                _this.childParticles(item);
        });
    };
    DrawCharacter.prototype.childParticles = function (item) {
        var _this = this;
        var num = Math.floor(Math.random() * 3) + 1;
        var childParticlesArr = [];
        for (var index = 0; index < num; index++) {
            childParticlesArr = __spreadArrays(childParticlesArr, [new DrawParticles(item.x, item.y, Math.random() * 3, this.canvas.getContext('2d')),]);
        }
        if (childParticlesArr.length >= 0) {
            childParticlesArr.forEach(function (item) {
                _this.setparticles = item;
            });
        }
        else
            throw Error('err childParticle line 96');
    };
    DrawCharacter.prototype.mouseEvent = function () {
        var _this = this;
        this.canvas.addEventListener('mousemove', function (e) {
            _this.array.forEach(function (item) {
                item.x += (e.clientX - item.x) * 0.1;
                item.y += (e.clientY - item.y) * 0.1;
            });
        });
    };
    DrawCharacter.prototype.render = function () {
        this.particlesAnimation();
        this.mouseEvent();
    };
    return DrawCharacter;
}(CanvasContext));
var DrawParticles = /** @class */ (function () {
    function DrawParticles(x, y, r, ctx) {
        this.x = x;
        this.y = y;
        this.r = r;
        this.dx = (Math.random() * 0.8);
        this.dy = (Math.random() * 0.8);
        this.ctx = ctx;
        this.maxY = Math.floor(Math.random() * this.y * 1.5) + this.y * 1.1;
        this.maxX = Math.floor(Math.random() * this.x * 1.5) + this.x * 1.1;
        this.random = Math.floor(Math.random() * 3) + 1;
        this.minX = Math.floor(Math.random() * this.x - (this.x * 1.6)) + (this.y - (this.x * 1.1));
        this.minY = Math.floor(Math.random() * this.y - (this.y * 1.6)) + (this.y - (this.y * 1.1));
    }
    DrawParticles.prototype.draw = function () {
        this.ctx.beginPath();
        this.ctx.arc(this.x, this.y, this.r, 0, Math.PI * 2, true);
        this.ctx.fillStyle = "white";
        this.ctx.shadowColor = 'white';
        this.ctx.shadowBlur = 10;
        this.ctx.shadowOffset = 2;
        this.ctx.shadowOffsetY = 2;
        this.ctx.fill();
        this.ctx.closePath();
    };
    ;
    DrawParticles.prototype.move = function () {
        this.random == 1 ? this.moveRight() : this.moveLeft();
    };
    DrawParticles.prototype.moveRight = function () {
        if (this.y + this.r > this.maxY || this.y - this.r < this.minY) {
            this.dy = -this.dy;
            this.dx = -this.dx;
        }
        ;
        if (this.x + this.r > this.maxX || this.x + this.r < this.minX) {
            this.dx = -this.dx;
            this.dy = -this.dy;
        }
        ;
        this.x += this.dx;
        this.y += this.dy;
        this.draw();
    };
    DrawParticles.prototype.moveLeft = function () {
        if (this.y + this.r > this.maxY || this.y - this.r < this.minY) {
            this.dy = -this.dy;
            this.dx = -this.dx;
        }
        ;
        if (this.x + this.r > this.maxX || this.x - this.r < this.minX) {
            this.dx = -this.dx;
            this.dy = -this.dy;
        }
        ;
        this.x -= this.dx;
        this.y -= this.dy;
        this.draw();
    };
    return DrawParticles;
}());
var myCanvas = new DrawCharacter(document.querySelector('#canvas'), {
    x: 0,
    y: 0,
    r: 20
}, DrawParticles);
myCanvas.render();

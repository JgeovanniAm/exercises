"use strict";
class CanvasContext {
    constructor(object) {
        this.canvas = document.createElement('canvas');
        this.srcImage = object.src;
        this.imagePI = new Image();
        this.pixelImage;
        this.loadImage();
        this.elements = [];
        this.elem = object.elem;
    }
    init() {
        document.body.append(this.canvas);
        this.setSize();
    }
    get contextCanvas() {
        return this.canvas.getContext('2d');
    }
    setSize() {
        this.canvas.width = window.innerWidth;
        this.canvas.height = window.innerHeight;
        window.addEventListener('resize', this.setSize);
    }
    loadImage() {
        this.imagePI.onload = () => {
            this.contextCanvas.drawImage(this.imagePI, 0, 0);
            const img = this.contextCanvas.getImageData(0, 0, this.canvas.width, this.canvas.height);
            this.composeImgPixel(img);
        };
        this.imagePI.src = this.srcImage;
    }
    observer(value) {
        return new Promise((resolve, reject) => {
            if (value)
                resolve(value);
            reject('erro');
        });
    }
    composeImgPixel(pixelImage) {
        let arrayColor = [
            {
                r: 0,
                g: 153,
                b: 0,
            },
            {
                r: 255,
                g: 0,
                b: 0,
            },
            {
                r: 204,
                g: 255,
                b: 255,
            },
            {
                r: 0,
                g: 102,
                b: 51,
            },
            {
                r: 204,
                g: 0,
                b: 204,
            },
            {
                r: 102,
                g: 0,
                b: 51,
            }
        ];
        this.pixelImage = pixelImage;
        let matrix = [];
        for (let index = 0; index < arrayColor.length; index++) {
            let arrCoord = [];
            for (let i = 0; i < pixelImage.data.length; i += 4) {
                if (pixelImage.data[i] == arrayColor[index].r && pixelImage.data[i + 1] == arrayColor[index].g && pixelImage.data[i + 2] == arrayColor[index].b) {
                    arrCoord.push({
                        x: (i / 4) % this.canvas.width,
                        y: Math.floor((i / 4) / this.canvas.width)
                    });
                }
            }
            matrix.push(arrCoord);
            this.contextCanvas.putImageData(this.pixelImage, 0, 0);
        }
        this.drawArr(matrix);
    }
    drawArr(array) {
        array.forEach((item) => {
            const num = item.length;
            const widht = item[num - 1].x - item[1].x;
            const heignt = item[num - 1].y - item[1].y;
            this.elements = [...this.elements, {
                    x: item[0].x,
                    y: item[0].y,
                    w: widht,
                    h: heignt,
                }];
            this.contextCanvas.beginPath();
            this.contextCanvas.rect(item[0].x, item[0].y, widht, heignt);
            this.contextCanvas.fillStyle = "blue";
            this.contextCanvas.fill();
        });
        this.render();
    }
    render() {
        let rep;
        const arrOrdered = this.elements.sort((a, b) => a.y - b.y);
        arrOrdered.forEach((item, index) => {
            console.log(item);
            if (rep === item.y) {
            }
            else {
                rep = item.y;
                return item;
            }
        });
    }
}
const hola = new CanvasContext({
    src: './1.PNG',
    elem: document.querySelector('#app')
}).init();

const canvas = GetQuery('.wraper_canvas');
let canvasContext = canvas.getContext('2d');
function setSize() {
	canvas.width = window.innerWidth;
	canvas.height = window.innerHeight;
}
window.addEventListener('resize', setSize)
setSize();
class object {
	constructor(x, y, r, v) {
		this.x = x;
		this.y = y;
		this.r = r;
		this.v = v;
	}
	draw() {
		canvasContext.beginPath()
		canvasContext.arc(this.x, this.y, 20, 0, Math.PI * this.r, false);
		canvasContext.fillStyle = "#014a74";
		canvasContext.fill();
		canvasContext.closePath();
	}
	move() {
		this.y += this.v;
		if (this.y + this.r >= window.innerHeight) {
			this.y = 0;
			this.y += this.v
		}
		this.draw()
	}
}

function create(item) {
	let array = [];
	for (let i = 0; i <= 70; i++) {
		let x = Math.random() * window.innerWidth;
		let y = Math.random() * 300;
		let velocity = Math.random() * 5;
		let character = new object(x, y, (Math.random() * 0.5) + 0.01, velocity);
		array.push(character);
	}
	return item = array;
}
let newarray = create();

function IteracionDraw() {
	requestAnimationFrame(IteracionDraw)
	canvasContext.clearRect(0, 0, canvas.width, canvas.height);
	newarray.forEach(element => {
		//console.log(element)
		element.move()
	});
}
IteracionDraw()


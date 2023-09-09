class CanvasContext {
  canvas: HTMLCanvasElement
  constructor(canvas: HTMLCanvasElement) {
    this.canvas = canvas;
  }

  public init() {
    this.setSize();
    window.addEventListener('resize', this.setSize);
  }

  get contextCanvas(): any {
    return this.canvas.getContext('2d');
  }

  private setSize() {
    this.canvas.width = window.innerWidth;
    this.canvas.height = window.innerHeight;
  }
}

class DrawCharacter extends CanvasContext {
  private selfctx: ImainCharacter
  private array: I_ParticlesProps[]

  constructor(canvas: HTMLCanvasElement, selfctx: ImainCharacter, DrawParticles: object) {
    super(canvas);
    this.selfctx = selfctx;
    this.array = [];
    this.init();
    this.cloneParticles(DrawParticles);
  }

  get particles(): I_ParticlesProps[] {
    return this.array
  }

  set setparticles(value: I_ParticlesProps) {
    this.array = [...this.array, value];
  }

  private cloneParticles(DrawParticles: any) {
    setInterval(() => {
      this.suscribe(
        new DrawParticles(window.innerWidth / 2, window.innerHeight / 2.5, Math.random() * 3, this.canvas.getContext('2d')),
        (result) => this.setparticles = result // composeArra
        ,
        () => console.log('null object')
      );
    }, 2000);
  }

  public suscribe(value: I_ParticlesProps, callback: (param: I_ParticlesProps) => void, err: () => void) {
    (value) ? callback(value) : err();
  }

  private draw() {
    const { r } = this.selfctx;
    this.contextCanvas.beginPath();
    this.contextCanvas.arc(window.innerWidth / 2, window.innerHeight / 2.5, r, 0, Math.PI * 2, true);
    this.contextCanvas.shadowColor = 'white';
    this.contextCanvas.shadowBlur = 5;
    this.contextCanvas.shadowOffset = 3;
    this.contextCanvas.shadowOffsetY = 2.5;
    this.contextCanvas.fillStyle = "black";
    this.contextCanvas.fill();
    this.contextCanvas.closePath();
  }

  public particlesAnimation() { // I can use arrow function but I can not
    requestAnimationFrame(this.particlesAnimation.bind(this)) // bind
    this.contextCanvas.clearRect(0, 0, this.canvas.width, this.canvas.height);
    this.draw();
    this.array.forEach((item: any) => {
      item.move();
      if (item.y + item.r > item.maxY) this.childParticles(item);
      else if (item.x - item.r < item.minX) this.childParticles(item);
    })
  }

  private childParticles(item: any) {
    const num = Math.floor(Math.random() * 3) + 1;
    let childParticlesArr: any = [];
    for (let index = 0; index < num; index++) {
      childParticlesArr = [...childParticlesArr,
      new DrawParticles(item.x, item.y, Math.random() * 3, this.canvas.getContext('2d')),
      ];
    }
    if (childParticlesArr.length >= 0) {
      childParticlesArr.forEach((item: any) => {
        this.setparticles = item;
      })
    } else throw Error('err childParticle line 96');
  }

  private mouseEvent() {
    this.canvas.addEventListener('mousemove', (e) => {
      this.array.forEach((item: any) => { // delay
        item.x += (e.clientX - item.x) * 0.1;
        item.y += (e.clientY - item.y) * 0.1;
      })
    })
  }

  public render() {
    this.particlesAnimation();
    this.mouseEvent();
  }
}

class DrawParticles {
  x: number
  y: number
  r: number
  dx: number
  dy: number
  maxX: number
  maxY: number
  ctx: any
  random: number
  minX: number
  minY: number

  constructor(x: number, y: number, r: number, ctx: any) {
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

  private draw() {
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

  public move() {
    this.random == 1 ? this.moveRight() : this.moveLeft();
  }

  private moveRight() {
    if (this.y + this.r > this.maxY || this.y - this.r < this.minY) {
      this.dy = - this.dy;
      this.dx = - this.dx;
    };
    if (this.x + this.r > this.maxX || this.x + this.r < this.minX) {
      this.dx = - this.dx;
      this.dy = -  this.dy;
    };
    this.x += this.dx;
    this.y += this.dy;
    this.draw();
  }

  private moveLeft() {
    if (this.y + this.r > this.maxY || this.y - this.r < this.minY) {
      this.dy = - this.dy;
      this.dx = - this.dx;
    };
    if (this.x + this.r > this.maxX || this.x - this.r < this.minX) {
      this.dx = - this.dx;
      this.dy = -  this.dy;
    };
    this.x -= this.dx;
    this.y -= this.dy;
    this.draw();
  }
}

// init
const myCanvas = new DrawCharacter(
  document.querySelector('#canvas') as HTMLCanvasElement,
  {
    x: 0,
    y: 0,
    r: 20
  },
  DrawParticles
)
myCanvas.render()

interface ImainCharacter {
  x: number
  y: number
  r: number
}

interface I_ParticlesProps {
  x: number
  y: number
  r: number
  ctx: any
}

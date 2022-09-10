const rule = (particles1: any[], particles2: any[], g: number) => {
  for (let i = 0; i < particles1.length; i++) {
    let fx = 0;
    let fy = 0;
    let a: any;
    let b: any;
    for (let j = 0; j < particles2.length; j++) {

      a = particles1[i];
      b = particles2[j];

      //calculate 2 particles distance
      const dx = a.x - b.x;
      const dy = a.y - b.y;
      const d = Math.sqrt(dx * dx + dy * dy);

      // apply force based on the distance
      if (d > 0 && d < 80) {
        const F = g * 1 / d;
        fx += (F * dx);
        fy += (F * dy);
      }
    }

    const speedRate = 0.5
    // apply force to particle speed
    a.vx = (a.vx + fx) * speedRate;
    a.vy = (a.vy + fy) * speedRate;
    // move particles
    a.x += a.vx;
    a.y += a.vy;

    // edge cases
    if (a.x <= 0 || a.x >= 500) { a.vx *= -1 }
    if (a.y <= 0 || a.y >= 500) { a.vy *= -1 }
  }
}

const draw = (ctx: any, x: number, y: number, c: string, s: number) => {
  // console.log('draw:',x,y,c)
  ctx.fillStyle = c;
  // ctx.fillStyle = getRandomColor();
  ctx.fillRect(x, y, s, s)
}

const getRandomColor = () => {
  return "#" + Math.floor(Math.random() * 16777215).toString(16);
}

let particles: any[] = [];

const particle = (x: any, y: any, c: any) => ({ 'x': x, 'y': y, 'color': c, 'vx': 0, 'vy': 0 })

const random = () => Math.random() * 400 + 50;

const create = (number: number, color: any) => {
  let group = [];
  for (let i = 0; i < number; i++) {
    group.push(particle(random(), random(), color));
    particles.push(group[i]);

  }
  return group;
}

const yellow: any[] = create(800, 'blue');
const red: any[] = create(800, 'black');

export const drawLife = (canvas: HTMLCanvasElement, frame: number) => {
  const ctx = canvas.getContext('2d')!;
  // rule(yellow, yellow, 0.5);
  rule(red, red, 0.2);
  rule(yellow, red, -0.1);
  rule(red, yellow, -0.05);

  // clean screen
  // ctx.clearRect(0, 0, canvas.width, canvas.height);
  // draw(ctx, 0, 0, 'black', 500);

  // draw(ctx, 200, 200, 'yellow', 10)
  particles.forEach(({ x, y, color }) => {
    // draw(ctx, x, y, color, 2);
    draw(ctx, x, y, color, 0.5);
  })

}
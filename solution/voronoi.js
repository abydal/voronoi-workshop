const distanceToPoint = (x1, y1, x2, y2) => {
  let xl = x1 - x2;
  let yl = y1 - y2;

  return Math.sqrt(xl * xl + yl * yl);
};

const generatePoints = (number) => {
  const points = [];
  for (let i = 0; i < number; i++) {
    let x = Math.random() * 1024;
    let y = Math.random() * 1024;
    points.push({ x, y, i });
  }
  return points;
};

const voronoi = () => {
  const points = generatePoints(50);

  // generate a 1024x1024 2d-array and populate with values
  var voronoi = Array(1024)
    .fill(null)
    .map(() => Array(1024).fill(1));

  for (let x = 0; x < 1024; x++) {
    for (let y = 0; y < 1024; y++) {
      closestPoint = points
        .map((p) => {
          p.d = distanceToPoint(p.x, p.y, x, y);
          return p;
        })
        .sort((p1, p2) => p1.d - p2.d)[0];

      voronoi[x][y] = closestPoint.i / 50;
    }
  }
  return voronoi;
};

const distanceToPoint = (x1, y1, x2, y2) => {
  let xl = x1 - x2;
  let yl = y1 - y2;

  return Math.sqrt(xl * xl + yl * yl);
};

const generatePoints = (n) => {
  const points = [];
  for (let i = 0; i < n; i++) {
    let x = Math.random() * 1024;
    let y = Math.random() * 1024;
    points.push({ x, y, i });
  }
  return points;
};

const voronoi = (n, useForLoop = true) => {
  const points = generatePoints(n);

  // generate a 1024x1024 2d-array and populate with values
  var voronoi = Array(1024)
    .fill(null)
    .map(() => Array(1024).fill(1));

  if (useForLoop) {
    //solution with for-loop
    for (let x = 0; x < 1024; x++) {
      for (let y = 0; y < 1024; y++) {
        closestPoint = points
          .map((p) => {
            p.d = distanceToPoint(p.x, p.y, x, y);
            return p;
          })
          .sort((p1, p2) => p1.d - p2.d)[0];

        voronoi[x][y] = closestPoint.i;
      }
    }
    return voronoi;
  } else {
    // solution without for-loop
    return voronoi.map((row, x) =>
      row.map(
        (_, y) =>
          points
            .map((p) => {
              return {
                x: p.x,
                y: p.y,
                i: p.i,
                d: distanceToPoint(p.x, p.y, x, y),
              };
            })
            .sort((p1, p2) => p1.d - p2.d)[0].i
      )
    );
  }
};

const hexToRgb = (hex) => {
  var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result
    ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16),
      }
    : null;
};

const colors = [
  "c21111",
  "bb1419",
  "b51621",
  "ae192a",
  "a71b32",
  "a11e3a",
  "9a2142",
  "93234a",
  "8c2652",
  "86295b",
  "7f2b63",
  "782e6b",
  "723073",
  "6b337b",
  "643683",
  "5e388c",
  "573b94",
  "503e9c",
  "4a40a4",
  "4343ac",
  "3c45b4",
  "3648bd",
  "2f4bc5",
  "284dcd",
  "2150d5",
  "1b53dd",
  "1455e5",
  "0d58ee",
  "075af6",
  "005dfe",
];

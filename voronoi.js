const distanceToPoint = (x1, y1, x2, y2) => {
  // calculate distance between points
};

const generatePoints = (n) => {
  const points = [];

  /*
  TODO:generate n random points in the 1024x1024 plane.
  Add the index to the point ex point: {x: 734, y: 498, i: 0}
  */

  return points;
};

const voronoi = () => {
  const points = generatePoints(50);

  // generate a 1024x1024 2d-array and populate with values
  var voronoi = [];

  for (let x = 0; x < 1024; x++) {
    for (let y = 0; y < 1024; y++) {
      //TODO: find the closest point to the pixel x,y

      // set a value between 0 and 1 for coloring the pixel
      voronoi[x][y] = closestPoint.i / 50;
    }
  }
  return voronoi;
};

function setup() {
  createCanvas(400, 400);
  background(255);
  strokeWeight(10);
  // оси x,y
  line(0,0, 400, 0);
  line(0,0, 0, 400);

  // звезда
  line(150, 150, 250, 250);
  line(150, 250, 250, 150);
  line(200, 150, 200, 250);
  line(150, 200, 250, 200);
  // гистограмма
  strokeWeight(3);
  line(15, 58, 15, 60);
  line(20, 50, 20, 60);
  line(25, 40, 25, 60);
  line(30, 30, 30, 60);
  line(35, 20, 35, 60);
}

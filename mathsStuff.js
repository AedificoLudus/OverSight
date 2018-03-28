const position (x, y, radius, size, width, height, angle) {
  distance = size/((2*radius*angle)/width);
  ppcm = ((angle/180)*pi*distance)/width;
  lateralDistance = (x-width/2)*ppcm;
  verticalDistance = (y-height/2)*ppcm;

  relCo = {-1*distance, -1*lateralDistance, -1*verticalDistance};

  return relCo;
}


(2*pi*distance)/width

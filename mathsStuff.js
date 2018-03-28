//marker object
//holds radius (in cm), size (in pixels at a given distance), colour, prev-marker, angle

//camera object
//holds angle, image width & image weight

const position (x, y, radius, size, width, height, angle) {
  distance = size/((2*radius*angle)/width);
  ppcm = ((angle/180)*pi*distance)/width;
  lateralDistance = (x-width/2)*ppcm;
  verticalDistance = (y-height/2)*ppcm;

  relCo = {-1*distance, -1*lateralDistance, -1*verticalDistance};

  return relCo;
}


(2*pi*distance)/width


S = 2*pi*r*(angle/360);

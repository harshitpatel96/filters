var filtered = null;
var canvas;
var image = null;

function loadImage() {  
  var file = document.getElementById("upload");
  image = new SimpleImage(file);
  //console.log(image);
  
  canvas = document.getElementById("imagecan");
console.log(image.getHeight());
image.drawTo(canvas);
 
}

function applyRed() {
  var filteredim = new SimpleImage(image.getWidth(), image.getHeight());
  for (var pixel of image.values()){
    var x = pixel.getX();
    var y = pixel.getY();
    filteredim.setPixel(x, y, pixel);
  }
  
  for (var pix of filteredim.values()){
    avg = (pix.getRed() + pix.getGreen() + pix.getBlue())/3;
    
    avg > 127 ? pix.setRed(255) : pix.setRed(2*avg);
  }
  filteredim.drawTo(canvas);
}

function applyGreen() {
  var filteredim = new SimpleImage(image.getWidth(), image.getHeight());
  for (var pixel of image.values()){
    var x = pixel.getX();
    var y = pixel.getY();
    filteredim.setPixel(x, y, pixel);
  }
  
  for (var pix of filteredim.values()){
    avg = (pix.getRed() + pix.getGreen() + pix.getBlue())/3;
    
    avg > 127 ? pix.setGreen(255) : pix.setGreen(2*avg);
  }
  filteredim.drawTo(canvas);
}
function applyBlue() {
  var filteredim = new SimpleImage(image.getWidth(), image.getHeight());
  for (var pixel of image.values()){
    var x = pixel.getX();
    var y = pixel.getY();
    filteredim.setPixel(x, y, pixel);
  }
  
  for (var pix of filteredim.values()){
    avg = (pix.getRed() + pix.getGreen() + pix.getBlue())/3;
    
    avg > 127 ? pix.setBlue(255) : pix.setBlue(2*avg);
  }
  filteredim.drawTo(canvas);
}

function showOriginal(){
  image.drawTo(canvas);
  //filtered = new SimpleImage(file);
}

function grayscale(){
  var grayscaleimage = new SimpleImage(image.getWidth(), image.getHeight());
  
  for (var pixel of image.values()){
 
    var x = pixel.getX();
    var y = pixel.getY();
      
    grayscaleimage.setPixel(x, y, pixel);
  }
  for (var pixel of grayscaleimage.values()){
    var px = (pixel.getRed() +     pixel.getGreen() + pixel.getBlue())/3;
    
    pixel.setRed(px);
    pixel.setGreen(px);
    pixel.setBlue(px);
  }
  
  
  grayscaleimage.drawTo(canvas);
}


function barcaframe(){
  
  if (image.getHeight() != 540 && image.getWidth() != 450) {
    window.alert("This filter is only for images with size less than or equal to 540 x 450 pixels");
    return;
  }
   var filteredim = new SimpleImage(image.getWidth(), image.getHeight());
  
  for (var pixel of image.values()){
    var x = pixel.getX();
    var y = pixel.getY();
    filteredim.setPixel(x, y, pixel);
  }
  
  const src = "https://i.ibb.co/BKKrPmY/barca.png";
  var img = new SimpleImage(src);
  console.log(img);
  for (var pixel of img.values()){
    if (pixel.getRed() == 255 && pixel.getGreen() == 255 && pixel.getBlue() == 255) {
      continue;
    }
    var x = pixel.getX();
    var y = pixel.getY();
    var pix = filteredim.getPixel(x, y);
    pix.setRed(pixel.getRed());
    pix.setGreen(pixel.getGreen());
    pix.setBlue(pixel.getBlue());
    
  }
  
  filteredim.drawTo(canvas);
  
}

function RainBowFilter() {
  var filteredim = new SimpleImage(image.getWidth(), image.getHeight());
  area = 0.15*image.getHeight();
  var rzone = [0, area];
  var ozone = [rzone[1], rzone[1] + area];
  var yzone = [ozone[1], ozone[1] + area];
  var gzone = [yzone[1], yzone[1] + area];
  var bzone = [gzone[1], gzone[1] + area];
  var izone = [bzone[1], bzone[1] + area];
  var vzone = [izone[1], image.getHeight()];
  
  for (var pixel of image.values()){
    var x = pixel.getX();
    var y = pixel.getY();
    filteredim.setPixel(x, y, pixel);
  }
  
  for (var pix of filteredim.values()){
    
    var y = pix.getY();
    var avg = (pix.getRed() + pix.getGreen() + pix.getBlue())/3;
    
    if (y < Math.ceil(rzone[1])){
      if (avg < 128) {
        pix.setRed(2*avg);
        pix.setGreen(0);
        pix.setBlue(0);
      }
      else {
        pix.setRed(255);
        pix.setGreen(2*avg - 255);
        pix.setBlue(2*avg - 255);
      }
      
    }
    
    else if (y >= Math.ceil(ozone[0]) && y < Math.ceil(ozone[1])){
      if (avg < 128) {
        pix.setRed(2*avg);
        pix.setGreen(0.8*avg);
        pix.setBlue(0);
      }
      else {
        pix.setRed(255);
        pix.setGreen(1.2*avg - 51);
        pix.setBlue(2*avg - 255);
      }
    }
    else if (y >= Math.ceil(yzone[0]) && y < Math.ceil(yzone[1])){
      
      if (avg < 128) {
        pix.setRed(2*avg);
        pix.setGreen(2*avg);
        pix.setBlue(0);
      }
      else {
        pix.setRed(255);
        pix.setGreen(255);
        pix.setBlue(2*avg - 255);
      }
      
    }
    else if (y >= Math.ceil(gzone[0]) && y < Math.ceil(gzone[1])){
      
      if (avg < 128) {
        pix.setRed(0);
        pix.setGreen(2*avg);
        pix.setBlue(0);
      }
      else {
        pix.setRed(2*avg - 255);
        pix.setGreen(255);
        pix.setBlue(2*avg - 255);
      }
      
    }
    else if (y >= Math.ceil(bzone[0]) && y < Math.ceil(bzone[1])){
      
      if (avg < 128) {
        pix.setRed(0);
        pix.setGreen(0);
        pix.setBlue(2*avg);
      }
      else {
        pix.setRed(2*avg - 255);
        pix.setGreen(2*avg - 255);
        pix.setBlue(255);
      }
      
    }
    else if (y >= Math.ceil(izone[0]) && y < Math.ceil(izone[1])){
      
      if (avg < 128) {
        pix.setRed(0.8*avg);
        pix.setGreen(0);
        pix.setBlue(2*avg);
      }
      else {
        pix.setRed(1.2*avg - 51);
        pix.setGreen(2*avg - 255);
        pix.setBlue(255);
      }
      
    }
    else if (y >= Math.ceil(vzone[0])){
      
      if (avg < 128) {
        pix.setRed(1.6*avg);
        pix.setGreen(0);
        pix.setBlue(1.6*avg);
      }
      else {
        pix.setRed(0.4*avg + 153);
        pix.setGreen(2*avg - 255);
        pix.setBlue(0.4*avg + 153);
      }
      
    }
    
  }
  filteredim.drawTo(canvas);
}

function showOriginal(){
  image.drawTo(canvas);
}

function clearCanvas() {
  var canvas = document.getElementById("imagecan");
  var context = canvas.getContext("2d");
  context.clearRect(0,0,canvas.width,canvas.height);
}
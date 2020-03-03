var serial;
var portName='COM4';
//serial portName

var _lat = 0;
var _lon = 0;
var marker;
var map;

function setup() {
  createCanvas(windowWidth, windowHeight);
  serial = new p5.SerialPort(portName);
  serial.on('list', printList);
  serial.on('data', serialEvent);
  // open the serial port:
  serial.open(portName);
}

function draw() {
  image(img,0,0);
  image(img,300,height/2);
}

function serialEvent() {
  // read a line of text in from the serial port:
  var data = serial.readLine();
  console.log(data);
  // if you've got a valid line, convert it to a number:
  if (data.number = 0) {
   mark=loadImage('asset/starkid.png');
  }else if (data.number=1) {
   marker=false;
  }
  // send a byte to the microcontroller
  // to prompt it to respond with another reading:
  serial.write('x');
}


function initMap() {
// The location of Uluru
 var currentloc = {lat: 43.47, lng: -79.70};
// The map, centered at Uluru
  var map = new google.maps.Map(
document.getElementById('map'), {zoom: 4, center: currentloc});

  marker = new google.maps.Marker({position: currentloc, map: map});
}

function printList(portList) {
  // portList is an array of serial port names:
  for (var i = 0; i < portList.length; i++) {
    console.log(i + ' ' + portList[i]);
  }
}

// Add these lines below to sketch to prevent scrolling
function mousePressed(e) {
  return false;
}

document.addEventListener('gesturestart', function (e) {
  e.preventDefault();
});

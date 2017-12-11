var table;
var r = 200;
var img;
var stars;
var lat;
var lon; 

function preload(){
    img = loadImage("assets/earth3.jpg");
    stars = loadImage("assets/galaxy_starfield.png")
    
}

function setup() {
    createCanvas(800, 600, WEBGL);
    
    img = loadImage("assets/earth3.jpg");
    
    table = loadStrings('https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_month.csv');
    
  
}

function draw() {
    background(0);
    translate(width*0.01, height*0.01);
    rotateY(frameCount * 0.01); // makes sphere spin at constant rate
    
    
    orbitControl();  // command that lets you move around in space while mouse is clicked
    
    from = color(255, 0, 0, 0.2 * 255);  //variables for color so there is almsot gradient effect
    to = color(0, 0, 255, 0.2 * 255);
    
    push();  
    pointLight(250, 250, 250, 1);
    fill(200);
    noStroke();
    ambientMaterial(255);   //material is affected by light
    texture(img); //map texture on sphere
    sphere(r);  
    texture(stars); 
    sphere(1000);
    pop();
    
  
   for(var i = 0; i<table.length; i++){   //for loop that accesses table
    var data = table[i].split(/,/);  //splits information based on a comma
   
    var lat = data[1]; //finding data in table
    var lon = data[2];
    var mag = data[4]; 
    var time = data[0];   
       
    time = (from, to); // color of spheres based on time 
       
    var theta = radians(lat) + PI/2; //calculation of latitude 
    var phi = radians(lon) + PI; //calc of longitude

    var x = r * sin(theta) * cos(phi);  //places spheres based on x,y,z
    var y = -r * sin(theta) * sin(phi);
    var z = r * cos(theta);
    
    push();
    translate(x, y, z);  //creates many spheres based on data and calculation of x,y,z
    fill(time);
    sphere(h);
    pop();
    
    var h = mag; //size of spheres depend on magnitude size
    
   }
  
}




                                        
                                
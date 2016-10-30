var fileSave;
var saveButton
var img2;
var img1;
var img;
var fileSelect;

function preload() {
  img2 = loadImage("images/1.png");
}

function setup() {
  fileSelect = createFileInput(gotFile);
  createP("");
  createCanvas(450,600);
  
function Filesave (){
saveCanvas('HappyPixelatedDIWALI', 'png');
}
 
function gotFile(file) {
  if (file.type === 'image') {
      img= loadImage(file.data,function(img){
            img.resize(450,0);
            image(img,0,0);
            filter(GRAY);
            filter(BLUR,6);
            imageMode(CENTER);
            image(img2,width/2,500);
            inside2();
            frame();
            createP("");
            saveButton = createButton("Save");
            saveButton.mousePressed(Filesave);
                                              });
                        
                              } 
                        }
                        
  }
                      
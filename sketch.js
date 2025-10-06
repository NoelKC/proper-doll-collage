



//<---- from a past project - mixed with this video by Jacob Rivkin https://www.youtube.com/watch?v=hxjEl-pun7o - start ---->  
let texts = [];
let ppls = [];

let saveButton;
let fullButton;

let bounceCountText;

//canvas + pages 
let currentPage = 0;
var w = window.innerWidth;
var h = window.innerHeight;
var canW = w/1.5; 
var canH = h/1.5; 


//text and image preloads 
function preload() {
    //   load text 
    // oldP = loadFont("assets/old_pixel-7.ttf"); 


    //   load images 
    //   text  
    let text1 = loadImage('images/text/1.jpg');
    let text2 = loadImage('images/text/2.jpg');
    let text3 = loadImage('images/text/3.jpg');
    let text4 = loadImage('images/edit-text/4.png');
    let text5 = loadImage('images/text/5.jpg');
    let text6 = loadImage('images/edit-text/6.png');
    let text7 = loadImage('images/text/7.jpg');
    let text8 = loadImage('images/text/8.jpg');
    let text9 = loadImage('images/text/9.jpg');
    let text10 = loadImage('images/edit-text/10.png');
    let text11 = loadImage('images/text/11.jpg');
    let text12 = loadImage('images/edit-text/12.png');
    let text13 = loadImage('images/edit-text/13.png');
    let text14 = loadImage('images/text/14.jpg');
    let text15 = loadImage('images/text/15.jpg');
    let text16 = loadImage('images/text/16.jpg');
    let text17 = loadImage('images/text/17.jpg');
    let text18 = loadImage('images/text/18.jpg');
    let text19 = loadImage('images/text/19.jpg');
    let text20 = loadImage('images/text/20.jpg');
    let text21 = loadImage('images/edit-text/21.png');
    let text22 = loadImage('images/text/22.jpg');
    let text23 = loadImage('images/edit-text/23.png');
    let text24 = loadImage('images/text/24.jpg');
    let text25 = loadImage('images/text/25.jpg');
    let text26 = loadImage('images/text/26.jpg');
    let text27 = loadImage('images/text/27.jpg');
    let text28 = loadImage('images/text/28.jpg');
    let text29 = loadImage('images/text/29.jpg');
    let text30 = loadImage('images/edit-text/30.png');
    let text31 = loadImage('images/text/31.jpg');
    let text32 = loadImage('images/edit-text/32.png');
    let text33 = loadImage('images/text/33.jpg');
    let text34 = loadImage('images/edit-text/34.png');
    let text35 = loadImage('images/text/35.jpg');
    let text36 = loadImage('images/edit-text/36.png');
    let text37 = loadImage('images/text/37.jpg');
    let text38 = loadImage('images/text/38.jpg');
    let text39 = loadImage('images/text/39.jpg');
    let text40 = loadImage('images/edit-text/40.png');
    let text41 = loadImage('images/edit-text/41.png');
    let text42 = loadImage('images/text/42.jpg');
    let text43 = loadImage('images/edit-text/43.png');
    let text44 = loadImage('images/edit-text/44.png');
    let text45 = loadImage('images/text/45.jpg');
    let text46 = loadImage('images/edit-text/46.png');
    let text47 = loadImage('images/text/47.jpg');
    let text48 = loadImage('images/edit-text/48.png');
    let text49 = loadImage('images/edit-text/49.png');
    let text50 = loadImage('images/edit-text/50.png');
    let text51 = loadImage('images/text/51.jpg');
    let text52 = loadImage('images/edit-text/52.png');
    let text53 = loadImage('images/text/53.jpg');
    let text54 = loadImage('images/text/54.jpg');
    let text55 = loadImage('images/edit-text/55.png');
    let text56 = loadImage('images/edit-text/56.png');
    let text57 = loadImage('images/edit-text/57.png');
    let text58 = loadImage('images/edit-text/58.png');
    let text59 = loadImage('images/edit-text/59.png');
    let text60 = loadImage('images/edit-text/60.png');
    let text61 = loadImage('images/edit-text/61.png');
    let text62 = loadImage('images/edit-text/62.png');
    let text63 = loadImage('images/edit-text/63.png');
    let text64 = loadImage('images/text/64.jpg');
    let text65 = loadImage('images/edit-text/65.png');
    let text66 = loadImage('images/edit-text/66.png');
    let text67 = loadImage('images/edit-text/67.png');
    let text68 = loadImage('images/text/68.jpg');
    let text69 = loadImage('images/edit-text/69.png');
    let text70 = loadImage('images/edit-text/70.png');
    let text71 = loadImage('images/edit-text/71.png');
    let text72 = loadImage('images/text/72.jpg');
    let text73 = loadImage('images/edit-text/73.png');
    let text74 = loadImage('images/edit-text/74.png');
    let text75 = loadImage('images/edit-text/75.png');
    let text76 = loadImage('images/edit-text/76.png');
    let text77 = loadImage('images/edit-text/77.png');
    let text78 = loadImage('images/text/78.jpg');
    let text79 = loadImage('images/edit-text/79.png');
    let text80 = loadImage('images/edit-text/80.png');
    let text81 = loadImage('images/edit-text/81.png');
    let text82 = loadImage('images/edit-text/82.png');
    let text83 = loadImage('images/edit-text/83.png');
    let text84 = loadImage('images/edit-text/84.png');
    let text85 = loadImage('images/text/85.jpg');
    let text86 = loadImage('images/edit-text/86.png');
    let text87 = loadImage('images/edit-text/87.png');
    let text88 = loadImage('images/edit-text/88.png');
    let text89 = loadImage('images/text/89.jpg');
    let text90 = loadImage('images/edit-text/90.png');
    let text91 = loadImage('images/edit-text/91.png');
    let text92 = loadImage('images/edit-text/92.png');
    let text93 = loadImage('images/edit-text/93.png');
    let text94 = loadImage('images/edit-text/94.png');
    let text95 = loadImage('images/edit-text/95.png');
    let text96 = loadImage('images/edit-text/96.png');
    let text97 = loadImage('images/edit-text/97.png');
    let text98 = loadImage('images/edit-text/98.png');
    let text99 = loadImage('images/text/99.jpg');
    let text100 = loadImage('images/edit-text/100.png');
    let text101 = loadImage('images/edit-text/101.png');
    let text102 = loadImage('images/edit-text/102.png');
    let text103 = loadImage('images/edit-text/103.png');
    let text104 = loadImage('images/text/104.jpg');
    let text105 = loadImage('images/edit-text/105.png');
    let text106 = loadImage('images/edit-text/106.png');
    let text107 = loadImage('images/edit-text/107.png');
    let text108 = loadImage('images/edit-text/108.png');
    let text109 = loadImage('images/edit-text/109.png');
    let text110 = loadImage('images/edit-text/110.png');
    let text111 = loadImage('images/edit-text/111.png');
    let text112 = loadImage('images/edit-text/112.png');
    let text113 = loadImage('images/text/113.jpg');
    let text114 = loadImage('images/edit-text/114.png');
    let text115 = loadImage('images/edit-text/115.png');
    let text116 = loadImage('images/edit-text/116.png');
    let text117 = loadImage('images/edit-text/117.png');
    let text118 = loadImage('images/edit-text/118.png');
    let text119 = loadImage('images/text/119.jpg');
    let text120 = loadImage('images/edit-text/120.png');
    let text121 = loadImage('images/edit-text/121.png');
    let text122 = loadImage('images/edit-text/122.png');
    let text123 = loadImage('images/edit-text/123.png');
    let text125 = loadImage('images/edit-text/125.png');
    let text124 = loadImage('images/edit-text/124.png');
    let text126 = loadImage('images/edit-text/126.png');
    let text127 = loadImage('images/edit-text/127.png');
    let text128 = loadImage('images/edit-text/128.png');
    let text129 = loadImage('images/edit-text/129.png');
    let text130 = loadImage('images/edit-text/130.png');
    let text131 = loadImage('images/edit-text/131.png');
    let text132 = loadImage('images/edit-text/132.png');
    let text133 = loadImage('images/edit-text/133.png');
    let text134 = loadImage('images/edit-text/134.png');
    let text135 = loadImage('images/edit-text/135.png');
    let text136 = loadImage('images/edit-text/136.png');
    let text137 = loadImage('images/edit-text/137.png');
    let text138 = loadImage('images/edit-text/138.png');
    let text139 = loadImage('images/edit-text/139.png');
    let text140 = loadImage('images/edit-text/140.png');
    let text141 = loadImage('images/text/141.jpg');
    let text142 = loadImage('images/edit-text/142.png');
    let text143 = loadImage('images/edit-text/143.png');
    let text144 = loadImage('images/edit-text/144.png');
    let text145 = loadImage('images/edit-text/145.png');
    let text146 = loadImage('images/edit-text/146.png');
    let text147 = loadImage('images/edit-text/147.png');
    let text148 = loadImage('images/text/148.jpg');
    let text149 = loadImage('images/edit-text/149.png');
    let text150 = loadImage('images/edit-text/150.png');
    let text151 = loadImage('images/edit-text/151.png');
    let text152 = loadImage('images/text/152.jpg');
    let text153 = loadImage('images/edit-text/153.png');
    let text154 = loadImage('images/edit-text/154.png');
    let text155 = loadImage('images/edit-text/155.png');
    let text156 = loadImage('images/edit-text/156.png');
    let text157 = loadImage('images/edit-text/157.png');
    let text158 = loadImage('images/edit-text/158.png');
    let text159 = loadImage('images/edit-text/159.png');
    let text160 = loadImage('images/edit-text/160.png');
    let text161 = loadImage('images/edit-text/161.png');
    let text162 = loadImage('images/edit-text/162.png');
    let text163 = loadImage('images/text/163.jpg');
    let text164 = loadImage('images/edit-text/164.png');
    let text165 = loadImage('images/edit-text/165.png');
    let text166 = loadImage('images/text/166.jpg');
    let text167 = loadImage('images/edit-text/167.png');
    let text168 = loadImage('images/edit-text/168.png');
    texts = [text1, text2, text3, text4, text5, text6, text7, text8, text9, text10, text11, text12, text13, text14, text15, text16, text17, text18, text19, text20, text21, text22, text23, text24, text25, text26, text27, text28, text29, text30, text31, text32, text33, text34, text35, text36, text37, text38, text39, text40, text41, text42, text43, text44, text45, text46, text47, text48, text49, text50, text51, text52, text53, text54, text55, text56, text57, text58, text59, text60, text61, text62, text63, text64, text65, text66, text67, text68, text69, text70, text71, text72, text73, text74, text75, text76, text77, text78, text79, text80, text81, text82, text83, text84, text85, text86, text87, text88, text89, text90, text91, text92, text93, text94, text95, text96, text97, text98, text99, text100, text101, text102, text103, text104, text105, text106, text107, text108, text109, text110, text111, text112, text113, text114, text115, text116, text117, text118, text119, text120, text121, text122, text123, text124, text125, text126, text127, text128, text129, text130, text131, text132, text133, text134, text135, text136, text137, text138, text139, text140, text141, text142, text143, text144, text145, text146, text147, text148, text149, text150, text151, text152, text153, text154, text155, text156, text157, text158, text159, text160, text161, text162, text163, text164, text165, text166, text167, text168];

    //   ppl + products  
    let ppl1 = loadImage('images/ppl/1.jpg');
    let ppl2 = loadImage('images/ppl/2.jpg');
    let ppl3 = loadImage('images/ppl/3.jpg');
    let ppl4 = loadImage('images/ppl/4.jpg');
    let ppl5 = loadImage('images/ppl/5.jpg');
    let ppl6 = loadImage('images/ppl/6.jpg');
    let ppl7 = loadImage('images/ppl/7.jpg');
    let ppl8 = loadImage('images/ppl/8.jpg');
    let ppl9 = loadImage('images/ppl/9.jpg');
    let ppl10 = loadImage('images/ppl/10.jpg');
    let ppl11 = loadImage('images/ppl/11.jpg');
    let ppl12 = loadImage('images/ppl/12.jpg');
    let ppl13 = loadImage('images/ppl/13.jpg');
    let ppl14 = loadImage('images/ppl/14.jpg');
    let ppl15 = loadImage('images/ppl/15.jpg');
    let ppl16 = loadImage('images/ppl/16.jpg');
    let ppl17 = loadImage('images/ppl/17.jpg');
    let ppl18 = loadImage('images/ppl/18.jpg');
    let ppl19 = loadImage('images/ppl/19.jpg');
    let ppl20 = loadImage('images/ppl/20.jpg');
    let ppl21 = loadImage('images/ppl/21.jpg');
    let ppl22 = loadImage('images/ppl/22.jpg');
    let ppl23 = loadImage('images/ppl/23.jpg');
    let ppl24 = loadImage('images/ppl/24.jpg');
    let ppl25 = loadImage('images/ppl/25.jpg');
    let ppl26 = loadImage('images/ppl/26.jpg');
    let ppl27 = loadImage('images/ppl/27.jpg');
    let ppl28 = loadImage('images/ppl/28.jpg');
    let ppl29 = loadImage('images/ppl/29.jpg');
    let ppl30 = loadImage('images/ppl/30.jpg');
    let ppl31 = loadImage('images/ppl/31.jpg');
    let ppl32 = loadImage('images/ppl/32.jpg');
    let ppl33 = loadImage('images/ppl/33.jpg');
    let ppl34 = loadImage('images/ppl/34.jpg');
    let ppl35 = loadImage('images/ppl/35.jpg');
    let ppl36 = loadImage('images/ppl/36.jpg');
    let ppl37 = loadImage('images/ppl/37.jpg');
    let ppl38 = loadImage('images/ppl/38.jpg');
    let ppl39 = loadImage('images/ppl/39.jpg');
    let ppl40 = loadImage('images/ppl/40.jpg');
    let ppl41 = loadImage('images/ppl/41.jpg');
    let ppl42 = loadImage('images/ppl/42.jpg');
    let ppl43 = loadImage('images/ppl/43.jpg');
    let ppl44 = loadImage('images/ppl/44.jpg');
    let ppl45 = loadImage('images/ppl/45.jpg');
    let ppl46 = loadImage('images/ppl/46.jpg');
    let ppl47 = loadImage('images/ppl/47.jpg');
    let ppl48 = loadImage('images/ppl/48.jpg');
    let ppl49 = loadImage('images/ppl/49.jpg');
    let ppl50 = loadImage('images/ppl/50.jpg');
    ppls = [ppl1, ppl2, ppl3, ppl4, ppl5, ppl6, ppl7, ppl8, ppl9, ppl10, ppl11, ppl12, ppl13, ppl14, ppl15, ppl16, ppl17, ppl18, ppl19, ppl20, ppl21, ppl22, ppl23, ppl24, ppl25, ppl26, ppl27, ppl28, ppl29, ppl30, ppl31, ppl32, ppl33, ppl34, ppl35, ppl36, ppl37, ppl38, ppl39, ppl40, ppl41, ppl42, ppl43, ppl44, ppl45, ppl46, ppl47, ppl48, ppl49, ppl50];

}

function setup() {
    createCanvas(w/1.5, h/1.5); //might change later 
   

    background(0, 60, 150);
    fill(100);
    // textAlign(center);
    //   textFont(oldP);
    //noLoop(); //i will have to find a way to make it so it will appear randomly - with loop - but this can help me see if this works to begin with 

    // Get the number of milliseconds the sketch has run.
    let ms = millis();
    // Display how long it took to load the data.
    console.log(`It took ${round(ms, 2)} ms to load the data`);


    // frameRate(0.5); // update 1 frame every two seconds => 0.5 fps


    // sytem for bouncing Pikmin 
    speedX = random(-5, 5);
    speedY = random(-5, 5);
    loX = height / 2;
    loY = width / 2;
    incText = 1;
    //Bounce 
    bounceCountText = new Array(incText); // Create text 
    for (let i = 0; i < bounceCountText.length; i++) {
        bounceCountText[i] = new nText(canW-100, canH-100, 0, .5); // x, y, rot, scale 
    }

    // // Save Image Button 
    // saveButton = createButton('Save Image');
    // saveButton.position(170, 245); // Position the button
    // saveButton.mousePressed(saveCanvasAsImage); // Attach the save function to the button
    // // fullscreen Button 
    // fullButton = createButton('Full Screen');
    // fullButton.position(265, 245); // Position the button
    // fullButton.mousePressed(fullScreen); // Attach the save function to the button
}

function draw() {
    background(0);
    imageMode(CENTER);

    if (currentPage == 1) { //PG 1 - press t/T key to call in random image  
        background(0);
        // calling in the random arrays of images 
        let randoText = random(texts);
        let randoPpl = random(ppls);

        // placing the images 
        imageMode(CORNER);
        image(randoPpl, 0, 0, canW, canH); //the ppl images are the BG (fill the canvas from center) 
        imageMode(CENTER);
        image(randoText, random(canW), random(canH), random(canW*.5, canW/2), random(canH*.5, canH/2)); //the text images spawn in randomly on the canvas at random sizes  (x, y, width, height)
        image(randoText, random(canW), random(canH), random(canW*.5, canW/2), random(canH*.5, canH/2));
        image(randoText, random(canW), random(canH), random(canW*.5, canW/2), random(canH*.5, canH/2));
        image(randoText, random(canW), random(canH), random(canW*.5, canW/2), random(canH*.5, canH/2));
        addText(); 
        addText(); 
        addText(); 
        addText(); 
    } else if (currentPage == 2) { //PG 2 - press r/R key to call in random image 
        background(0, 0, 250);
        // let randoRotPpl = random(ppls);
        // image(randoRotPpl, 250, 250, 500, 500);
        // placing the images 
        // bounce 
        for (let i = 0; i < bounceCountText.length; i++) {
            bounceCountText[i].drawTexts();
            bounceCountText[i].bouncingText();
        }
    } else { //Home page - Intro/ OG Skid & Pump 
        background(0);
        textAlign(CENTER);
        // text("Hi this is the HOME page", w*2, 100, 700, 200)
        // text("1 = PG 1 - Press t/T on the page", -100, 200, 700, 200);
        // text("2 = PG 2 - Press r/R on the page", -100, 300, 700, 200);
        // text("Anything else = HOME Page", -100, 400, 700, 200)

    }
}
//<---- end of past project ----> 

// <---- save image button --->
function saveCanvasAsImage() {
    saveCanvas('pdc', 'png'); //Saves the canvas as 'pdc (#).png' 
}
// <---- full screen button --->
function fullScreen() {
    if (mouseX > 0 && mouseX < width && mouseY > 0 && mouseY < height) {
        let fs = fullscreen();
        fullscreen(!fs);
    }
}

// <---- From PIKMIN File - changed names to fix here it calls in another random text image----> 
function addText() {
    // calling in the random arrays of images 
    let randoTexts = random(texts);
    image(randoTexts, random(500), random(500), random(100, 350), random(100, 350)); //the text images spawn in randomly on the canvas at random sizes 
    // image(randoTexts, random(500), random(500), random(100, 350), random(100, 350));
    // image(randoTexts, random(500), random(500), random(100, 350), random(100, 350));
    // image(randoTexts, random(500), random(500), random(100, 350), random(100, 350));
    // image(randoTexts, random(500), random(500), random(100, 350), random(100, 350));
}
function addRotText() {
    let newText = new nText();
    bounceCountText.push(newText);
    console.log("ADD ROT");
}

function keyPressed() {
    if (key == '1') { // PG 1 - press t/T key to call in random image 
        console.log("Page 1");
        currentPage = 1;
        frameRate(1);// update 1 frame every two seconds => 0.5 fps
        // noLoop();
    } else if (key == '2') { //PG 2 - press r/R key to call in random image 
        console.log("Page 2");
        currentPage = 2;
        frameRate(10);
        // loop();
    } else if (key == 't' || key == 'T') { // Press t/T Key to add more Images for PG 1
        addText();
        console.log("t");
        // currentPage = 1;
    } else if (key == 'r' || key == 'R') { // Press t/T Key to add more rotating Images for PG 2
        addRotText();
        console.log("r");
        // currentPage = 2;
    } else { // PG 0 - home PG  
        console.log("HOME");
        currentPage = 0;
        frameRate(24);
        // loop();
    }

}


class nText { //Text Images 
    // te; 
    // k;
    cx;
    cy;
    rot;
    sc;
    //sytem for bouncing Pikmin 
    speedX;
    speedY;
    loX;
    loY;
    randomRot;


    constructor(Tlx, Tly, Trot, Tsc) {
        //general - for main standing Pikmin 
        // this.k = Tk;
        this.cx = Tlx;
        this.cy = Tly;
        this.rot = Trot;
        this.sc = Tsc;
        //sytem for bouncing Pikmin 
        this.speedX = random(-5, 5);
        this.speedY = random(-5, 5);
        this.loX = 390;
        this.loY = 320;
        this.randomRot = random(-10, 10);

    }

    drawTexts() { //drawing the random text images 
        let randoRotText = random(texts);
        push();
        // translate(this.cx, this.cy);
        // //rotate(random(10,20));
        // rotate(this.rot);
        // scale(this.sc);
        // image(randoText, random(250), random(250), random(100, 250), random(100, 250)); //OG 
        // image(randoText, 250, 250, 150, 150); //basic set 
        image(randoRotText, this.cx, this.cy, this.sc); //maybe? 
        pop();
    }

    //bouncing Text  
    bouncingText() {
        this.cx = this.loX;
        this.cy = this.loY;
        if ((this.loX < 15) || (this.loX > width - 20)) {
            this.speedX = -this.speedX;
        }
        if ((this.loY < 50) || (this.loY > height - 150)) {
            this.speedY = -this.speedY;
        }
        this.loX += this.speedX;
        this.loY += this.speedY;
        this.rot += this.randomRot;
        console.log(this.speedX + " || " + this.speedY);
    }
}
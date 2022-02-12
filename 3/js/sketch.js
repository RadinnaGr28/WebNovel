document.addEventListener("animationend", function(e){(e)});
document.addEventListener("scroll", function(e){onScroll(e)});



let fadedIn = false;
let fadedOut = false;
let windowH = window.innerHeight;
let windowW = window.innerWidth;
let windowTop = window.pageYOffset;
let windowBottom = windowTop + windowH;

// get the Elements by Id
let myAnimation = document.getElementById('image1');
let blanket = document.getElementById('blanket');
let scene = document.getElementById('diner1');
let scene2 = document.getElementById('diner2')
let bed = document.getElementById('bed');
let children1 = document.getElementById('image2left1');
let children2 = document.getElementById('image2right1');
let children3 = document.getElementById('image2left2');
let children4= document.getElementById('image2right2');
let school = document.getElementById('image2');
let classroom = document.getElementById('image3');
let teacher = document.getElementById('teacher');
let home = document.getElementById('girl_home');
let textbox1 = document.getElementById('textbox1');
let textbox2 = document.getElementById('textbox2');
let textbox3 = document.getElementById('textbox3');
let textbox4 = document.getElementById('textbox4');
let pizza = document.getElementById('pizza');
let hamburger = document.getElementById('hamburger');
let cake = document.getElementById('cake');
let scale = document.getElementById('scale');
let chapter8 = document.getElementById('container8');
let chapter9 = document.getElementById('container9');
let footer = document.getElementById('footer');

// Scale scene
  var i = 80; // Value starts off at zero
  function increment() {
      i++; // i is growing
      if(i<= 200){ //200kg is the limit
      document.getElementById('weight').innerHTML = i +" kg";
      }
      else{ //scale break
        scale.src="images/scale-broken.png";
      }
    } //interval for counting
      setInterval('increment()', 10000);

      // while scrolling
      
function onScroll(e){
  //get the corners of the objects
    let myAnimationProps = myAnimation.getBoundingClientRect();
    let blanketProps = blanket.getBoundingClientRect();
    let schoolProps = school.getBoundingClientRect();
    let dinerProps = scene.getBoundingClientRect();
    let tableProps = scene2.getBoundingClientRect();
    let bedProps = bed.getBoundingClientRect();
    let classroomProps = classroom.getBoundingClientRect();
    let homeProps = home.getBoundingClientRect();
    let chapter8Props = chapter8.getBoundingClientRect();
    let chapter9Props = chapter9.getBoundingClientRect();
    let windowH = window.pageYOffset;
    let windowBottomLine = window.pageYOffset + window.innerHeight;

    let windowTopBorder = 1100;
    let windowBottomBorder = 4000;
    // hide every element which should not be there
    
        console.log(windowH);
        console.log("image1    " + myAnimationProps.top );
        children1.classList.add("slideFadeOut");
        children1.classList.add("invisible");
        children2.classList.add("slideFadeOut");
        children2.classList.add("invisible");
        children3.classList.add("slideFadeOut");
        children3.classList.add("invisible");
        children4.classList.add("slideFadeOut");
        children4.classList.add("invisible");
        teacher.classList.add("slideFadeOut");
        teacher.classList.add("invisible");
        textbox1.classList.add("slideFadeOut");
        textbox1.classList.add("invisible");
        textbox2.classList.add("slideFadeOut");
        textbox2.classList.add("invisible");
        textbox3.classList.add("slideFadeOut");
        textbox3.classList.add("invisible");
        textbox4.classList.add("slideFadeOut");
        textbox4.classList.add("invisible");
        pizza.classList.add("slideFadeOut");
        pizza.classList.add("invisible");
        hamburger.classList.add("slideFadeOut");
        hamburger.classList.add("invisible");
        cake.classList.add("slideFadeOut");
        cake.classList.add("invisible");

        // Dolly appears at school
    if (myAnimationProps.top && windowH >= schoolProps.top){
        console.log("Fade In called");
        myAnimation.classList.add("slideFadeIn");
        myAnimation.classList.remove("invisible");
        fadedIn = true;
        fadedOut = false;
        myAnimation.style.width = "7%";
    }
    // first children appear
    if (myAnimationProps.bottom >= schoolProps.top +500){

        fadedIn=true;
        fadedOut=false;
        children1.classList.add("objectFadeIn");
        children1.classList.remove("invisible");
        myAnimation.style.width= "10%";
    }
    // second children appear
    if (myAnimationProps.bottom >= schoolProps.top +600){

        fadedIn=true;
        fadedOut=false;
        children2.classList.add("objectFadeIn");
        children2.classList.remove("invisible");
        
    }
    // third children appear
    if ( myAnimationProps.bottom >= schoolProps.top +700){
        fadedIn=true;
        fadedOut=false;
        children3.classList.add("objectFadeIn");
        children3.classList.remove("invisible");
        myAnimation.style.width= "15%";

    }
    // fourth children appear
    if ( myAnimationProps.bottom >= schoolProps.top +800){
        fadedIn=true;
        fadedOut=false;
        children4.classList.add("objectFadeIn");
        children4.classList.remove("invisible");

    }
    // teacher appear
    if ( myAnimationProps.bottom >= classroomProps.top + 630){
        teacher.classList.add("objectFadeIn");
        teacher.classList.remove("invisible");
        
    }
     // you see normal dolly if you scroll backwards after the look for her mother
    if ( myAnimationProps.bottom >= homeProps.bottom - 250){
        myAnimation.src = "images/dolly.png"
        
    }
     // dolly look at her mother and two textboxes appears
    if (myAnimationProps.bottom >= homeProps.bottom - 150){
        textbox1.classList.add("slideFadeIn");
        textbox1.classList.remove("invisible");
        textbox3.classList.add("slideFadeIn");
        textbox3.classList.remove("invisible");
        myAnimation.src = "images/dolly-with-eyes.png"
        
    }
     // dolly look back from her mother and mother's last textbox appears
    if (myAnimationProps.bottom >= homeProps.bottom -50){
        textbox2.classList.add("slideFadeIn");
        textbox2.classList.remove("invisible");
        myAnimation.src = "images/dolly.png"
    }
     // dolly reaches table and be her lags disappear as she sits down
    if ( myAnimationProps.bottom >= tableProps.top ){
      textbox4.classList.add("slideFadeIn");
      textbox4.classList.remove("invisible");
      myAnimation.src = "images/dolly-half.png";
  }
  //dolly appear as you scroll backwards
  if ( myAnimationProps.bottom >= tableProps.top ){
    textbox4.classList.add("slideFadeIn");
    textbox4.classList.remove("invisible");
  }
// dolly disappears from table
  if ( myAnimationProps.bottom >= tableProps.top +50){
    myAnimation.classList.add("invisible");
  }
  //dolly appears as she reaching into bedroom
if ( myAnimationProps.bottom >= tableProps.bottom){
  myAnimation.classList.add("slideFadeIn");
  myAnimation.classList.remove("invisible");
  fadedIn = true;
  fadedOut = false;
  myAnimation.style.width = "12%";
  myAnimation.src = "images/dolly.png";
}
//dolly get back full size if you going backwards
    if (myAnimationProps.bottom >= bedProps.bottom ){

        myAnimation.src = "images/dolly.png";
    }
    //dolly's leg go under blanket, so she become half sized
    if ( myAnimationProps.bottom -50>= blanketProps.top +10){

      myAnimation.src = "images/dolly-half.png";

  }
// foods appear on bed
    if (myAnimationProps.bottom >= blanketProps.top ){

        fadedIn=true;
        fadedOut=false;
        pizza.classList.add("slideFadeIn");
        pizza.classList.remove("invisible");
        hamburger.classList.add("slideFadeIn");
        hamburger.classList.remove("invisible");
        cake.classList.add("slideFadeIn");
        cake.classList.remove("invisible");

    }
    //dolly eat the food, they disappear and dolly grows a bit
    if ( myAnimationProps.top >= blanketProps.top -90){

      pizza.classList.remove("slideFadeIn");
      pizza.classList.add("slideFadeOut");
      pizza.classList.add("invisible");
      hamburger.classList.remove("slideFadeIn");
      hamburger.classList.add("slideFadeOut");
      hamburger.classList.add("invisible");
      cake.classList.remove("slideFadeIn");
      cake.classList.add("slideFadeOut");
      cake.classList.add("invisible");
      myAnimation.style.width = "14%";

    }
    //as you scroll down dolly fade into the darkness
    //Scale' counter become faster
    if (myAnimationProps.bottom >= blanketProps.bottom ){

        console.log("Fade Out called");
        myAnimation.classList.remove("slideFadeIn");
        myAnimation.classList.add("slideFadeOut");
        myAnimation.classList.add("invisible");
        fadedOut = true;
        myAnimation.addEventListener('transitionend', () => myAnimation.remove());
        setInterval('increment()', 1000);
    }
    //lower opacity as you scroll down
    if (myAnimationProps.bottom >= chapter8Props.top ){

      footer.style.opacity = 0.9;
  }
   //lower opacity as you scroll down
    if (myAnimationProps.bottom >= chapter9Props.top ){

      footer.style.opacity = 0.8;
  }
}
// add the animation event for the Home title
document.addEventListener("DOMContentLoaded", function (event) {
	var element = document.querySelectorAll("#home a");

	if (element) {
		element.forEach(function (el, key) {
			el.addEventListener("click", function () {
				console.log(key);

				el.classList.toggle("active");

				element.forEach(function (ell, els) {
					if (key !== els) {
						ell.classList.remove("active");
					}
					console.log(els);
				});
			});
		});
	}
});



// Home title animation
const images = document.querySelectorAll(".make-this-animate");

const observer = new IntersectionObserver((entries) => {
	entries.forEach((entry) => {
		if (entry.intersectionRatio > 0) {
			entry.target.classList.add("animate-it");
		} else {
			entry.target.classList.remove("animate-it");
		}
	});
}, 

);

images.forEach((item) => {
	observer.observe(item);
});
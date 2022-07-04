
//on window scroll

var mediaNavBar =  document.querySelector("#myNavbar");
var fontSizeAnimateOnScroll = document.querySelector(".c1_bar .w3-bar-item");
window.addEventListener('scroll', (e) =>{
	if(e.pageYOffset < 10) {
		mediaNavBar.style.backgroundColor = "black";
	}
	else {
		
		mediaNavBar.style.backgroundColor = "red";
	}

});


//date

const updateYear = document.querySelector(".date");
updateYear.style.color = "grey";
const newDate = new Date();
const newYearDate = newDate.getFullYear();
updateYear.innerHTML = newYearDate;




//text animation code

const writing_animation_two = document.querySelector(".second_text");
const writing_animation_one = document.querySelector(".third_text");
const writing_animation_three = document.querySelector(".forth_text");


const writing_animation_one_Loaded = ()=> {
		

    //Je suis
    setTimeout( ()=> {
        writing_animation_one.textContent = "I'm";
    },0 );

    setTimeout( ()=> {
        writing_animation_one.textContent = "Je suis";
    },4000 );

    setTimeout( ()=> {
        writing_animation_one.textContent = "Ich bin";
    },8000 );

}
    
    
writing_animation_one_Loaded();

setInterval(writing_animation_one_Loaded, 12000);




	const writing_animation_two_Loaded = ()=> {
		
		setTimeout( ()=> {
			writing_animation_two.textContent = "Code, Create and Develope";
		},0 );
	
		setTimeout( ()=> {
			writing_animation_two.textContent = "Code, Creer, Developper";
		},4000 );
	
		setTimeout( ()=> {
			writing_animation_two.textContent = "Code, Schaffen, Entwickeln";
		},8000 );
	
	}
		
		
	writing_animation_two_Loaded();
	
	setInterval(writing_animation_two_Loaded, 12000);





	
	const writing_animation_three_Loaded = ()=> {
		
		setTimeout( ()=> {
			writing_animation_three.textContent = "Solutions";
		},0 );
	
		setTimeout( ()=> {
			writing_animation_three.textContent = "Designs";
		},4000 );
	
		setTimeout( ()=> {
			writing_animation_three.textContent = "Experience";
		},8000 );
	
	}
		
		
	writing_animation_three_Loaded();
	
	setInterval(writing_animation_three_Loaded, 12000);






// c1_project slideshow component//


	

			// c1_project_one slide component//

			let slideIndex = 1;
			showSlides(slideIndex);

			// Next/previous controls
			function plusSlides(n) {
			showSlides(slideIndex += n);
			}
			
			// Thumbnail image controls
			function currentSlide(n) {
			showSlides(slideIndex = n);
			}


			function showSlides(n) {
			let i;
			let slides = document.getElementsByClassName("c1_mySlideshow");
			let dots = document.getElementsByClassName("c1_slideshow_dot");
			if (n > slides.length) {slideIndex = 1}
			if (n < 1) {slideIndex = slides.length}
			for (i = 0; i < slides.length; i++) {
				slides[i].style.display = "none";
			}
			for (i = 0; i < dots.length; i++) {
				dots[i].className = dots[i].className.replace(" active", "");
			}
			slides[slideIndex-1].style.display = "block";
			dots[slideIndex-1].className += " active";
			} 

			// c1_project_one slide component//





			// c1_project_two slide component//

			let slideIndexTwo = 1;
			showSlidesTwo(slideIndexTwo);

			// Next/previous controls
			function plusSlidesTwo(o) {
			showSlidesTwo(slideIndexTwo += o);
			}
			
			// Thumbnail image controls
			function currentSlideTwo(o) {
			showSlidesTwo(slideIndexTwo = o);
			}


			function showSlidesTwo(o) {
			let j;
			let slidesTwo = document.getElementsByClassName("c1_mySlideshow_two");
			let dotsTwo = document.getElementsByClassName("c1_slideshow_dot_two");
			if (o > slidesTwo.length) {slideIndexTwo = 1}
			if (o < 1) {slideIndexTwo = slidesTwo.length}
			for (j = 0; j < slidesTwo.length; j++) {
				slidesTwo[j].style.display = "none";
			}
			for (j = 0; j < dotsTwo.length; j++) {
				dotsTwo[j].className = dotsTwo[j].className.replace(" active", "");
			}
			slidesTwo[slideIndexTwo-1].style.display = "block";
			dotsTwo[slideIndexTwo-1].className += " active";
			} 

			// c1_project_two slide component//




			// c1_project_two slide component//

			let slideIndexThree = 1;
			showSlidesThree(slideIndexThree);

			// Next/previous controls
			function plusSlidesThree(p) {
			showSlidesThree(slideIndexThree += p);
			}
			
			// Thumbnail image controls
			function currentSlideThree(p) {
			showSlidesThree(slideIndexThree = p);
			}


			function showSlidesThree(p) {
			let k;
			let slidesThree = document.getElementsByClassName("c1_mySlideshow_three");
			let dotsThree = document.getElementsByClassName("c1_slideshow_dot_three");
			if (p > slidesThree.length) {slideIndexThree = 1}
			if (p < 1) {slideIndexThree = slidesThree.length}
			for (k = 0; k < slidesThree.length; k++) {
				slidesThree[k].style.display = "none";
			}
			for (k = 0; k < dotsThree.length; k++) {
				dotsThree[k].className = dotsThree[k].className.replace(" active", "");
			}
			slidesThree[slideIndexThree-1].style.display = "block";
			dotsThree[slideIndexThree-1].className += " active";
			}

			// c1_project_two slide component//



// c1_project slideshow component//

	





// c1_project_one modal component//




				var c1_body, c1_projectOne, c1_projectTwo, c1_projectThree;

				c1_projectOne = document.querySelector("#c1_project_one");
				c1_projectTwo = document.querySelector("#c1_project_two");
				c1_projectThree = document.querySelector("#c1_project_three");

				//perform modal function for project one
				c1_projectOne.addEventListener('click', function(){
					document.getElementById('c1_project_modal_mode_one').style.display='block';
				});


				//perform modal function for project two
				c1_projectTwo.addEventListener('click', function(){
					document.getElementById('c1_project_modal_mode_two').style.display='block';
				});				


				//perform modal function for project three
				c1_projectThree.addEventListener('click', function(){
					document.getElementById('c1_project_modal_mode_three').style.display='block';
				});





				// Get the project modal
				var modal = document.querySelector('#c1_project_modal_mode_one, #c1_project_modal_mode_two');

				// When the user clicks anywhere outside of the modal, close it
				window.onclick = function(event) {
				if (event.target == modal) {
					modal.style.display = "none";
				}
				}








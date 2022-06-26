



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



	//modal 
	// Get the login modal
var login_modal = document.getElementById('login_mode');

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
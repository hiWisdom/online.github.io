



//date

const updateYear = document.querySelector(".date");
updateYear.style.color = "grey";
const newDate = new Date();
const newYearDate = newDate.getFullYear();
updateYear.innerHTML = newYearDate;




//text animation code

const writing_animation_one = document.querySelector(".third_text");
const writing_animation_two = document.querySelector(".second_text");
	



const writing_animation_one_Loaded = ()=> {
		

    //Je suis
    setTimeout( ()=> {
        writing_animation_one.textContent = "I'm";
    },0 );

    setTimeout( ()=> {
        writing_animation_one.textContent = "Som";
    },4000 );

    setTimeout( ()=> {
        writing_animation_one.textContent = "Ich bin";
    },8000 );

}
    
    
writing_animation_one_Loaded();

setInterval(writing_animation_one_Loaded, 12000);




	const writing_animation_two_Loaded = ()=> {
		
		setTimeout( ()=> {
			writing_animation_two.textContent = "CODE";
		},0 );
	
		setTimeout( ()=> {
			writing_animation_two.textContent = "CREATE";
		},4000 );
	
		setTimeout( ()=> {
			writing_animation_two.textContent = "DEVELOPE";
		},8000 );
	
	}
		
		
	writing_animation_two_Loaded();
	
	setInterval(writing_animation_two_Loaded, 12000);
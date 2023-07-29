// "use strict"

// const isMobile = {
// 	Android: function () {
// 		return navigator.userAgent.match(/Android/i);
// 	},
// 	BlackBerry: function () {
// 		return navigator.userAgent.match(/BlackBerry/i);
// 	},
// 	iOS: function () {
// 		return navigator.userAgent.match(/iPhone|iPad|iPod/i);
// 	},
// 	Opera: function () {
// 		return navigator.userAgent.match(/Opera Mini/i);
// 	},
// 	Windows: function () {
// 		return navigator.userAgent.match(/IEMobile/i);
// 	},
// 	any: function () {
// 		return (
// 			isMobile.Android() ||
// 			isMobile.BlackBerry() ||
// 			isMobile.iOS() ||
// 			isMobile.Opera() ||
// 			isMobile.Windows());
// 	}
// };

// if (isMobile.any()) {
// 	document.body.classList.add('_touch');

// 	let menuArrows = document.querySelectorAll('.menu__arrow');
// 	if (menuArrows.length > 0) {
// 		for (let index = 0; index < menuArrows.length; index++) {
// 			const menuArrow = menuArrows[index];
// 			menuArrow.addEventListener("click", function (e) {
// 				menuArrow.parentElement.classList.toggle('_active');
// 			});
// 		}
// 	}

// } else {
// 	document.body.classList.add('_pc');
// }

// Меню бургер
// const iconMenu = document.querySelector('.menu__icon');
// const menuBody = document.querySelector('.menu__body');
// const menuHeader = document.querySelector('.menu__header');
// const menuSearch = document.querySelector('.menu__search');




// //Select sity location
// const selectSingle = document.querySelector('.__select');
// const selectSingle_title = selectSingle.querySelector('.__select__title');
// const selectSingle_labels = selectSingle.querySelectorAll('.__select__label');

// // Toggle menu
// selectSingle_title.addEventListener('click', () => {
//   if ('active' === selectSingle.getAttribute('data-state')) {
//     selectSingle.setAttribute('data-state', '');
//   } else {
//     selectSingle.setAttribute('data-state', 'active');
//   }
// });

// // Close when click to option
// for (let i = 0; i < selectSingle_labels.length; i++) {
//   selectSingle_labels[i].addEventListener('click', (evt) => {
//     selectSingle_title.textContent = evt.target.textContent;
//     selectSingle.setAttribute('data-state', '');
//   });
// }

// // Reset title
// const reset = document.querySelector('.reset');
// reset.addEventListener('click', () => {
//   selectSingle_title.textContent = selectSingle_title.getAttribute('data-default');
// });



// Меню бургер 
const menu = document.querySelector('.menu__body');
const burger = document.querySelector('.burger-menu');
const mobileBack = document.querySelector('.mobile-back')
const overlay = document.querySelector('.overlay');	
const menuHeader = document.querySelector('.menu-header');	

if (burger) {
	burger.addEventListener("click", function (e) {
		document.body.classList.toggle('_lock');
		burger.classList.toggle('open');
		menu.classList.toggle('open');
		// menuHeader.classList.toggle('_active');
		// menuSearch.classList.toggle('open');
	});
}
const lockScroll = () => {
	document.body.classList.add('lock');
}

const unlockScroll = () => {
	document.body.classList.remove('lock');
}

const lnitialMenu = () => {
	document.querySelector('.nav__list--dropdown').classList.remove('change');
	document.querySelector('.menu__body').querySelector('.menu__list').classList.remove('change');
	scrollTop();
}

const scrollTop = () => { 
	menu.scrollTo({
	top: 0,
	behavior: 'smooth', 
});
}

burger.addEventListener ('click', () => {
	menu.classList.add('open');
	menuHeader.classList.add('open');
	overlay.classList.add('open');
	lockScroll();
	lnitialMenu();
});

overlay.addEventListener ('click', () => {
	menu.classList.remove('open');
	menuHeader.classList.remove('open');
	overlay.classList.remove('open');
	unlockScroll();
});


menu.addEventListener('click', (e) => {

if (e.target.classList.contains('nav__link--drop')) {
	 e.preventDefault();
	 e.target.closest('.menu__list').classList.add('change');
	 e.target.closest('.menu__item').querySelector('.nav__list--dropdown').classList.add('change');
	 scrollTop();
}
if (e.target.classList.contains('mobile-back__link')) {
	 e.preventDefault();
	 e.target.closest('.nav__list--dropdown').classList.remove('change');
	 e.target.closest('.menu__body').querySelector('.menu__list').classList.remove('change');
	 scrollTop();
}
if (e.target.classList.contains('.menu__link') && !e.target.classList.contains('nav__link--drop')) {
	e.preventDefault();
	menu.classList.remove('open');
	menuHeader.classList.remove('open');
	overlay.classList.remove('open');
	unlockScroll();
	}
});




// //modal
// const modal = document.querySelector('.modal__body');
// const modalOverlay = document.querySelector('.modal__overlay');
// const button = document.querySelector('.button');



// button.addEventListener('click', () => {
// 	modal.classList.add('open'); 
// 	modalOverlay.classList.add('open');
// 	lockScroll();
// });

// modalOverlay.addEventListener ('click', () => {
// 	modal.classList.remove('open');
// 	modalOverlay.classList.remove('open');
// 	lockScroll();
// });

// function app() {
// 	const button = document.querySelectorAll('.button')

// 	button.forEach((button) => { 
// 		button.addEventListener('click', () => {
// 			console.log(button.dataset.filter)
// 		})
// 	})
// }

// app()










// Quiz  ТАБЫ  
const links = document.querySelectorAll('.tabs__item');
const buttonNext = document.querySelectorAll('.button__quiz');
// let Content = document.querySelectorAll('.tabs__items');
// let border = document.querySelector('.spann');
const tabsItems = document.querySelectorAll(".tabs__block");
const border = document.querySelectorAll(".spann")[0];

links.forEach(function(item) {
	item.addEventListener('click', function(){
		let btn = item;
		let tabId = btn.getAttribute("data-tab");
		let tab = document.getElementById(tabId);

		if( ! btn.classList.contains('active') ) {
			links.forEach(function(item) {
				item.classList.remove('active');
			});

			tabsItems.forEach(function(item){
				item.classList.remove('active');
			});

			btn.classList.add('active');
			tab.classList.add('active');

		}

		
	});


});





// Quiz отправка 

document.querySelector('.tabs__item:nth-child(1)').click();

const DATA = [
	{
		question: 'Вопрос 1',
		answers: [
			{
				id: '1',
				value: 'Ответ 1',
				corrent: true,
			},
			{
				id: '2',
				value: 'Ответ 2',
				corrent: false,
			},
			{
				id: '3',
				value: 'Ответ 3',
				corrent: true,
			},
		]

	},

	{
		question: 'Вопрос 2',
		answers: [
			{
				id: '4',
				value: 'Ответ 1',
				corrent: true,
			},
			{
				id: '5',
				value: 'Ответ 2',
				corrent: false,
			},
		]

	},

];

 const	quiz__app = document.getElementById ('quiz');
 const	questions = document.getElementById('questions');
//  const	quiz__indicator	= document.getElementByI('indicator');
 const	results = document.getElementById('results');
 const	btn_back = document.getElementById('btn-back');
 const	btn_next = document.getElementById('btn-next');


const renderQuestions = (index) => {
	const  renderAnswers = () => {
		return DATA[index].answers.map((answer) => {
			return `
			<div class="quiz__optin-wrapper">
				<input id="19 м³" class="quiz__option" type="checkbox">
				<label for="19 м³">19 м³</label>
				<input id="26 м³" class="quiz__option" type="checkbox">
				<label for="26 м³">26 м³</label>
				<input id="35 м³" class="quiz__option" type="checkbox">
				<label for="35 м³">35 м³</label>
				<input id="suggest_all_options" class="quiz__option" type="checkbox">
				<label for="suggest_all_options">Предложить все  варианты</label>
				${answer.value}
  			</div>
			`
		});
	} 
	renderQuestions.innerHTML = `
	$DATA[index].question}
	<div class="quiz__optin-wrapper">
		<input id="19 м³" class="quiz__option" type="checkbox">
		<label for="19 м³">19 м³</label>
		<input id="26 м³" class="quiz__option" type="checkbox">
		<label for="26 м³">26 м³</label>
		<input id="35 м³" class="quiz__option" type="checkbox">
		<label for="35 м³">35 м³</label>
		<input id="suggest_all_options" class="quiz__option" type="checkbox">
		<label for="suggest_all_options">Предложить все  варианты</label>
  	</div>
	`;
};
const renderResults = () => {
	
};
const renderIndicator = () => {
	
};

quiz.addEventListener('change', (event) => {

});

quiz.addEventListener('click', (event) => {
	if (event.target.classList.contains('button__quiz')) {
		console.log('Далее');
	}
	if (event.target.classList.contains('button__quiz-back')) {
		console.log('назад');
	}
});




// const gallery = document.querySelector("#reviews");
// const gallery_scroller = gallery.querySelector("#reviews__gallery");
// const gallery_item_size = gallery.querySelector(".reviews__card").clientWidth;

// gallery.querySelector(".reviews__slider-next").addEventListener("click", scrollToNextPage);
// gallery.querySelector(".reviews__slider-back").addEventListener("click", scrollToPrevPage);

// function scrollToNextPage() {
// 	gallery_scroller.scrollBy({
// 	  top: 0,
// 	  left: gallery_item_size,
// 	  behavior: "smooth"
// 	});
//   }

//   function scrollToPrevPage() {
// 	gallery_scroller.scrollBy({
// 	  top: 0,
// 	  left: -gallery_item_size,
// 	  behavior: "smooth"
// 	});
//   }


// Слайдер 

let offset = 0; // смещение от левого края
const sliderLine = document.querySelector('.reviews__cards');
document.querySelector('.reviews__slider-next').addEventListener('click', function () { 
	offset = offset + 1200; // offset += 256;
	if (offset > 3760) { 
	offset = 0;
} 
	sliderLine.style.left = -offset + 'px';
});

document.querySelector('.reviews__slider-back').addEventListener('click', function () {
	offset = offset - 1200; // offset += 256;
	if (offset < 0) {
	offset = 3760;
} 
	sliderLine.style.left = -offset + 'px';
});




let bias = 0; // смещение от левого края
const sliderWidth = document.querySelector('.swiper__wrapper');
document.querySelector('.slider__button-prev').addEventListener('click', function () { 
	bias = bias + 400; // offset += 256;
	if (bias > 2200) { 
	bias = 0;
} 
	sliderWidth.style.left = -bias + 'px';
});

document.querySelector('.slider__button-next').addEventListener('click', function () {
	bias = bias - 400; // offset += 256;
	if (bias < -1) {
	bias = 2000;
} 
	sliderWidth.style.left = -bias + 'px';
});



// ===================================

let slider = 0; // смещение от левого края
const modificationSlide = document.querySelector('.modification-slide__wrapper');
document.querySelector('.modification-slide__button-next').addEventListener('click', function () { 
	slider = slider + 345; // offset += 256;
	if (slider > 345) { 
	slider = -345;
} 
	modificationSlide.style.left = -slider + 'px';
});

document.querySelector('.modification-slide__button-prev').addEventListener('click', function () {
	slider = slider - 345; // offset += 256;
	if (slider < -345) {
	slider = 345;
} 
	modificationSlide.style.left = -slider + 'px';
});



const BurgerClick = document.querySelector('.connection__link--drop');
	
BurgerClick.addEventListener("click", function (e) {
		document.body.classList.toggle('_active');
})
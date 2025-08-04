const header = document.querySelector("header");

window.addEventListener ("scroll", function() {
	header.classList.toggle ("sticky", window.scrollY > 0);
});

let menu =  document.querySelector('#menu-icon');
let navbar =  document.querySelector('.navbar');

menu.onclick = () => {
	menu.classList.toggle('bx-x');
	navbar.classList.toggle('open');
};

window.onscroll = () => {
	menu.classList.remove('bx-x');
	navbar.classList.remove('open');
};

// FAQ Accordion functionality
const faqItems = document.querySelectorAll('.faq-item');

faqItems.forEach(item => {
	const question = item.querySelector('.faq-question');
	
	question.addEventListener('click', () => {
		// Close all other FAQ items
		faqItems.forEach(otherItem => {
			if (otherItem !== item) {
				otherItem.classList.remove('active');
			}
		});
		
		// Toggle current FAQ item
		item.classList.toggle('active');
	});
});
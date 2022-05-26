const date2 = document.querySelector('.currentdate');
const options = {
	weekday: 'long',
	day: 'numeric',
	month: 'long',
	year: 'numeric'
};
date2.textContent = new Date().toLocaleDateString('en-UK', options);

const date1 = document.querySelector('.copyrightdate');
date1.textContent = "2022";
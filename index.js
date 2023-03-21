var slider_img = document.querySelector('.mainImage');
var images = [
	'ClassSize.jpg', 
	'Header.jpeg', 
	'KidsClass.jpg', 
	'KidsClass2.jpg', 
	'MMA.jpg', 
	'MMA2.jpg',
	'Class1.jpg',
	'Class2.jpg',
	'Class3.jpg',
	'Class4.jpg',
	'Class5.jpg',
	'Class6.jpg'
];
var i = 0; // Current Image Index


function prev() {
	if (i <= 0) i = images.length;
	i--;
	return  setImg();
}

function next() {
	if (i >= images.length-1) i = -1;
	i++;
	return setImg();
}

function setImg() {
	return slider_img.setAttribute('src', 'Images/imagesArray/' + images[i]);
}
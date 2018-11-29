import './main.sass';
import './BM8H1420-1500x1000_c.jpg';
import './chevelle-960a.jpg';
import './classic1_d.jpg';
import './classic_car_service_19_2_0.jpg';
// import './img/worker_1.jpg';
import './workers/worker_test.jpg'
import './logo/Brabus-logo.png'
import './logo/AMG.png'
import './logo/Hamann.png'
import './logo/motul.png'
import './logo/loder.png'
import './logo/ac-schnitzer-logo.png'
import './logo/gemballa-logo.png'
import './studios_photo/servis-mobil-honda-solo-baru.jpg'
// ac-schnitzer-logo.png
// loder.png
// motul.png
window.onload = function() {

	const imageCng = document.querySelectorAll(".banner>div");
	const mask_1 = document.querySelector(".mask_1");
	const paralax_1 = document.querySelector(".paralax_1 ");
	const mask_2 = document.querySelector(".mask_2");
	const paralax_2 = document.querySelector(".paralax_2");
	const mask_3 = document.querySelector(".mask_3");
	const paralax_3 = document.querySelector(".paralax_3");
	const item = document.querySelectorAll(".item");
	const el = document.querySelectorAll(".el");
	const nav = document.querySelector("nav");
	const all_btn = document.querySelector(".all_btn");
	const painting_btn = document.querySelector(".painting_btn");
	const engine_btn = document.querySelector(".engine_btn");
	const suspension_btn = document.querySelector(".suspension_btn");
	const project_menu = document.querySelector(".project_menu");
	const project_content = document.querySelector(".project_content");
	const navv = document.querySelector(".usual");
	const header = document.querySelector("#header");
	const photo = document.querySelector(".studios_photo");
	const mask = document.querySelector(".mask");
	const show_photo_wrap = document.querySelector(".show_photo_wrap");
// 	clientHeight
// :
// 100
	// window.onscroll = function () {
	// 	const pos21 = navv.getBoundingClientRect().top
	// 	if(pos21 == 0){
	// 		alert(1)
	// 	}
	// }

	var i = 0;
	//for( let i = 0; i < imageCng.length; i++ ) {
		setInterval( () => {
			imageCng[i].className = '';
			i = i + 1;

			if(i == imageCng.length) {
				i = 0; 
			}
			imageCng[i].className = 'showed'
	}, 8000 );
		function go() {
			alert(1)
		};
		mask_1.addEventListener("click", go);
		window.onscroll = function() {
		let pos_1=mask_1.getBoundingClientRect()
  	if(pos_1.top < document.documentElement.clientHeight){
  		let res_1 = (document.documentElement.clientHeight-pos_1.top)*0.5
  		// let res1=res
  		paralax_1.style.transform = `translateY(${res_1}px)`
  	}
  	let pos_2=mask_2.getBoundingClientRect()
  	if(pos_2.top < document.documentElement.clientHeight){
  		let res_2 = (document.documentElement.clientHeight-pos_2.top)*0.5
  		// let res1=res
  		paralax_2.style.transform = `translateY(${res_2}px)`
  	}
  	let pos_3=mask_3.getBoundingClientRect()
  	if(pos_3.top < document.documentElement.clientHeight){
  		let res_3 = (document.documentElement.clientHeight-pos_3.top)*0.5
  		// let res1=res
  		paralax_3.style.transform = `translateY(${res_3}px)`
  	}
  	let pos21 = header.getBoundingClientRect()
		pos21.bottom - navv.clientHeight < 0 ? navv.classList.add("attached") : navv.classList.remove("attached");
			// navv.classList.add("attached");
			// alert(navv.style.height)
	
	for( let i = 0; i < item.length; i++ ) {
		item[i].addEventListener("mouseover", function() {
			this.children[1].style.marginTop = "0px";

			// alert(1);
		});
		item[i].addEventListener("mouseleave", function() {
			this.children[1].style.marginTop = "";
			});
	};

//to animate videos
for(let i = 0; i < project_menu.children.length; i++ ) {
	project_menu.children[i].addEventListener("click", function() {
		// for(let i = 0; i < project_content.children.length; i++ ){
		// 	project_content.children[i].classList.remove("invisible");
		// }
		// if(project_menu.children[i].className != "all_btn") {
		// 	var a = 1;
		// 	project_content.children.filter = [].filter;
		// 	const	newAar = project_content.children.filter(elem => {
		// 		return (elem.className.substring(0, elem.className.indexOf(" ")) != this.className.substring(0, this.className.indexOf("_"))) ? elem.className[0] : null
 	// 			var a = 1;
		// 		var b = 2;
		// });
		// 	for(let i = 0; i < newAar.length; i++ ){
		// 		newAar[i].classList.add("invisible");
		// 	}
		// }
	});
}

}
function show() {
	show_photo_wrap.style.display = "flex"
	mask.style.display = "block"
}
photo.addEventListener("click", show)
function close() {
	show_photo_wrap.style.display = "none"
	mask.style.display = "none"
}
mask.addEventListener("click", close)
}



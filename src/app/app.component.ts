import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'carousel';
  // let slideIndex = 1;
  // showSlides(slideIndex);
  
  // // Next/previous controls
  
  // plusSlides = (n) => {
  //   return showSlides(slideIndex += n);
  // }
  
  // // Thumbnail image controls
  
  // currentSlide = (n) => {
  //   showSlides(slideIndex = n);
  // } 
  

  // showSlides = (n) => {
  //   let i;
  //   let slides = document.getElementsByClassName("mySlides");
  //   let dots = document.getElementsByClassName("dot");
  //   if (n > slides.length) {slideIndex = 1} 
  //   if (n < 1) {slideIndex = slides.length}
  //   for (i = 0; i < slides.length; i++) {
  //     slides[i].style.display = "none"; 
  //   }
  //   for (i = 0; i < dots.length; i++) {
  //     dots[i].className = dots[i].className.replace(" active", "");
  //   }
  //   slides[slideIndex-1].style.display = "block"; 
  //   dots[slideIndex-1].className += " active"; 
  // }

  
  

}

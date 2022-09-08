import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'carousel';
  itemToShow:any = 1

  ngOnInit() {

   

   

  }

  next(){

    if(this.itemToShow == 3){

        this.itemToShow = 1

    }

    else{

        this.itemToShow+=1

    }

  }

  previous(){

    if(this.itemToShow == 1){

        this.itemToShow = 3

    }

    else{

        this.itemToShow-=1

    }

  }

  // slideIndex : any = 1;
  // this.showSlides(this.slideIndex);
  
  // // Next/previous controls
  
  // plusSlides (n : any)  {
  //   return this.showSlides(this.slideIndex += n);
  // }
  
  // // Thumbnail image controls
  
  // currentSlide (n: any)  {
  //   this.showSlides(slideIndex = n);
  // } 
  

  // showSlides (n:any) {
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

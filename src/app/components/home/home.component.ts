import { Component, HostListener, OnInit, ViewChild } from '@angular/core';
import { faChevronLeft, faChevronRight, faMapMarkerAlt, faCalendarAlt, faPhone, faEnvelope, faPaperPlane } from '@fortawesome/free-solid-svg-icons'

import { ProduitsService } from '../../services/produits.service';
import { Produit } from '../../models/produit';
import { Temoignage } from '../../models/temoignage';

import { GoogleMap, MapInfoWindow, MapMarker } from "@angular/google-maps";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  @ViewChild(GoogleMap, { static: false }) map: GoogleMap | undefined;
  @ViewChild(MapInfoWindow, { static: false })
  info!: MapInfoWindow;




  faChevronLeft = faChevronLeft;
  faChevronRight = faChevronRight;
  faMapMarkerAlt = faMapMarkerAlt;
  faCalendarAlt = faCalendarAlt;
  faPhone = faPhone ;
  faEnvelope = faEnvelope;
  faPaperPlane = faPaperPlane;

    //variables for home header slide
    counter:number = 1;
    timer: any;

    poissonsArray: Produit[] = [];
    dessertsArray: Produit[] = [];
    testimoniesArray: Temoignage[] = [];

  //Map options
  options: google.maps.MapOptions = {
    zoomControl: true,
    scrollwheel: false,
    disableDoubleClickZoom: true,
    mapTypeId: "hybrid"
  };

  //map centré sur
  center: google.maps.LatLngLiteral = {lat:48.121950, lng:-1.662520 };
  
  marker =
    {
    position: {
      lat:48.121950, lng:-1.662520
    },
    info: "CASABREIZH",
    options: {
      animation: google.maps.Animation.DROP
    }
  } ;

  infoContent = "";


  constructor( private produitService: ProduitsService ) { }

  ngOnInit(): void {
    this.slideFunction(this.counter);
    this.getPoissonsArray();
    this.getDessertArray();
    this.getTestimonies();
  }

  @HostListener('window:scroll', ['$event'])

  onWindowScroll() {
      let header = <HTMLElement>document.querySelector('header');
      if (window.pageYOffset > header.clientHeight) {
        header.classList.add('navbar-background-on-scroll');
      } else {
        header.classList.remove('navbar-background-on-scroll');
      }
    }



  slideFunction(slideNumber: number): void{
    var mySlides = <NodeListOf<HTMLElement>>document.querySelectorAll(".mySlide");
    var myDots = <NodeListOf<HTMLElement>>document.querySelectorAll(".dot");

    mySlides.forEach(element => {

      element.style.display = "none";
      
    });

    myDots.forEach(element =>{
      element.classList.remove("active-dot");
    })

    if(slideNumber > mySlides.length){
      this.counter = 1;
    }

    if(slideNumber < 1){
      this.counter = mySlides.length;
    }

    mySlides[this.counter - 1].style.display ="block";

    myDots[this.counter - 1].classList.add("active-dot");


  }

  //chage slide to the next slide after 8 secondes 
  autoSlide() {
    this.counter += 1;
    //console.log("auto work");
    //this.slideFunction(this.counter);
  }

   //Show the next or prev slide when click on plus or minus sign arrows
   clickOnArrow(num: number): any{
    this.counter += num;
    this.slideFunction(this.counter);
    this.resetTimer();
  }

  //Show corresponding clicked dot 
  currentSlide(slideNumber: number):any{
    this.counter = slideNumber;

    this.slideFunction(this.counter);
    this.resetTimer();

  }

  //reset the timer to 0 and relaunch the autoSlide funtion
  resetTimer():void{
    clearInterval(this.timer);
    this.timer = setInterval(this.autoSlide,8000);
  }


  setActiveClass(linkNumber: number){
    var myLinks = <NodeListOf<HTMLElement>>document.querySelectorAll("li a");

    myLinks.forEach(element =>{
      element.classList.remove("active-link");
    })

    myLinks[linkNumber - 1].classList.add("active-link");
  }


  chooseTab(tabNumber: number){
    var myTabMenu = <NodeListOf<HTMLElement>>document.querySelectorAll(".tab-menu");
    var myTabpages = <NodeListOf<HTMLElement>>document.querySelectorAll(".tab-page");

    myTabMenu.forEach(element =>{
      element.classList.remove("active-tab-menu");
    })

    myTabpages.forEach(element =>{
      element.classList.remove("active-tab-page");
    })

    myTabMenu[tabNumber - 1].classList.add("active-tab-menu");
    myTabpages[tabNumber - 1].classList.add("active-tab-page");

  }


  //Getting dessert arrays
  getPoissonsArray(){
    this.poissonsArray = this.produitService.getPlatsPoissons();
  }


  //Getting dessert arrays
  getDessertArray(){
    this.dessertsArray = this.produitService.getDesserts();
  }


  // Handling testimony arrow click

  testimonyClickPrev(){
    var testimonyCarousselContainer = <HTMLElement>document.querySelector(".testimony-caroussel-container");
    var allTestimonyCarousselElements = <NodeListOf<HTMLElement>>document.querySelectorAll(".testimony-element");
    testimonyCarousselContainer.prepend(allTestimonyCarousselElements[allTestimonyCarousselElements.length-1]);
   
  }

  testimonyClickNext(){
    var testimonyCarousselContainer = <HTMLElement>document.querySelector(".testimony-caroussel-container");
    var allTestimonyCarousselElements = <NodeListOf<HTMLElement>>document.querySelectorAll(".testimony-element");
    testimonyCarousselContainer.append(allTestimonyCarousselElements[0]);
   
  }

  //Getting testimonies arrays
  getTestimonies(){
    this.testimoniesArray =  this.produitService.getTestimonies();
  }





  //Google Map function
  openInfo(marker: MapMarker, info: string) {
    this.infoContent = info;
     this.info.open(marker);
  }
}

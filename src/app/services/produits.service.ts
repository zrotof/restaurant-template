import { Injectable } from '@angular/core';

import { Produit } from '../models/produit';
import { Temoignage } from '../models/temoignage';

@Injectable({
  providedIn: 'root'
})
export class ProduitsService {

  //Array of fishes
  poissons: Produit[] | undefined;

  //Array of meet
  viandes: Produit[] | undefined;

  //Array of drinks with alcohol
  boissonsAlcolisees: Produit[] | undefined;

  //Array of drinks without alcohol
  boissonsNonAlcolisees: Produit[] | undefined;

  //Array of deserts
  desserts: Produit[] | undefined;

  //Array of testimonies
  testimonies: Temoignage[] = [];

  constructor() { }


  //return array of food with fish
  getPlatsPoissons(){
    return this.poissons =[
       {
         "nomProduit": "Bar grillé sauce Yassa",
         "imageProduit": "../../../assets/img/poissons/casa-poisson-bar-yassa.jpeg",
         "prixProduit": "18,00 €",
         "descriptionProduit": "tilapia mariné au citron vert, ail, moutarde et oignons",
         "etatProduit": true
       },
       {
         "nomProduit": "Mafé au poisson",
         "imageProduit": "../../../assets/img/poissons/casa-poisson-mafe.jpeg",
         "prixProduit": "16,00 €",
         "descriptionProduit": "Tilapia sauce d'arachide",
         "etatProduit": true
       },
       {
        "nomProduit": "Bar grillé sauce Yassa",
        "imageProduit": "../../../assets/img/poissons/casa-poisson-bar-yassa.jpeg",
        "prixProduit": "18,00 €",
        "descriptionProduit": "tilapia mariné au citron vert, ail, moutarde et oignons",
        "etatProduit": false
      },
      {
        "nomProduit": "Mafé au poisson",
        "imageProduit": "../../../assets/img/poissons/casa-poisson-mafe.jpeg",
        "prixProduit": "18,50 €",
        "descriptionProduit": "Tilapia sauce d'arachide",
        "etatProduit": false
      },
      {
        "nomProduit": "Bar grillé sauce Yassa",
        "imageProduit": "../../../assets/img/poissons/casa-poisson-bar-yassa.jpeg",
        "prixProduit": "18,00 €",
        "descriptionProduit": "tilapia mariné au citron vert, ail, moutarde et oignons",
        "etatProduit": true
      },
      {
        "nomProduit": "Mafé au poisson",
        "imageProduit": "../../../assets/img/poissons/casa-poisson-mafe.jpeg",
        "prixProduit": "16,00 €",
        "descriptionProduit": "Tilapia sauce d'arachide",
        "etatProduit": false
      }
     ];
   }












   //return array of deserts
  getDesserts(){
   return this.desserts =[
      {
        "nomProduit": "Crème brûlée à la vanille bourbon",
        "imageProduit": "../../../assets/img/desserts/casa-dessert-creme-brulee.jpeg",
        "prixProduit": "05,00 €",
        "descriptionProduit": "qsdfghjk oiuytrez sdfg fghjkl ezrtyuijosdfg fghjkl ezrtyuijo",
        "etatProduit": false
      },
      {
        "nomProduit": "Salade-de-fruits",
        "imageProduit": "../../../assets/img/desserts/casa-dessert-salade-de-fruits.jpeg",
        "prixProduit": "04,50 €",
        "descriptionProduit": "",
        "etatProduit": false
      },
      {
        "nomProduit": "Riz au lait caramel",
        "imageProduit": "../../../assets/img/desserts/casa-dessert-riz-au-lait.jpg",
        "prixProduit": "04,50 €",
        "descriptionProduit": "",
        "etatProduit": true
      },
      {
        "nomProduit": "Moelleux au chocolat caramel",
        "imageProduit": "../../../assets/img/desserts/casa-dessert-moelleux-chocolat-caramel.jpeg",
        "prixProduit": "05,20 €",
        "descriptionProduit": "",
        "etatProduit": false
      },
      {
        "nomProduit": "Café gourmand",
        "imageProduit": "../../../assets/img/desserts/casa-dessert-cafe-gourmand.jpeg",
        "prixProduit": "05,00 €",
        "descriptionProduit": "",
        "etatProduit": true
      }
    ];
  }



  //return array of deserts
  getTestimonies(){
    return this.testimonies =[
       {
         "nom": "Albertine",
        "message": "Cuisine excellente. C'est toujours un régal à chaque fois" 
        },
       {
        "nom": "Serge",
        "message": "Je n'ai jamais autant mangé de la vie. Je recommande très vivement le restaurant Casabreizh"
       },
       {
        "nom": "Thomas",
        "message": "Nourriture délicieuse et bonne décoration du salon. Mais bon, petit bémol, je n'aime pas trop le cadre, c'est trop petit. Nourriture délicieuse et bonne décoration du salon. Mais bon, petit bémol, je n'aime pas trop le cadre, c'est trop petit."
       },
       {
        "nom": "Steve Bogler",
        "message": "Très bon !!"
       },
       {
        "nom": "Tento",
        "message": "Accueil chaleureux, le chef est accueillant, nourriture délicieuse, franchement rien à dire"
       },
       {
        "nom": "Vichenzo",
        "message": "J'y suis allé c'étais une première pour moi mais j'ai adoré"
       },
       {
        "nom": "Silvia",
        "message": "La nourriture j'adore et Casabreizh aussi"
       },
       {
        "nom": "Jean Louis",
        "message": "J'ai mangé et j'en ai pris à emporter. Vous vous doutez bien pourquoi"
       },
       {
        "nom": "Niquaise",
        "message": "On a réservé pour l'anniversaire de ma fille et tout était super. Merci encore à Casabreizh"
       }
     ];
   }



}

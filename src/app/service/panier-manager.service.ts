import { Injectable } from '@angular/core';
import { BoxsService } from './boxs.service';
import { Box } from '../modele/Box';
import { Ligne } from '../modele/Liste';

@Injectable({
  providedIn: 'root'
})
export class PanierManagerService {
  panier : Array<Ligne>
  historiqueCommandes: any = [];
  constructor(){
    this.panier = JSON.parse(localStorage.getItem("lesBoxes")?? "[]")
    this.historiqueCommandes= JSON.parse(localStorage.getItem("historique") ?? "[]")
  }

  getAllBoxes(){
    return this.panier
  }
  setPanierBoxes(boxes: Array<Ligne>){
    let panier = boxes

    localStorage.setItem("lesBoxes", JSON.stringify(panier))
  }
  addPanier(uneBox:Box,qte:number){
   
    for (const uneLigne of this.panier){
      if(uneLigne.box.id == uneBox.id){
        uneLigne.qte++
        console.log(this.panier)
        localStorage.setItem("lesBoxes", JSON.stringify(this.panier))
        return
      }
    }
    let nouvelleLigne= new Ligne(uneBox,qte)
    this.panier.push(nouvelleLigne)
    console.log(this.panier)
    localStorage.setItem("lesBoxes", JSON.stringify(this.panier))
  }
  totalPanier(){
    let total =0
    for (const ligne of this.panier ){
        total+= ligne.box.prix * ligne.qte
    }
    return total
  }
  minusPanier(uneBox: Box, qte: number) {
    // Créer une instance de Ligne pour la box donnée avec la quantité spécifiée
    let ligne = new Ligne(uneBox, qte);
  
    // Parcourir le panier pour trouver la ligne correspondante
    for (let i = 0; i < this.panier.length; i++) {
      let box = this.panier[i];
      // Comparer les identifiants de box pour trouver la correspondance
      if (box.box.id === uneBox.id) {
        // Réduire la quantité de la ligne correspondante
        box.qte -= qte;
  
        // Vérifier si la quantité devient zéro ou négative
        if (box.qte <= 0) {
          // Supprimer la ligne du panier si la quantité est nulle ou négative
          this.panier.splice(i, 1);
        }
        // Mettre à jour le panier dans le stockage local
        localStorage.setItem("lesBoxes", JSON.stringify(this.panier));
        return; // Sortir de la boucle après avoir trouvé et traité la ligne
      }
    }
  }
  totalboxs() {
    // Créer un ensemble pour stocker les identifiants uniques des boîtes
    let boxIds = new Set<number>();

    // Parcourir le panier pour ajouter les identifiants uniques des boîtes à l'ensemble
    for (const ligne of this.panier) {
        boxIds.add(ligne.box.id);
    }

    // Retourner la taille de l'ensemble, c'est-à-dire le nombre d'éléments distincts
    return boxIds.size;
}
  clearPanier(){
    localStorage.setItem("lesBoxes","[]")
      this.panier=[]
  }

  getNumCom(){
    return Math.floor(Math.random()*(99999999 - 11111111 +1)) + 11111111
  }
  ajouterHistorique(panier: Array<Ligne>) {
    this.historiqueCommandes.push(panier);
    
    localStorage.setItem('historique', JSON.stringify(this.historiqueCommandes));
    console.log(this.historiqueCommandes);
    
  }
  getHistorique(){
    return this.historiqueCommandes
  }
}

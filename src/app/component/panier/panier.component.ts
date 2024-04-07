import { Component } from '@angular/core';
import { Ligne } from '../../modele/Liste';
import { PanierManagerService } from '../../service/panier-manager.service';
import { Box } from '../../modele/Box';

@Component({
  selector: 'app-panier',
  templateUrl: './panier.component.html',
  styleUrl: './panier.component.css'
})
export class PanierComponent {
  monPanier: Array<Ligne>; // Déclaration de la variable pour stocker les éléments du panier

  constructor(private panierManager: PanierManagerService) {
    // Constructeur de la classe, initialise le panier en récupérant les données du service PanierManagerService
    this.monPanier = this.panierManager.getAllBoxes(); // Initialise monPanier avec les éléments récupérés du service
  }

  ajoutLigne(box: Box) {
    // Méthode pour ajouter une ligne au panier
    return this.panierManager.addPanier(box, 1); // Appelle la méthode addPanier du service pour ajouter la boîte spécifiée avec une quantité de 1
  }

  total() {
    // Méthode pour calculer le total du panier
    return this.panierManager.totalPanier(); // Appelle la méthode totalPanier du service pour obtenir le total du panier
  }

  reduireQuantite(box: Box) {
    // Méthode pour réduire la quantité d'une boîte dans le panier
    return this.panierManager.minusPanier(box, 1); // Appelle la méthode minusPanier du service pour réduire la quantité de la boîte spécifiée de 1
  }

  clearPanier() {
    // Méthode pour vider le panier
    this.panierManager.clearPanier(); // Appelle la méthode clearPanier du service pour vider le panier
    this.monPanier = []; // Réinitialise monPanier à un tableau vide
  }

  ajouterhistorique() {
    // Méthode pour ajouter le contenu actuel du panier à l'historique et réinitialiser le panier
    this.panierManager.ajouterHistorique(this.monPanier); // Appelle la méthode ajouterHistorique du service pour ajouter le contenu actuel du panier à l'historique
    localStorage.setItem("panier", "[]"); // Réinitialise le panier dans le stockage local en le définissant comme un tableau vide
    this.monPanier = []; // Réinitialise monPanier à un tableau vide
  }
}


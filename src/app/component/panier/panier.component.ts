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
  monPanier: Array<Ligne>
  
  constructor(private panierManager: PanierManagerService){
    this.monPanier=this.panierManager.getAllBoxes()
  }
  ajoutLigne(box:Box){
    return this.panierManager.addPanier(box,1)
  }
  total(){
    return this.panierManager.totalPanier()
  }
  reduireQuantite(box:Box){
    return this.panierManager.minusPanier(box,1)
  }
  clearPanier(){
    this.panierManager.clearPanier()
    this.monPanier = []
  }
  ajouterhistorique() {
   
    this.panierManager.ajouterHistorique(this.monPanier)
    localStorage.setItem("panier","[]")
    this.monPanier = [];
  }
}

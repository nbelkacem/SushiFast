import { Component } from '@angular/core';
import { PanierManagerService } from '../../service/panier-manager.service';
import { Ligne } from '../../modele/Liste';
@Component({
  selector: 'app-historique',
  templateUrl: './historique.component.html',
  styleUrl: './historique.component.css'
})
export class HistoriqueComponent {
  historiqueCommandes: any 

  constructor(private panierManager: PanierManagerService) { }

  ngOnInit(): void {
    
    this.historiqueCommandes = this.panierManager.getHistorique()
  }
  PrixTotalCommande(commande: Array<Ligne>): number {
    let prixTotal = 0;
    for (let item of commande) {
      prixTotal += item.box.prix * item.qte;
    }
    return prixTotal;
  }
  NumCommande(){
    return this.panierManager.getNumCom()
  }
  afficherDetails(commande: any) {
    alert('détails de la commande:')
  }
}

import { Component } from '@angular/core';
import { Box } from '../../modele/Box';
import { BoxsService } from '../../service/boxs.service';
import { PanierManagerService } from '../../service/panier-manager.service';

@Component({
  selector: 'app-presentationsboxs',
  templateUrl: './presentationsboxs.component.html',
  styleUrl: './presentationsboxs.component.css'
})

export class PresentationsboxsComponent {
  boxes: Array<Box> = []
  constructor(private boxs: BoxsService, private panierManager:PanierManagerService) {
    this.boxs.getBoxs().subscribe((resultat) => {
      console.log(resultat)

      for (const uneBox of resultat) {
        let box1 = Box.transforme(uneBox)
        this.boxes.push(box1)
      }
    })
  }
  
  ajoutLigne(box:Box){
    return this.panierManager.addPanier(box,1)
  }
  reduireQuantite(box:Box){
    return this.panierManager.minusPanier(box,1)
  }

}


import { Component } from '@angular/core';
import { Box } from '../../modele/Box';
import { PanierManagerService } from '../../service/panier-manager.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'] // Correction ici : styleUrls au lieu de styleUrl
})
export class HeaderComponent {
  constructor(private panierManagerService: PanierManagerService) {} // Injection du service dans le constructeur

  nombreTotalBoxs(): number {
    return this.panierManagerService.totalboxs(); // Appel de la méthode totalboxs() du service
  }
}

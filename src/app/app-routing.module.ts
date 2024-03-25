import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './component/header/header.component';
import { FooterComponent } from './component/footer/footer.component';
import { PresentationsboxsComponent } from './component/presentationsboxs/presentationsboxs.component';
import { RgpdComponent } from './component/rgpd/rgpd.component';
import { DetailBoxComponent } from './component/detail-box/detail-box.component';
import { PanierComponent } from './component/panier/panier.component';
import { HistoriqueComponent } from './component/historique/historique.component';
const routes: Routes = [
{path: '', component: PresentationsboxsComponent},
{path: 'rgpd', component:RgpdComponent },
{path: 'detail-box/:id', component:DetailBoxComponent},
{path: 'panier', component:PanierComponent},
{path: 'historique', component: HistoriqueComponent}

];
@NgModule({
imports: [RouterModule.forRoot(routes)],
exports: [RouterModule]
})
export class AppRoutingModule { }

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BoxsService } from '../../service/boxs.service';
import { Box } from '../../modele/Box';

@Component({
  selector: 'app-detail-box',
  templateUrl: './detail-box.component.html',
  styleUrl: './detail-box.component.css'
})
export class DetailBoxComponent implements OnInit{
  idBox: any
  boxData: any
  listBoxes: any = []

  constructor(private route: ActivatedRoute, private boxsService: BoxsService){}

  ngOnInit(): void {
    this.route.params.subscribe(params =>{
      this.idBox=params['id'];
    });
    this.boxsService.getBoxs().subscribe((res:any)=> {
      this.listBoxes = res
      this.getData()
    })
  }
  getData(){
    this.boxData= this.listBoxes.find((uneBox:Box)=>uneBox.id==this.idBox)
  }
}


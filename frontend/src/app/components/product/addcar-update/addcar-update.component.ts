import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Buy } from '../buy.model';
import { BuyService} from '../buy.service';

@Component({
  selector: 'app-addcar-update',
  templateUrl: './addcar-update.component.html',
  styleUrls: ['./addcar-update.component.css']
})
export class AddcarUpdateComponent implements OnInit {

  buy! : Buy
  constructor(
    private buyService:BuyService, 
    private router: Router, 
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id')
    this.buyService.readById(id!).subscribe(buy =>{
      this.buy = buy;
    });
  }

  updateQtd():void{
    this.buyService.update(this.buy).subscribe(() =>{
      this.buyService.showMessage('Quantidade atualizada com sucesso!')
      this.router.navigate(["/addcar/read"])
    })
  }

  cancel(): void {
    this.router.navigate(['/addcar/read'])
  }

}

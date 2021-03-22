import { Component, OnInit } from '@angular/core';
import { BuyService } from './../buy.service';
import { Buy } from './../buy.model';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-addcar-delete',
  templateUrl: './addcar-delete.component.html',
  styleUrls: ['./addcar-delete.component.css']
})
export class AddcarDeleteComponent implements OnInit {
  buy!: Buy

  constructor(private buyService: BuyService,private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    const id=this.route.snapshot.paramMap.get('id');
    this.buyService.readById(id!).subscribe(buy =>{
      this.buy = buy
    })
  }

  delete(): void{
    this.buyService.delete(this.buy.id!).subscribe(() =>{
      this.buyService.showMessage('Produto removido com sucesso!')
      this.router.navigate(['/addcar/read'])
    })
  }

  cancel(): void {
    this.router.navigate(['/addcar/read'])
  }

}

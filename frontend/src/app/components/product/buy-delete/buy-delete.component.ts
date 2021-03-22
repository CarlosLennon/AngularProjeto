import { Component, OnInit } from '@angular/core';
import { ClienteService } from './../cliente.service';
import { Cliente } from './../cliente.model';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-buy-delete',
  templateUrl: './buy-delete.component.html',
  styleUrls: ['./buy-delete.component.css']
})
export class BuyDeleteComponent implements OnInit {
  cliente!: Cliente

  constructor(private clienteService: ClienteService,private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    const id=this.route.snapshot.paramMap.get('id');
    this.clienteService.readById(id!).subscribe(cliente=>{
      this.cliente = cliente
    })
  }

  delete(): void{
    this.clienteService.delete(this.cliente.id!).subscribe(() =>{
      this.clienteService.showMessage('Cliente removido com sucesso!')
      this.router.navigate(['/buy/read'])
    })
  }

  cancel(): void {
    this.router.navigate(['/buy/read'])
  }
}

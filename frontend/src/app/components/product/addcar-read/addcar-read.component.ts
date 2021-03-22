import { Component, OnInit } from '@angular/core';
import { BuyService } from './../buy.service';
import { Buy } from './../buy.model';
import { ClienteService } from './../cliente.service';
import { Cliente } from './../cliente.model';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-addcar-read',
  templateUrl: './addcar-read.component.html',
  styleUrls: ['./addcar-read.component.css']
})

export class AddcarReadComponent implements OnInit {
  cliente: Cliente = {
    userName: '',
    cpf: 0
  }
  buy!: Buy[]
  displayedColumns = ['id', 'name', 'price', 'qtd', 'action']

  constructor(private buyService: BuyService, private clienteService: ClienteService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.buyService.readBuy().subscribe(buy => {
      this.buy = buy
    })
  }

  addCliente(): void {


    this.clienteService.createCliente(this.cliente).subscribe(() => {
      this.clienteService.showMessage('Compra finalizada com sucesso!')
      this.router.navigate(['/addcar/read'])

    })

  }

}

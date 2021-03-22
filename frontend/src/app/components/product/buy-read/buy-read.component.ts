import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ClienteService } from './../cliente.service';
import { Cliente } from './../cliente.model';


@Component({
  selector: 'app-buy-read',
  templateUrl: './buy-read.component.html',
  styleUrls: ['./buy-read.component.css']
})
export class BuyReadComponent implements OnInit {
  term!: string;
  cliente!: Cliente[]
  displayedColumns = ['id', 'userName', 'cpf', 'action']
  constructor(private clienteService: ClienteService,
              private router: Router, private route: ActivatedRoute, 
              ) { }

  ngOnInit(): void {
    this.clienteService.read().subscribe(cliente => {
      this.cliente = cliente
    })
  }
  

}

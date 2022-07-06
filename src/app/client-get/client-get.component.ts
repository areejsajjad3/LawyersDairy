import { Component, OnInit } from '@angular/core';
import { ClientService } from '../client.service';
import  Client from '../Cl'


@Component({
  selector: 'app-client-get',
  templateUrl: './client-get.component.html',
  styleUrls: ['./client-get.component.css']
})
export class ClientGetComponent implements OnInit {
  clients: Client[];
  constructor(private ms: ClientService) { }
  deleteClient(id, index)
  {
    this.ms.deleteClient(id).subscribe(res =>
    {
      this.clients.splice(index, 1);
    });
  
  }
  
  ngOnInit(): void {
    this.ms.getClients().subscribe((data: Client[]) => {
      this.clients = data;
    });
  }

}

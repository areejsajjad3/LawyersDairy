import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ClientService {
  uri= 'http://localhost:4000/clients';
 

  constructor(private http: HttpClient ){}
  addClient(ClientName,  ClientBio, ClientAge,ClientAddress,  CaseTitle,  NextHearingDate,LastHearingDate,CourtName,JudgeName,JudgeRemarks,lr)
  {

  const obj= {
    ClientName,
    ClientBio,
    ClientAge,
    ClientAddress,
    
    CaseTitle,
    NextHearingDate,
    LastHearingDate,
    
    CourtName,
    JudgeName,
    JudgeRemarks,
    lr


  };
console.log(obj);
this.http
.post(`${this.uri}/add`, obj)
.subscribe((res) => console.log('Done'));
}

  getClients()
  {
    return this.http.get(`${this.uri}`);
    
  }
  editClient(id){
    return this.http.get(`${this.uri}/edit/${id}`);
  }
  updateClient(ClientName, ClientBio, ClientAge,ClientAddress,  CaseTitle,  LastHearingDate,NextHearingDate,CourtName,JudgeName,JudgeRemarks,lr,
    id){
    const obj= {
      ClientName, 
      ClientBio, 
      ClientAge,
      ClientAddress,
      
      CaseTitle,
      
      LastHearingDate,
      NextHearingDate,
      CourtName,
      JudgeName,
     JudgeRemarks,
     lr
    
    };
    this.http
    .post(`${this.uri}/update/${id}`, obj)
    .subscribe((res) => console.log('Done'));
  }

deleteClient(id) {
  return this.http.get(`${this.uri}/delete/${id}`);
}
}

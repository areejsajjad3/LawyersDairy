import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { Router } from '@angular/router';
import { ClientService} from '../client.service';
@Component({
  selector: 'app-client-add',
  templateUrl: './client-add.component.html',
  styleUrls: ['./client-add.component.css']
})
export class ClientAddComponent implements OnInit {
  angForm: FormGroup;
  constructor(private fb: FormBuilder, private ms: ClientService,
  private router: Router) {
    
    this.createForm();
   }
  createForm() {
    this.angForm = this.fb.group({
      ClientName:['', Validators.required],
      ClientBio:['', Validators.required],
      
      ClientAge:['', Validators.required],
      ClientAddress:['', Validators.required],
      
      CaseTitle:['', Validators.required],
      LastHearingDate:['', Validators.required],
      NextHearingDate:['', Validators.required],
      
      CourtName:['', Validators.required],
      JudgeName:['', Validators.required],
      JudgeRemarks:['', Validators.required],
       lr:['', Validators.required],
      
      
    });
  }
  addClient( ClientName,  ClientBio, ClientAge,ClientAddress, CaseTitle,  LastHearingDate, NextHearingDate, CourtName,JudgeName,JudgeRemarks,lr)
  {
    this.ms.addClient( ClientName,  ClientBio, ClientAge,ClientAddress, CaseTitle,  LastHearingDate, NextHearingDate, CourtName,JudgeName,JudgeRemarks,lr );
    this.router.navigate(['clients'])
  }
  ngOnInit(): void {
  }

}

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router} from '@angular/router';
  import { ClientService } from '../client.service';
   import { FormBuilder, FormGroup, Validators } from '@angular/forms' ;
    
@Component({
  selector: 'app-client-edit',
  templateUrl: './client-edit.component.html',
  styleUrls: ['./client-edit.component.css']
})
export class ClientEditComponent implements OnInit {

  angForm: FormGroup; 
     client: any = {}; 
   constructor(
     private route: ActivatedRoute, 
     private router: Router,
     private ms: ClientService, 
     private fb: FormBuilder )
      { 
        this.createForm(); 
      } 
      createForm() 
      { 
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
    updateClient(ClientName,  ClientBio, ClientAge,ClientAddress,  CaseTitle,  LastHearingDate,NextHearingDate,CourtName,JudgeName,JudgeRemarks,lr)
    {
      this.route.params.subscribe((params) =>
    {
      this.ms.updateClient(ClientName,  ClientBio, ClientAge,ClientAddress,  CaseTitle,  LastHearingDate,NextHearingDate,CourtName,JudgeName,JudgeRemarks,lr, params.id);
      this.router.navigate(['clients']);
    });
    }
ngOnInit(): void {
  this.route.params.subscribe((params) =>{
    this.ms.editClient(params[`id`]).subscribe((res) =>
  {
    this.client = res;
  });
  });
}
}
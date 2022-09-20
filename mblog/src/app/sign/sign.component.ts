import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign',
  templateUrl: './sign.component.html',
  styleUrls: ['./sign.component.scss']
})
export class SignComponent implements OnInit {

  public signupform!: FormGroup;

  constructor(private formBuilder : FormBuilder, private http: HttpClient, private router:Router) { }

  ngOnInit(): void {
    this.signupform = this.formBuilder.group({
      fullname:[''],
      email:[''],
      password:[''],
      mobile:['']
    })
  }
  signup(){
    this.http.post<any>("http://localhost:3000/signupUsers",this.signupform.value)
    .subscribe({
      next : ()=>{
        alert("Sign Up successful")
        this.signupform.reset();
        this.router.navigate(['login']);
      },
      error : ()=>{
        alert("something went wrong")
      }
    })
  }

}

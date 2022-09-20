import { Component, OnInit } from '@angular/core';
import { LoginservService } from 'src/app/service/loginserv.service';
@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.scss']
})
export class CommentsComponent implements OnInit {

  constructor(public serv : LoginservService) { }

  ngOnInit(): void {
  }
valu 
}

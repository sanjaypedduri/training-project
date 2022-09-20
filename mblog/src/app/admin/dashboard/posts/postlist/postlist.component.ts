import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { post } from './post.model';
import { PostsService } from './posts.service';

@Component({
  selector: 'app-postlist',
  templateUrl: './postlist.component.html',
  styleUrls: ['./postlist.component.scss']
})
export class PostlistComponent implements OnInit, OnDestroy {
  posts:post[]=[]
  private postSub: Subscription




  //posts=[
    //{title:'Angular 13 Tutorial', content:'This is Angular Project'},
    //{title:'Angular 14 Tutorial', content:'This is Angular 14 Project'},
    //{title:'Angular Project', content:'This is Angular Project'},
    //{title:'Mean Stack Project', content:'This is Mean Stack Project'},
  //]

  constructor(public ps:PostsService) { }

  ngOnInit(): void {
    this.posts=this.ps.getAll();
    this.postSub=this.ps.getUpdateListner().subscribe((posts:post[])=>{
      this.posts=posts;

    })
  }
 ngOnDestroy() {
  this.postSub.unsubscribe();
 }

 editPost(){
  
 }
 deletePost(){
  
 }
}

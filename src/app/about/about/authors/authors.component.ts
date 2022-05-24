import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-authors',
  templateUrl: './authors.component.html',
  styleUrls: ['./authors.component.css']
})
export class AuthorsComponent implements OnInit {
  public authorId = "";

  constructor(activateRoute: ActivatedRoute) {
    this.authorId = activateRoute.snapshot.params["id"];
   }

  ngOnInit(): void {
  }

}

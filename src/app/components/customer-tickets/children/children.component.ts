import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-children',
  templateUrl: './children.component.html',
  styleUrls: ['./children.component.css'],
})
export class ChildrenComponent {
  public promocode: string | undefined;

  constructor() {}

  ngOnInit() {}
}

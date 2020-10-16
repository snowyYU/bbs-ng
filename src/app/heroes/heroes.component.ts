import { Component, OnInit } from '@angular/core';

interface Hero {
  id: number;
  name: string;
}

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss']
})
export class HeroesComponent implements OnInit {
  hero: Hero = {id: 123, name: 'wi'};
  constructor() { }

  ngOnInit(): void {
  }

}

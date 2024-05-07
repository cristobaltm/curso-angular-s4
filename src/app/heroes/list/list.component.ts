import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {
  public heroNames: string[] = ['Spider-man','Iron-man','Hulk','She-Hulk','Thor'];
  public deletedHeroes?: string;

  removeLastHero(): void {
    this.deletedHeroes = this.heroNames.pop();
  }
}

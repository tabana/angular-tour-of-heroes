import { Component,OnInit } from '@angular/core';
import { Hero } from './hero';
import { HeroService } from './hero.service';
import { HeroDetailComponent } from './hero-detail.component';

@Component({
    selector: 'atoh-app',
    template: `
        <h2>My Heroes</h2>
        <ul class='heroes'>
            <li
                *ngFor='let hero of heroes'
                (click)='selectHero(hero)'
                [class.selected]='hero === selectedHero'>
                <span class='badge'>{{hero.id}}</span> {{hero.name}}
            </li>
        </ul>
        <hero-detail [hero]='selectedHero'></hero-detail>`,
    styleUrls: [ 'app/app.component.css' ],
    providers: [HeroService]
})
export class AppComponent implements OnInit {
    constructor(private heroService: HeroService) { };
    ngOnInit(): void {
        this.getHeroes();
    }
    title = 'Tour of Heroes';
    heroes: any;  
    selectedHero: Hero;
    async getHeroes(): Promise<void> {
        //let h = this.heroService.getHeroesRx();
        this.heroService.subscribe()
        this.loadingAnimationShow();
        this.heroes = await h;
        this.loadingAnimationHide();
    }
    selectHero(hero: Hero) {
        this.selectedHero = hero;
    }
    loadingAnimationShow() {

    }
    loadingAnimationHide() {

    }
}

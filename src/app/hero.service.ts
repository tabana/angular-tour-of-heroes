import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Hero } from './hero';
import { HEROES } from './heroes.mock';

@Injectable()
export class HeroService {
  getHeroes(): Promise<Hero[]> {
    return new Promise(resolve => resolve(HEROES););
  }
  getHeroesSlowly(): Promise<Hero[]> {
    return new Promise(resolve => setTimeout(() => resolve(this.getHeroes()), 3000););
  }
  getHeroesRx: Observable<Hero[]> {
    Observable.create(observer => observer.onNext(HEROES););
  }
}
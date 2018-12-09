import { Injectable } from '@angular/core';
import {Observable, of} from 'rxjs';

import {Hero} from './hero';
import {HEROES} from './mock-heroes';
import {MessageService} from './message.service';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor(private messageService: MessageService) {}

  getHeroes(): Observable<Hero[]> {
    console.log('get Heroes is called from hero service');
    this.messageService.add('HeroService: fetched heroes');
    return of(HEROES);
  }
}

import { Component, OnInit } from '@angular/core';
import { HeroesService, Heroe } from '../../services/heroes.service';
import { Router } from '@angular/router';

@Component({
    selector: 'app-heroes',
    templateUrl: './heroes.component.html',
    styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

    heroes: Heroe[] = [];

    constructor(private _heroeService: HeroesService,
                private router: Router) {
    }

    ngOnInit() {
        this.heroes = this._heroeService.getHeroes();
        console.log(this.heroes);
    }

    // Navegación a otra página enviando un parámetro o más con Router
    verHeroe(index: number) {
        this.router.navigate(['/heroe', index]);
    }
}

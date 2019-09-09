import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeroesService } from '../../services/heroes.service';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styles: []
})
export class HeroeComponent implements OnInit {

    heroe: any = {};

    constructor(private activatedRoute: ActivatedRoute,
        private _heroeService: HeroesService) { 

        // ActivatedRoute funciona igual que NavParams en ionic.
        // Permite capturar los parametros de una URL y también las QUERY
        this.activatedRoute.params.subscribe( params => {
            this.heroe = this._heroeService.getHeroeById(params['id']);
            console.log(this.heroe);
        });
    }

    ngOnInit() {

    }

}

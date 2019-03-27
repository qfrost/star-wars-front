import { Component, OnInit } from '@angular/core';
import { FilmsService } from '../core/services/films.service';
import { AppModels } from '../core/model/app.models';
import { AppStorageService } from '../core/services/app-storage.service';
import { PeopleService } from '../core/services/people.service';

@Component({
  selector: 'app-films',
  templateUrl: './films.component.html',
  styleUrls: ['./films.component.scss']
})
export class FilmsComponent implements OnInit {

  public films: AppModels.IFilms[];
  public people: AppModels.IPerson[];

  constructor(private _films: FilmsService, private _people: PeopleService, private _app_storage: AppStorageService) { }

  private _initFilmsData(): void {
    if (this._films.getFilms) {
      this.films = this._films.getFilms;
      this.people = this._people.getPeople;
    } else {
      this._films.setFilms = this._app_storage.getFilms;
      this.films = this._films.getFilms;
      this.people = this._people.getPeople;
    }
  }

  ngOnInit() {
    this._initFilmsData();
  }

}

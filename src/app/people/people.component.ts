import { Component, OnInit } from '@angular/core';
import { PeopleService } from '../core/services/people.service';
import { AppModels } from '../core/model/app.models';
import { AppStorageService } from '../core/services/app-storage.service';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-people',
  styleUrls: ['./people.component.scss'],
  templateUrl: './people.component.html'
})
export class PeopleComponent implements OnInit {

  public people: AppModels.IPerson[];
  public parent: FormControl;

  constructor(private _people: PeopleService, private _app_storage: AppStorageService) { }

  public addPerson(): void {
    this.people = [...this.people, { name: `item${this.people.length + 1}` }];

    this._people.setPeople = this.people;
  }

  public handleSelection(person: AppModels.IPerson): void {
    console.log(person);
  }

  private _initPeopleData(): void {
    if (this._people.getPeople) {
      this.people = this._people.getPeople;
      
    } else {
      this._people.setPeople = this._app_storage.getPeople;
      this.people = this._people.getPeople;
    }
  }

  ngOnInit() {
    this._initPeopleData();

    this.parent = new FormControl('');
  }

}


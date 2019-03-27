// import { Component, OnInit } from '@angular/core';
// import { HelperService } from '../core/services/helper.service';
// import { PeopleService } from '../core/services/people.service';
// import { AppModels } from '../core/model/app.models';

// @Component({
//   selector: 'app-people',
//   templateUrl: './people.component.html',
//   styleUrls: ['./people.component.scss']
// })
// export class PeopleComponent implements OnInit {

//   public people: AppModels.IPeopleResponseApi;

//   constructor(private _people: PeopleService) { }

//   private _initPeopleData(): void {
//     // if (!this._people.getPeopleStorage) {
      
//     //   this._people.getPeopleApi.subscribe((people: AppModels.IPeopleResponseApi) => {
//     //     this._people.setPeopleStorage = people;
//     //   });

//     //   this._people.getPeople.subscribe((people: AppModels.IPeopleResponseApi) => {
//     //     this.people = people;
//     //     console.log('Api upload:');
//     //     console.log(this.people);
//     //   });

//     // } else {
//     //   this.people = this._people.getPeopleStorage;
//     //   console.log('Not upload api:');
//     //   console.log(this.people);
//     // }
//   }

//   ngOnInit() {
//     this._initPeopleData();
//   }

// }

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


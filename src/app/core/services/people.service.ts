// import { Injectable } from '@angular/core';
// import { HttpClient } from '@angular/common/http';
// import { AppStorageService } from './app-storage.service';
// import { Subject } from 'rxjs';
// import { HelperService } from './helper.service';
// import { AppModels } from '../model/app.models';

// @Injectable({
//   providedIn: 'root'
// })
// export class PeopleService {

//   private _people_value = new Subject<AppModels.IPeopleResponseApi>();

//   constructor(protected _http: HttpClient, protected _app_storage: AppStorageService, protected _helper: HelperService) { }

//   public get getPeopleApi() {
//     return this._http.get<AppModels.IPeopleResponseApi>(`${this._app_storage.getApiUrl}/people/`);
//   }

//   public set setPeopleStorage(value: any) {
//     this._people_value.next(value);
//     this._helper.putToLocalStorage('people', value);
//   }
 
//   public get getPeopleStorage(): AppModels.IPeopleResponseApi {
//     return this._helper.getFromLocalStorage('people');
//   }

//   public get getPeople(): AppModels.IPeopleResponseApi {
//     return this._people_value;
//   }

// }

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AppStorageService } from './app-storage.service';
import { HelperService } from './helper.service';
import { AppModels } from '../model/app.models';

@Injectable({
  providedIn: 'root'
})
export class PeopleService {

  constructor(protected _http: HttpClient, protected _app_storage: AppStorageService, protected _helper: HelperService) { }

  public set setPeople(people: AppModels.IPerson[]) {
    this._helper.putToLocalStorage('people', people);
  }

  public get getPeople(): AppModels.IPerson[] {
    return this._helper.getFromLocalStorage('people');
  }

}

import { Injectable } from '@angular/core';
import { AppStorageService } from './app-storage.service';
import { HelperService } from './helper.service';
import { AppModels } from '../model/app.models';

@Injectable({
  providedIn: 'root'
})
export class PeopleService {

  constructor(protected _app_storage: AppStorageService, protected _helper: HelperService) { }

  public set setPeople(people: AppModels.IPerson[]) {
    this._helper.putToLocalStorage('people', people);
  }

  public get getPeople(): AppModels.IPerson[] {
    return this._helper.getFromLocalStorage('people');
  }

}

import { Injectable } from '@angular/core';
import { AppStorageService } from './app-storage.service';
import { HelperService } from './helper.service';
import { HttpClient } from '@angular/common/http';
import { AppModels } from '../model/app.models';

@Injectable({
  providedIn: 'root'
})
export class FilmsService {

  constructor(protected _http: HttpClient, protected _app_storage: AppStorageService, protected _helper: HelperService) { }

  public set setFilms(films: AppModels.IFilms[]) {
    this._helper.putToLocalStorage('films', films);
  }

  public get getFilms(): AppModels.IFilms[] {
    return this._helper.getFromLocalStorage('films');
  }
  
}

import { Injectable } from '@angular/core';
import { AppModels } from '../model/app.models';

@Injectable({
  providedIn: 'root'
})
export class AppStorageService {

  constructor() { }

  private _people: AppModels.IPerson[] = [
    {
      name: 'item1'
    },
    {
      name: 'item2'
    },
    {
      name: 'item3',
      children: [
        {
          name: 'item3.1',
        },
        {
          name: 'item3.2',
        },
        {
          name: 'item3.3',
        },
        {
          name: 'item3.4',
        },
      ]
    },
    {
      name: 'item4',
      children: [
        {
          name: 'item4.1',
        },
        {
          name: 'item4.2',
        },
        {
          name: 'item4.3',
        },
        {
          name: 'item4.4',
        },
      ]
    },
    {
      name: 'item5',
      children: [
        {
          name: 'item5.1',
        },
        {
          name: 'item5.2',
        }
      ]
    },
  ];

  private _films = [
    {
      name: 'Andrew Stepaniuk',
      films: []
    },
    {
      name: 'Sara Sara',
      films: []
    },
    {
      name: 'Quentin Tarantino',
      films: [
        {
          name: 'Reservoir Dogs',
          year: 1992
        },
        {
          name: 'Kill Bill',
          year: 2003
        },
        {
          name: 'Django Unchained',
          year: 2012
        },
        {
          name: 'Once Upon a Time in Hollywood',
          year: 2019
        },
      ]
    },
    {
      name: 'Guy Ritchie',
      films: [
        {
          name: 'Lock, Stock and Two Smoking Barrels',
          year: 1998
        },
        {
          name: 'Snatch',
          year: 2000
        },
        {
          name: 'Revolver',
          year: 2005
        },
        {
          name: 'RocknRolla',
          year: 2008
        },
      ]
    },
    {
      name: 'Steven Spielberg',
      films: [
        {
          name: 'Indiana Jones and the Temple of Doom',
          year: 1984
        },
        {
          name: 'Back to the Future',
          year: 1985
        },
        {
          name: 'Jurassic Park',
          year: 1993
        },
        {
          name: 'Men in Black',
          year: 1997
        },
      ]
    }
  ]
  
  public get getPeople(): AppModels.IPerson[] {
    return [...this._people];
  }

  public get getFilms(): AppModels.IFilms[] {
    return [...this._films];
  }
  

}

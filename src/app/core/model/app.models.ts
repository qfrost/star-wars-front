// tslint:disable-next-line:no-namespace
export namespace AppModels {

    export interface IPerson {
        name: string;
        children?: IPerson[];
    }

    export interface IFilms {
        name: string;
        films: IFilm[];
    }

    export interface IFilm {
        name: string;
        year: number;
    }

}


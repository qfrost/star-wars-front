import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HelperService {

  constructor() { }

  public putToLocalStorage(key: string, value: any): void {
    localStorage.setItem(key, JSON.stringify(value));
  }

  public getFromLocalStorage(key: string): any {
      const item = localStorage.getItem(key);

      if (item) {
        return JSON.parse(item);
      }
  }

  public searchTree(element, matchingName) {
    if (element.name === matchingName) {
         
         return element;
    } else if (element.children != null){
      let result = null;
      for(let i = 0; result == null && i < element.children.length; i++){
          result = this.searchTree(element.children[i], matchingName);
      }
      return result;
    }
    return null;
  }

}

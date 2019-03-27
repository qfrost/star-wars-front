import { Component, Input, OnInit } from '@angular/core';
import { AppModels } from 'src/app/core/model/app.models';
import { PeopleService } from 'src/app/core/services/people.service';
import { HelperService } from 'src/app/core/services/helper.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  @Input() public people: AppModels.IPerson[] | null;

  constructor(private _people: PeopleService, private _helper: HelperService) { }

  public addChildren(people: AppModels.IPerson): void {
    if (people.children) {
      people.children = [...people.children, { name: `${people.name}.${people.children.length + 1}` }];
    } else {
      people.children = [{ name: `${people.name}.1` }];
    }
  }

  public removeChildren(people: AppModels.IPerson): void {
    let tree = this._people.getPeople;
    let new_tree = tree.forEach((v, i, a) => {
      if (!(people.name === v.name)) { return v } else { tree.splice(i, 1); }
    });
  }

  ngOnInit() {

  }

}

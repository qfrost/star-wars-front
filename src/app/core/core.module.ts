import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HelperService } from './services/helper.service';
import { HttpClientModule } from '@angular/common/http';
import { AppStorageService } from './services/app-storage.service';
import { PeopleService } from './services/people.service';
import { FilmsService } from './services/films.service';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent
  ],
  exports: [
    HeaderComponent,
    FooterComponent
  ],
  providers: [
    HelperService,
    PeopleService,
    AppStorageService,
    FilmsService
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    RouterModule
  ]
})
export class CoreModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { MainPageComponent } from './pages/main-page.component';
import { DBZListComponent } from './components/list/list.component';
import { DBZAddCharacterComponent } from './components/form/form.component';

@NgModule({
  declarations: [
    MainPageComponent,
    DBZListComponent,
    DBZAddCharacterComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    MainPageComponent
  ]
})
export class DbzModule { }

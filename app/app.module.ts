import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';

import { AnimalListComponent } from './animal-list.component';
import { NewAnimalComponent } from './new-animal.component';
import { AnimalDetailComponent } from './animal-detail.component';
import { EditAnimalComponent } from './edit-animal.component';
import { AgePipe } from './age.pipe';

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [ AppComponent,
                  AnimalListComponent,
                  NewAnimalComponent,
                  AnimalDetailComponent,
                  EditAnimalComponent,
                  AgePipe
                ],
  bootstrap:    [ AppComponent ]
})

export class AppModule { }

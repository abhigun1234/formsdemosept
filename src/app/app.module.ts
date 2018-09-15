import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TemplateComponent } from './template/template.component';
import { TemplatevalidationComponent } from './templatevalidation/templatevalidation.component';
import { ModeldrivenComponent } from './modeldriven/modeldriven.component';
import {ReactiveFormsModule} from '@angular/forms';
import { FormbuilderComponent } from './formbuilder/formbuilder.component'
@NgModule({
  declarations: [
    AppComponent,
    TemplateComponent,
    TemplatevalidationComponent,
    ModeldrivenComponent,
    FormbuilderComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    ReactiveFormsModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

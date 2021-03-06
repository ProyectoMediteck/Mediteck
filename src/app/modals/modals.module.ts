import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import {BrowserModule} from '@angular/platform-browser';
import { EditPlanComponent } from './edit-plan/edit-plan.component';
import { AddPlanComponent } from './add-plan/add-plan.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    BrowserModule,
    RouterModule,
    ReactiveFormsModule,
    NgbModule
  ],
  declarations: [
    EditPlanComponent,
    AddPlanComponent
  ],
  exports: [
    EditPlanComponent,
    AddPlanComponent
  ]
})
export class ModalsModule { }

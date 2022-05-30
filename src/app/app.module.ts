import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MatSliderModule } from "@angular/material/slider";
import { SampleAddressFormComponent } from "./sample-address-form/sample-address-form.component";
import { MatInputModule } from "@angular/material/input";
import { MatButtonModule } from "@angular/material/button";
import { MatSelectModule } from "@angular/material/select";
import { MatRadioModule } from "@angular/material/radio";
import { MatCardModule } from "@angular/material/card";
import { ReactiveFormsModule } from "@angular/forms";
import { TestDragComponent } from "./test-drag/test-drag.component";

import { MatGridListModule} from '@angular/material/grid-list'

import { DragDropModule } from "@angular/cdk/drag-drop";
import { MainViewComponent } from "src/new/app/pages/main-view/main-view.component";
import {ScrollingModule} from '@angular/cdk/scrolling'; 
@NgModule({
    declarations: [AppComponent, SampleAddressFormComponent, TestDragComponent, MainViewComponent],
    imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        MatSliderModule,
        MatInputModule,
        MatButtonModule,
        MatSelectModule,
        MatRadioModule,
        MatCardModule,
        ReactiveFormsModule,
        MatGridListModule,
        DragDropModule,
        ScrollingModule
    ],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {}

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'; // <-- import FormsModule.

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HttpService } from './http.service';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {
  MatButtonModule,
  MatButtonToggleModule,
  MatInputModule,
} from '@angular/material';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    ReactiveFormsModule,
    MatInputModule,
    FormsModule,
    MatButtonModule,
    MatButtonToggleModule
  ],
  providers: [HttpService],
  bootstrap: [AppComponent]
})
export class AppModule {

  CdkTableModule
  CdkTreeModule
  DragDropModule
  MatAutocompleteModule
  MatBadgeModule
  MatBottomSheetModule
  MatButtonModule
  MatButtonToggleModule
  MatCardModule
  MatCheckboxModule
  MatChipsModule
  MatStepperModule
  MatDatepickerModule
  MatDialogModule
  MatDividerModule
  MatExpansionModule
  MatGridListModule
  MatIconModule
  MatInputModule
  MatListModule
  MatMenuModule
  MatNativeDateModule
  MatPaginatorModule
  MatProgressBarModule
  MatProgressSpinnerModule
  MatRadioModule
  MatRippleModule
  MatSelectModule
  MatSidenavModule
  MatSliderModule
  MatSlideToggleModule
  MatSnackBarModule
  MatSortModule
  MatTableModule
  MatTabsModule
  MatToolbarModule
  MatTooltipModule
  MatTreeModule
  ScrollingModule

 }

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { DataService } from './data.service';
import{ HttpClient,HttpClientModule } from '@angular/common/http';
import { Http } from '@angular/http';
// import { Http } from '@angular/http/src/http';
import { ChartsModule } from 'ng2-charts';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ChartsModule
  ],
  providers: [DataService,HttpClient, Http],
  bootstrap: [AppComponent]
})
export class AppModule { }

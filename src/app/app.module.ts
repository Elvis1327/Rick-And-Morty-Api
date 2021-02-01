import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routingModule.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
//Components
import { BodyComponent } from './components/body/body.component';



@NgModule({
  declarations: [
    AppComponent,
    BodyComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    RouterModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

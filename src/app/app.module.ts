import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WallComponent } from './wall/wall.component';

import { HttpClientModule }    from '@angular/common/http';
import { MenuComponent } from './components/menu/menu.component';
import { DetailpostComponent} from './detailpost/detailpost.component';
import { from } from 'rxjs';



@NgModule({
  declarations: [
    AppComponent,
    WallComponent,
    MenuComponent,
    DetailpostComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
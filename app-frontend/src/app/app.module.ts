import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';
import { HttpModule }    from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { AgmCoreModule } from '@agm/core';
import { AgmDirectionModule } from 'agm-direction';

import { AppRoutingModule,routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductComponent } from './product/product.component';
import { FooterComponent } from './footer/footer.component';
import { LanguageComponent } from './language/language.component';
import { NavbarComponent } from './navbar/navbar.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { ProfilepageComponent } from './profilepage/profilepage.component';
import { LogoutComponent } from './logout/logout.component';
import { AddcommentComponent } from './addcomment/addcomment.component';
import { MapComponent } from './map/map.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    routingComponents,
    FooterComponent,
    LanguageComponent,
    NavbarComponent,
    RegisterComponent,
    LoginComponent,
    ProfilepageComponent,
    LogoutComponent,
    AddcommentComponent,
    MapComponent
    ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule, 
    HttpModule,
    AgmDirectionModule,
    HttpClientModule,
    AgmCoreModule.forRoot({
      apiKey: "AIzaSyC5R-OZ-dIeCjg_FgGY23p9yU9MOON5h0Y",
      libraries: ["places", "geometry"]
      /* apiKey is required, unless you are a premium customer, in which case you can use clientId */
  })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

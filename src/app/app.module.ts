import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { AppComponent } from "./app.component";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { AppRoutingModule } from "./app-routing.module";
import { RegistracionComponent } from "./registracion/registracion.component";
import { NavegacionComponent } from "./navegacion/navegacion.component";
import { LoginComponent } from "./login/login.component";
import { ValidateService } from "./Services/validate.service";
import { HttpClientModule } from "@angular/common/http";
import { MensajesComponent } from './mensajes/mensajes.component';
import { PlataformaComponent } from './plataforma/plataforma.component';
import { NavUserComponent } from './nav-user/nav-user.component';


@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    RegistracionComponent,
    NavegacionComponent,
    LoginComponent,
    MensajesComponent,
    PlataformaComponent,
    NavUserComponent
    
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, HttpClientModule],
  providers: [ValidateService],
  bootstrap: [AppComponent]
})
export class AppModule {}

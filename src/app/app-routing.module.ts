import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { LoginComponent } from "./login/login.component";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { RegistracionComponent } from "./registracion/registracion.component";
import {PlataformaComponent} from "./plataforma/plataforma.component";
import {NavegacionComponent} from "./navegacion/navegacion.component";
const Enrutamiento: Routes = [
 
{path:"Nav", component:NavegacionComponent},
  {path:"Platform", component:PlataformaComponent},
  { path: "", redirectTo: "/dashboard", pathMatch: "full" },

  { path: "Register", component: RegistracionComponent },
  {
    path: "dashboard",
    component: DashboardComponent
  },
  { path: "Login", component: LoginComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(Enrutamiento)],
  exports: [RouterModule]
})
export class AppRoutingModule {}

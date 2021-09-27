import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { LoginComponent } from './componentes/acceso/login/login.component';
import { RegistrarComponent } from './componentes/acceso/registrar/registrar.component';
import { FormsModule } from '@angular/forms';
import { AngularFirestoreModule} from '@angular/fire/compat/firestore';
import { AngularFireModule } from '@angular/fire/compat';
import { environment } from 'src/environments/environment';
import { AgregarProductosComponent } from './componentes/producto/agregar-productos/agregar-productos.component';
import { ListarProductosComponent } from './componentes/producto/listar-productos/listar-productos.component';
import { AgregarVentaComponent } from './componentes/venta/agregar-venta/agregar-venta.component';
import { ListarVentasComponent } from './componentes/venta/listar-ventas/listar-ventas.component';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegistrarComponent,
    AgregarProductosComponent,
    ListarProductosComponent,
    AgregarVentaComponent,
    ListarVentasComponent
  ],
  imports: [
    AngularFireModule.initializeApp(environment.firebaseConfig,'ventasAPP'),
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterModule, RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./header/header.component";
import { BodyComponent } from "./body/body.component";
import { FooterComponent } from "./footer/footer.component";
import { ContenidoComponent } from './contenido/contenido.component';

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [CommonModule, RouterOutlet,RouterModule,RouterLink, HeaderComponent, BodyComponent, FooterComponent,ContenidoComponent]
})
export class AppComponent {
  title = 'ProyectoCochesGlitch';
}

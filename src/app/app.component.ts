import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink, RouterModule } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterModule],  // Elimina HttpClientModule
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'] // Asegúrate de que sea styleUrls
})
export class AppComponent {
  menuOpion: string = ''
  onOptionClick(menuOpion: string) {
    this.menuOpion = menuOpion;
  }
}

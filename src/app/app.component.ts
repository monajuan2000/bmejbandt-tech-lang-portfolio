import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatMenuModule } from '@angular/material/menu';
import { MatGridListModule } from '@angular/material/grid-list';

@Component({
  selector: 'app-root',
  imports: [MatIconModule, MatToolbarModule, MatMenuModule, MatGridListModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'bmejbandt-tech-lang-portfolio';
}

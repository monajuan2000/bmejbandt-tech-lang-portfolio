import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatMenuModule } from '@angular/material/menu';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { RouterModule } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { CommonModule } from '@angular/common';

export interface Tile {
  color: string;
  cols: number;
  rows: number;
  text: string;
}

@Component({
  selector: 'app-root',
  imports: [
    MatIconModule,
    MatToolbarModule,
    MatMenuModule,
    MatGridListModule,
    MatSidenavModule,
    MatListModule,
    RouterModule,
    MatCardModule,
    CommonModule
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'bmejbandt-tech-lang-portfolio';

  projects = Array.from({ length: 10 }).map((_, i) => ({
    title: `Project ${i + 1}`,
    subtitle: `Category ${i + 1}`,
    description: 'This is a modern professional project description with styling and features.',
    image: 'assets/images/car-test-image1.jpg' // your card image path
  }));
}

import { CommonModule } from '@angular/common';
import { Component, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    MatIconModule,
    MatToolbarModule,
    MatMenuModule,
    MatGridListModule,
    MatSidenavModule,
    MatListModule,
    MatCardModule,
    RouterModule,
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements AfterViewInit {
  @ViewChild('bgVideo', { static: false }) bgVideo?: ElementRef<HTMLVideoElement>;
  title = 'bmejbandt-tech-lang-portfolio';
  mobileMenuOpen = false;

  ngAfterViewInit(): void {
    const v = this.bgVideo?.nativeElement;
    if (!v) return;

    const tryPlay = async () => {
      try {
        v.muted = true;
        v.autoplay = true;
        if (v.readyState < 3) {
          await new Promise<void>((resolve) => {
            const onCanPlay = () => {
              v.removeEventListener('canplay', onCanPlay);
              resolve();
            };
            v.addEventListener('canplay', onCanPlay);
            setTimeout(resolve, 2000);
          });
        }
        await v.play();
        cleanupInteractionListeners();
      } catch {
        // allow user interaction to trigger play
      }
    };

    const onUserInteract = () => tryPlay();
    const onVisibility = () => { if (document.visibilityState === 'visible') tryPlay(); };
    const cleanupInteractionListeners = () => {
      document.removeEventListener('pointerdown', onUserInteract);
      document.removeEventListener('touchstart', onUserInteract);
      document.removeEventListener('click', onUserInteract);
      document.removeEventListener('visibilitychange', onVisibility);
      window.removeEventListener('focus', onUserInteract);
    };

    tryPlay();
    document.addEventListener('pointerdown', onUserInteract, { passive: true });
    document.addEventListener('touchstart', onUserInteract, { passive: true });
    document.addEventListener('click', onUserInteract, { passive: true });
    document.addEventListener('visibilitychange', onVisibility);
    window.addEventListener('focus', onUserInteract);

    v.addEventListener('error', () => { });
  }
}

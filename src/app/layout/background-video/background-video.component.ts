import {
  ChangeDetectionStrategy,
  Component,
  DestroyRef,
  ElementRef,
  afterNextRender,
  inject,
  viewChild,
} from '@angular/core';

const RETRY_EVENTS = ['pointerdown', 'touchstart', 'keydown'] as const;

/**
 * Full-screen looping background video. Browsers may block autoplay, so playback is
 * retried on the first user interaction and whenever the tab becomes visible again.
 * Playback is skipped entirely for users who prefer reduced motion.
 */
@Component({
  selector: 'app-background-video',
  templateUrl: './background-video.component.html',
  styleUrl: './background-video.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BackgroundVideoComponent {
  private readonly videoRef = viewChild.required<ElementRef<HTMLVideoElement>>('video');

  constructor() {
    const destroyRef = inject(DestroyRef);

    afterNextRender(() => {
      const video = this.videoRef().nativeElement;
      // Angular does not reflect the `muted` attribute to the property, which autoplay requires.
      video.muted = true;

      if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
        return;
      }

      const removeListeners = () => {
        RETRY_EVENTS.forEach((eventName) => document.removeEventListener(eventName, play));
        document.removeEventListener('visibilitychange', onVisibilityChange);
      };

      const play = () => {
        video
          .play()
          .then(removeListeners)
          .catch(() => {
            // Autoplay was blocked; the next user interaction retries.
          });
      };

      const onVisibilityChange = () => {
        if (document.visibilityState === 'visible') {
          play();
        }
      };

      RETRY_EVENTS.forEach((eventName) => document.addEventListener(eventName, play, { passive: true }));
      document.addEventListener('visibilitychange', onVisibilityChange);
      destroyRef.onDestroy(removeListeners);

      play();
    });
  }
}

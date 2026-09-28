import { DestroyRef, Directive, ElementRef, afterNextRender, computed, inject, input, numberAttribute } from '@angular/core';

/**
 * Fades an element in when it scrolls into view.
 * Usage: `<section appReveal>` or with a stagger delay in ms: `<article [appReveal]="index * 80">`.
 */
@Directive({
  selector: '[appReveal]',
  host: {
    class: 'reveal',
    '[style.--reveal-delay]': 'delay()',
  },
})
export class RevealDirective {
  readonly revealDelay = input(0, {
    alias: 'appReveal',
    transform: (value: unknown) => numberAttribute(value, 0),
  });

  protected readonly delay = computed(() => `${this.revealDelay()}ms`);

  constructor() {
    const element = inject<ElementRef<HTMLElement>>(ElementRef).nativeElement;
    const destroyRef = inject(DestroyRef);

    afterNextRender(() => {
      if (!('IntersectionObserver' in window)) {
        element.classList.add('is-visible');
        return;
      }

      const observer = new IntersectionObserver(
        (entries) => {
          if (entries.some((entry) => entry.isIntersecting)) {
            element.classList.add('is-visible');
            observer.disconnect();
          }
        },
        { threshold: 0.12, rootMargin: '0px 0px -8% 0px' },
      );

      observer.observe(element);
      destroyRef.onDestroy(() => observer.disconnect());
    });
  }
}

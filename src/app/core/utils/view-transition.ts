type ViewTransitionDocument = Document & { startViewTransition?: (update: () => void) => unknown };

/**
 * Runs a DOM update inside a View Transition when the browser supports it and the
 * user has not asked for reduced motion; otherwise applies the update immediately.
 */
export function runWithViewTransition(document: Document, update: () => void): void {
  const transitionDocument = document as ViewTransitionDocument;
  const window = document.defaultView;
  const prefersReducedMotion = window?.matchMedia('(prefers-reduced-motion: reduce)').matches ?? true;

  if (transitionDocument.startViewTransition && !prefersReducedMotion) {
    transitionDocument.startViewTransition(update);
  } else {
    update();
  }
}

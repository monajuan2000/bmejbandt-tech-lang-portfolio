import { Directive, computed, input } from '@angular/core';

import { isExternalUrl } from '@core/utils';

/**
 * Binds `href` and, for absolute http(s) URLs, opens it safely in a new tab.
 * Usage: `<a [appExternalLink]="url">` instead of `[href]` + `target` + `rel`.
 * mailto:/tel: links stay in the same tab.
 */
@Directive({
  selector: 'a[appExternalLink]',
  host: {
    '[attr.href]': 'url()',
    '[attr.target]': "isExternal() ? '_blank' : null",
    '[attr.rel]': "isExternal() ? 'noopener noreferrer' : null",
  },
})
export class ExternalLinkDirective {
  readonly url = input.required<string>({ alias: 'appExternalLink' });

  protected readonly isExternal = computed(() => isExternalUrl(this.url()));
}

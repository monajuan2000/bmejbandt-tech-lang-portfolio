import { ChangeDetectionStrategy, Component, computed, input } from '@angular/core';
import { RouterLink } from '@angular/router';

import { injectTranslations } from '@core/i18n';
import { createUniqueId } from '@core/utils';

import { IconComponent } from '../icon/icon.component';

/** Closing call to action. Text inputs are optional overrides of the translated defaults. */
@Component({
  selector: 'app-call-to-action',
  imports: [RouterLink, IconComponent],
  templateUrl: './call-to-action.component.html',
  styleUrl: './call-to-action.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CallToActionComponent {
  private readonly translations = injectTranslations();
  private readonly defaults = computed(() => this.translations().callToAction);

  readonly title = input<string>();
  readonly description = input<string>();
  readonly actionLabel = input<string>();
  readonly actionPath = input('/contact');

  protected readonly titleId = createUniqueId('cta-title');
  protected readonly resolvedTitle = computed(() => this.title() ?? this.defaults().title);
  protected readonly resolvedDescription = computed(() => this.description() ?? this.defaults().description);
  protected readonly resolvedActionLabel = computed(() => this.actionLabel() ?? this.defaults().action);
}

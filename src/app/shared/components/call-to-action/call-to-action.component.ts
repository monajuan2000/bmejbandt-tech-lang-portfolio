import { ChangeDetectionStrategy, Component, computed, inject, input } from '@angular/core';
import { RouterLink } from '@angular/router';

import { LanguageService } from '@core/i18n';

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
  private readonly translations = inject(LanguageService).translations;
  private readonly defaults = computed(() => this.translations().callToAction);

  readonly title = input<string>();
  readonly description = input<string>();
  readonly actionLabel = input<string>();
  readonly actionPath = input('/contact');

  protected readonly resolvedTitle = computed(() => this.title() ?? this.defaults().title);
  protected readonly resolvedDescription = computed(() => this.description() ?? this.defaults().description);
  protected readonly resolvedActionLabel = computed(() => this.actionLabel() ?? this.defaults().action);
}

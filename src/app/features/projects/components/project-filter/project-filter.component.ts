import { ChangeDetectionStrategy, Component, input, output } from '@angular/core';

import { ProjectCategory } from '@core/models';
import { ProjectFilter } from '@core/services';

/** Presentational filter chips; all text comes in through inputs. */
@Component({
  selector: 'app-project-filter',
  templateUrl: './project-filter.component.html',
  styleUrl: './project-filter.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProjectFilterComponent {
  readonly categories = input.required<readonly ProjectCategory[]>();
  readonly selected = input.required<ProjectFilter>();
  readonly label = input.required<string>();
  readonly allLabel = input.required<string>();
  readonly selectedChange = output<ProjectFilter>();

  protected select(filter: ProjectFilter): void {
    if (filter !== this.selected()) {
      this.selectedChange.emit(filter);
    }
  }
}

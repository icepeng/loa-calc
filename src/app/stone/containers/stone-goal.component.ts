import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  Output,
  SimpleChanges,
} from '@angular/core';
import { Ability, getGoalCellsFromGoal, getTaskPreset, Task } from '../stone';

@Component({
  selector: 'app-stone-goal',
  templateUrl: './stone-goal.component.html',
  styleUrls: ['./stone-goal.component.scss'],
})
export class StoneGoalComponent implements OnChanges {
  @Input() na!: number;
  @Input() task!: Task;
  @Input() showFuture!: boolean;
  @Input() indexes!: Record<Ability, [number, number]>;
  @Input() index!: number;
  @Output() update = new EventEmitter();
  @Output() remove = new EventEmitter<number>();

  arr: number[] = [];

  constructor() {}

  ngOnChanges(changes: SimpleChanges) {
    if (changes.na) {
      this.arr = Array.from(
        { length: changes.na.currentValue + 1 },
        (_, k) => k
      );
    }
  }

  toggleCell(i: number, j: number) {
    this.task.goalCells[i][j] = !this.task.goalCells[i][j];
    this.update.emit();
  }

  changePenalty(i: number) {
    this.task.penaltyLimit = i;
    this.update.emit();
  }

  changeGoal() {
    this.task.goalCells = getGoalCellsFromGoal(this.na, this.task.goal);
    this.task.penaltyLimit = this.task.goal.penalty;
    this.update.emit();
  }

  preset(id: number) {
    const task = getTaskPreset(this.na, id);
    this.task.goal = task.goal;
    this.task.goalCells = task.goalCells;
    this.task.penaltyLimit = task.penaltyLimit;
    this.update.emit();
  }
}

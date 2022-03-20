import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Skill } from '../models/skill';
import { BuffStatusSchema } from './skill-action-form-list.component';

@Component({
  selector: 'app-skill-action-form',
  templateUrl: './skill-action-form.component.html',
})
export class SkillActionFormComponent {
  @Input() skills: Skill[] = [];
  @Input() skillActionForm!: FormGroup;
  @Input() buffStatusSchema: BuffStatusSchema = [];

  constructor() {}
}

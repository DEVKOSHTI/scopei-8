import { Component, Input } from '@angular/core';
import { InputFieldComponent } from "../input-field/input-field.component";
import { ButtonComponent } from "../button/button.component";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [InputFieldComponent, ButtonComponent,CommonModule],
  templateUrl: './form.component.html',
  styleUrl: './form.component.css'
})
export class FormComponent {
goToNextStep() {
  if(this.step<3){
    this.step+=1;
  }
}
@Input() name:string='John';
@Input() step:number=0;
}

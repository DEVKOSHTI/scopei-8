import { Component } from '@angular/core';

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [],
  templateUrl: './button.component.html',
  styleUrl: './button.component.css'
})
export class ButtonComponent {
 handleClick() {
    // Handle the click event here, e.g., navigate to another route
    // For example, using Angular Router:
    // this.router.navigate(['/some-path']);
    console.log('Button clicked!');
  }
}

import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ButtonComponent } from "./components/button/button.component";
import { InputFieldComponent } from "./components/input-field/input-field.component";
import { CardComponent } from "./components/card/card.component";
import { CardHeroComponent } from "./components/card-hero/card-hero.component";
import { FormComponent } from "./components/form/form.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ButtonComponent, InputFieldComponent, CardComponent, CardHeroComponent, FormComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'scopei-8';
}

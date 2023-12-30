import { Component } from '@angular/core';
import { HeaderComponent } from './component/header/header.component';
import { FooterComponent } from './component/footer/footer.component';
import { MainComponent } from './component/main/main.component';

@Component({
  selector: 'app-todos',
  standalone: true,
  imports: [HeaderComponent, FooterComponent, MainComponent],
  templateUrl: './todos.component.html',

})
export class TodosComponent {

}

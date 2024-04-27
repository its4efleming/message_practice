import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonToggleModule } from '@angular/material/button-toggle';


@Component({
  selector: 'app-reactions',
  standalone: true,
  imports: [CommonModule, MatButtonToggleModule],
  templateUrl: './reactions.component.html',
  styleUrls: ['./reactions.component.scss']
})
export class ReactionsComponent {

}

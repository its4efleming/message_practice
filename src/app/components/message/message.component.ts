import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactionsComponent } from '../reactions/reactions.component';

@Component({
  selector: 'app-message',
  standalone: true,
  imports: [CommonModule,ReactionsComponent],
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.scss']
})
export class MessageComponent implements OnInit {
    constructor() { }
  
    ngOnInit(): void {
    }

}

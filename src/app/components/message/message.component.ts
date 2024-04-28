import { Component, OnInit,Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactionsComponent } from '../reactions/reactions.component';
import { ReactionBadgeComponent } from '../reaction-badge/reaction-badge.component';
import { Emoji } from '../../models/emoji.model';

@Component({
  selector: 'app-message',
  standalone: true,
  imports: [CommonModule, ReactionsComponent, ReactionBadgeComponent],
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.scss']
})
export class MessageComponent implements OnInit {
  @Input() mainEmoji: Emoji | undefined;
    constructor() { }
  
    ngOnInit(): void {
    }

}

import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { ReactionComponent, Emoji } from '../reaction/reaction.component';


@Component({
  selector: 'app-reactions',
  standalone: true,
  imports: [CommonModule,MatButtonToggleModule, ReactionComponent],
  templateUrl: './reactions.component.html',
  styleUrls: ['./reactions.component.scss']
})
export class ReactionsComponent {
  emojis: Emoji[] = [
    { name: 'ThumbsUp', icon: 'thumb_up' },
    { name: 'ThumbsDown', icon: 'thumb_down' },
    { name: 'Smile', icon: 'sentiment_very_satisfied' },
    { name: 'Frown', icon: 'sentiment_very_dissatisfied'}
  ];
}

import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatIconModule } from '@angular/material/icon';
import { ReactionsService } from '../../services/reactions.service';

export interface Emoji {
  name: string;
  icon: string;
}

@Component({
  selector: 'app-reaction',
  standalone: true,
  imports: [CommonModule, MatButtonToggleModule, MatIconModule],
  templateUrl: './reaction.component.html',
  styleUrls: ['./reaction.component.scss']
})
export class ReactionComponent {
  @Input() emoji: Emoji | undefined;
  constructor(private reactionsService: ReactionsService) { }
  isReactionToggled(): boolean {
    return this.reactionsService.getReactionToggleState(this.emoji?.name || '');
  }

  toggleReaction(): void {
    const currentState = this.isReactionToggled();
    this.reactionsService.setReactionToggleState(this.emoji?.name || '', !currentState);
  }
}

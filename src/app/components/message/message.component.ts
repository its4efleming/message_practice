import { Component, OnInit,Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactionsComponent } from '../reactions/reactions.component';
import { ReactionBadgeComponent } from '../reaction-badge/reaction-badge.component';
import { Emoji } from '../../models/emoji.model';
import { ReactionsService } from 'src/app/services/reactions.service';

@Component({
  selector: 'app-message',
  standalone: true,
  imports: [CommonModule, ReactionsComponent, ReactionBadgeComponent],
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.scss']
})
export class MessageComponent {
    constructor(private reactionsService: ReactionsService ) {}
    getToggledEmoji() : Emoji | undefined{
      return this.reactionsService.findToggledEmoji();
    }
}

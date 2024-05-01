import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { ReactionComponent } from '../reaction/reaction.component';
import { Emoji } from '../../models/emoji.model';
import { ReactionsService } from '../../services/reactions.service';


@Component({
  selector: 'app-reactions',
  standalone: true,
  imports: [CommonModule,MatButtonToggleModule, ReactionComponent],
  templateUrl: './reactions.component.html',
  styleUrls: ['./reactions.component.scss']
})
export class ReactionsComponent {
  constructor(private reactionsService: ReactionsService) { }
  emojis: Emoji[] | undefined = this.reactionsService.getEmojis();
  toggledEmoji: Emoji | undefined = this.reactionsService.findToggledEmoji();
}

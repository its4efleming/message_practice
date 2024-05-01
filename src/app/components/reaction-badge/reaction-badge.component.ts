import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatBadgeModule } from '@angular/material/badge';
import { Emoji } from '../../models/emoji.model';
import { ReactionsService } from '../../services/reactions.service';

@Component({
  selector: 'app-reaction-badge',
  templateUrl: './reaction-badge.component.html',
  styleUrls: ['./reaction-badge.component.scss'],
  standalone: true,
  imports: [CommonModule,MatBadgeModule, MatIconModule]
})
export class ReactionBadgeComponent {
  @Input() emoji: Emoji | undefined;
  constructor(private reactionsService: ReactionsService) { }
  ngOnInit(){
    this.emoji = this.reactionsService.findToggledEmoji();
  }
}

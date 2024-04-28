import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatBadgeModule } from '@angular/material/badge';
import { Emoji } from '../../models/emoji.model';

@Component({
  selector: 'app-reaction-badge',
  templateUrl: './reaction-badge.component.html',
  styleUrls: ['./reaction-badge.component.scss'],
  standalone: true,
  imports: [CommonModule,MatBadgeModule, MatIconModule]
})
export class ReactionBadgeComponent {
  @Input() emoji: Emoji | undefined;
}

import { ChangeDetectorRef, Component, Input, OnInit} from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatIconModule } from '@angular/material/icon';
import { MatBadgeModule } from '@angular/material/badge';
import { ReactionsService } from '../../services/reactions.service';
import { Emoji } from '../../models/emoji.model';

@Component({
  selector: 'app-reaction',
  standalone: true,
  imports: [CommonModule, MatButtonToggleModule, MatIconModule, MatBadgeModule],
  templateUrl: './reaction.component.html',
  styleUrls: ['./reaction.component.scss']
})
export class ReactionComponent {
  @Input() emoji: Emoji | undefined;
  toggled: boolean | undefined;
  constructor(private reactionsService: ReactionsService, private cd: ChangeDetectorRef) { }
  ngOnInit() {
    this.toggled = this.reactionsService.getReactionToggleState(this.emoji);
  }
  toggleReaction(): boolean | undefined{
    //this.toggled = !this.toggled;
    this.reactionsService.setReactionToggleState(this.emoji);
    //this.cd.detectChanges();
    return this.reactionsService.getReactionToggleState(this.emoji);
  }
  getToggleReaction(): boolean | undefined{
    return this.reactionsService.getReactionToggleState(this.emoji);
  }
}

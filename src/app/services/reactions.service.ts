import { Injectable } from '@angular/core';
import { Emoji } from '../models/emoji.model';

@Injectable({
  providedIn: 'root'
})
export class ReactionsService {
  emojis: Emoji[] | undefined = [
    { name: 'ThumbsUp', icon: 'thumb_up', toggled: false },
    { name: 'ThumbsDown', icon: 'thumb_down', toggled: false },
    { name: 'Smile', icon: 'sentiment_very_satisfied', toggled: false },
    { name: 'Frown', icon: 'sentiment_very_dissatisfied', toggled: false }
  ];
  constructor() { }
  getEmojis(): Emoji[] | undefined {
    return this.emojis;
  }
  findToggledEmoji(): Emoji | undefined {
    return this.emojis?.find((x) => x.toggled === true);
  }
  getReactionToggleState(emoji: Emoji | undefined): boolean {
    const foundEmoji = this.emojis?.find(e => e.name === emoji?.name);
    return foundEmoji ? foundEmoji.toggled : false;
  }
  setReactionToggleState(emoji: Emoji | undefined, state: boolean | undefined): void {
    const foundIndex = this.emojis?.findIndex(e => e.name === emoji?.name);
    if (foundIndex !== undefined && this.emojis && state) {
      this.emojis[foundIndex].toggled = state;
      for (let i = 0; i < this.emojis.length; i++) {
        if (i !== foundIndex) {
          this.emojis[i].toggled = false;
        }
      }
      //console.log(this.emojis)
    }
  }

}

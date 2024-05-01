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
  toggledEmoji: Emoji | undefined;
  constructor() { }
  getEmojis(): Emoji[] | undefined {
    return this.emojis;
  }
  findToggledEmoji(): Emoji | undefined {
    return this.emojis?.find((x) => x.toggled === true);
  }
  getReactionToggleState(emoji: Emoji | undefined): boolean | undefined {
    const foundEmoji = this.emojis?.find(e => e.name === emoji?.name);
    return foundEmoji?.toggled;
  }
  setReactionToggleState(emoji: Emoji | undefined): void {
    this.toggledEmoji = this.findToggledEmoji();
    if(this.toggledEmoji && this.toggledEmoji != emoji){
      this.toggledEmoji.toggled = false;
    }
    emoji!.toggled = !emoji!.toggled;
    this.emojis!.forEach(emoji => {
      if (emoji.toggled === true) {
        console.log(emoji.name);
      }
    });
  }

}
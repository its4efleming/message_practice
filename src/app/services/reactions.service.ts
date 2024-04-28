import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ReactionsService {
  private reactionToggleStates: Map<string, boolean> = new Map<string, boolean>();

  constructor() { }
  getReactionToggleState(emojiName: string): boolean {
    return this.reactionToggleStates.get(emojiName) || false;
  }
  setReactionToggleState(emojiName: string, state: boolean): void {
    this.reactionToggleStates.set(emojiName, state);
  }
}

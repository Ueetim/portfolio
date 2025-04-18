import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-typewriter',
  imports: [],
  templateUrl: './typewriter.component.html',
  styleUrl: './typewriter.component.css'
})
export class TypewriterComponent {
  @Input() phrases: string[] = ['Developer', 'Designer', 'Creator'];
  @Input() typingSpeed: number = 100;
  @Input() deletingSpeed: number = 50;
  @Input() delayAfterPhrase: number = 1500;
  @Input() delayBeforeDelete: number = 1000;

  displayText: string = '';
  private currentPhraseIndex: number = 0;
  private isDeleting: boolean = false;

  ngOnInit() {
    this.startTypewriterEffect();
  }

  private startTypewriterEffect() {
    const currentPhrase = this.phrases[this.currentPhraseIndex];
    const currentLength = this.displayText.length;

    // If typing
    if (!this.isDeleting && currentLength < currentPhrase.length) {
      this.displayText = currentPhrase.substring(0, currentLength + 1);
      setTimeout(() => this.startTypewriterEffect(), this.typingSpeed);
    }
    // If completed typing current phrase
    else if (!this.isDeleting && currentLength === currentPhrase.length) {
      // Wait before starting to delete
      setTimeout(() => {
        this.isDeleting = true;
        this.startTypewriterEffect();
      }, this.delayBeforeDelete);
    }
    // If deleting
    else if (this.isDeleting && currentLength > 0) {
      this.displayText = currentPhrase.substring(0, currentLength - 1);
      setTimeout(() => this.startTypewriterEffect(), this.deletingSpeed);
    }
    // If completed deleting
    else if (this.isDeleting && currentLength === 0) {
      this.isDeleting = false;
      this.currentPhraseIndex = (this.currentPhraseIndex + 1) % this.phrases.length;

      // Wait before typing next phrase
      setTimeout(() => this.startTypewriterEffect(), this.delayAfterPhrase);
    }
  }
}

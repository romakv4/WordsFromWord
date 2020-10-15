import { Component, Input, OnInit } from '@angular/core';
import { CreatedWordService } from '../services/created-word.service';

@Component({
  selector: 'app-letter',
  templateUrl: './letter.component.html',
  styleUrls: ['./letter.component.css']
})
export class LetterComponent implements OnInit {

  @Input() letterIndex: number;
  @Input() letter: string;

  @Input() isLetterSelected: boolean = false;

  constructor(
    private createdWordService: CreatedWordService
  ) { }

  ngOnInit(): void { }

  onLetterPush() {
    document.getElementById(this.letterIndex.toString()).style["backgroundColor"] = 'gray';
    document.getElementById(this.letterIndex.toString()).style["border"] = '1px solid gray';
    if (!this.createdWordService.createdWord.has(this.letterIndex)) {
      this.isLetterSelected = false;
    }
    if (!this.isLetterSelected) {
      this.createdWordService.pushLetter(this.letterIndex, this.letter);
      this.isLetterSelected = true;
    }
  }

}

import { Component, Input, OnInit } from '@angular/core';
import { CreatedWordService } from '../services/created-word.service';

@Component({
  selector: 'app-pushed-letter',
  templateUrl: './pushed-letter.component.html',
  styleUrls: ['./pushed-letter.component.css']
})
export class PushedLetterComponent implements OnInit {

  @Input() letter;

  constructor(
    private createdWordSerice: CreatedWordService
  ) { }

  ngOnInit(): void { }

  onLetterDelete() {
    this.createdWordSerice.deleteLetter(this.letter.key);
    document.getElementById(this.letter.key.toString()).style["backgroundColor"] = 'darkcyan';
    document.getElementById(this.letter.key.toString()).style["border"] = '1px solid darkcyan';
  }

}

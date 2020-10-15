import { Component, OnInit } from '@angular/core';
import { CreatedWordService } from '../services/created-word.service';

@Component({
  selector: 'app-reset-word',
  templateUrl: './reset-word.component.html',
  styleUrls: ['./reset-word.component.css']
})
export class ResetWordComponent implements OnInit {

  constructor(
    public createdWordService: CreatedWordService
  ) { }

  ngOnInit(): void {
  }

  onResetWord() {
    this.resetStyles();
    this.createdWordService.createdWord.clear();
  }

  resetStyles() {
    this.createdWordService.createdWord.forEach((value, key, map) => {
      document.getElementById(key.toString()).style["backgroundColor"] = 'darkcyan';
      document.getElementById(key.toString()).style["border"] = '1px solid darkcyan';
    })
  }

  calculateButtonVisibility(): string {
    return this.createdWordService.createdWord.size == 0 ? 'hidden': 'visible'
  }

}

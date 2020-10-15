import { KeyValue } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { CreatedWordService } from '../services/created-word.service';

@Component({
  selector: 'app-created-word',
  templateUrl: './created-word.component.html',
  styleUrls: ['./created-word.component.css']
})
export class CreatedWordComponent implements OnInit {

  word = new Map();

  constructor(
    private createdWordService: CreatedWordService
  ) { }

  ngOnInit(): void {
    this.word = this.createdWordService.createdWord;
  }

  calculateWidth(): string {
    return `${this.word.size * 120}px`;
  }

  originalOrder = (a: KeyValue<number,string>, b: KeyValue<number,string>): number => {
    return 0;
  }

}

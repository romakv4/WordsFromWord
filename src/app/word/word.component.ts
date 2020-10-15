import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-word',
  templateUrl: './word.component.html',
  styleUrls: ['./word.component.css']
})
export class WordComponent implements OnInit {

  @Input() word: string;

  splittedWord = {};

  createdWord = {};

  constructor() { }

  ngOnInit(): void {
    this.splittedWord = this.word.split('');
  }

  calculateWidth(): string {
    return `${Object.keys(this.word).length * 120}px`;
  }

}

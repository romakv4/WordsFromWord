import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CreatedWordService {

  createdWord = new Map();

  constructor() { }

  pushLetter(index, letter) {
    this.createdWord.set(index, letter);
  }

  deleteLetter(index) {
    this.createdWord.delete(index);
  }
}

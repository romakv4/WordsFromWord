import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LetterComponent } from './letter/letter.component';
import { WordComponent } from './word/word.component';
import { CreatedWordComponent } from './created-word/created-word.component';
import { PushedLetterComponent } from './pushed-letter/pushed-letter.component';
import { ResetWordComponent } from './reset-word/reset-word.component';

@NgModule({
  declarations: [
    AppComponent,
    LetterComponent,
    WordComponent,
    CreatedWordComponent,
    PushedLetterComponent,
    ResetWordComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

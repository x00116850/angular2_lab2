import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { ClickMeComponent } from './click-me/click-me.component';
import { ShowMessageComponent } from './show-message/show-message.component';
import { LoopBackComponent } from './loop-back/loop-back.component';
import { TwoBindingComponent } from './two-binding/two-binding.component';
import { FormFormComponent } from './form-form/form-form.component';

@NgModule({
  declarations: [
    AppComponent,
    ClickMeComponent,
    ShowMessageComponent,
    LoopBackComponent,
    TwoBindingComponent,
    FormFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AccountsService } from './services/accounts.service';

import { AppComponent } from './app.component';
import { SumPipePipe } from './pipes/sum-pipe.pipe';

@NgModule({
  declarations: [
    AppComponent,
    SumPipePipe
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [AccountsService],
  bootstrap: [AppComponent]
})
export class AppModule { }

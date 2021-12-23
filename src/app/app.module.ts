import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { UserService } from './core/services/user.service';
import { QuestionsComponent } from './questions/questions.component';
import { QuestionComponent } from './question/question.component';
import { QuestionsService } from './core/services/questions.service';
import { FinalComponent } from './final/final.component';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { SafePipe } from './core/pipe/safe.pipe';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    QuestionsComponent,
    QuestionComponent,
    FinalComponent,
    SafePipe
  ],
  imports: [
    AppRoutingModule,
    BrowserAnimationsModule,
    BrowserModule,
    FormsModule,
    MDBBootstrapModule.forRoot()
  ],
  providers: [UserService, QuestionsService],
  bootstrap: [AppComponent]
})
export class AppModule {
}

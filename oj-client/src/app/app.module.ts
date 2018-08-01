import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {routing} from './app.routes';

import {DataService} from './services/data.service';
import {AuthService} from './services/auth.service';

import {AppComponent} from './app.component';
import {ProblemListComponent} from './components/problem-list/problem-list.component';
import {ProblemDetailComponent} from './components/problem-detail/problem-detail.component';
import {NewProblemComponent} from './components/new-problem/new-problem.component';
import {NavBarComponent} from './components/nav-bar/nav-bar.component';

@NgModule({
  declarations: [
    AppComponent,
    ProblemListComponent,
    ProblemDetailComponent,
    NewProblemComponent,
    NavBarComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    routing,
    HttpClientModule,
  ],
  providers: [{
    provide: 'data',
    useClass: DataService,
    },
    {
      provide: 'auth',
      useClass: AuthService,
    }],
  bootstrap: [AppComponent]
})
export class AppModule {
}

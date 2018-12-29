import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoursesComponent } from './courses/courses.component';
import { RouterModule } from '@angular/router';
import { TitlePipe } from './title.pipe';
import { PanelComponent } from './panel/panel.component';
import { DirectiveComponent } from './directive/directive.component';
import { ChildComponent } from './child/child.component';
import { ParentComponent } from './parent/parent.component';
import { TformComponent } from './tform/tform.component';

@NgModule({
  declarations: [
    AppComponent,
    CoursesComponent,
    TitlePipe,
    PanelComponent,
    DirectiveComponent,
    ChildComponent,
    ParentComponent,
    TformComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule.forRoot([
      {path:'', component:TformComponent}
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

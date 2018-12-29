import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FirstComponent } from './first/first.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { FooterComponent } from './footer/footer.component';
import { PrivacyPolicyComponent } from './privacy-policy/privacy-policy.component';
import { CoursesComponent } from './courses/courses.component';
import { ChildComponent } from './child/child.component';
import { ParentComponent } from './parent/parent.component';
import { DisplayComponent } from './display/display.component';
import { NgdirectiveComponent } from './ngdirective/ngdirective.component';

@NgModule({
  declarations: [
    AppComponent,
    FirstComponent,
    SidebarComponent,
    FooterComponent,
    PrivacyPolicyComponent,
    CoursesComponent,
    ChildComponent,
    ParentComponent,
    DisplayComponent,
    NgdirectiveComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

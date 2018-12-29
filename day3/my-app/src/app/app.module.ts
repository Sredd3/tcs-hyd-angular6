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
import { PanelComponent } from './panel/panel.component';
import { DetailsComponent } from './details/details.component';
import { Router, RouterModule } from '@angular/router';
import { NotFoundComponent } from './not-found/not-found.component';
import { NavbarComponent } from './navbar/navbar.component';
import { CourseDetailsComponent } from './course-details/course-details.component';

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
    NgdirectiveComponent,
    PanelComponent,
    DetailsComponent,
    NotFoundComponent,
    NavbarComponent,
    CourseDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule.forRoot([
      {
        path:'', 
        component:CoursesComponent
      },
      {
        path:'courses',
        component:CoursesComponent
      },
      {
        path:'courses/:id',
        component:CourseDetailsComponent
      },
      {
        path:'**',
        component:NotFoundComponent
      }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

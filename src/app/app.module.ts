import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloWorldComponent } from './hello-world/hello-world.component';
import {CourseNavigatorServiceClient} from './services/course-navigator-service-client';
import { CourseNavigatorComponent } from './course-navigator/course-navigator.component';
import { WhiteBoardComponent } from './white-board/white-board.component';
import {CourseServiceClient} from './services/course.service.client';
import { CourseGridComponent } from './course-grid/course-grid.component';
import {routing} from './app.routing';
import { CourseViewerComponent } from './course-viewer/course-viewer.component';
import { ModuleListComponent } from './module-list/module-list.component';
import {ModuleServiceClient} from './services/module.service.client';
import { LessonTabsComponent } from './lesson-tabs/lesson-tabs.component';
import {LessonsServiceClient} from './services/lessons.service.client';
import { LoginComponentComponent } from './login-component/login-component.component';
import { RegisterComponentComponent } from './register-component/register-component.component';
import { ProfileComponentComponent } from './profile-component/profile-component.component';
import { ProfileComponent } from './profile/profile.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { WidgetListComponent } from './widget-list/widget-list.component';

@NgModule({
  declarations: [
    AppComponent,
    HelloWorldComponent,
    CourseNavigatorComponent,
    WhiteBoardComponent,
    CourseGridComponent,
    CourseViewerComponent,
    ModuleListComponent,
    LessonTabsComponent,
    LoginComponentComponent,
    RegisterComponentComponent,
    ProfileComponentComponent,
    ProfileComponent,
    RegisterComponent,
    LoginComponent,
    WidgetListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    routing
  ],
  providers: [
    CourseNavigatorServiceClient,
    CourseServiceClient,
    ModuleServiceClient,
    LessonsServiceClient
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

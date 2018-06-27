import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

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
import { ProfileComponent } from './profile/profile.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { WidgetListComponent } from './widget-list/widget-list.component';
import {WidgetServiceClient} from './services/widget.service.client';
import {UserServiceClient} from './services/user.service.client';
import { SectionListComponent } from './section-list/section-list.component';
import {SectionServiceClient} from './services/section.service.client';
import { AdminComponent } from './admin/admin.component';
import { AdminSectionComponent } from './admin-section/admin-section.component';
import { AdminCourseGridComponent } from './admin-course-grid/admin-course-grid.component';
import { AdminSectionEditorComponent } from './admin-section-editor/admin-section-editor.component';
import { QuizListComponent } from './quiz-list/quiz-list.component';
import {QuizServiceClient} from './services/quiz.service.client';
import { QuizTakerComponent } from './quiz-taker/quiz-taker.component';
import { QuizSubmissionsComponent } from './quiz-submissions/quiz-submissions.component';

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
    ProfileComponent,
    RegisterComponent,
    LoginComponent,
    WidgetListComponent,
    SectionListComponent,
    AdminComponent,
    AdminSectionComponent,
    AdminCourseGridComponent,
    AdminSectionEditorComponent,
    QuizListComponent,
    QuizTakerComponent,
    QuizSubmissionsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    routing,
    ReactiveFormsModule
  ],
  providers: [
    CourseNavigatorServiceClient,
    CourseServiceClient,
    ModuleServiceClient,
    LessonsServiceClient,
    WidgetServiceClient,
    UserServiceClient,
    SectionServiceClient,
    QuizServiceClient
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

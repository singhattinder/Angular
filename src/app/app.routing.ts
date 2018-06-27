import { Routes, RouterModule } from '@angular/router';
import { WhiteBoardComponent } from './white-board/white-board.component';
import {CourseViewerComponent} from './course-viewer/course-viewer.component';
import {LoginComponent} from './login/login.component';
import {RegisterComponent} from './register/register.component';
import {ProfileComponent} from './profile/profile.component';
import {SectionListComponent} from './section-list/section-list.component';
import {AdminComponent} from './admin/admin.component';
import {AdminSectionComponent} from './admin-section/admin-section.component';
import {AdminSectionEditorComponent} from './admin-section-editor/admin-section-editor.component';
import {QuizListComponent} from './quiz-list/quiz-list.component';
import {QuizTakerComponent} from './quiz-taker/quiz-taker.component';
import {QuizSubmissionsComponent} from './quiz-submissions/quiz-submissions.component';



const appRoutes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full'},
  { path: 'home', component: WhiteBoardComponent},
  { path: 'login', component: LoginComponent},
  { path: 'register', component: RegisterComponent},
  { path: 'profile', component: ProfileComponent},
  { path: 'quiz/:quizId', component: QuizTakerComponent},
  { path: 'quiz/:quizId/submissions', component: QuizSubmissionsComponent},
  { path: 'quizzes', component: QuizListComponent},
  { path: 'admin', component: AdminComponent},
  { path: 'admin/:courseId/section', component: AdminSectionComponent},
  { path: 'admin/:courseId/section/:sectionId', component: AdminSectionEditorComponent},
  { path: 'course/:courseId', component: CourseViewerComponent },
  { path: 'course/:courseId/section', component: SectionListComponent },
  { path: 'course/:courseId/module/:moduleId', component: CourseViewerComponent },
  { path: 'course/:courseId/module/:moduleId/lesson/:lessonId', component: CourseViewerComponent },
  { path: '**', component: WhiteBoardComponent}, // last
];
export const routing = RouterModule.forRoot(appRoutes);

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './component/login/login.component';
import { RegistrationComponent } from './component/registration/registration.component';
import { DashboardComponent } from './component/dashboard/dashboard.component';
import { GetAllNotesComponent } from './component/get-all-notes/get-all-notes.component';

import { UpdateNoteComponent } from './component/update-note/update-note.component';
import { TrashComponent } from './component/trash/trash.component';
import { ArchiveComponent } from './component/archive/archive.component';
import { AuthenticationGuard } from './authentication.guard';

const routes: Routes = [
  { path: '', component: LoginComponent },

  { path: 'login', component: LoginComponent },
  { path: 'registration', component: RegistrationComponent },
  {path: 'dashboard',component: DashboardComponent,canActivate:[AuthenticationGuard],

    children: [
      { path: '', pathMatch: 'full', redirectTo: 'getallnotes' },
      { path: 'getallnotes', component: GetAllNotesComponent },
      { path: 'updatenotes', component: UpdateNoteComponent },
      { path: 'notes', component: GetAllNotesComponent },

      { path: 'trash', component: TrashComponent },
      { path: 'archive', component: ArchiveComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

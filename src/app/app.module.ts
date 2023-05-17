import { NgModule  } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon';
import {MatCardModule} from '@angular/material/card';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatListModule} from '@angular/material/list';

import {MatToolbarModule} from '@angular/material/toolbar';
import { MatSidenavModule} from '@angular/material/sidenav';
import {MatDialogModule} from '@angular/material/dialog';



import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './component/login/login.component';
import { RegistrationComponent } from './component/registration/registration.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { DashboardComponent } from './component/dashboard/dashboard.component';
import { SampleComponent } from './component/sample/sample.component';
import { CreateNoteComponent } from './component/create-note/create-note.component';
import { GetAllNotesComponent } from './component/get-all-notes/get-all-notes.component';
import { DisplaynotesComponent } from './component/displaynotes/displaynotes.component';
import { UpdateNoteComponent } from './component/update-note/update-note.component';
import { IconsComponent } from './component/icons/icons.component';
import { MatMenuModule } from '@angular/material/menu';
import { TrashComponent } from './component/trash/trash.component';
import { ArchiveComponent } from './component/archive/archive.component';
import { SearchpipePipe } from './Pipes/SearchPipe/searchpipe.pipe';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { AuthguardserviceService } from './Auth/authguardservice.service';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegistrationComponent,
    DashboardComponent,
    SampleComponent,
    CreateNoteComponent,
    GetAllNotesComponent,
    DisplaynotesComponent,
    UpdateNoteComponent,
    IconsComponent,
    TrashComponent,
    ArchiveComponent,
SearchpipePipe,
  ],
  imports: [
 
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatCardModule,
    MatCheckboxModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatDialogModule,
    MatMenuModule,
    MatSnackBarModule


    
    ],
  providers: [
    AuthguardserviceService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

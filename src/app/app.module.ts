import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { environment } from 'src/environments/environment';
// Angular Material
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import 'hammerjs';
// Angular Material Parts
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule, MatButtonModule, MatCheckboxModule, MatRadioModule,
  MatSelectModule, MatNativeDateModule, MatSlider, MatSliderModule } from '@angular/material';
import { MatDialogModule } from '@angular/material/dialog';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatBadgeModule } from '@angular/material/badge';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatTableModule } from '@angular/material/table';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatToolbarModule } from '@angular/material/toolbar';
// CDK
import { OverlayModule } from '@angular/cdk/overlay';
import { PortalModule } from '@angular/cdk/portal';
// Firebase
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
// MyModule
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/page/login/login.component';
import { MainComponent } from './components/page/main/main.component';
import { AuthGuard } from 'src/app/guards/auth.guard';
import { ForbiddenValidatorDirective } from './shared/validators/forbidden-validator.directive';
import { PageNotFoundComponent } from './components/page/page-not-found/page-not-found.component';
import { ConfirmDialogComponent } from './components/commons/confirm-dialog/confirm-dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    ConfirmDialogComponent,
    LoginComponent,
    MainComponent,
    ForbiddenValidatorDirective,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    // Firebase
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    // Angular Material
    BrowserAnimationsModule,
    // Angular Material Parts
    MatDialogModule,
    MatFormFieldModule,
    MatButtonModule,
    MatCheckboxModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatTableModule,
    MatRadioModule,
    MatSelectModule,
    MatSlideToggleModule,
    MatInputModule,
    MatSliderModule,
    MatIconModule,
    MatBadgeModule,
    MatTooltipModule,
    MatCardModule,
    MatToolbarModule,
    //
    AppRoutingModule,
  ],
  providers: [
    AuthGuard
  ],
  entryComponents: [
    // HTMLに出てこないが、動的に作成されるものを登録
    ConfirmDialogComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

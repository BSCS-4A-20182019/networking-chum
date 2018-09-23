import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ProfileComponent } from './profile/profile.component';
import { TooltipModule } from 'ngx-bootstrap/tooltip';



import { AppComponent } from './app.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MainComponent } from './main/main.component';
import { AppRoutingModule } from './app-routing.module';
import { DynamicFormComponent } from './dynamic-form/dynamic-form.component';
import { HeaderComponent } from './header-footer/header.component';
import { FooterComponent } from './header-footer/footer.component';
import { SignupComponent } from './profile/signup.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { SideNavComponent } from './side-nav/side-nav.component';

import { HttpClientModule, HttpClient } from '@angular/common/http';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

import { ApiService } from './shared/services/api.service';
import { QuestionsService } from './shared/services/questions.service';

import { MainResolver } from './main/services/main.resolver';

export function HttpLoaderFactory(httpClient: HttpClient) {
    return new TranslateHttpLoader(httpClient, "/assets/i18n/", ".json");
}

@NgModule({
  declarations: [
    AppComponent,
    ProfileComponent,
    MainComponent,
    DynamicFormComponent,
    HeaderComponent,
    FooterComponent,
    SignupComponent,
    NavBarComponent,
    SideNavComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    AppRoutingModule,
    TooltipModule.forRoot(),
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    })
  ],
  providers: [
    ApiService,
    QuestionsService,
    MainResolver
  ],
  exports: [
    TranslateModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

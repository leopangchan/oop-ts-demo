import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CourseComponent } from './course/course.component';
import { HttpDataService } from './http-data.service';
import { CourseService } from './course/course.service';

@NgModule({
  declarations: [
    AppComponent,
    CourseComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [HttpDataService, CourseService],
  bootstrap: [AppComponent]
})
export class AppModule { }

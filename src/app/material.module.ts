import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule,MatToolbarModule,MatInputModule,MatCardModule } from '@angular/material';


@NgModule({
imports: [
    MatButtonModule,
    MatToolbarModule,
    MatInputModule,
    MatCardModule
],
exports: [
    MatButtonModule,
    MatToolbarModule,
    MatInputModule,
    MatCardModule

]
})
export class MaterialAppModule { }

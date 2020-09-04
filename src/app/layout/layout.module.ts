import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { HeaderComponent } from './header/header.component';
import { MainNavbarComponent } from './header/main-navbar/main-navbar.component';
import { SmallNavbarComponent } from './header/small-navbar/small-navbar.component';
import { PagesComponent } from './pages/pages.component';
import { FooterComponent } from './footer/footer.component';
import { MainFooterComponent } from './footer/main-footer/main-footer.component';
import { SmallFooterComponent } from './footer/small-footer/small-footer.component';

@NgModule({
    declarations: [
        HeaderComponent,
        MainNavbarComponent,
        SmallNavbarComponent,
        PagesComponent,
        FooterComponent,
        MainFooterComponent,
        SmallFooterComponent
    ],
    imports: [
        CommonModule,
        FontAwesomeModule
    ],
    exports: [
        HeaderComponent,
        MainNavbarComponent,
        SmallNavbarComponent,
        PagesComponent,
        FooterComponent,
        MainFooterComponent,
        SmallFooterComponent
    ]
    
})
export class LayoutModule { }
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppModuleShared } from './app.shared.module';
import { AppComponent } from './components/app/app.component';

// my imports
import { MyService } from './services/myservice.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
    bootstrap: [ AppComponent ],
    imports: [
        BrowserModule,
        // this is added for some of the animations performed by the Angular Materials where browser don't yet support polyfills
        // https://material.angular.io/guide/getting-started 
        BrowserAnimationsModule,
        AppModuleShared
    ],
    providers: [
        // declare your injectable services here
        MyService,
        {
            provide: 'BASE_URL', useFactory: getBaseUrl
        }
    ]
})
export class AppModule {
}

export function getBaseUrl() {
    return document.getElementsByTagName('base')[0].href;
}

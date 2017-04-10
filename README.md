# NgBox

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.0.0.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## app.module.ts

Add the following imports to your app.module.ts

<p>import { NgBoxModule } from './ngbox/ngbox.module';</p>
<p>import { NgBoxService } from './ngbox/ngbox.service';</p>
<p>import { AppComponent } from './app.component';</p>
<p>import { CommonModule } from '@angular/common';</p>

Add these to the import `NgBoxModule, BrowserModule, CommonModule`
And this to services `NgBoxService`

## app.component.html

Add this at the top `<ngbox></ngbox>` of your root html file.

## ngBox

Add `ng-box` to your image or tou your links. The required param is `src` or `href`

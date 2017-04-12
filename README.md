## install npm package
`npm install ngbox -g`

## app.module.ts

Add the following imports to your app.module.ts

`import { NgBoxModule } from 'ngbox/ngbox.module'`;

`import { NgBoxService } from 'ngbox/ngbox.service'`;

`import { CommonModule } from '@angular/common'`;

Add to imports `NgBoxModule, BrowserModule, CommonModule`

Add to services `NgBoxService`

## app.component.html

Add this at the top `<ngbox></ngbox>` of your root html file.

## ngBox

Add `ng-box` to your image or to your links. The required param is `src` or `href`

## Demo

[Demo](http://ngmodules.eu/)

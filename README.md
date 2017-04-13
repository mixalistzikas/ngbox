## install npm package
`npm install ngbox@latest -i`

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


## Attributes
 `src` or `href` (The source file/video/link as a string)
 
 `[src]` or `[href]` (The source file/video/link as a variable)
 
 
 `group="myGroup"` (grouping as a string)
 
 `[group]="group"` (grouping as a variable)
 
 `[image]="true"` (if the path or the source has .jpg or .png it will open automatically, if not then you need to specify that this source is an image)
 
 `[width]="800" [height]="800"`
 
 `title="This is a title"`
 
 `[cache]="true"` (if you want to preload an image)
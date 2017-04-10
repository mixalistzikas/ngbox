import { Component, Input, Output, EventEmitter, ViewChild, ElementRef, HostListener, DoCheck } from '@angular/core';
import { NgBoxService } from './ngbox.service';


@Component({
    selector: 'my-ngbox, ngbox',
    template: `
        <div id="ngBoxLoading" *ngIf="ngBox.loading"><img src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNv
ZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+PHN2ZyB4bWxuczpzdmc9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxucz0iaHR0cD
ovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB2ZXJzaW9uPSIxLjAiIHdpZHRo
PSIxNjBweCIgaGVpZ2h0PSIyMHB4IiB2aWV3Qm94PSIwIDAgMTI4IDE2IiB4bWw6c3BhY2U9InByZXNlcnZlIj48c2NyaXB0IHR5cGU9InRleHQvZW
NtYXNjcmlwdCIgeGxpbms6aHJlZj0iLy9wcmVsb2FkZXJzLm5ldC9qc2NyaXB0cy9zbWlsLnVzZXIuanMiLz48cGF0aCBmaWxsPSIjZmZmZmZmIiBm
aWxsLW9wYWNpdHk9IjAuNDE5NjA3ODQzMTM3MjUiIGQ9Ik02LjQsNC44QTMuMiwzLjIsMCwxLDEsMy4yLDgsMy4yLDMuMiwwLDAsMSw2LjQsNC44Wm
0xMi44LDBBMy4yLDMuMiwwLDEsMSwxNiw4LDMuMiwzLjIsMCwwLDEsMTkuMiw0LjhaTTMyLDQuOEEzLjIsMy4yLDAsMSwxLDI4LjgsOCwzLjIsMy4y
LDAsMCwxLDMyLDQuOFptMTIuOCwwQTMuMiwzLjIsMCwxLDEsNDEuNiw4LDMuMiwzLjIsMCwwLDEsNDQuOCw0LjhabTEyLjgsMEEzLjIsMy4yLDAsMS
wxLDU0LjQsOCwzLjIsMy4yLDAsMCwxLDU3LjYsNC44Wm0xMi44LDBBMy4yLDMuMiwwLDEsMSw2Ny4yLDgsMy4yLDMuMiwwLDAsMSw3MC40LDQuOFpt
MTIuOCwwQTMuMiwzLjIsMCwxLDEsODAsOCwzLjIsMy4yLDAsMCwxLDgzLjIsNC44Wk05Niw0LjhBMy4yLDMuMiwwLDEsMSw5Mi44LDgsMy4yLDMuMi
wwLDAsMSw5Niw0LjhabTEyLjgsMEEzLjIsMy4yLDAsMSwxLDEwNS42LDgsMy4yLDMuMiwwLDAsMSwxMDguOCw0LjhabTEyLjgsMEEzLjIsMy4yLDAs
MSwxLDExOC40LDgsMy4yLDMuMiwwLDAsMSwxMjEuNiw0LjhaIi8+PGc+PHBhdGggZmlsbD0iI2ZmZmZmZiIgZmlsbC1vcGFjaXR5PSIxIiBkPSJNLT
QyLjcsMy44NEE0LjE2LDQuMTYsMCwwLDEtMzguNTQsOGE0LjE2LDQuMTYsMCwwLDEtNC4xNiw0LjE2QTQuMTYsNC4xNiwwLDAsMS00Ni44Niw4LDQu
MTYsNC4xNiwwLDAsMS00Mi43LDMuODRabTEyLjgtLjY0QTQuOCw0LjgsMCwwLDEtMjUuMSw4YTQuOCw0LjgsMCwwLDEtNC44LDQuOEE0LjgsNC44LD
AsMCwxLTM0LjcsOCw0LjgsNC44LDAsMCwxLTI5LjksMy4yWm0xMi44LS42NEE1LjQ0LDUuNDQsMCwwLDEtMTEuNjYsOGE1LjQ0LDUuNDQsMCwwLDEt
NS40NCw1LjQ0QTUuNDQsNS40NCwwLDAsMS0yMi41NCw4LDUuNDQsNS40NCwwLDAsMS0xNy4xLDIuNTZaIi8+PGFuaW1hdGVUcmFuc2Zvcm0gYXR0cm
lidXRlTmFtZT0idHJhbnNmb3JtIiB0eXBlPSJ0cmFuc2xhdGUiIHZhbHVlcz0iMjMgMDszNiAwOzQ5IDA7NjIgMDs3NC41IDA7ODcuNSAwOzEwMCAw
OzExMyAwOzEyNS41IDA7MTM4LjUgMDsxNTEuNSAwOzE2NC41IDA7MTc4IDAiIGNhbGNNb2RlPSJkaXNjcmV0ZSIgZHVyPSI3ODBtcyIgcmVwZWF0Q2
91bnQ9ImluZGVmaW5pdGUiLz48L2c+PC9zdmc+Cg=="/></div>
        <div id="ngBoxWrapper" (click)="closeOutside($event)" *ngIf="ngBox.open" [ngStyle]="{'padding-top': offsetHeight+'px'}">
            <div id="ngBoxContent">
                <img *ngIf="getHasGroup()" class="left" (click)="previousNgBox()" src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvb
j0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4NCjwhLS0gR2VuZXJhdG9yOiBBZG9iZSBJbGx1c3RyYXRvciAxNS4xLjAsIFNWRyBFeHBvcnQgUGx1Zy1JbiAuIFNWRyB
WZXJzaW9uOiA2LjAwIEJ1aWxkIDApICAtLT4NCjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL
0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+DQo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDA
wL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4Ig0KCSB3aWR0aD0iNzBweCIgaGVpZ2h0PSIxMDBwe
CIgdmlld0JveD0iMCAwIDcwIDEwMCIgZW5hYmxlLWJhY2tncm91bmQ9Im5ldyAwIDAgNzAgMTAwIiB4bWw6c3BhY2U9InByZXNlcnZlIj4NCjxwb2x5Z29uIGZpbGw
9IiNGRkZGRkYiIHN0cm9rZT0iIzZCNkI2QiIgc3Ryb2tlLW1pdGVybGltaXQ9IjEwIiBwb2ludHM9IjQ1LjYsOTguNTI0IDE0LjU0NCw1MCA0NS42LDEuNDc2IDQ4L
jgwMSwzLjUyNCAxOS4wNTYsNTAgDQoJNDguODAxLDk2LjQ3NiAiLz4NCjwvc3ZnPg0K">
                <img *ngIf="getHasGroup()" class="right" (click)="nextNgBox()" src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0i
MS4wIiBlbmNvZGluZz0idXRmLTgiPz4NCjwhLS0gR2VuZXJhdG9yOiBBZG9iZSBJbGx1c3RyYXRvciAxNS4xLjAsIFNWRyBFeHBvcnQgUGx1Zy1JbiAuIFNWRyBWZX
JzaW9uOiA2LjAwIEJ1aWxkIDApICAtLT4NCjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dy
YXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+DQo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3
N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4Ig0KCSB3aWR0aD0iNzBweCIgaGVpZ2h0PSIxMDBweCIg
dmlld0JveD0iMCAwIDcwIDEwMCIgZW5hYmxlLWJhY2tncm91bmQ9Im5ldyAwIDAgNzAgMTAwIiB4bWw6c3BhY2U9InByZXNlcnZlIj4NCjxwb2x5Z29uIGZpbGw9Ii
NGRkZGRkYiIHN0cm9rZT0iIzZCNkI2QiIgc3Ryb2tlLW1pdGVybGltaXQ9IjEwIiBwb2ludHM9IjE3Ljc0Niw5OC41MjQgNDguODAxLDUwIDE3Ljc0NiwxLjQ3NiAx
NC41NDUsMy41MjQgDQoJNDQuMjg5LDUwIDE0LjU0NSw5Ni40NzYgIi8+DQo8L3N2Zz4NCg==">
                <img *ngIf="ngBox.current.type == 1"
                     (load)="isLoaded()" 
                     #ngBoxContent 
                     [src]="ngBox.current.url"
                     [hidden]="ngBox.loading" 
                     (click)="nextNgBox()"
                     alt="">
                <iframe *ngIf="ngBox.current.type == 2" 
                        #ngBoxContent
                        [src]="ngBox.current.url"
                        width="{{ngBox.current.width}}"
                        height="{{ngBox.current.height}}"
                        frameborder="0"
                        allowfullscreen>
                </iframe>
                <iframe *ngIf="ngBox.current.type == 3" 
                        [src]="ngBox.current.url"
                        #ngBoxContent
                        width="{{ngBox.current.width}}"
                        height="{{ngBox.current.height}}"
                        frameborder="0" 
                        webkitallowfullscreen 
                        mozallowfullscreen 
                        allowfullscreen>
                </iframe>
                <iframe *ngIf="ngBox.current.type == 4" 
                        #ngBoxContent
                        [src]="ngBox.current.url"
                        frameborder="0"
                        width="{{ngBox.current.width}}"
                        height="{{ngBox.current.height}}"
                        allowfullscreen>
                </iframe>
            </div>
            <div #ngBoxButtons id="buttons" [hidden]="ngBox.loading">
                <p>
                    <span class="title" *ngIf="ngBox.current.title">{{ngBox.current.title}}<br/></span>
                    <span class="pages" *ngIf="getHasGroup()">{{getCurrentIndex()}} of {{getCount()}}</span>
                </p>
                <img (click)="closeNgBox()" id="closeButton" src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZG
luZz0idXRmLTgiPz4NCjwhLS0gR2VuZXJhdG9yOiBBZG9iZSBJbGx1c3RyYXRvciAxNS4xLjAsIFNWRyBFeHBvcnQgUGx1Zy1JbiAuIFNWRyBWZXJzaW9uOiA2LjAw
IEJ1aWxkIDApICAtLT4NCjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy
8xLjEvRFREL3N2ZzExLmR0ZCI+DQo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6
eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4Ig0KCSB3aWR0aD0iMzBweCIgaGVpZ2h0PSIzMHB4IiB2aWV3Qm94PSIwID
AgMzAgMzAiIGVuYWJsZS1iYWNrZ3JvdW5kPSJuZXcgMCAwIDMwIDMwIiB4bWw6c3BhY2U9InByZXNlcnZlIj4NCjxwb2x5Z29uIGZpbGw9IiNGRkZGRkYiIHN0cm9r
ZT0iIzZCNkI2QiIgc3Ryb2tlLW1pdGVybGltaXQ9IjEwIiBwb2ludHM9IjI4LjUsMi44NCAyNS40NjMsMS41IDE1LDEyLjc0OSA0LjUzOSwxLjUgMS41LDIuODQgDQ
oJMTIuODExLDE1IDEuNSwyNy4xNiA0LjUzOSwyOC41IDE1LDE3LjI1MSAyNS40NjMsMjguNSAyOC41LDI3LjE2IDE3LjE4OSwxNSAiLz4NCjwvc3ZnPg0K" alt="">
            </div>


            
            
            

        </div>
    `,
    styles: [`
        #ngBoxLoading{
            text-align: center;
            z-index: 10001;
            width: 100%;
            height: 100%;
            color: white;
            position: fixed;
            top: 46%;
            font-size: 20px;
        }
        #ngBoxWrapper {
            background-color: rgba(0, 0, 0, 0.9);
            position: fixed;
            top: 0px;
            left: 0px;
            text-align: center;
            z-index: 10000;
            width: 100%;
            height: 100%;
        }

        #ngBoxWrapper #ngBoxContent img {
            -webkit-border-radius: 4px;
            -moz-border-radius: 4px;
            border-radius: 4px;
        }

        #ngBoxContent {
            display: block;
        }

        button {
            font-size: 12px;
        }

        iframe {
            max-width: 100%;
            max-height: 100%;
        }
        #buttons{
            position: relative;
            margin: 5px auto;
            text-align: right;
        }
        #buttons p{
            float: left;
            color: white;
            text-align: left;
            margin: 0 50px 0 0;
            font-size: 12px;
            font-family: sans-serif;
        }
        #buttons span.title{
            display: block;
            height: 18px;
            overflow: hidden;
        }
        #closeButton{
            position: absolute;
            top: 0px;
            right: 0px;
            cursor: pointer;
        }
        .left{
            position: fixed;
            left: -5px;
            margin-top: -42px;
            cursor: pointer;
            top: 50%;
        }
        .right{
            position: fixed;
            right: -10px;
            margin-top: -42px;
            cursor: pointer;
            top: 50%;
        }
    `]
})
export class NgBoxComponent implements DoCheck {

    offsetHeight: number;
    interval: any;
    @Input() data: any;
    @Output() showMore = new EventEmitter();
    @ViewChild('ngBoxContent') elementView: ElementRef;
    @ViewChild('ngBoxButtons') elementButtons: ElementRef;

    constructor(
        public ngBox: NgBoxService
    ) {
    }

    ngDoCheck() {
        if (this.ngBox.open === true && this.elementView === undefined) {
            this.checkInterval();
        }
    }

    closeOutside($event) {
        if ($event.target.getAttribute('id') === 'ngBoxContent' || $event.target.getAttribute('id') === 'ngBoxWrapper') {
            this.closeNgBox();
        }
    }

    checkInterval() {
        let t = setInterval(() => {
            if (this.elementView && this.elementButtons  ) {
                this.resize();
                // Stop Loading on frames
                if (this.ngBox.current.type === 2 || this.ngBox.current.type === 3 || this.ngBox.current.type === 4) {
                    this.ngBox.loading = false;
                }

                clearInterval(t);
            }
        }, 10);
    }

    closeNgBox() {
        this.ngBox.open = false;
    }

    elementExist() {
        if (this.elementView !== undefined) {
            return true;
        }
        return false;
    }

    @HostListener('window:resize', ['$event'])
    resize() {
        // Resize big images

        if ( this.elementView && this.elementButtons) {
            let currentWidth = this.calcPercent(this.ngBox.current.width, window.innerWidth);
            let currentHeight = this.calcPercent(this.ngBox.current.height, window.innerHeight);

            let realWidth   = this.elementView.nativeElement.naturalWidth ?
                              this.elementView.nativeElement.naturalWidth : currentWidth;
            let realHeight  = this.elementView.nativeElement.naturalHeight ?
                              this.elementView.nativeElement.naturalHeight : currentHeight;


            let maxWidth    = Math.min((window.innerWidth - 70), currentWidth ? currentWidth : realWidth);
            let maxHeight   = Math.min((window.innerHeight - 60), currentHeight ? currentHeight : realHeight);

            let ratio       = Math.min( maxWidth / realWidth, maxHeight / realHeight);

            this.elementView.nativeElement.width    = realWidth * ratio;
            this.elementView.nativeElement.height   = realHeight * ratio;


            this.elementButtons.nativeElement.style.width = this.elementView.nativeElement.offsetWidth + 'px';

            // Calculate top padding
            this.offsetHeight = (window.innerHeight - 40 - this.elementView.nativeElement.offsetHeight) / 2;
            if (this.offsetHeight < 0) {
                this.offsetHeight = 0;
            }
        }
    }




    @HostListener('window:keydown', ['$event'])
    checkKeyPress(event: KeyboardEvent) {
        if ( event.keyCode === 39 ) {
            this.nextNgBox();
        }else if ( event.keyCode === 37 ) {
            this.previousNgBox();
        }else if ( event.keyCode === 27 ) {
            this.closeNgBox();
        }
    }

    calcPercent(value, of) {
        if (value !== undefined && value.toString().search('%') >= 0) {
            return of * parseInt(value.toString(), 0) / 100;
        }
        return value;
    }

    getHasGroup() {
        return this.ngBox.current.group !== undefined;
    }

    getCount() {
        return this.ngBox.images.filter(image => image.group === this.ngBox.current.group).length;
    }

    getCurrentIndex() {
        let currentGroup = this.ngBox.images.filter(image => image.group === this.ngBox.current.group);
        return currentGroup.map(function (e) {
            return e.id;
        }).indexOf(this.ngBox.current.id) + 1;
    }

    nextNgBox() {
        if ( this.ngBox.current.group === undefined ) {
            return false;
        }
        this.ngBox.loading = true;
        let currentGroup = this.ngBox.images.filter(image => image.group === this.ngBox.current.group);
        let pos = currentGroup.map(function (e) {
            return e.id;
        }).indexOf(this.ngBox.current.id);
        if (pos >= currentGroup.length - 1) {
            this.ngBox.current = currentGroup[0];
        } else {
            this.ngBox.current = currentGroup[pos + 1];
        }
        this.checkInterval();
    }

    previousNgBox() {
        if ( this.ngBox.current.group === undefined ) {
            return false;
        }
        this.ngBox.loading = true;
        let currentGroup = this.ngBox.images.filter(image => image.group === this.ngBox.current.group);
        let pos = currentGroup.map(function (e) {
            return e.id;
        }).indexOf(this.ngBox.current.id);
        if (pos === 0) {
            pos = currentGroup.length;
        }
        this.ngBox.current = currentGroup[pos - 1];
        this.checkInterval();
    }

    isLoaded() {
        if (this.ngBox.current.type === 1) {
            this.ngBox.loading = false;
        }

        this.checkInterval();
    }

}

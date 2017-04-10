import { Directive, AfterViewInit, HostListener, Input, OnDestroy } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { NgBoxService } from './ngbox.service';

@Directive({
    selector: '[myNgBox],[ng-box]'
})
export class NgBoxDirective implements AfterViewInit, OnDestroy {

    id: number;
    data: {};
    @Input() src: any;
    @Input() href: any;
    @Input() title: string;
    @Input() width: string;
    @Input() height: string;
    @Input() group: string;
    @Input() cache: boolean;
    @Input() image: boolean;

    constructor(
        public ngBox: NgBoxService,
        public sanitizer: DomSanitizer
    ) {
    }

    ngOnDestroy() {
        let pos = this.ngBox.images.map(function(e) { return e.id; }).indexOf(this.id);
        this.ngBox.images.splice(pos, 1);
    }

    ngAfterViewInit() {
        this.ngBox.id = this.id = this.ngBox.id + 1;
        this.src = this.src ? this.src : this.href;
        this.data = this.getData(this.src);
        this.ngBox.images.push( this.data );
    }

    @HostListener('click', ['$event'])
    onClick($event) {
        $event.preventDefault();
        this.ngBox.loading = true;
        this.ngBox.current = this.data;
        this.ngBox.open = true;
    }

    getData(url: string): SafeResourceUrl | boolean {
        if (url !== undefined || url !== '') {
            // Youtube
            let regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=|\?v=)([^#\&\?]*).*/;
            let match = url.match(regExp);
            if (match && match[2].length === 11) {
                return {
                    id: this.id,
                    url: this.sanitizer.bypassSecurityTrustResourceUrl('https://www.youtube.com/embed/' + match[2] + '?autoplay=0'),
                    type: 2,
                    title: this.title,
                    width: this.width ? this.width : 640,
                    height: this.height ? this.height : 380,
                    group: this.group
                };
            }
            // Vimeo
            regExp = /^.*(vimeo\.com\/)((channels\/[A-z]+\/)|(groups\/[A-z]+\/videos\/))?([0-9]+)/;
            match = url.match(regExp);
            if (match && match[5].length === 8) {
                return {
                    id: this.id,
                    url: this.sanitizer.bypassSecurityTrustResourceUrl('https://player.vimeo.com/video/' + match[5]),
                    type: 3,
                    title: this.title,
                    width: this.width ? this.width : 640,
                    height: this.height ? this.height : 380,
                    group: this.group
                };
            }
            if (!url.match(/\.(png|jpg|jpeg|gif|JPG|PNG|JPEG|GIF)$/) && this.image !== true) {

                return {
                    id: this.id,
                    url: this.sanitizer.bypassSecurityTrustResourceUrl(url),
                    type: 4,
                    title: this.title,
                    width: this.width ? this.width : 1000,
                    height: this.height ? this.height : 480,
                    group: this.group
                };
            }
/*            if (url.search('photoshooter') >= 0 || url.search('news247') >= 0) {
                return {
                    id: this.id,
                    url: this.sanitizer.bypassSecurityTrustResourceUrl(url),
                    type: 4,
                    title: this.title,
                    width: this.width ? this.width : 1000,
                    height: this.height ? this.height : 480,
                    group: this.group
                };
            }*/
            if (this.cache) { (new Image()).src = url; }
            return {
                id: this.id,
                url: url,
                type: 1,
                title: this.title,
                width: this.width,
                height: this.height,
                group: this.group
            };

        }
    }


}

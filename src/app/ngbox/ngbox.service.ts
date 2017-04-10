import { Injectable } from '@angular/core';

@Injectable()
export class NgBoxService {

    public id = 0;
    public current: any;
    public loading = false;
    public open = false;
    public images: any = [];

    constructor() { }

}

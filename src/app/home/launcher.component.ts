import { AfterViewInit, Component, ViewChild, ElementRef } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/fromevent';
import { Router } from '@angular/router';

@Component({
    selector: 'app-launcher',
    template: `
        <div class="container">
            <div class="form-group">
                <input #txtId placeholder="Enter Application Id" class="form-control" />
                <div class ="group-control">
                    <button #btnLaunch class="btn btn-success btn-lg">Launch</button>
                </div>
            </div>
        </div>
    `
})
export class LauncherComponent implements AfterViewInit {
    @ViewChild('txtId') input: ElementRef;
    @ViewChild('btnLaunch') launch: ElementRef;
    click$;

    constructor(private router: Router) {
    }

    ngAfterViewInit() {
        this.click$ = Observable.fromEvent(this.launch.nativeElement, 'click').subscribe(() => {
            this.router.navigate(['home', this.input.nativeElement.value]);
        });
    }
}
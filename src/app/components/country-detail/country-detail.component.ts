import { Component, OnInit } from '@angular/core';
import { ActivatedRoute} from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
    selector: 'app-country-detail',
    templateUrl: './country-detail.component.html',
    styleUrls: ['./country-detail.component.less']
})
export class CountryDetailComponent implements OnInit {
    constructor(private route: ActivatedRoute){
    }
    public location: string;
    private querySubscription: Subscription;
    public ngOnInit(): void {
        this.querySubscription = this.route.queryParams.subscribe((param: any) => {
            this.location = param.location;
        });
    }
}

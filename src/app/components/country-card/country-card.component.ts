import { Component, OnDestroy, OnInit, Input } from '@angular/core';
import { Subscription } from 'rxjs';
import { TotalNumberResponse } from 'src/app/models/total-number-response.model';
import { HttpRestService } from 'src/app/services/http-rest.service';

@Component({
    selector: 'app-show-total-numbers',
    templateUrl: './country-card.component.html',
    styleUrls: ['./country-card.component.less']
})
export class CountryCardComponent implements OnInit, OnDestroy {
    constructor(private service: HttpRestService){
    }
    public subscription = new Subscription();
    public totalNumber: number;
    public flagImageUrl: string;
    public location: string;
    public loading: boolean;
    @Input()
    public countryCode: string;
    @Input()
    public country: string;

    public ngOnInit(): void {
        this.loading = true;
        this.flagImageUrl = `http://www.geonames.org/flags/x/${this.countryCode}.gif`;
        this.subscription.add(this.service.loadTotalInfo(this.country)
            .subscribe((data: TotalNumberResponse) => {
                this.totalNumber = data.data.confirmed;
                this.location = data.data.location;
                this.loading = false;
            })
        );
    }

    public ngOnDestroy(): void {
        this.subscription.unsubscribe();
    }
}

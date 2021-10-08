import { Component, OnDestroy, OnInit, Input } from "@angular/core";
import { Observable, Subscription } from "rxjs";
import { TotalNumberResponse } from "src/app/models/total-number-response.model";
import { HttpRestService } from "src/app/services/http-rest.service";

@Component({
    selector: 'show-total-numbers',
    templateUrl: './show-total-numbers.component.html',
    styleUrls: ['./show-total-numbers.component.less']
})
export class ShowTotalNumbersComponent implements OnInit, OnDestroy {
    constructor(private service: HttpRestService){
    }
    public subscription = new Subscription();
    public _totalNumber: number;
    public _flagImageUrl: string;
    public _location: string;
    public loading: boolean;
    @Input()
    public countryCode: string;
    @Input()
    public country: string;

    public ngOnInit(): void {
        this.loading = true;
        this._flagImageUrl = `http://www.geonames.org/flags/x/${this.countryCode}.gif`;
        this.subscription.add(this.service.loadTotalInfo(this.country)
            .subscribe((data: TotalNumberResponse) => {
                this._totalNumber = data.data.confirmed;
                this._location = data.data.location;
                this.loading = false;
            })
        );
    }

    public ngOnDestroy(): void {
        this.subscription.unsubscribe();
    }

}
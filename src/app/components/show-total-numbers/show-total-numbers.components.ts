import { Component, OnDestroy, OnInit } from "@angular/core";
import { Observable, Subscription } from "rxjs";
import { TotalNumberResponse } from "src/app/models/total-number-response.model";
import { HttpRestService } from "src/app/services/http-rest.service";

@Component({
    selector: 'show-total-numbers',
    templateUrl: './show-total-numbers.component.html'
})
export class ShowTotalNumbersComponent implements OnInit, OnDestroy {
    constructor(private service: HttpRestService){
    }
    public subscription = new Subscription();
    public _totalNumber: number;

    public ngOnInit(): void {
        this.subscription.add(this.service.loadUkraineTotalNumber()
            .subscribe((data: TotalNumberResponse) => {
                this._totalNumber = data.data.confirmed;
                console.log(data)
            })
        );
    }

    public ngOnDestroy(): void {
        this.subscription.unsubscribe();
    }

}
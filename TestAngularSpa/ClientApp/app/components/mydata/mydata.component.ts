import {MyService} from "../../services/myservice.service";
import { Component, OnInit } from "@angular/core";
import {IMyData} from "../../dtos/mydata.dto";

@Component({
    selector: 'mydata',
    templateUrl: 'mydata.component.html'
})
export class MyDataComponent implements OnInit {

    private isBusy: boolean = true;
    public model: IMyData[];

    constructor(private dataService: MyService) { }

    // this is the method called on initialisation of the component
    // so you can stick your async ops in here
    ngOnInit(): void {
        this.isBusy = true;

        this.dataService.getMyData()
            .subscribe(result => {
                    this.isBusy = false;
                    // pump the result out into the broswer debug console:
                    console.debug(JSON.stringify(result));

                    this.model = result;
                },
                error => {
                    alert('Bang :(');
                    console.error(error);
                });
    }
}
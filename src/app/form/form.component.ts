import { Component, OnInit } from '@angular/core';
import { FormDataSourceService } from './form-data-source.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  buttonName: string | undefined;
  kpiData: any = [];
  locationYear: any = [];

  constructor(private formDataSourceService: FormDataSourceService) { }

  ngOnInit(): void {
    this.formDataSourceService.getKPIData().subscribe(resp => {
      this.kpiData = resp;

      this.kpiData.forEach((item: any) => {
        if (this.locationYear.find((newItem: any) => newItem.locationName === item.locationName) === undefined) {
          this.locationYear.push({ locationName: item.locationName, year: item.year, class: null });
        }
      });

      this.locationYear[0].class = 'active';
    });
  }

}

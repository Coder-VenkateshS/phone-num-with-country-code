import { Component } from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import {
  SearchCountryField,
  TooltipLabel,
  CountryISO
} from "ngx-intl-tel-input";

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  SearchCountryField = SearchCountryField;
  TooltipLabel = TooltipLabel;
  CountryISO = CountryISO;
  preferredCountries: CountryISO[] = [CountryISO.Qatar];
  phoneForm = new FormGroup({
    phone: new FormControl("", [Validators.required])
  });

  ngOnInit(): void {
    this.phoneForm.patchValue({
      number: "+97431422391",
      internationalNumber: "+974 3142 2391",
      nationalNumber: "3142 2391",
      countryCode: "QA",
      dialCode: "+974"
    });
  }
}

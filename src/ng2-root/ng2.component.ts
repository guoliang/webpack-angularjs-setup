import { Component, Inject } from "@angular/core";
import { TestService } from "../ng1-services/test-service";

@Component({
  selector: "ng2-component",
  template: `
    <h1>ng2 component</h1>
    <a uiSref="app">Back to app</a>
    <p>Test {{ testService.getTestStatus() }}</p>
    <ui-view></ui-view>
  `
})
export class Ng2Component {
  constructor(
    @Inject("TestService") public testService: TestService) {
      console.info("From ng2 component", testService.getTestStatus());
    }
  ngOnInit() {
    console.log("Ng2Component.ngOnInit()");
  }
}

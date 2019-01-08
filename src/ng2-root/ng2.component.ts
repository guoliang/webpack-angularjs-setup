import { Component } from "@angular/core";

@Component({
  selector: "ng2-component",
  template: `
    <h1>ng2 component</h1>
    <a uiSref="app">Back to app</a>
    <ui-view></ui-view>
  `
})
export class Ng2Component {
  ngOnInit() {
    console.log("Ng2Component.ngOnInit()");
  }
}

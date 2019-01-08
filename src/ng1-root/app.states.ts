import { Ng2Component } from "../ng2-root/ng2.component";
import { ng1RootModule } from "./ng1-root.module";

import {
  Ng1StateDeclaration,
  StateProvider,
  StateRegistry,
  UrlRouterProvider,
  UrlService
} from "@uirouter/angularjs";
import { TestService } from "../ng1-services/test-service";

ng1RootModule.run(($stateRegistry: StateRegistry, $urlService: UrlService) => {
  $urlService.rules.initial({ state: "app" });

  $stateRegistry.register({
    url: "/ng2",
    name: "app.ng1.ng2",
    component: Ng2Component
  });

  // route to ng2 component
  // $stateRegistry.register({
  //   url: "/ng2",
  //   name: "app.ng2",
  //   component: Ng2Component,
  // });
});

export class TestController {
  static $inject = ["TestService"];

  public yolo = "Hello Test World";
  constructor(public testService: TestService) {
    console.info(testService.getTestStatus());
  }
}

const rootState: Ng1StateDeclaration = {
  url: "",
  name: "app",
  template: `
        <a ui-sref=".ng1" ui-sref-active-eq="active">app.ng1</a>
        <a ui-sref=".ng1.ng2" ui-sref-active-eq="active">app.ng1.ng2</a>
        <a ui-sref=".ng2" ui-sref-active-eq="active">app.ng2</a>
        <a ui-sref=".ng2.ng2" ui-sref-active-eq="active">app.ng2.ng2</a>
        <ui-view></ui-view>
      `,
};

const homeState: Ng1StateDeclaration = {
  url: "/home",
  name: "app.ng1",
  template: `
        <h1>Hello World</h1>
        <a ui-sref="app">Back to app</a>
        <p>Hello {{ testCtrl.yolo }}</p>
        <p>Hello {{ testCtrl.testService.getTestStatus() }}</p>
        <ui-view></ui-view>
      `,
  controller: TestController,
  controllerAs: "testCtrl"
};

ng1RootModule.config([
  "$stateProvider",
  ($stateProvider: StateProvider) => {
    $stateProvider.state(rootState);
    $stateProvider.state(homeState);
  }
]);

// If the user enters a URL that doesn't match any known URL (state), send them to `/welcome`
const otherwiseConfigBlock = [
  "$urlRouterProvider",
  "$locationProvider",
  (
    $urlRouterProvider: UrlRouterProvider,
    $locationProvider: ng.ILocationProvider
  ) => {
    $locationProvider.hashPrefix("");
    $urlRouterProvider.otherwise("/");
  }
];
ng1RootModule.config(otherwiseConfigBlock);

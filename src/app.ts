// External dependencies
import * as angular from "angular";
import uiRouter from "@uirouter/angularjs";
import { upgradeModule } from "@uirouter/angular-hybrid";

export class AppCtrl {
  id: number;

  constructor() {}

  myName(): string {
    return "Leung";
  }
}

angular
  .module("appbuilder", [uiRouter, upgradeModule.name])
  .controller("AppCtrl", AppCtrl);

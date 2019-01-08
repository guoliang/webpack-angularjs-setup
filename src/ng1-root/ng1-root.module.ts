import * as angular from "angular";

import { upgradeModule } from "@uirouter/angular-hybrid";
import uiRouter from "@uirouter/angularjs";

export const ng1RootModule = angular.module("app", [
  uiRouter,
  upgradeModule.name
]);

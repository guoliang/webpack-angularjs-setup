import * as angular from "angular";

import { upgradeModule } from "@uirouter/angular-hybrid";
import uiRouter from "@uirouter/angularjs";
import { serviceModule } from "../ng1-services/services.module";

export const ng1RootModule = angular.module("app", [
  uiRouter,
  upgradeModule.name,
  serviceModule.name
]);

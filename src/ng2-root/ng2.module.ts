import { ng1RootModule } from "../ng1-root/ng1-root.module";
import { Ng2Component } from "./ng2.component";
import { Ng2States } from "./ng2.states";

import { getTestService } from "../ng1-services/test-service";

import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { UpgradeModule } from "@angular/upgrade/static";
import { UIRouterUpgradeModule } from "@uirouter/angular-hybrid";

// The main NgModule for the Angular portion of the hybrid app
@NgModule({
  imports: [
    BrowserModule,
    // Provide angular upgrade capabilities
    UpgradeModule,
    // Provides the @uirouter/angular directives and registers
    // the future state for the lazy loaded contacts module
    UIRouterUpgradeModule.forRoot({ states: Ng2States })
    // // The preferences feature module
    // PrefsModule
  ],
  declarations: [Ng2Component],
  entryComponents: [Ng2Component],
  providers: [
    {
      provide: "TestService",
      deps: ["$injector"],
      useFactory: getTestService
    }
  ]
})
export class RootModule {
  constructor(private upgrade: UpgradeModule) {}

  ngDoBootstrap() {
    // The DOM must be already be available
    this.upgrade.bootstrap(document.body, [ng1RootModule.name]);
  }
}

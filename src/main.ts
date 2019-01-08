import { ng1RootModule } from "./ng1-root/index";
import { RootModule } from "./ng2-root/ng2.module";

import { NgModuleRef, NgZone } from "@angular/core";
import { platformBrowserDynamic } from "@angular/platform-browser-dynamic";
import { UrlService } from "@uirouter/core";

// Using AngularJS config block, call `deferIntercept()`.
// This tells UI-Router to delay the initial URL sync (until all bootstrapping is complete)
ng1RootModule.config(["$urlServiceProvider", ($urlService: UrlService) => $urlService.deferIntercept()]);

platformBrowserDynamic()
  .bootstrapModule(RootModule)
  .then((platformRef: NgModuleRef<RootModule>) => {
    // Intialize the Angular Module
    // get() the UIRouter instance from DI to initialize the router
    const urlService: UrlService = platformRef.injector.get(UrlService);

    // Instruct UIRouter to listen to URL changes
    function startUIRouter() {
      urlService.listen();
      urlService.sync();
    }

    const ngZone = platformRef.injector.get<NgZone>(NgZone);
    ngZone.run(startUIRouter);
  });

import { Injector } from "@angular/core";
import { serviceModule } from "./services.module";

export class TestService {

  getTestStatus(): string {
    return "Successful";
  }
}

serviceModule.service("TestService", TestService);

export function getTestService($injector: Injector) {
  return $injector.get("TestService");
}

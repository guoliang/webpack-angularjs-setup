import { ng1RootModule } from "./ng1-root.module";

import { Trace } from "@uirouter/angularjs";

// Enable tracing of each TRANSITION... (check the javascript console)

// This syntax `$trace.enable(1)` is an alternative to `$trace.enable("TRANSITION")`.
// Besides "TRANSITION", you can also enable tracing for : "RESOLVE", "HOOK", "INVOKE", "UIVIEW", "VIEWCONFIG"
const traceRunBlock = [
  "$trace",
  ($trace: Trace) => {
    $trace.enable(1);
  }
];
ng1RootModule.run(traceRunBlock);

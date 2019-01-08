import { Ng2Component } from "./ng2.component";

import { NgHybridStateDeclaration } from "@uirouter/angular-hybrid";

const ng2RootState: NgHybridStateDeclaration = {
  url: "/ng2",
  name: "app.ng2",
  component: Ng2Component
};

const nestedState: NgHybridStateDeclaration = {
  url: "/ng2nested",
  name: "app.ng2.ng2",
  component: Ng2Component
};

export const Ng2States = [ng2RootState, nestedState];

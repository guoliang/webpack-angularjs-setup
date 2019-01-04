import * as angular from "angular";

export class AppCtrl {
    id: number;

    constructor() { }

    myName(): string {
        return "Leung";
    }
}

angular.module("appbuilder", [])
	.controller("AppCtrl", AppCtrl)
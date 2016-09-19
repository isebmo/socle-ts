module app.layout {
    'use strict';
    import IPromise = angular.IPromise;

    export class ShellController  {

        static $inject:Array<string> = [];

        constructor() {
        }

    }

    angular
        .module('app.layout')
        .controller('ShellController', ShellController);
}

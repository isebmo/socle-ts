namespace blocks.error {
    'use strict';

    export interface IErrorService {
        addMsg:(string) => void;
        clearMsg:() => void;
        getMessage:() => string;
    }

    export class ErrorService implements IErrorService {

        /* @ngInject */
        constructor(private $state:ng.ui.IStateService, private $timeout:ng.ITimeoutService) {
        }

        public message:string = null;

        addMsg = (msg:string) => {
            this.message = msg;
            var self = this;
            this.$timeout(function () {
                self.$state.go('errorspecific', {reload: true});
            }, 0);
        };

        clearMsg = () => this.message = null;
        getMessage = () => this.message;

    }

    angular
        .module('blocks.error')
        .service('ErrorService', ErrorService);
}

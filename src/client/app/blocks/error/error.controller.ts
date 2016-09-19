module blocks.error {
    'use strict';

    interface IErrorVm {
        msg:string;
    }

    export class ErrorController implements IErrorVm {

        /* @ngInject */
        constructor(ErrorService:blocks.error.IErrorService) {
            this.msg = ErrorService.getMessage();
        }

        msg:string;

    }

    angular
        .module('blocks.error')
        .controller('ErrorController', ErrorController);
}

module app.core {
    'use strict';

    var config = {
        appErrorPrefix: '[Modules PIDITOOLS Error] ',
        appTitle: 'Modules'
    };

    angular
        .module('app.core')
        .config(toastrConfig)
        .config(configure)
        .value('config', config);

    toastrConfig.$inject = ['toastr'];
    
    /* @ngInject */
    function toastrConfig(toastr:Toastr) {
        toastr.options.timeOut = 4000;
        toastr.options.positionClass = 'toast-bottom-right';
    }

    /* @ngInject */
    function configure($logProvider:ng.ILogProvider, $compileProvider:ng.ICompileProvider) {
        $compileProvider.debugInfoEnabled(false);
        if ($logProvider.debugEnabled) {
            $logProvider.debugEnabled(true);
        }
        //exceptionHandlerProvider.configure(config.appErrorPrefix);
    }
}

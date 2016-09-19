module app.core {
    'use strict';

    let module = angular
        .module('app.core', [
            'ngAnimate',
            'ngResource',
            'ngSanitize',
            'blocks.logger',
            'blocks.router',
            'blocks.auth',
            'blocks.param',
            'blocks.error',
            'ui.router',
            'ui.bootstrap',
            'cgBusy',
            'ngTable'
        ]);

    module.value('cgBusyDefaults', {
        backdrop: true,
        delay: 300
    });
}

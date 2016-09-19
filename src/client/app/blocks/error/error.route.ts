module blocks.error {
    'use strict';

    angular
        .module('blocks.error')
        .config(configureStates);

    configureStates.$inject = ['$stateProvider'];
    /* @ngInject */
    function configureStates($stateProvider:ng.ui.IStateProvider) {
        var states = getStates();
        states.forEach(function (state) {
            $stateProvider.state(state.state, state.config);
        });
    }

    function getStates() {
        return [
            {
                state: 'errorspecific',
                config: {
                    url: '/error-specific',
                    templateUrl: 'app/blocks/error/error.html',
                    controller: 'ErrorController',
                    controllerAs: 'vm',
                    settings: {},
                    resolve: {
                    }
                }
            }
        ];
    }

}

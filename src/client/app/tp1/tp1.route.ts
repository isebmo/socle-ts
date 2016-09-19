module app.tp1 {
    'use strict';

    angular
        .module('app.tp1')
        .config(configureStates);

    //configureStates.$inject = ['$stateProvider'];
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
                state: 'home.tp1',
                config: {
                    url: 'tp1',
                    abstract: false,
                    templateUrl: 'app/tp1/tp1.html',
                    controller: 'TP1Controller',
                    controllerAs: 'vm',
                    settings: {},
                    resolve: {
                    }
                }
            }
        ];
    }

}

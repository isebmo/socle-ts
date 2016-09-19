module app.tp2 {
    'use strict';

    angular
        .module('app.tp2')
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
                state: 'home.tp2',
                config: {
                    url: 'tp2/new',
                    abstract: false,
                    templateUrl: 'app/tp2/tp2.html',
                    controller: 'TP2Controller',
                    controllerAs: 'vm',
                    settings: {},
                    resolve: {
                    }
                }
            }
        ];
    }

}

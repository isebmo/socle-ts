module app.layout {
    'use strict';

    angular
        .module('app.layout')
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
                state: 'home',
                config: {
                    url: '/',
                    abstract: true,
                    templateUrl: 'app/layout/shell.html',
                    controller: 'ShellController',
                    controllerAs: 'vm',
                    settings: {},
                    resolve: {
                    }
                }
            }
        ];
    }

}

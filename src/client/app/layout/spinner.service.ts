module app.layout {
    'use strict';
    import IPromise = angular.IPromise;

    export interface ICallbackSpinner {
        /**
         * Fonction appelée lorsque la promesse a changé.
         *
         * @param {IPromise} promise la nouvelle promesse
         */
        onPromiseUpdated:(promise:IPromise<any>) => void;
    }

    export interface ISpinnerService {
        /**
         * Permet d'afficher le spinner d'attente pour l'utilisateur.
         *
         * @param {IPromise} promise la promesse permettant de savoir quand masquer le spinner
         * @return {IPromise} la promesse passée en paramètre
         */
        makeMeSpin:(promise:IPromise<any>) => IPromise<any>;
        /**
         * Permet de s'enregistrer auprès du service pour recevoir les changements de promesse.
         * @param {ICallbackSpinner} callback une classe qui traitera le changement de promesse
         */
        subscribeToPromiseUpdates:(callback:ICallbackSpinner) => void;
    }

    class SpinnerService implements ISpinnerService {
        private promise:IPromise<any>;
        private observers:Array<ICallbackSpinner> = [];

        public makeMeSpin = (promise:IPromise<any>) => {
            this.promise = promise;
            this.notifyPromiseUpdated();
            return promise;
        };

        public subscribeToPromiseUpdates = (callback:ICallbackSpinner) => {
            if (callback) {
                this.observers.push(callback);
            }
        };

        /**
         * On notifie tous les observateurs d'un changement de promesse.
         *
         * @private
         */
        private notifyPromiseUpdated:() => void = () => {
            let self = this;
            this.observers.forEach(
                function (callback:ICallbackSpinner) {
                    callback.onPromiseUpdated(self.promise);
                });
            //this.observers = [];
        };
    }
    angular.module('app.layout').service('SpinnerService', SpinnerService);
}

module app.tp2 {
    'use strict';

    export class TP2Controller  {

        personnes:Array<any> = [];
        nom:string;
        prenom:string;
        film:string;

        order:string ='nom';
        reverse:boolean = false;

        /* @ngInject */
        constructor() {
        }

        enregistrer = (form) => {
            this.personnes.push({nom: this.nom, prenom: this.prenom, film: this.film});
            this.reset();
        }

        reset = () => {
            this.nom = this.prenom = this.film = null;
        }

        orderBy = (order:string) => {
            this.order = order;
            this.reverse = !this.reverse;
        }

    }

    angular
        .module('app.tp2')
        .controller('TP2Controller', TP2Controller);
}

module blocks.param {
    'use strict';

    export interface IParam {
        urlDisconnect:string;
        urlChangePassword:string;
        urlHome:string;
    }

    export interface IParamMajRLC {
        executeServiceTest:{delaiMoyen:number, ecartType:number}
    }

    export interface IParamRI {
        riTypes:Array<any>
    }

    export interface IParamMonClient {

    }

    export interface IParamService {
        getParamMajRLC:() => ng.IPromise<IParamMajRLC>;
        getParamRI:() => ng.IPromise<IParamRI>;
        getParamMonClient:() => ng.IPromise<IParamMonClient>;
        getParam:() => ng.IPromise<IParam>;
    }

    export class ParamService implements IParamService {

        /* @ngInject */
        constructor(private $resource:any, private $cacheFactory:any) {

        }

        private cache:any = this.$cacheFactory.get('$http');
        private API_PARAM:string = 'api/public/params';

        private invalidateCache:(api?:string) => void = (api?) => {
            let apiSuffix = api ? api : '';
            this.cache.remove(this.API_PARAM + apiSuffix);
        };

        private _getParam:(force:boolean, api?:string) => ng.IPromise<any> = (force, api?) => {
            if (force) {
                this.invalidateCache(api);
            }
            let apiSuffix = api ? api : '';
            return this.$resource(this.API_PARAM + apiSuffix,
                {},
                {
                    get: {
                        method: 'GET',
                        isArray: false,
                        cache: true
                    }
                }).get().$promise;
        };

        public getParamMajRLC:() => ng.IPromise<IParamMajRLC> = () => this._getParam(false, '/majrlc');
        public getParamRI:() => ng.IPromise<IParamRI> = () => this._getParam(false, '/ri');
        public getParam:() => ng.IPromise<IParam> = () => this._getParam(false);
        public getParamMonClient:() => ng.IPromise<IParamMonClient> = () => this._getParam(false, '/monclient')
    }

    angular
        .module('blocks.param')
        .service('ParamService', ParamService);
}

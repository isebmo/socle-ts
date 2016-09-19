module blocks.auth {
    'use strict';

    export interface IAuthService {
        getUser:(boolean) => ng.IPromise<User>;
        getCurrentUser:() => User;
    }

    export class AuthService implements IAuthService {

        /* @ngInject */
        constructor(private $resource:any, private $cacheFactory:any) {

        }

        private cache:any = this.$cacheFactory.get('$http');
        private API_USER:string = 'api/connect';
        private Resource = this.$resource(this.API_USER,
            {},
            {
                get: {
                    method: 'GET',
                    isArray: false,
                    cache: true
                }
            });
        private currentUser:User = null;

        private invalidateCache:() => void = () => this.cache.remove(this.API_USER);

        public getCurrentUser = () => this.currentUser;
        
        public getUser:(boolean) => ng.IPromise<User> = (force) => {
            if (force) {
                this.invalidateCache();
            }
            return this.Resource.get().$promise.then(this._buildUser);
        };
        
        

        private _buildUser:(User) => User = (u) => {
            var user = new User();
            angular.extend(user, u);
            this.currentUser = user;
            return user;
        }
    }

    angular
        .module('blocks.auth')
        .service('AuthService', AuthService);
}

module blocks.auth {
    'use strict';

    interface IUser {
        login?:string;
        hasRightToModule:(string) => boolean;
    }

    export class User implements IUser {

        constructor() {
        }

        public hasRightToModule:(string) => boolean = (module) => {
            return true;
        }
    }
}


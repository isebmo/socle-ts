/* global toastr:false, moment:false */
declare var moment: any;

module app.core {
    'use strict';

    angular
        .module('app.core')
        .constant('toastr', toastr)
        .constant('moment', moment);
}

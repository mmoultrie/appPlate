import * as util  from '../util' ;

var config = {
    endpointUri: 'http://localhost:5000/api'
};

export default function () {

    angular
        .module('appPlate')
        .constant('APPCONFIG', config)
        .constant('Util', util)
    ;
}
import testDirective from './test';

export default function () {
    angular
        .module('appPlate')
        .directive('testDirective', testDirective)
    ;
}
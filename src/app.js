
angular
    .module('appPlate',['ui.router'])
    .run(runner)
;

function runner($rootScope,$state) {
    $rootScope.$on('$locationChangeStart',function (e, n, c) {
        var currentUser = JSON.parse(localStorage.getItem('currentUser')) || {};
        if(c !== 'login'){
            if(!currentUser.token){
                $state.go('login')
            }
        }
    });
    $rootScope.$on('unauthorized',function () {
        alert('Session has expired and you have been logged out');
        $state.go('login')
    });
}

require( './controllers');
require( './services');
require( './states');
require('./config');
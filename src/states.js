states.$inject = ['$stateProvider', '$urlRouterProvider','$httpProvider'];
function states($stateProvider, $urlRouterProvider,$httpProvider) {

    $urlRouterProvider.otherwise(function($injector) {
        var $state = $injector.get('$state');
        $state.go('login');
    });

    $stateProvider
        .state('login',{
            url: '/login',
            template: require('./views/login.html')
        })
        .state('users',{
            url: '/users',
            template: require('./views/users.html')
        })
        .state('users.create',{
            url: '/users.create',
            template: require('./views/users.create.html')
        })
        .state('home',{
            url: '/home',
            template: require('./views/home.html'),
            controller: 'homeController',
            controllerAs: 'vm'
        })
    ;

    $httpProvider.interceptors.push('ApiInterceptor');

}
export default function () {

    angular
        .module('appPlate')
        .config(states)
    ;
}
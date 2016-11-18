apiInterceptor.$inject = ['$injector','$rootScope'];

function apiInterceptor($injector, $rootScope) {

    var service = this;

    service.request = function (config) {
            var test ='testing';
            var userService = $injector.get('UserService');
            var currentUser = userService.getCurrentUser();
            var access_token = currentUser ? currentUser.token : null;
            if (access_token) {
                config.headers['Authorization'] = access_token;
            }
            return config;
        };

    service.responseError = function (response) {
        if (response.status === 401 || response.status === 403) {
            $rootScope.$broadcast('unauthorized');
        }
        return response;
    };
}

module.exports = apiInterceptor;


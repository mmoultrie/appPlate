function authService($http,APPCONFIG) {
    var service = this;
    var path = '/authenticate/';

    function getUrl() {
        return APPCONFIG.endpointUri + path;
    }

    service.authenticate = function (credentials) {
        return $http.post(getUrl(),credentials).then(function (obj) {
            return obj.data;
        })
    }
}

authService.$inject=['$http','APPCONFIG'];
module.exports = authService;
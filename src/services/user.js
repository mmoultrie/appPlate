function userService($http,APPCONFIG,$rootScope) {
    var service = this;
    var path = '/users/';
    var currentUser;
    function getUrl() {
        return APPCONFIG.endpointUri + path;
    }

    service.all = function () {
      return $http.get(getUrl()).then(function (list) {
          return list.data
      })
    };
    service.getCurrentUser = function() {
        if(!currentUser){
          currentUser =  JSON.parse(localStorage.getItem('currentUser'));
        }
        return currentUser;
    };

    service.setCurrentUser = function(user) {
        localStorage.setItem('currentUser',JSON.stringify(user));
        currentUser = user;
    };

    service.create = function (obj) {
        return $http.post(getUrl(), obj).then(function (response) {
            return response;
        });
    };
    service.checkEmail = function (email) {
        return $http.get(getUrl() +'email',{params:{email:email}}).then(function (response) {
            return response.data;
        });
    }

}

userService.$inject = ['$http','APPCONFIG','$rootScope'];
module.exports = userService;
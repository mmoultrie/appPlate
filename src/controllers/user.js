userController.$inject = ['UserService','$rootScope'];

function userController(UserService, $rootScope) {
    var vm = this;
    UserService.all().then(function (list) {
        vm.users = list;
    })
    vm.emptySession=function () {
        console.log('clearing')
        localStorage.clear();
        UserService.setCurrentUser(null);
        $rootScope.$broadcast('unauthorized')
    }
}

module.exports = userController;
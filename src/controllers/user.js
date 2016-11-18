function userController(UserService) {
    var vm = this;
    UserService.all().then(function (list) {
        vm.users = list;
    })
    vm.emptySession=function () {
        console.log('clearing')
        localStorage.clear();
        UserService.setCurrentUser(null);
    }
}

userController.$inject = ['UserService'];
module.exports = userController;
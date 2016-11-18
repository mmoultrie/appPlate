loginController.$inject = ['AuthService','UserService','$state'];

function loginController(AuthService,UserService,$state) {
    var vm = this;
    function login() {
        // testing
        vm.username ='mmoultrie@gmail.com';
        vm.password='church1';
        if(vm.username && vm.password){
            var credentials = {
                email: vm.username,
                password: vm.password
            };

            AuthService.authenticate(credentials).then(function (res) {
                if(res.token) {
                    var currentUser = {
                        email: vm.username,
                        token: res.token
                    };
                    UserService.setCurrentUser(currentUser);
                    $state.go('users')
                } else
                    vm.errorMsg = 'User not found.';
            });
        }else
            vm.errorMsg = 'Please fill out fields.';
    }
    function clearSession() {
        console.log('clearing');
        localStorage.clear();
    }
    vm.login = login;
    vm.clearSession = clearSession;
}

module.exports = loginController;
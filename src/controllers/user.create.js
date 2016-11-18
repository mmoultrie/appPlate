function userCreateController(userService,Util) {
    var vm = this;
        vm.errorMsg ='';

    function createUser(newUser) {
        if(newUser) {
            userService.create(newUser).then(function (response) {
                console.log(response)
            });
        }else
            vm.errorMsg = 'error creating user.'
    }

    function checkEmail(form,email) {
        userService.checkEmail(email).then(function(c) {
            if(c > 0)
                form.email.$setValidity('email',false);
            else
                form.email.$setValidity('email',true);
        });
    }

    vm.createUser = createUser;
    vm.checkEmail = checkEmail;

}

userCreateController.$inject = ['UserService','Util'];
module.exports = userCreateController;
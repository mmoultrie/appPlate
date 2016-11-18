import loginController from './login';
import userController from './user';
import userCreateController from './user.create';

angular.module('appPlate')
    .controller('LoginController',loginController)
    .controller('UserController',userController)
    .controller('UserCreateController',userCreateController)
;

import loginController from './login';
import userController from './user';
import userCreateController from './user.create';
import homeController from './home';

export default function () {
  angular.module('appPlate')
    .controller('LoginController',loginController)
    .controller('UserController',userController)
    .controller('UserCreateController',userCreateController)
    .controller('homeController',homeController)
  ;

}

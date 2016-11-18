import authService from './auth';
import userService from './user';
import apiInterceptor from './apiInterceptor';

angular
    .module('appPlate')
    .service('AuthService',authService)
    .service('UserService', userService)
    .service('ApiInterceptor', apiInterceptor)

;

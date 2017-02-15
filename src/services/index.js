import authService from './auth';
import userService from './user';
import apiInterceptor from './apiInterceptor';

export default function () {
    angular
        .module('appPlate')
        .service('AuthService', authService)
        .service('UserService', userService)
        .service('ApiInterceptor', apiInterceptor)
    ;
}
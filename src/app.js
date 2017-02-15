import  controllers from './controllers';
import  directives from './directives';
import  services from './services';
import  states from './states';
import run from './run'
import  config from './config'

angular
    .module('appPlate',['ui.router']);

// bootstrapping
controllers();
states();
services();
directives();
run();
config();

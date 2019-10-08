import {initializeAppComponents} from './app-components';
import {initializeAppControllers} from './app-controllers';
import {initializeAppServices} from './app-services';
import {initializeAppStates} from './app-states';

export const run = (app) => {
    initializeAppServices(app);
    initializeAppStates(app);
    initializeAppControllers(app);
    initializeAppComponents(app);
};
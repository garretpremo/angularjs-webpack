import {run} from "./app/app";
import { appRequirements } from './app/app-requirements';
import 'angular';

const app = angular.module('app', appRequirements);

run(app);
import { setDefaultTimeout, setWorldConstructor } from '@cucumber/cucumber';
import { CustomWorld } from './CustomWorld';

const timeout = process.env.DEBUG ? 100000000 : 90000;

setDefaultTimeout(timeout);
setWorldConstructor(CustomWorld);

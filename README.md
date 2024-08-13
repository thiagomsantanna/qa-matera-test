## Installation

Install and setup Node.js version:

- `nvm install && nvm use`

Install the dependencies:

- `npm install`

## Project structure

The project is simple, it has these folders as support files:

- `./config`: Has the Cucumber custom World class and cucumber.js more specific configuration. 
- `./payloads`: Has any response or request body schema, examples or factories.
- `./services`: Has the services routes requests.

All the Exercises gherkins, steps and hooks are in the `./src` folder, but only executing `exercise-2.feature` as the exercises only asks automation for the back-end.

## Tests

To run all the tests, simply run: 

- `npm run test`

If you are fixing or developing new scenarios, you can have more timeout time and filter scenarios with the tag @debug, using:

- `npm run test:debug`

A report from the last execution can be viewed at `./reports/report.html`.

## Formatting

This project uses Prettier with some rules to ensure a coding style across all files. Any code style checking or automatic formatting can be done with:

- `npm run format:check`
- `npm run format`

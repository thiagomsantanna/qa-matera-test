import { Before } from "@cucumber/cucumber";

Before(async (scenario) => {
  console.log(`\n=== Scenario: ${scenario.pickle.name} ===`);
});
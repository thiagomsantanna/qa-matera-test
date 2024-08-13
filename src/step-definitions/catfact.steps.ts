import { Given, DataTable, Then } from '@cucumber/cucumber';
import { breedRoute } from '@catfact/routes';
import { CustomWorld } from '@config/CustomWorld';
import { breedExample, breedsSchema } from '@payloads/breeds';
import { expect } from 'chai';

Given(/^the consumer sends a request to "GET \/breeds"$/, async function (this: CustomWorld) {
  this.response = await breedRoute.getBreeds();
});

Given(
  /^the consumer sends a request to "GET \/breeds" with:$/,
  async function (this: CustomWorld, data: DataTable) {
    const queryParam = data.raw()[0][0];
    const limit = queryParam.split('?limit=').pop();

    this.response = await breedRoute.getBreeds(limit);
  },
);

Then(
  'the API should return only {int} cat breeds',
  function (this: CustomWorld, listSize: number) {
    const { body } = this.response;

    expect(body.data).length(listSize);
  },
);

Then('the API should return correct info about a breed', async function (this: CustomWorld) {
  const { body } = this.response;

  breedsSchema.parse(body.data);
  expect(body.data[0]).to.deep.equal(breedExample());
});

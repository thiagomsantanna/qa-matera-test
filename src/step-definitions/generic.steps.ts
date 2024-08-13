import { DataTable, Then } from '@cucumber/cucumber';
import { expect } from 'chai';
import { CustomWorld } from '@config/CustomWorld';

const STATUS_CODES = {
  OK: 200,
  'Not Found': 404,
};

Then(
  /^the API should respond: "[1-5][0-9][0-9] (OK|Not Found)"$/,
  function (this: CustomWorld, responseStatus: keyof typeof STATUS_CODES) {
    const { statusCode, text } = this.response;

    expect(statusCode, text).to.be.equal(STATUS_CODES[responseStatus]);
  },
);

Then('the API should return a error', function (this: CustomWorld, data: DataTable) {
  const { statusCode, body } = this.response;
  const message = data.raw()[0][0];

  expect(body).to.deep.equal({
    message,
    code: statusCode,
  });
});

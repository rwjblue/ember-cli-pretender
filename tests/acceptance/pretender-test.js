import { test } from 'qunit';
import moduleForAcceptance from '../../tests/helpers/module-for-acceptance';

import Pretender from 'pretender';

moduleForAcceptance('Acceptance | pretender');

test('visiting /', function(assert) {
  let server = new Pretender();

  server.get('/test-pretender', () => [200, {"Content-Type": "application/json"}, JSON.stringify({ status: 'ok' })]);

  visit('/');

  andThen(() => assert.equal(find('#status').text(), 'ok'));
  andThen(() => server.shutdown());
});

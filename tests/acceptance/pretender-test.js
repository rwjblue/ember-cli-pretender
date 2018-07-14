import { module, test } from 'qunit';
import { visit, currentURL } from '@ember/test-helpers';
import { setupApplicationTest } from 'ember-qunit';

import Pretender from 'pretender';

module('Acceptance | pretender', function(hooks) {
  setupApplicationTest(hooks);

  test('visiting /', async function(assert) {
    let server = new Pretender();

    server.get('/test-pretender', () => [200, {"Content-Type": "application/json"}, JSON.stringify({ status: 'ok' })]);

    await visit('/');
    assert.equal(currentURL(), '/');
    assert.equal(this.element.querySelector('#status').textContent, 'ok');
  });
});

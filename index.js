'use strict';

module.exports = {
  name: 'ember-cli-pretender',

  included: function included(app) {
    this.app = app;

    if (this.app.env !== 'production') {
      this.app.import('vendor/FakeXMLHttpRequest/fake_xml_http_request.js');
      this.app.import('vendor/route-recognizer/dist/route-recognizer.js');
      this.app.import('vendor/pretender/pretender.js');
      this.app.import('vendor/ember-cli-pretender/shim.js', {
        type: 'vendor',
        exports: { 'pretender': ['default'] }
      });
    }
  }
};

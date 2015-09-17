Package.describe({
  name: 'grove:call-sync',
  version: '1.0.0',
  summary: 'Call Meteor methods synchronously with stubs returning and throwing exceptions',
  git: 'https://github.com/grovelabs/meteor-call-sync',
  documentation: 'README.md'
});

Package.onUse( function(api) {
  api.versionsFrom('1.2-rc.16');
  api.use('ecmascript');
  api.addFiles('lib/call-sync.js');
});

Package.onTest( function(api) {
  api.use([
    'grove:call-sync',
    'ecmascript',
    'mike:mocha-package@0.5.8',
    'practicalmeteor:chai@2.1.0_1',
    'practicalmeteor:sinon@1.14.1_2',
  ]);

  api.addFiles([
    'tests/lib/methods.js',
  ], ['client', 'server']);

  api.addFiles([
    'tests/client/call-sync-tests.js',
  ], 'client');
});

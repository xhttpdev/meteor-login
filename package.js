Package.describe({
    name: 'invictus:login',
    version: '0.0.4',
    // Brief, one-line summary of the package.
    summary: 'Login / Register Form',
    // URL to the Git repository containing the source code for this package.
    git: 'https://github.com/xhttpdev/meteor-login.git',
    // By default, Meteor will default to using README.md for documentation.
    // To avoid submitting documentation, set this field to null.
    documentation: 'README.md'
});

Package.onUse(function (api) {
    api.versionsFrom('1.1.0.3');

    api.use([
        'session',
        'templating',
        'iron:router@1.0.9',
        'fourseven:scss@3.2.0',
        'accounts-password@1.1.1'
    ]);

    api.addFiles([
        'server/account.js'
    ], 'server');

    api.addFiles([
        'login.js',
        'layout.html',
        'login.html',
        'register.html',
        'account.html',
        'helpers/layout.js',
        'helpers/register.js',
        'helpers/login.js',
        'helpers/account.js',
        'events/register.js',
        'events/login.js',
        'events/logout.js',
        'events/account.js',
        'routes.js',
        'styles.sass',
        'lib/loadingMask/_loadingMask.sass',
        'lib/loadingMask/loadingMask.js',
        'lib/loadingMask/loadingMask.html',
        'lib/alert/_alert.sass',
        'lib/alert/alert.html',
        'lib/alert/alert.js'
    ], 'client');

    api.export('Login');
    api.export('Mask');
    api.export('Alert');
});

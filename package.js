Package.describe({
    name: 'invictus:login',
    version: '1.1.0',
    // Brief, one-line summary of the package.
    summary: 'Login / Register Form',
    // URL to the Git repository containing the source code for this package.
    git: 'https://github.com/xhttpdev/meteor-login.git',
    // By default, Meteor will default to using README.md for documentation.
    // To avoid submitting documentation, set this field to null.
    documentation: 'README.md'
});

Package.onUse(function (api) {
    api.versionsFrom('1.4.1');

    api.use([
        'session',
        'templating',
        'iron:router@1.0.12',
        'fourseven:scss@3.8.0_1',
        'npm-bcrypt',
        'accounts-password@1.1.3'
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
        'styles.sass'
    ], 'client');

    api.export('Login');
    api.export('Mask');
    api.export('Alert');
});

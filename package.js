Package.describe({
    name: 'invictus:login',
    version: '0.0.1',
    // Brief, one-line summary of the package.
    summary: '',
    // URL to the Git repository containing the source code for this package.
    git: '',
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
        'login.js',
        'layout.html',
        'login.html',
        'register.html',
        'helpers/layout.js',
        'helpers/register.js',
        'helpers/login.js',
        'events/register.js',
        'events/login.js',
        'routes.js',
        'styles.sass'
    ], 'client');

    api.export('Login');
});

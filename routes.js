Router.configure({
    layoutTemplate: 'xhttp_layout'
});

Router.onBeforeAction(function () {

    $('body').removeClass('xhttp-login');

    if (!Meteor.userId()) {
        Session.set('lastUrl', this.url);
        this.redirect('/login');
    }

    this.next();
}, {except: ['login', 'register']});

Router.route('/login', function () {
    if (Meteor.userId()) {
        var lastUrl = Session.get('lastUrl');

        if (lastUrl) {
            this.redirect(lastUrl);
        } else {
            this.redirect('/');
        }
    } else {
        $('body').addClass('xhttp-login');
        this.layout('xhttp_layout');
        this.render('invictus_login');
    }
}, {
    name: 'login'
});

Router.route('/join', function () {

    if(Login.settings.allowJoin) {
        $('body').addClass('xhttp-login');
        this.layout('xhttp_layout');
        this.render('invictus_register');
    } else {
        this.redirect('/login');
    }
}, {
    name: 'register'
});

Router.route('/logout', function () {
    var me = this;
    Meteor.logout(function () {
        me.redirect('/login');
    });
    Session.keys = {};
    $('body').addClass('xhttp-login');
    this.layout('xhttp_layout');
    this.render('invictus_logout');
}, {
    name: 'logout'
});

Router.route('/account_settings', function () {
    this.render('invictus_account_settings');
}, {
    name: 'account'
});


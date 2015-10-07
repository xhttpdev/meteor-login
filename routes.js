Router.configure({
    layoutTemplate: 'xhttp_layout'
});

Router.onBeforeAction(function () {

    if (!Meteor.userId()) {
        this.redirect('/login');
    }

    this.next();
}, {except: ['login', 'register']});

Router.route('/login', function () {
    if (Meteor.userId()) {
        this.redirect('/');
    } else {
        this.layout('xhttp_layout');
        this.render('invictus_login');
    }
}, {
    name: 'login'
});

Router.route('/join', function () {

    if(Login.settings.allowJoin) {
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


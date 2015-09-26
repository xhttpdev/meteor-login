Router.configure({
    layoutTemplate: 'invictus_login_layout'
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
        this.layout('invictus_login_layout');
        this.render('invictus_login');
    }
}, {
    name: 'login'
});

Router.route('/register', function () {

    if(Login.settings.allowRegister) {
        this.layout('invictus_login_layout');
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
    this.layout('invictus_login_layout');
    this.render('invictus_logout');
}, {
    name: 'logout'
});


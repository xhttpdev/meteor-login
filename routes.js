Router.configure({
    // the default layout
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
        this.render('invictus_login')
    }
});

Router.route('/register', function () {

    if(Login.settings.allowRegister) {
        this.layout('invictus_login_layout');
        this.render('invictus_register');
    } else {
        this.redirect('/login');
    }
});

Router.route('/logout', function () {
    Meteor.logout();
    Session.keys = {};
    this.redirect('/login');
});


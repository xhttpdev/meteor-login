Template.invictus_login.events({
    'submit form': function (event) {
        event.preventDefault();
        var user = event.target.inputUsername.value;
        var password = event.target.inputPassword.value;

        Session.set('loginError', null);

        Meteor.loginWithPassword(user, password, function (err) {
            if (err) {
                Session.set('loginError', String(err));
            }
        });
    }
});

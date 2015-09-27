Template.invictus_register.events({
    'submit form': function (event) {
        event.preventDefault();
        var user = event.target.inputUsername.value;
        var password = event.target.inputPassword.value;
        var passwordConfirm = event.target.inputPasswordConfirm.value;

        if (password !== passwordConfirm) {
            Session.set('registerError', Login.getText('passwordConfirmError'));
        } else {
            Accounts.createUser({
                username: user,
                password: password
            }, function (err) {
                if (err) {
                    Session.set('registerError', String(err));
                } else {
                    Meteor.loginWithPassword(user, password);
                    Router.go('/');
                }
            });
        }
    }
});

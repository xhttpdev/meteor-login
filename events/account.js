Template.invictus_account_settings.events({
    'submit form': function (event) {
        event.preventDefault();
        var user = event.target.username.value;
        var oldPassword = event.target.oldPassword.value;
        var newPassword = event.target.newPassword.value;
        var newPasswordConfirm = event.target.newPasswordConfirm.value;

        Session.set('accountError', null);

        if (user !== Meteor.user().username) {
            Meteor.call('setUsername', user);
        }

        if (newPassword !== newPasswordConfirm) {
            Session.set('accountError', Login.getText('passwordConfirmError'));
        } else {
            Accounts.changePassword(oldPassword, newPassword, function (err) {
                if (err) {
                    Session.set('accountError', String(err));
                }
            });
        }
    }
});

Template.account_button_navbar.events({
    "click .account": function (event) {
        Router.go('account');
    }
});

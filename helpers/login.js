Template.invictus_login.helpers({
    isError: function () {
        return (Session.get('loginError') !== undefined)
    },
    getErrorMessage: function () {
        return Session.get('loginError');
    },
    isRegistrationAllowed: function () {
        return Login.settings.allowRegister;
    }
});

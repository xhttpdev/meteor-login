Template.invictus_login.helpers({
    isError: function () {
        return (Session.get('loginError') !== undefined && Session.get('loginError') !== null)
    },
    getErrorMessage: function () {
        return Session.get('loginError');
    },
    isRegistrationAllowed: function () {
        return Login.settings.allowJoin;
    }
});

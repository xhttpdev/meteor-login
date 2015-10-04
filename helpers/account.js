Template.invictus_account_settings.helpers({
    isError: function () {
        return (Session.get('accountError') !== undefined && Session.get('accountError') !== null);
    },
    getErrorMessage: function () {
        return Session.get('accountError');
    }
});

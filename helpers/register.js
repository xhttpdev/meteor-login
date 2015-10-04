Template.invictus_register.helpers({
    isError: function () {
        return (Session.get('registerError') !== undefined && Session.get('registerError') !== null)
    },
    getErrorMessage: function () {
        return Session.get('registerError');
    }
});

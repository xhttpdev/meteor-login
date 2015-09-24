Template.invictus_register.helpers({
    isError: function () {
        return (Session.get('registerError') !== undefined)
    },
    getErrorMessage: function () {
        return Session.get('registerError');
    }
});

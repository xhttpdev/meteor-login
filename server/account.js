Meteor.methods({
    setUsername: function (username) {
        if (!Meteor.userId()) {
            throw new Meteor.Error("not-authorized");
        }

        Accounts.setUsername(Meteor.userId(), username);
    }
});

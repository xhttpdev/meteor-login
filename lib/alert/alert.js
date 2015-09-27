Session.setDefault('alertData', {
    title: '',
    message: '',
    icon: '',
    buttons: ''
});

var callback;

Alert = {
    dialog: function (options) {

        if (options.callback) {
            callback = options.callback;
        }

        Session.set('alertData', options);

        Mask.showFader();
        $('.xhttp-alert').show();
    },
    close: function () {
        $('.xhttp-alert').hide();
        Mask.hide();
    }
};

Alert.YES = 2;
Alert.NO = 4;
Alert.YESNO = 6;
Alert.CANCEL = 8;
Alert.YESNOCANCEL = 14;

Alert.QUESTION = 'alert-info';
Alert.WARNING = 'alert-warning';
Alert.ERROR = 'alert-danger';

Template.alerts.helpers({
    data: function () {
        var options = Session.get('alertData');

        return {
            title: options.title,
            icon: (options.icon) ? options.icon : Alert.QUESTION,
            message: options.message,
            buttons: (options.buttons) ? 'buttons_' + options.buttons : 'buttons_' + Alert.YESNOCANCEL
        };
    }
});

Template.alert_dialog.events({
    "click .btn-yes": function () {
        if (callback) {
            callback('yes');
            callback = null;
        }

        Alert.close();

        return false;
    },
    "click .btn-no": function () {
        if (callback) {
            callback('no');
            callback = null;
        }

        Alert.close();

        return false;
    },
    "click .btn-cancel": function () {
        if (callback) {
            callback('cancel');
            callback = null;
        }

        Alert.close();

        return false;
    }
});

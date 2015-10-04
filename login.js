Login = {
    settings: {
        allowRegister: true,
        title: null,
        language: 'en'
    },

    language: {
        de: {
            userName: 'Benutzername',
            password: 'Passwort',
            changePasswordText: 'Passwort ändern',
            oldPassword: 'Aktuelles Passwort',
            newPassword: 'Neues Passwort',
            passwordConfirm: 'Passwort bestätigen',
            passwordConfirmError: 'Passwörter stimmen nicht überein',
            loginText: 'Anmelden',
            loginButton: 'Anmelden',
            loginLink: 'Account vorhanden? Anmelden',
            registerText: 'Registrieren',
            registerButton: 'Registrieren',
            registerLink: 'Noch keinen Account? Jetzt registrieren.',
            logoutText: 'Abmelden',
            logoutProgressText: 'Abmelden ...',
            accountText: 'Konto',
            accountSettingsText: 'Konto Einstellungen',
            saveText: 'Speichern'

        },
        en: {
            userName: 'Username',
            password: 'Password',
            changePasswordText: 'Change Password',
            oldPassword: 'Current Password',
            newPassword: 'New Password',
            passwordConfirm: 'Confirm Password',
            passwordConfirmError: 'Please confirm your password',
            loginText: 'Sign In',
            loginButton: 'Sign In',
            loginLink: 'Have an account? Sign in',
            registerText: 'Join',
            registerButton: 'Join Now',
            registerLink: 'Need an account? Join Now.',
            logoutText: 'Logout',
            logoutProgressText: 'Logout ...',
            accountText: 'Account',
            accountSettingsText: 'Account Settings',
            saveText: 'Save'
        }
    },

    config: function (config) {
        this.settings = _.extend(this.settings, config);
    },

    getText: function (key) {
        return this.language[this.settings.language][key];
    }
};

Template.registerHelper("getText", function (key) {
    return Login.getText(key);
});

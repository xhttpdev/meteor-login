# invictus:login #

Login / Join Form with Account Settings Form und Logout.
Based on Twitter Boostrap Theme.

## Features ##

- Language Switch (english, german) 
- set a title in the login / join form
- Disable/Enable Join Form
- Logout Button/Link Template
- Account Settings Button/Link
    - change username
    - change password
- Users who are not logged in are automaticly redirected to login page

## Quick Start ##

    $ meteor add invictus:login
    
You will get routes for:

    /login
    /join
    /logout
    /account_settings

# Usage #

## Language ##

By default language is english.

Available Settings: `en-GB` or `de`.

To swtitch language, specify value in the login config:

    if (Meteor.isClient) {
        Login.config({
            language: 'de'
        });
    }
    
### Or add your own translations ###

**Important!** this must be set before setting the language with `Login.config`

    Login.addTranslations('en-GB', {
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
        });

## Title ##

By default **no** title is set.

To set a title, specify value in the login config:

    if (Meteor.isClient) {
        Login.config({
            title: 'My App'
        });
    }
    
## Disable Join Form

    if (Meteor.isClient) {
        Login.config({
            allowJoin: false
        });
    }

## Logout Button / Link

You can simple integrate a full functional logout button or link in your bootstrap navbar:

    <div id="navbar" class="navbar-collapse collapse">
        <ul class="nav navbar-nav">
            <li>
                {{> logout_link }}
            </li>
            <!-- OR -->
            <li>
                {{> logout_button_navbar }}
            </li>
        </ul>
    </div>
    
## Account Settings Button / Link

You can simple integrate a full functional account settings button or link in your bootstrap navbar:

    <div id="navbar" class="navbar-collapse collapse">
        <ul class="nav navbar-nav">
            <li>
                {{> account_link }}
            </li>
            <!-- OR -->
            <li>
                {{> account_button_navbar }}
            </li>
        </ul>
    </div>

Click the button to open a form in your `iron:router` layout.

## TODOs ##

- enable/disable Join-Form in Account Settings

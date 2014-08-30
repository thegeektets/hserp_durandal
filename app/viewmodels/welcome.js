define(['plugins/router', 'durandal/app'], function (router, app)  {
    var ctor = function () {
        this.viewtitle = 'Dashboard';
        this.displayName = 'Welcome to HSERP!';
        this.description = 'HSERP design proto-types';
        this.features = [];
        this.search = function() {
            //It's really easy to show a message box.
            //You can add custom options too. Also, it returns a promise for the user's response.
            app.showMessage('Search not yet implemented...');
        };
    };

    
    return ctor;
});
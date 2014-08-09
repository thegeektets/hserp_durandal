define(['plugins/router', 'durandal/app'], function (router, app)  {
    var ctor = function () {
        this.viewtitle = 'Parent Details';
        this.displayName = 'Parent Details';
        this.search = function() {
            //It's really easy to show a message box.
            //You can add custom options too. Also, it returns a promise for the user's response.
            app.showMessage('Search not yet implemented...');
        };
    };

    //Note: This module exports a function. That means that you, the developer, can create multiple instances.
    //This pattern is also recognized by Durandal so that it can create instances on demand.
    //If you wish to create a singleton, you should export an object instead of a function.
    //See the "flickr" module for an example of object export.

    return ctor;
});

define(['plugins/router', 'durandal/app'], function (router, app) {

    var routes = [
                {
                    route: ['', 'home'],
                    moduleId: 'viewmodels/welcome',
                    title: 'Dashboard',
                    name:'<span class="iconfa-laptop"></span>Dashboard',
                    nav: true
                },
               {
                    route: 'students',
                    moduleId: '',
                    moduleRootId: 'viewmodels', // Custom property to make child routes easier              
                    title: 'Students',
                    nav: true,
                    hash: '#',
                    name:'<span class="iconfa-user"></span>Students',
                    childRoutes: [
                         { route: 'studentadmission', moduleId: 'viewmodels/studentadmission', title: 'Student Admission', nav: true, hash : '#studentadmission', name:'<span class="iconfa-pencil"></span>Student Admission',},
                        { route: 'parentdetails', moduleId: 'viewmodels/parentdetails', title: 'Parent Details',  nav: false, hash : '#parentdetails'},
                        { route: 'previouseducation', moduleId: 'viewmodels/previouseducation', title: 'Previous Education',  nav: false, hash : '#previouseducation    '}
                       
                    ]
                }
            ];
$.each(routes, function(index, route) {
                if (route.childRoutes === undefined)
                    return
                $.each(route.childRoutes, function(index, childRoute) {
                    childRoute.route =  childRoute.route;
                    childRoute.moduleId = childRoute.moduleId;
                    childRoute.title = childRoute.title;
                    childRoute.hash =  childRoute.hash;
                    childRoute.parent = route.moduleRootId;
                });
                routes = routes.concat(route.childRoutes);
            });



    return {
        router: router,
        search: function() {
            //It's really easy to show a message box.
            //You can add custom options too. Also, it returns a promise for the user's response.
            app.showMessage('Search not yet implemented...');
        },
        activate: function () {
            router.map(routes).buildNavigationModel();
            
            return router.activate();
        }
    };
});
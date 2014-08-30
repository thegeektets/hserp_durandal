
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
                    route: ['calendar'],
                    moduleId: 'viewmodels/welcome',
                    title: 'Dashboard',
                    name:'<span class="iconfa-calendar"></span>Calendar',
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
                        { route: 'parentdetails', moduleId: 'viewmodels/parentdetails', title: 'Parent Details',  nav: false, hash : '#parentdetails',},
                        { route: 'previouseducation', moduleId: 'viewmodels/previouseducation', title: 'Previous Education',  nav: false, hash : '#previouseducation',},
                       
                    ]
                },
                {
                    route: 'examination',
                    moduleId: '',
                    moduleRootId: 'viewmodels', // Custom property to make child routes easier              
                    title: 'Examination',
                    nav: true,
                    hash: '#',
                    name:'<span class="iconfa-book"></span>Examination',
                    childRoutes: [
                         { route: 'studentadmission', moduleId: 'viewmodels/studentadmission', title: 'Add New Records', nav: true, hash : '#studentadmission', name:'<span class="iconfa-edit"></span> Add New Records',},
                         { route: 'studentadmission', moduleId: 'viewmodels/studentadmission', title: 'Exam Management', nav: true, hash : '#studentadmission', name:'<span class="iconfa-table"></span>Exam Management',},
                         { route: 'studentadmission', moduleId: 'viewmodels/studentadmission', title: 'Generate Reports', nav: true, hash : '#studentadmission', name:'<span class="iconfa-file"></span>Generate Reports',},
                         { route: 'studentadmission', moduleId: 'viewmodels/studentadmission', title: 'Reports Center', nav: true, hash : '#studentadmission', name:'<span class="iconfa-file"></span>Reports Center',},
                         { route: 'studentadmission', moduleId: 'viewmodels/studentadmission', title: 'Settings', nav: true, hash : '#studentadmission', name:'<span class="iconfa-cogs"></span>Settings',},

                       
                    ]
                },
                             {
                    route: 'timetable',
                    moduleId: '',
                    moduleRootId: 'viewmodels', // Custom property to make child routes easier              
                    title: 'Time Table',
                    nav: true,
                    hash: '#',
                    name:'<span class="iconfa-group"></span>Timetable',
                    childRoutes: [
                         { route: 'studentadmission', moduleId: 'viewmodels/studentadmission', title: 'Create Timetable', nav: true, hash : '#studentadmission', name:'<span class="iconfa-pencil"></span> Create Timetable',},
                         { route: 'studentadmission', moduleId: 'viewmodels/studentadmission', title: 'Create Weekdays', nav: true, hash : '#studentadmission', name:'<span class="iconfa-pencil"></span> Create Weekdays',},
                         { route: 'studentadmission', moduleId: 'viewmodels/studentadmission', title: 'Edit Timetable', nav: true, hash : '#studentadmission', name:'<span class="iconfa-edit"></span> Edit Timetable',},
                         { route: 'studentadmission', moduleId: 'viewmodels/studentadmission', title: 'Institutional Timetable', nav: true, hash : '#studentadmission', name:'<span class="iconfa-check-empty"></span> Institutional Timetable',},
                         { route: 'studentadmission', moduleId: 'viewmodels/studentadmission', title: 'set class timings', nav: true, hash : '#studentadmission', name:'<span class="iconfa-time"></span> Set Class Timings',},
                         { route: 'studentadmission', moduleId: 'viewmodels/studentadmission', title: 'Teacher Timings', nav: true, hash : '#studentadmission', name:'<span class="iconfa-time"></span>Teacher Timings',},
                           { route: 'studentadmission', moduleId: 'viewmodels/studentadmission', title: 'Teacher work load', nav: true, hash : '#studentadmission', name:'<span class="iconfa-briefcase"></span>Teacher work load',},

                       
                    ]
                },
                        {
                    route: 'finance',
                    moduleId: '',
                    moduleRootId: 'viewmodels', // Custom property to make child routes easier              
                    title: 'Finance',
                    nav: true,
                    hash: '#',
                    name:'<span class="iconfa-money"></span>Finance',
                    childRoutes: [
                         { route: 'studentadmission', moduleId: 'viewmodels/studentadmission', title: 'Asset Liability Management', nav: true, hash : '#studentadmission', name:'<span class="iconfa-hdd"></span> Asset Liability Management',},
                         { route: 'studentadmission', moduleId: 'viewmodels/studentadmission', title: 'Automatic Transactions', nav: true, hash : '#studentadmission', name:'<span class="iconfa-folder-open"></span> Automatic Transactions',},
                         { route: 'studentadmission', moduleId: 'viewmodels/studentadmission', title: 'Donations', nav: true, hash : '#studentadmission', name:'<span class="iconfa-money"></span> Donations',},
                         { route: 'studentadmission', moduleId: 'viewmodels/studentadmission', title: 'Fees', nav: true, hash : '#studentadmission', name:'<span class="iconfa-money"></span> Fees',},
                         { route: 'studentadmission', moduleId: 'viewmodels/studentadmission', title: 'Finance Reports', nav: true, hash : '#studentadmission', name:'<span class="iconfa-file"></span> Finance Reports',},
                         { route: 'studentadmission', moduleId: 'viewmodels/studentadmission', title: 'Tally Export', nav: true, hash : '#studentadmission', name:'<span class="iconfa-file"></span>Tally Export',},
                           { route: 'studentadmission', moduleId: 'viewmodels/studentadmission', title: 'Transactions', nav: true, hash : '#studentadmission', name:'<span class="iconfa-briefcase"></span>Transactions',},

                       
                    ]
                },
                 {
                    route: 'human_resource',
                    moduleId: '',
                    moduleRootId: 'viewmodels', // Custom property to make child routes easier              
                    title: 'Human Resource',
                    nav: true,
                    hash: '#',
                    name:'<span class="iconfa-briefcase"></span>Human Resource',
                    childRoutes: [
                         { route: 'studentadmission', moduleId: 'viewmodels/studentadmission', title: 'Create Payslip', nav: true, hash : '#studentadmission', name:'<span class="iconfa-edit"></span> Create Payslip',},
                         { route: 'studentadmission', moduleId: 'viewmodels/studentadmission', title: 'Employee Leave Management', nav: true, hash : '#studentadmission', name:'<span class="iconfa-pencil"></span> Employee Leave Management',},
                         { route: 'studentadmission', moduleId: 'viewmodels/studentadmission', title: 'Employee Management', nav: true, hash : '#studentadmission', name:'<span class="iconfa-group"></span> Employee Management',},
                         { route: 'studentadmission', moduleId: 'viewmodels/studentadmission', title: 'Employee Payslip', nav: true, hash : '#studentadmission', name:'<span class="iconfa-file"></span> Employee Payslip',},
                         { route: 'studentadmission', moduleId: 'viewmodels/studentadmission', title: 'Employee Search', nav: true, hash : '#studentadmission', name:'<span class="iconfa-search"></span> Employee Search',},
                         { route: 'studentadmission', moduleId: 'viewmodels/studentadmission', title: 'Settings', nav: true, hash : '#studentadmission', name:'<span class="iconfa-cog"></span>Settings',},
                           
                       
                    ]
                },

               {
                    route: 'Reports',
                    moduleId: '',
                    moduleRootId: 'viewmodels', // Custom property to make child routes easier              
                    title: 'Reports',
                    nav: true,
                    hash: '#',
                    name:'<span class="iconfa-print"></span>Reports',
                    childRoutes: [
                         { route: 'studentadmission', moduleId: 'viewmodels/studentadmission', title: 'Class Details', nav: true, hash : '#studentadmission', name:'<span class="iconfa-file"></span> Class Details',},
                         { route: 'studentadmission', moduleId: 'viewmodels/studentadmission', title: 'Fees Defaulters Details', nav: true, hash : '#studentadmission', name:'<span class="iconfa-file"></span> Fees Defaulters Details',},
                         { route: 'studentadmission', moduleId: 'viewmodels/studentadmission', title: 'Employee Payroll Detils', nav: true, hash : '#studentadmission', name:'<span class="iconfa-pencil"></span> Employee Payroll Details',},
                         { route: 'studentadmission', moduleId: 'viewmodels/studentadmission', title: 'Exam Schedule Details', nav: true, hash : '#studentadmission', name:'<span class="iconfa-table"></span> Exam Schedule Details',},
                         { route: 'studentadmission', moduleId: 'viewmodels/studentadmission', title: 'Fees Collection Details', nav: true, hash : '#studentadmission', name:'<span class="iconfa-money"></span> Fees Collection Details',},
                        { route: 'studentadmission', moduleId: 'viewmodels/studentadmission', title: 'Former Employee Details', nav: true, hash : '#studentadmission', name:'<span class="iconfa-group"></span> Former Employee Details',},
                        { route: 'studentadmission', moduleId: 'viewmodels/studentadmission', title: 'Former Student Details', nav: true, hash : '#studentadmission', name:'<span class="iconfa-user"></span> Former Student Details',},
                        { route: 'studentadmission', moduleId: 'viewmodels/studentadmission', title: 'Student Fees Defaulters Details', nav: true, hash : '#studentadmission', name:'<span class="iconfa-file"></span> Student Fees Defaulters Details',},
                        { route: 'studentadmission', moduleId: 'viewmodels/studentadmission', title: 'Subject Details', nav: true, hash : '#studentadmission', name:'<span class="iconfa-table"></span> Subject Details',},
                         
                       
                    ]
                },

               {
                    route: 'data',
                    moduleId: '',
                    moduleRootId: 'viewmodels', // Custom property to make child routes easier              
                    title: 'Data & Imports',
                    nav: true,
                    hash: '#',
                    name:'<span class="iconfa-hdd"></span>Data & Imports',
                    childRoutes: [
                         { route: 'studentadmission', moduleId: 'viewmodels/studentadmission', title: 'Custom Imports', nav: true, hash : '#studentadmission', name:'<span class="iconfa-download"></span> Create Timetable',},
                         { route: 'studentadmission', moduleId: 'viewmodels/studentadmission', title: 'Custom Reports', nav: true, hash : '#studentadmission', name:'<span class="iconfa-briefcase-open"></span> Create Weekdays',},
                         { route: 'studentadmission', moduleId: 'viewmodels/studentadmission', title: 'Data Exports', nav: true, hash : '#studentadmission', name:'<span class="iconfa-upload"></span> Edit Timetable',},
                         { route: 'studentadmission', moduleId: 'viewmodels/studentadmission', title: 'Data Management', nav: true, hash : '#studentadmission', name:'<span class="iconfa-hdd"></span> Institutional Timetable',},
                        
                       
                    ]
                },
                   {
                    route: 'settings',
                    moduleId: '',
                    moduleRootId: 'viewmodels', // Custom property to make child routes easier              
                    title: 'Settings',
                    nav: true,
                    hash: '#',
                    name:'<span class="iconfa-cogs"></span>Settings',
                    childRoutes: [
                         { route: 'studentadmission', moduleId: 'viewmodels/studentadmission', title: 'Admission Additional Details', nav: true, hash : '#studentadmission', name:'<span class="iconfa-pencil"></span> Admission Additional Details',},
                         { route: 'studentadmission', moduleId: 'viewmodels/studentadmission', title: 'General Settings', nav: true, hash : '#studentadmission', name:'<span class="iconfa-cog"></span> General Settings',},
                         { route: 'studentadmission', moduleId: 'viewmodels/studentadmission', title: 'Manage Classes', nav: true, hash : '#studentadmission', name:'<span class="iconfa-table"></span> Manage Classes',},
                         { route: 'studentadmission', moduleId: 'viewmodels/studentadmission', title: 'Manage Subjects', nav: true, hash : '#studentadmission', name:'<span class="iconfa-table"></span> Manage Subjects',},
                        
                       
                    ]
                },


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
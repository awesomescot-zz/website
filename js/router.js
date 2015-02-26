// Filename: router.js
define([
  'jquery',
  'underscore',
  'backbone',
  'views/home/HomeView',
  'views/projects/ProjectsView',
  'views/about/AboutMeView'
], function($, _, Backbone, HomeView, ProjectsView, AboutMeView) {
  var AppRouter = Backbone.Router.extend({
    routes: {
      // Define some URL routes
      'projects': 'showProjects',
      'about': 'showAboutMe',
      // Default
      '*actions': 'defaultAction'
    }
  });
  var initialize = function(){
    var app_router = new AppRouter;
    app_router.on('route:showProjects', function(){
      // Call render on the module we loaded in via the dependency array
      var projectsView = new ProjectsView();
      projectsView.render();
    });
    app_router.on('route:showAboutMe', function () {
      var aboutMeView = new AboutMeView();
      aboutMeView.render();
    });
    app_router.on('route:defaultAction', function (actions) {
      // We have no matching route, lets display the home page
      var homeView = new HomeView();
      homeView.render();
    });
    // Unlike the above, we don't call render on this view as it will handle
    // the render call internally after it loads data. Further more we load it
    // outside of an on-route function to have it loaded no matter which page is
    // loaded initially.
 //   var footerView = new FooterView();
    Backbone.history.start();
  };
  return {
    initialize: initialize
  };
});
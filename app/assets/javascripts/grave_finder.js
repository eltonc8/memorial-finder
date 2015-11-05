window.GraveFinder = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  initialize: function() {
    GraveFinder.Views.navbar = new GraveFinder.Views.Navbar({el: $("#navbar")});
    GraveFinder.Routers.router = new GraveFinder.Routers.GraveFinderRouter({$rootEl: $("#content")});
    Backbone.history.start();
  }
};

$(document).ready(function(){
  GraveFinder.initialize();
});

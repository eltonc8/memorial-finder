GraveFinder.Routers.GraveFinderRouter = Backbone.Router.extend({
  initialize: function (options) {
    this.$rootEl = options.$rootEl;
  },

  routes: {
    "": "root",
  },

  root: function () {
    var view = new GraveFinder.Views.Root({
      collection: this.collection
    });
    this._swapView(view);
  },

  _swapView: function (view) {
    this._view && this._view.remove();
    this._view = view;
    this.$rootEl.html(this._view.render().$el);
  },
});

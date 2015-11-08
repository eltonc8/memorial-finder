GraveFinder.Routers.GraveFinderRouter = Backbone.Router.extend({
  initialize: function (options) {
    this.collection = GraveFinder.Collections.memorials;
    this.$rootEl = options.$rootEl;
  },

  routes: {
    "": "root",
    "memorials/:memorialId": "memorialView",
    ":default": "root",
  },

  root: function () {
    var view = new GraveFinder.Views.Root({
      collection: this.collection
    });
    this._swapView(view);
  },

  memorialView: function (memorialId) {
    var view, memorial = this.collection.getOrFetch({memorialId: memorialId});
    if (memorial) {
      view = new GraveFinder.Views.Memorial({
        model: memorial
      });
      this._swapView(view);
    } else {
      Backbone.history.navigate("", {trigger: true});
    }
  },

  _swapView: function (view) {
    this._view && this._view.remove();
    this._view = view;
    this.$rootEl.html(this._view.render().$el);
  },
});

GraveFinder.Views.Root = Backbone.CompositeView.extend({
  template: JST["root/root"],
  attrs: {
    firstName: "",
    lastName: "",
    skip: 0,
    limit: 10,
  },

  events: {
    "click .search-submit": "_search",
    "click .controls a": "_attrsChange",
  },

  initialize: function () {
    this.firstName = this.lastName = "";
    this.collection = GraveFinder.Collections.memorials;
    this.collection.attrs = this.attrs;
    this.render();
    this.listenTo(this.collection, "sync add remove", this.render);
    this.listenTo(this.collection, 'add', this.memorialListItemAdd);
    this.listenTo(this.collection, 'remove', this.memorialListItemRemove);

    this.collection.each(function (memorial) {
      this.memorialListItemAdd(memorial);
    }.bind(this));
  },

  memorialListItemAdd: function (memorial) {
    var memorialListItem = new GraveFinder.Views.MemorialListItem({
      model: memorial,
    });
    this.addSubview("ul#memorial-index-list", memorialListItem);
  },

  memorialListItemRemove: function (memorial) {
    this.removeModelSubview("ul#memorial-index-list", memorial);
  },

  render: function () {
    var content = this.template(this.attrs);
    this.$el.html( content );
    this.attachSubviews();
    return this;
  },

  _attrsChange: function(event){
    var target = $(event.currentTarget),
        limit = target.attr("data-limit");
    if (limit) {
      this.attrs.limit = limit;
      this.collection.searchName();
    }
  },

  _search: function(event){
    event.preventDefault();
    this.attrs.firstName = this.$("#first-name").val();
    this.attrs.lastName = this.$("#last-name").val();
    this.collection.searchName();
  }
});

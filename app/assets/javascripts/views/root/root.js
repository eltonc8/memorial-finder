GraveFinder.Views.Root = Backbone.CompositeView.extend({
  template: JST["root/root"],
  attrs: {
    firstName: "",
    lastName: "",
    skip: 0,
    limit: 10,
    total: 0,
  },

  events: {
    "submit form#name-search": "_search",
    "submit form#page": "_pageChange",
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
    if (this.attrs.limit) {
      this.attrs.limit = limit;
      this.collection.searchName();
    }
  },

  _pageChange: function(event){
    event.preventDefault();
    var max = Math.floor(this.attrs.total / this.attrs.limit + 1),
        page = Math.min(max, Math.floor( +this.$("#page-number").val() - 1 ));
    if (page < 0) page = 0;

    this.attrs.skip = page;
    this.collection.searchName();
  },

  _search: function(event){
    event.preventDefault();
    this.attrs.firstName = this.$("#first-name").val();
    this.attrs.lastName = this.$("#last-name").val();
    this.attrs.skip = 0
    this.collection.searchName();
  }
});

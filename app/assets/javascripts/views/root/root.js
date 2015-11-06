GraveFinder.Views.Root = Backbone.CompositeView.extend({
  template: JST["root/root"],

  events: {
    "click .search-submit": "_search"
  },

  initialize: function () {
    this.firstName = this.lastName = "";
    this.collection = GraveFinder.Collections.memorials;
    this.render();
    this.listenTo(this.collection, "sync add remove", this.render);
    this.listenTo(this.collection, 'add', this.addMemorialListItem);
    this.listenTo(this.collection, 'remove', this.removeMemorialListItem);

    this.collection.each(function (memorial) {
      this.addMemorialListItem(memorial);
    }.bind(this));
  },

  addMemorialListItem: function (memorial) {
    var memorialListItem = new GraveFinder.Views.MemorialListItem({
      model: memorial,
    });
    this.addSubview("ul#memorial-index-list", memorialListItem);
  },

  render: function () {
    var content = this.template({
      firstName: this.firstName,
      lastName: this.lastName
    });
    this.$el.html( content );
    this.attachSubviews();
    return this;
  },

  _search: function(event){
    event.preventDefault();
    this.firstName = this.$("#first-name").val();
    this.lastName = this.$("#last-name").val();
    this.collection.searchName(this.firstName, this.lastName);
  }
});

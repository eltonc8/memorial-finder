GraveFinder.Collections.Memorials = Backbone.Collection.extend({
  model: GraveFinder.Models.Memorial,

  getOrFetch: function (value) {
    var memorial = this.get(value);
    if (!security) { security = new this.model( { id: value } ); }

    return security;
  },

});

GraveFinder.Collections.memorials = new GraveFinder.Collections.Memorials();

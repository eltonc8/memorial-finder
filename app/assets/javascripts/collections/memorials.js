GraveFinder.Collections.Memorials = Backbone.Collection.extend({
  model: GraveFinder.Models.Memorial,

  parse: function(resp, options) {
    while (this.last()) {
      this.remove(this.last());
    }
    this.attrs.total = resp.total;
    return resp.memorial;
  },

  searchName: function(){
    if (this.attrs.firstName || this.attrs.lastName) {
      this.fetch();
    }
  },

  url: function () {
    var urlBase = "api/v1/memorial/search?", queries = [];
    queries.push("firstName=" + this.attrs.firstName);
    queries.push("lastName=" + this.attrs.lastName);
    queries.push("skip=" + this.attrs.skip);
    queries.push("limit=" + this.attrs.limit);

    return urlBase + queries.join("&");
  },
});

GraveFinder.Collections.memorials = new GraveFinder.Collections.Memorials();

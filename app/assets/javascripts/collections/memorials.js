GraveFinder.Collections.Memorials = Backbone.Collection.extend({
  model: GraveFinder.Models.Memorial,
  skip: 0,
  limit: 10,

  getOrFetch: function (value) {
    var memorial = this.get(value);
    if (!security) { security = new this.model( { id: value } ); }

    return security;
  },

  searchName: function(firstName, lastName){
    this.firstName = firstName;
    this.lastName = lastName;
    if (this.firstName || this.lastName) this.fetch();
  },

  url: function () {
    var urlBase = "api/v1/memorial/search?"
        urlFN = "firstName=" + this.firstName,
        urlLN = "lastName=" + this.lastName,
        urlSK = "skip=" + this.skip,
        urlLM = "limit=" + this.limit;
    return urlBase + [urlFN, urlLN, urlSK, urlLM].join("&")
  },
});

GraveFinder.Collections.memorials = new GraveFinder.Collections.Memorials();

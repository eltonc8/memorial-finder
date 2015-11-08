class Memorial < ActiveRecord::Base
  URL = "http://www.findagrave.com/cgi-bin/api.cgi?"

  def self.search(params)
    qmo = "mode=name"
    qfn = "firstName=" + params[:firstName]
    qln = "lastName=" + params[:lastName]
    qth = "includeThumb=1"
    qsk = "skip=" + params[:skip]
    qlm = "limit=" + params[:limit]
    queries = [qmo, qfn, qln, qth, qsk, qlm]

    HTTParty.get( URL + queries.join("&") ).to_s
  end

  def self.show(id)
    qmo = "mode=memorialSummary"
    qid = "memorialId=" + id
    queries = [qmo, qid]

    response = HTTParty.get( URL + queries.join("&") )
    content = JSON.parse( response )

    if content["memorialSummary"]
      queries[0] = "mode=memorialPhotos"
      response = HTTParty.get( URL + queries.join("&") )

      content = content["memorialSummary"]
      content["memorialPhotos"] = JSON.parse( response )

      content
    end
  end
end

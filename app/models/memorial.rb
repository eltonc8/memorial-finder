class Memorial < ActiveRecord::Base
  def self.search(params)
    url = "http://www.findagrave.com/cgi-bin/api.cgi?"
    qmo = "mode=name"
    qfn = "firstName=" + params[:firstName]
    qln = "lastName=" + params[:lastName]
    qth = "includeThumb=1"
    qsk = "skip=" + params[:skip]
    qlm = "limit=" + params[:limit]
    queries = [qmo, qfn, qln, qth, qsk, qlm]

    response = HTTParty.get( url + queries.join("&") ).to_s
  end
end

var Podcast = {
    create: function (name) {
        var o = Object.create(this);
        o.name = name;
        o.episodeList = [];
        return o;
    },
    addEpisode: function(episode) {
    	this.episodeList.push(episode);
    },
    getAllEpisodes: function(episode) {
    	var episodes = [];
    	this.episodeList.map(function(episode) {
    		episodes.push(episode);
    	})
    	return episodes;
    }
};

module.exports = Podcast;

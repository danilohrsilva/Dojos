var User = {
    create: function (name) {
        var o = Object.create(this);
        o.name = name;
        o.podcastList = [];
        return o;
    },
    addPodcast: function (podcast) {
    	this.podcastList.push(podcast);
    }
    // getAllEpisodes: function(){
    // 	var episodes = [];
    // 	this.podcastList.forEach(function (argument) {
    // 		// body...
    // 	}, context)
    // }
};

module.exports = User;

var User = require('../src/user.js');
var Podcast = require('../src/podcast.js');
var Episode = require('../src/episode.js');

describe('User', function(){

	describe('create', function(){

		it('should create one user', function () {
			var user = User.create('Gabriel');
			expect(user.name).toEqual('Gabriel');
		});
	});

	describe('subscribe', function() {
		it('should subscribed the user to the podcast', function(){
			var user = User.create('Gabriel');
			var podcast = Podcast.create('DevNaEstrada');
			user.addPodcast(podcast);

			// expect(user.podcastList.length).toBe(1);
			expect(user.podcastList[0].name).toBe('DevNaEstrada');
		});

		it('should subscribed the user to 3 podcasts', function(){
			var user = User.create('Victor');
			user.addPodcast(Podcast.create('DevNaEstrada'));
			user.addPodcast(Podcast.create('Jovem Nerd'));
			user.addPodcast(Podcast.create('Zofe'));

			expect(user.podcastList.length).toBe(3);
			expect(user.podcastList[0].name).toBe('DevNaEstrada');
		});

		it('should return a list of episodes of a podcast', function(){
			var user = User.create('Victor');
			var DevNaEstrada = Podcast.create('DevNaEstrada');
			user.addPodcast(DevNaEstrada);
			DevNaEstrada.addEpisode(Episode.create('Episodio1'));

			// var episodes = user.getAllEpisodes();

			// expect(episodes[0]).toBe();
		});
	});
});
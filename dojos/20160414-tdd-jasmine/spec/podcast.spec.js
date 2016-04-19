var Podcast = require('../src/podcast.js');
var Episode = require('../src/episode.js');

describe('Podcast', function(){
	describe('Episode', function() {
		beforeEach(function() {
			this.podcast = Podcast.create('DevNaEstrada');
		});

		it('Should add a new episode', function() {
			this.podcast.addEpisode(Episode.create('Episodio1'));
			expect(this.podcast.episodeList.length).toBe(1);
		});

		xit('should list all episodes of this podcast', function() {
			expect(this.podcast.getAllEpisodes().length).toBeGreaterThan(2);
		});
	});
});
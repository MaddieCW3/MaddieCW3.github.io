// html5media enables <video> and <audio> tags in all major browsers
// External File: http://api.html5media.info/1.1.8/html5media.min.js


// Add user agent as an attribute on the <html> tag...
// Inspiration: http://css-tricks.com/ie-10-specific-styles/
var b = document.documentElement;
b.setAttribute('data-useragent', navigator.userAgent);
b.setAttribute('data-platform', navigator.platform);


// HTML5 audio player + playlist controls...
// Inspiration: http://jonhall.info/how_to/create_a_playlist_for_html5_audio
// Mythium Archive: https://archive.org/details/mythium/
jQuery(function ($) {
    var supportsAudio = !!document.createElement('audio').canPlayType;
    if (supportsAudio) {
        var index = 0,
            playing = false,
            mediaPath = '//my_portfolio/EarSketch_Songs.m3u',
            extension = '',
            tracks = [{
                "track": 1,
                "name": "Song 1",
                "file": "song1_MWales.mp3"
            }, {
                "track": 2,
                "name": "Song 2",
                "file": "song2_MWales.mp3"
            }, {
                "track": 3,
                "name": "Song 3",
                "file": "song3_MWales.mp3"
            }, {
                "track": 4,
                "name": "Song 4",
                "file": "song4_MWales.mp3"
            }, {
                "track": 5,
                "name": "Song 5",
                "file": "song5_MWales.mp3"
            }
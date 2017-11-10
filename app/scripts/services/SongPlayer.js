(function() {
    function SongPlayer() {

        var SongPlayer = {};

        /**
        * @desc reference to current song being played
        * @type {Object}
        */
        var currentSong = null;

        /**
        * @desc Buzz object audio file
        * @type {Object}
        */
        var currentBuzzObject = null;

        /**
        * @function setSong
        * @desc Stops currently playing song and loads new audio file as currentBuzzObject
        * @param {Object} song
        */
        var setSong = function(song) {
            if (currentBuzzObject) {
                currentBuzzObject.stop();
                currentSong.playing = null;
            }
            currentBuzzObject = new buzz.sound(song.audioUrl, {
                formats: ['mp3'],
                preload: true
            });
            currentSong = song;
        };

        /**
        * @function playSong
        * @desc plays current audio file and flags song as playing
        * @param {Object} song
        */
        var playSong = function(song){
            currentBuzzObject.play();
            song.playing = true;
        }

        /**
        * @function SongPlayer.play
        * @desc public SongPlayer method; checks to see if the clicked song is
        * has already been selected; if it is, then the song is paused; if it's
        * not, then the new song is loaded and played
        * @param {Object} song
        */
        SongPlayer.play = function(song) {
            if (currentSong !== song) {
                setSong(song);
                playSong(song);
            } else if (currentSong === song) {
                if (currentBuzzObject.isPaused()) {
                    playSong(song);
                }
            }
        };

        /**
        * @function SongPlayer.pause
        * @desc public SongPlayer method; pauses the curent audo file and flags
        * the song as not playing
        * @param {Object} song
        */
        SongPlayer.pause = function(song) {
            currentBuzzObject.pause();
            song.playing = false;
        };

        return SongPlayer;
    }

    angular
        .module('blocJams')
        .factory('SongPlayer', SongPlayer);
})();

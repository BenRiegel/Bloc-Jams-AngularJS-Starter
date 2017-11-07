(function() {
    function AlbumCtrl() {
        this.albumData = angular.copy(albumPicasso);    //do I need to do angular.copy here?
    }

    angular
        .module('blocJams')
        .controller('AlbumCtrl', AlbumCtrl);
})();

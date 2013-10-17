'use strict';
/* global marked:false' */
/* global hljs:false */
/* global dropstoreClient:false */

var setupMarked;

angular.module('sitdownApp')
.controller('MainCtrl', function ($scope, storage, dropstoreClient) {
  setupMarked();
  storage.bind($scope, 'markdown');
  $scope.$watch('markdown', function() {
    $scope.markdownHTML = marked($scope.markdown);
  });

  $scope.authenticateDropbox = function() {
    dropstoreClient.create({key: '329f6vsjz20pgs0'})
    .authenticate({interactive: true})
    .then(function(datastoremanager) {
      console.log('cocmpleted authentication');
      return datastoremManager.openDefaultDataStore();
    });
  }


});


var setupMarked = function() {
  marked.setOptions({
    gfm: true,
    highlight: function (code, lang) {
      if (lang) {
        if (lang === 'objc') {
          lang = 'objectivec'; //TODO: a mapping here
        }
        return hljs.highlight(lang, code).value;
      } else {
        return hljs.highlightAuto(code).value;
      }
    },
    tables: true,
    breaks: false,
    pedantic: false,
    sanitize: true,
    smartLists: true,
    smartypants: false,
    langPrefix: 'lang-'
  });
};

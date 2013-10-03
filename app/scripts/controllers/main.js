'use strict';

angular.module('sitdownApp')
  .controller('MainCtrl', function ($scope) {
      marked.setOptions({
          gfm: true,
          highlight: function (code, lang, callback) {
              pygmentize({ lang: lang, format: 'html' }, code, function (err, result) {
                  if (err) return callback(err);
                  callback(null, result.toString());
              });
          },
          tables: true,
          breaks: false,
          pedantic: false,
          sanitize: true,
          smartLists: true,
          smartypants: false,
          langPrefix: 'lang-'
      });

      $scope.parseMarkdown = function() {
          $scope.markdownHTML = marked($scope.markdown);
      }
  });

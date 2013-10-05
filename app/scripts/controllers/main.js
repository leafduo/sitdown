'use strict';

angular.module('sitdownApp')
  .controller('MainCtrl', function ($scope, storage) {
      marked.setOptions({
          gfm: true,
          highlight: function (code, lang) {
              if (lang) {
                  if (lang === 'objc') {
                      lang = 'objectivec'; //TODO: a mapping here
                  }
                  return hljs.highlight(lang, code).value;
              } else {
                  hljs.highlightAuto(code).value;
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

      $scope.parseMarkdown = function() {
          $scope.markdownHTML = marked($scope.markdown);
      }

      storage.bind($scope, 'markdown');
      $scope.parseMarkdown();
  });

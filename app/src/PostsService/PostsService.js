angular
  .module('UserApp')
  .factory('PostsService', function ($http, $resource) {
    return {
      getPosts: function () {
        return $http.get('https://jsonplaceholder.typicode.com/posts')
      },

      Posts: $resource('https://jsonplaceholder.typicode.com/posts')

    }
  }

)

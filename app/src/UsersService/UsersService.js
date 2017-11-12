angular
  .module('UserApp')
  .factory('UsersService', function ($resource, $http) {
    return {
      Users: $resource('https://jsonplaceholder.typicode.com/users/:userId/', {
        userId: '@userId'
      }, {
        update: {
          method: 'PUT'
        }
      }),
      UserPosts: $resource('https://jsonplaceholder.typicode.com/users/:userId/posts', {
				userId: '@userId'
			})
    }
  });
'use strict';

userApp.controller('UserListCtrl', function ($scope, UsersService, PostsService) {
  $scope.users = UsersService.Users.query();

  $scope.posts = PostsService.Posts.query();

  // PostsService.getPosts().then(function (response) {
  //   $scope.posts = response.data
  // })
});
'use strict'

userApp.controller('UserDetailCtrl', function ($scope, $routeParams, UsersService) {
  $scope.userLoaded = false;

  $scope.user = UsersService.Users.get({
    userId: $routeParams['userId']
  }, function (successResult) {
    // Окей!
    console.log(successResult)
    $scope.notfoundError = false
    $scope.userLoaded = true
  }, function (errorResult) {
    // Не окей..
    $scope.notfoundError = true
    $scope.userLoaded = true
  })

  $scope.userPosts = UsersService.UserPosts.query({
    userId: $routeParams['userId']
  }, function(data) {
    console.log(data);
  });

  $scope.user.$promise.then(function (result) {
    // $scope.userLoaded = true
  })

  $scope.deleteUser = function (userId) {
    $scope.user.$delete({
      userId: userId
    }, function (successResult) {
      // Окей!
      $scope.deletionSuccess = true
    }, function (errorResult) {
      // Не окей..
      $scope.deletionError = true
    })
  }
})

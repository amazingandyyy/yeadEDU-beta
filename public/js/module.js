'use strict';

var app = angular.module('yeahEduApp', ['ui.router', 'oitozero.ngSweetAlert']);

app.config(function($stateProvider, $urlRouterProvider) {

  $stateProvider
    .state('home', {
      url: '/',
      templateUrl: '/html/home.html',
      controller: 'homeCtrl'
    })
    .state('longterm', {
      url: '/longterm',
      templateUrl: '/html/longterm.html',
      controller: 'longtermCtrl'
    })
    .state('application', {
      url: '/application',
      templateUrl: '/html/application.html',
      controller: 'applicationCtrl'
    })
    .state('resource', {
      url: '/resource',
      templateUrl: '/html/resource.html',
      controller: 'resourceCtrl'
    })
    .state('about', {
      url: '/about',
      templateUrl: '/html/about.html',
      controller: 'aboutCtrl'
    })

    // .state('detail', {
    //   url: '/detail/:name',
    //   templateUrl: '/html/detail.html',
    //   controller: 'detailCtrl',
    //   resolve: {
    //     person:
    //       function(People, $stateParams) {
    //         // return a promise which will resolve to the person
    //         return People.getByName($stateParams.name);
    //     }
    // }
    // })

  $urlRouterProvider.otherwise('/');
});

'use strict';

var app = angular.module('yeahEduApp');

app.service('People', function($q) {
  var people = [{
    name: 'Bob',
    job: 'Marine biologist'
  }, {
    name: 'Dave',
    job: 'Lion psychologist'
  }, {
    name: 'Jimmy',
    job: 'Jello juggler'
  }];

  this.getAll = () => {
    // return people;
    return $q((resolve, reject) => {
      resolve(people)
    });
  };

  this.getByName = name => {
    // returning a promise
    return $q((resolve, reject) => {
      var person = people.filter(obj => obj.name.toLowerCase() === name.toLowerCase())[0];

      if(person) {
        resolve(person); // trigger .then()
      } else {
        reject(new Error('Person not found'));  // trigger .catch()
      }

    });
  };
});

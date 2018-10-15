let marketPlaceApp = angular.module('MarketplaceApp', []);
let API_URL = "http://localhost:3000/"
marketPlaceApp.controller('ProjectManagerController', projectManagerController);

function projectManagerController($scope) {
    $scope.newProject = {
        name: '',
        description: '',
        type: 'Front-End',
        deadline: '',
        budget: ''

    }

    $scope.getProject = function () {
        console.log("Getting projects for this user");
    }

    $scope.createProject = function (e) {
        e.preventDefault();
        console.log($scope.newProject);
        //api call to create new project
        let createProjectPOST = fetch(API_URL + 'createProject', {
            method: 'POST',
            body: JSON.stringify($scope.newProject),
            headers: {
                "Content-Type": "application/json"
            }
        });
    }
    console.log("Hello PM Controller");
}
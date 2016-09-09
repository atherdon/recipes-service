angular.module('app.controllers', ['app.services'])
  
.controller('weeklyMenuCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {

//    console.log('123');

}])
         
.controller('singleRecipeCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])
   
.controller('loginCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])
   
.controller('signupCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])
   
.controller('freeRecipesCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])
   
.controller('styledSingleRecipeCtrl', ['$scope', '$stateParams', '$http', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams, $http) {

  $http.get('/js/api/recipe-simple.json')
       .then(function(response){
           
           console.log( response.data );
           
          $scope.recipe = response.data;                
        });
        
        


}])
   
.controller('ingredientsCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])
   
.controller('uXSingleRecipeCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])
   
.controller('uXSingleRecipe2Ctrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])
   
.controller('directionsCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])
   
.controller('groceryListSettingsCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])
   
.controller('groceryListCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {

//@TODO remove getting info and move it to services.
//Looks awful right now. Also remove not necessary variables from constructor and method
    


}])
   
.controller('recipesCalendarCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])
   
.controller('dRYGOODSCtrl', ['$scope', '$stateParams', '$http', 'localStorageService', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams, $http, localStorageService) {

//    @TODO create a service method for getting only values(array) for only one category.

    $http.get('/js/api/grocery.json')
       .then(function(response){
           
           console.log( response.data );

           
          $scope.data = response.data; 
          
          
          
        });
        
        angular.forEach($scope.data, function(value, key){
            
            console.log( value );
//            if(value.Password == "thomasTheKing")
//               console.log("username is thomas");
           
         });
    


    var data = [
        {
            "id"   : "19989",
            "name" : "Name1"
        },
        {
            "id"   : "1989",
            "name" : "Name2"
        },
        {
            "id"   : "1999",
            "name" : "Name3"
        }
    ];
    
    $scope.ingredients = data;
    
    
    var defaultValJs = [ false, false, false ];
    
    var EngObj   = localStorageService.get("StoredCheck");
    if( !EngObj ) {
        
        $scope.objc = defaultValJs;
    }
    else {
        
        $scope.objc = EngObj;
    }

    $scope.save = function( val ) {

        $scope.objc[val] = $scope.objc[val];      
        localStorageService.set( "StoredCheck", $scope.objc );
    }

}])


/*Added by Arthur*/

/* Populate weekly menu page list with recipes data from json */
.controller('weeklyMenuListCtrl', ['$scope', '$stateParams', '$http', 
//'weeklyMenuAlterFactory', 

function ($scope, $stateParams, $http, weeklyMenuAlterFactory ) {


    $http.get('/js/api/weekly.json')
       .then(function(response){
           
//           console.log( response.data );
           
          $scope.data = response.data;                
        });
        
        



    //good but not working well option right now
//    weeklyMenuAlterFactory.get().then(function(response){
//
//             console.log( response );
//
//            // $scope.response = response;
//            // or
//            // $scope.response = response.data;
//            // $scope.response = response.data.contentItem; - if array
//            
//    })


}])

 
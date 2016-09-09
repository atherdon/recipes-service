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
   
.controller('dRYGOODSCtrl', ['$scope', '$stateParams',  'localStorageService', 'groceryCategory',
// The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams, localStorageService, groceryCategory) {

//    @TODO create a service method for getting only values(array) for only one category.
//    get needed category id from service method with passing category id from view
// remove pages like grocery food categories and create a groceryCategoryList with passing data to it

// @TODO add page for flushing checkboxes

   groceryCategory.getCategory( function(data){
       
        $scope.ingredients = data.items;

    });
//   console.log(groceryCategory.zaz);
    
    var defaultValJs = Array.apply(null, Array( 30 )).map(function () {});;

    
    var EngObj   = localStorageService.get("StoredCheck");
    if( !EngObj ) {
        
        $scope.objc = defaultValJs;
    }
    else {
        
        $scope.objc = EngObj;
    }
    
    if( false ){ // count more than 100
        localStorageService.clearAll();
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

 
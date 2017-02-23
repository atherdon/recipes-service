angular.module('app.controllers', ['app.services'])
         
.controller('recipe', ['$scope', '$stateParams', 'getRecipeId','$http',
function ($scope, $stateParams, getRecipeId,$http) {

  



}])
   
.controller('loginCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])

.controller('loginCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {

//    $scope.toIntro = function(){
//        $state.go('intro');
//      }


}])
   
.controller('introCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


    // Called to navigate to the main app
//      $scope.startApp = function() {
//        $state.go('login');
//      };
//      $scope.next = function() {
//        $ionicSlideBoxDelegate.next();
//      };
//      $scope.previous = function() {
//        $ionicSlideBoxDelegate.previous();
//      };
//
//      // Called each time the slide changes
//      $scope.slideChanged = function(index) {
//        $scope.slideIndex = index;
//      };



}])

   
.controller('freeRecipesCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])
   
.controller('ingredientsCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
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
   
.controller('groceryListCtrl', ['$scope', '$stateParams', 'groceryCategory', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams, groceryCategory) {

//@TODO remove getting info and move it to services.
//Looks awful right now. Also remove not necessary variables from constructor and method
    
    groceryCategory.getCategories( function(data){
        $scope.categories = data;

    });

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
//       console.log( data.items );
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
.controller('weeklyMenuList', ['$scope', '$stateParams', 'weeklyMenuAlterFactory', 

function ($scope, $stateParams, weeklyMenuAlterFactory ) {


     weeklyMenuAlterFactory.get().then(function(response){
         $scope.data = response.data;
     })
        

}])

 .controller('logoutCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {

//    simpleLogin.logout();
//    console.log('User logged out');
//    $location.path('/login');

}])
 
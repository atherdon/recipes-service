angular.module('app.services', [])

.factory('BlankFactory', [function(){

}])

.service('BlankService', [function(){

}])


.service('getRecipeId', [function( $http ){

    //comment: return recipe ID from recipe list
    var getRecipeMethod = {
        'get': function( recipeId ){
            var result = null;
            angular.forEach(recipeList, function(v){
                if (v.id == recipeId) result = v;
            })

            return result;
        },
        'getRecipe': function( recipeId ){
            var result = getRecipeMethod.get(recipeId);

            return result;
        }
    }

}])


//similar functions
.factory('weeklyMenu', [function( $http ){

	var obj = {content:null};

	$http.get('/js/api/weeklyMenus.json').success(function(data) {
		
        // you can do some processing here
        obj.content = data;
    });   

	return obj;

}])


.factory('weeklyMenuAlterFactory', ['$http', function( $http ){


    return {
            get: function(){

                return $http.get('/js/api/weeklyMenus.json');
            }
            
    }

}])


.factory('pageTitle', function() {
    
   var title = 'default';
   return {
     title: function() { return title; },
     setTitle: function(newTitle) { title = newTitle }
   };
   
})


.service('groceryCategory', ['$http', function( $http ){


    var Grocery = function (){
        this.data = false;

        this.init = function(){
            this.getData();
        }

        this.getData = function(){
            this.data = $http.get('/js/api/grocery.json');
        }

        this.getCategory = function(callback){

            this.data.then(function(response) {

                angular.forEach( response.data, function(value, key){

                    if( value.category_id == "3" ){

                        callback(value);
                        
                    }

                });

            });
        }

        this.getCategories = function(callback){

            var array = [];
                
            this.data.then(function(response) {
                
                angular.forEach( response.data, function(value, key){

                    array.push({
                        "category_id" : value.category_id,
                        "name"        : value.name
                    });


                });
                callback(array);

            });
        }

        this.init();

    };

    return (Grocery);

    return {
            get: function() {
                
                return $http.get('/js/api/grocery.json');
            },
            getCategory: function(callback) {
                
                $http.get('/js/api/grocery.json').then(function(response) {
                    
                    angular.forEach( response.data, function(value, key){

                        if( value.category_id == "3" ){

                            callback(value);
                            
                        }

                    });
                    

                });
                

            },
            getCategories: function(callback){
                
                var array = [];
                
                $http.get('/js/api/grocery.json').then(function(response) {
                    
                    angular.forEach( response.data, function(value, key){

                        array.push({
                            "category_id" : value.category_id,
                            "name"        : value.name
                        });


                    });
                    callback(array);

                });
            }

    }

}]);



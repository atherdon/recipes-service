angular.module('app.services', [])

.factory('BlankFactory', [function(){

}])

.service('BlankService', [function(){

}])


//similar functions
.factory('weeklyMenu', [function( $http ){

	var obj = {content:null};

	$http.get('/api/weekly.json').success(function(data) {
		
        // you can do some processing here
        obj.content = data;
    });   

	return obj;

}])


.factory('weeklyMenuAlterFactory', ['$http', function( $http ){


    return {
            get: function(){

                return $http.get('/js/api/weekly.json');
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
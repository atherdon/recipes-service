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


.factory('weeklyMenuAlterFactory', [function( $http ){


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
            getCategory: function(callback, de) {
                
                $http.get('/js/api/grocery.json').then(function(response) {
                    
                    angular.forEach( response.data, function(value, key){

                        if( value.category_id == "3" ){

                            callback(value);
                            
                        }

                    });
                    

                });
                

            }

    }

}]);
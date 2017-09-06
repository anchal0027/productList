var app = angular.module("myApp", [])
app.controller("productCtrl", function($scope)
{
  
   $scope.total = 0;
   $scope.data = [];
   $scope.productList = [
   {
      "value": 500,
      "name": "Tutorials Development"
   },
   {
      "value": 300,
      "name": "Tutorials Design"
   },
   {
      "value": 250,
      "name": "Code Integration"
   },
   {
      "value": 220,
      "name": "Training"
   }];

   $scope.productclick = function(cost, index)
   {
      var value = $scope.data[index];
      if (value == cost)
      {
         var i = $scope.data.indexOf(cost);
         removetotal(cost, index);
      }
      else
      {
         addtotal(cost, index);
      }
   }

   function addtotal(cost, indexi)
   {
      $scope.data[indexi] = cost;
      $scope.total += cost;
   }

   function removetotal(cost, value)
   {
      delete $scope.data[value]
      $scope.total -= cost;
   }
});
 
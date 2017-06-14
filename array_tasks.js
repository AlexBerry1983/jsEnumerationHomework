var arrayTasks = {

	concat: function (arr1, arr2) {
		return arr1.concat(arr2);
	},

	insertAt: function (arr, itemToAdd, index) {
		arr.splice(index, 0, itemToAdd);
			return arr;
	},

	square: function (arr) {
		return arr.map( function(x) {
			return x * x;
		});
	},

	sum: function (arr) {
		var sumTotal = arr.reduce(function(acc, val) {
  		return acc + val;
		}, 0);
		return sumTotal
	},

	findDuplicates: function (arr) {
		var returnArray = arr.filter(function(item, i){
			var restofArrayIncludesItem = arr.slice(i + 1).includes(item);
			var isFirstInstanceOfItem = arr.indexOf(item) === i;

			return restofArrayIncludesItem && isFirstInstanceOfItem;
		})
		return returnArray;
	},

	removeAndClone: function (arr, valueToRemove) {
    for(var i = 0; i < arr.length; i++){
      if(arr[i] === valueToRemove) {
        arr.splice(i,1);
        i--;
      }
    }
    return arr;
    },

	findIndexesOf: function (arr, itemToFind) {
	  var indices = [], i;
	  	for( i = 0; i < arr.length; i++) {
	  		if (arr[i] === itemToFind){
	  			indices.push(i);
	  		}
	  	}
	  	return indices
	},

	sumOfAllEvenNumbersSquared: function (arr) {
			
	}
}
module.exports = arrayTasks

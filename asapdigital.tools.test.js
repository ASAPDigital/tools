(function() {

'use strict';




/*
    file ~/js/src/asapdigital.js
*/
var asapdigital = {};



/*
    file ~/js/src/asapdigital/tools/asapdigital.tools.js
*/
asapdigital.tools = {};



/*
    file ~/js/src/asapdigital/tools/comparator/Comparator.js
*/
asapdigital.tools.comparator = {};

(function (module) {

	/**
	 * Generic comparator; is initialized with a className and an attribute. The elements which are found at
	 * the attribute within the className are converted to numbers.
	 * To init the function, call it with passing the className and the attr. The returned function
	 * is the comparator to be used.
	 * @param className The classname which is searched for
	 * @param attr The attribute within the element of the className which we want to compare
	 * @param a First element to be compared
	 * @param b Second element to be compared
	 * @returns {Function} The comparator function to be used or passed to a collection
	 */
	function getNumberAttributeComparator(className, attr, a, b) {
		if ((a === undefined) && (b === undefined)) {
			if ((className === undefined) || (attr === undefined)) {
				return;
			}
			return function(a, b) {
				var distanceA = Number(a.getElementsByClassName(className)[0].getAttribute(attr));
				var distanceB = Number(b.getElementsByClassName(className)[0].getAttribute(attr));
				if (distanceA < distanceB) {
					return -1;
				}
				if (distanceA > distanceB) {
					return 1;
				}
				return 0;
			};
		}
	}

	/*
	Export API
	*/
	module.getNumberAttributeComparator = getNumberAttributeComparator;

})(asapdigital.tools.comparator);


})();
/**
 * Return a random number between 0 and 1
 *
 *     random()
 *
 * @return {Number} res
 */

// Each distribution is a function that takes no argument and when called returns
// a number between 0 and 1.
var distributions = {

    uniform: function() {
        return Math.random;
    },

    // Implementation of normal distribution using Box-Muller transform
    // ref : http://en.wikipedia.org/wiki/Box%E2%80%93Muller_transform
    // We take : mean = 0.5, standard deviation = 1/6
    // so that 99.7% values are in [0, 1].
    normal: function() {
        return function() {
            var u1, u2,
                picked = -1
            // We reject values outside of the interval [0, 1]
            // TODO: check if it is ok to do that?
            while (picked < 0 || picked > 1) {
                u1 = Math.random();
                u2 = Math.random();
                picked = 1/6 * Math.pow(-2 * Math.log(u1), 0.5) * Math.cos(2 * Math.PI * u2) + 0.5;
            }
            return picked;
        }
    }
};

math.distribution = function(name) {
    if (!distributions.hasOwnProperty(name))
        throw new Error('unknown distribution ' + name);

    var args = Array.prototype.slice.call(arguments, 1),
        distribution = distributions[name].apply(this, args);

    // We wrap all the random functions into one object which uses the given distribution.
    return (function(distribution) {

        // TODO: argument check 
        return {
            random: function(min, max) {
                if (max === undefined) max = 1
                if (min === undefined) min = 0
                return min + distribution() * (max - min);
            },

            randomInt: function(min, max) {
                return Math.floor(this.random(min, max));
            }
        }

    })(distribution)
};

// Default random functions use uniform distribution
var uniformRandFunctions = math.distribution('uniform');
math.random = uniformRandFunctions.random;
math.randomInt = uniformRandFunctions.randomInt;
/**
 * Created by dheeraj on 28/5/17.
 */
import 'core-js/es6';
import 'core-js/es7/reflect';
require('core-js/client/shim.min');
require('zone.js/dist/zone');

if (process.env.ENV === 'production') {
    // Production
} else {
    // Development and test
    Error['stackTraceLimit'] = Infinity;
    require('zone.js/dist/long-stack-trace-zone');
}

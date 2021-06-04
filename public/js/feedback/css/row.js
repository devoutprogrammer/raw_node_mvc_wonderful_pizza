'use strict'
/**
* @name  anonymous (no name)
* @function
* 
* @description  holds the shadow DOM row styling string
* 
* @return {String} the shadow DOM row styling string
* 
*/
export default () => {
    return `
    /* Column container */

    .row {
        display: -ms-flexbox;
        /* IE10 */
        display: flex;
        -ms-flex-wrap: wrap;
        /* IE10 */
        flex-wrap: wrap;
        margin-bottom: 90px;
    }`
}
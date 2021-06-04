'use strict'
/**
* @name  anonymous (no name)
* @function
* 
* @description  holds the shadow DOM aside styling string
* 
* @return {String} the shadow DOM aside styling string
* 
*/
export default () => {
    return `
    /* Create two unequal columns that sits next to each other */


    /* Sidebar/left column */
    
    .side-left {
        -ms-flex: 25%;
        /* IE10 */
        flex: 25%;
        background-color: #f1f1f1;
        padding: 20px;
    }
    
    .side-right {
        -ms-flex: 25%;
        /* IE10 */
        flex: 25%;
        background-color: #f1f1f1;
        padding: 20px;
    }`
}
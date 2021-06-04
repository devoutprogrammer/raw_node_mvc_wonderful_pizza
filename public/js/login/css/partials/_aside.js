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
        margin-bottom: 80px;
    }
    .container {
        position: relative;
        width: 100%;
      }
      
        .image {
            display: block;
            width: 100%;
            height: auto;
          }

      .fakeimg {
        background-color: #aaa;
        width: 100%;
        padding: 20px;
        display:flex;
        justify-content: space-between;
    }
      
      .overlay {
        position: absolute;
        bottom: 100%;
        left: 0;
        right: 0;
        background-color: #008CBA;
        overflow: hidden;
        width: 100%;
        height:0;
        transition: .5s ease;
        opacity: 0.8;
      }
      
      .container:hover .overlay {
        bottom: 0;
        height: 100%;
      }
      
      .text {
        color: white;
        font-size: 20px;
        position: absolute;
        top: 50%;
        left: 50%;
        -webkit-transform: translate(-50%, -50%);
        -ms-transform: translate(-50%, -50%);
        transform: translate(-50%, -50%);
        text-align: center;
      }
      ul.toppings{
        list-style-type: none; /* Remove bullets */
        padding: 0; /* Remove padding */
        margin: 0; /* Remove margins */
        text-align: left;
      }

    
    .side-right {
        -ms-flex: 25%;
        /* IE10 */
        flex: 25%;
        background-color: #f1f1f1;
        padding: 20px;
        margin-bottom: 80px;
    }
    .daily-specialty {
        background-image: url('../../../../../public/images/menu/wonderful.jpg');
    
    }
    .add-day-specialty{
      display: flex; 
      justify-content: space-evenly;
      margin: 10px;
    }
    .add-button{
      color: teal;
      cursor: pointer;
    }
    .done {
      display: none;
    }
    .daily-specialty-add-form{
      display: flex;
      justify-content: space-evenly;
      width: 100%;
    }
    .reduced-price{
      display: none;
    }
    .add-button{
      display: none;
    }
    `
}
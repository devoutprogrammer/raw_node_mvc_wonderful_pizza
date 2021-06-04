'use strict'
/**
* @name  anonymous (no name)
* @function
* 
* @description  holds the shadow DOM form styling string
* 
* @return {String} the shadow DOM form styling string
* 
*/
export default () => {
    return `
    #registration_form {
        height: 98%;
        margin-bottom: 90px;
    }
    
    section {
        margin-top: 0;
        padding-top: 0;
    }
    
    fieldset {
        margin: 10px 5px;
    }
    
    .account-details {
        display: grid;
        grid-auto-rows: minmax(auto, auto);
        /* grid-column-gap: 40px; */
        grid-row-gap: 5px;
        grid-template-columns: repeat(auto-fill, minmax(auto, auto));
    }
    
    p {
        text-align: center;
    }
    
    .card-type {
        grid-column: 1/12;
        grid-row: 1;
    }
    
    .card-type>div {
        display: flex;
        margin-bottom: 20px;
        flex-flow: row wrap;
    }
    
    .card-number {
        grid-column: 1/12;
        grid-row: 2;
    }
    
    .card-number>div {
        display: flex;
        margin-bottom: 20px;
        flex-flow: row wrap;
    }
    
    .card-expiration-date {
        grid-column: 1/12;
        grid-row: 3;
    }
    
    .card-expiration-date>div {
        display: flex;
        margin-bottom: 20px;
        flex-flow: row wrap;
    }
    
    .name-on-card {
        grid-column: 1/12;
        grid-row: 5;
    }
    
    .name-on-card>div {
        display: flex;
        margin-bottom: 20px;
        flex-flow: row wrap;
    }
    
    .security-code {
        grid-column: 1/12;
        grid-row: 4;
    }
    
    .security-code>div {
        display: flex;
        margin-bottom: 20px;
        flex-flow: row wrap;
    }
    
    .agreement {
        text-align: center;
        grid-column: 1/12;
        grid-row: 6;
    }
    
    .agreement>div {
        display: flex;
        margin-bottom: 20px;
        flex-flow: row wrap;
    }
    
    .agreement div a {
        text-decoration: none;
        color: blue;
    }
    
    .form-state {
        display: grid;
        grid-auto-rows: minmax(auto, auto);
        grid-column-gap: 5px;
        grid-row-gap: 5px;
        grid-template-columns: repeat(auto-fill, minmax(auto, auto));
    }
    
    .submit {
        grid-column: 4/8;
        grid-row: 1;
    }
    
    .reset {
        grid-column: 1/4;
        grid-row: 1;
    }
    
    .exit {
        grid-column: 8/12;
        grid-row: 1;
    }
    
    #exit {
        background-color: yellow;
    }
    
    #reset {
        background-color: orange;
    }
    
    button {
        width: 60%;
        margin: 0 auto;
    }
    
    #submit:hover {
        color: white;
        background-color: green;
    }
    
    #submit {
        background-color: teal;
    }
    
    #reset:hover {
        color: white;
        background-color: red;
    }
    
    #exit:hover {
        color: white;
        background-color: orange;
    }
    
    fieldset {
        padding: 10px 30px 0;
    }
    
    legend {
        padding: 5px 10px;
        color: white;
        background: teal;
    }
    
    fieldset>div {
        display: flex;
        margin-bottom: 20px;
        flex-flow: row wrap;
    }
    
    button,
    label,
    select,
    input[type=text],
    input[type=email],
    input[type=tel],
    input[type=password] {
        display: block;
        width: 100%;
        height: 30px;
        padding: 0;
        padding: 5px;
        margin: 0;
        box-sizing: border-box;
        font-family: inherit;
        font-size: 100%;
    }
    
    input[type=text],
    input[type=email],
    input[type=tel],
    select,
    input[type=password] {
        border-radius: 5px;
        box-shadow: inset 1px 1px 3px #ccc;
    }
    
    input[type=text]:hover,
    input[type=text]:focus {
        background-color: #eee;
    }
    
    input[type=text]+span {
        position: relative;
    }
    
    input[type=email]:hover,
    input[type=email]:focus {
        background-color: #eee;
    }
    
    input[type=email]+span {
        position: relative;
    }
    
    input[type=password]:hover,
    input[type=password]:focus {
        background-color: #eee;
    }
    
    input[type=password]+span {
        position: relative;
    }
    
    input[type=tel]:hover,
    input[type=tel]:focus {
        background-color: #eee;
    }
    
    input[type=tel]+span {
        position: relative;
    }
    
    input[type=text]:required+span::after {
        position: absolute;
        top: -26px;
        left: -70px;
        padding: 5px 10px;
        font-size: .7rem;
        content: "required";
        color: white;
        background-color: teal;
    }
    
    input[type=email]:required+span::after {
        position: absolute;
        top: -26px;
        left: -70px;
        padding: 5px 10px;
        font-size: .7rem;
        content: "required";
        color: white;
        background-color: teal;
    }
    
    input[type=password]:required+span::after {
        position: absolute;
        top: -26px;
        left: -70px;
        padding: 5px 10px;
        font-size: .7rem;
        content: "required";
        color: white;
        background-color: teal;
    }
    
    input[type=tel]:required+span::after {
        position: absolute;
        top: -26px;
        left: -70px;
        padding: 5px 10px;
        font-size: .7rem;
        content: "required";
        color: white;
        background-color: teal;
    }
    
    input[type=text]+span::before {
        position: absolute;
        top: 5px;
        right: -20px;
    }
    
    input[type=text]:invalid {
        border: 2px solid red;
    }
    
    input[type=email]+span::before {
        position: absolute;
        top: 5px;
        right: -20px;
    }
    
    input[type=email]:invalid {
        border: 2px solid red;
    }
    
    input[type=password]+span::before {
        position: absolute;
        top: 5px;
        right: -20px;
    }
    
    input[type=password]:invalid {
        border: 2px solid red;
    }
    
    input[type=tel]+span::before {
        position: absolute;
        top: 5px;
        right: -20px;
    }
    
    input[type=tel]:invalid {
        border: 2px solid red;
    }
    
    
    /*===== Invalidity===== */
    
    input[type=text]:invalid+span::before {
        content: "✖";
        color: red;
    }
    
    input[type=email]:invalid+span::before {
        content: "✖";
        color: red;
    }
    
    input[type=password]:invalid+span::before {
        content: "✖";
        color: red;
    }
    
    input[type=tel]:invalid+span::before {
        content: "✖";
        color: red;
    }
    
    
    /*===== Validity===== */
    
    input[type=text]:valid+span::before {
        content: "✓";
        color: green;
    }
    
    input[type=email]:valid+span::before {
        content: "✓";
        color: green;
    }
    
    input[type=password]:valid+span::before {
        content: "✓";
        color: green;
    }
    
    input[type=tel]:valid+span::before {
        content: "✓";
        color: green;
    }
    
    input[type="text"]:disabled {
        border: 1px solid #ccc;
        background: #eee;
    }
    
    input[type="tel"]:disabled {
        border: 1px solid #ccc;
        background: #eee;
    }
    
    .disabled-label {
        color: #aaa;
    }
    
    @media screen and (max-width: 500px) {
        .account-details {
            display: flex;
        }
        .form-state {
            display: flex;
        }
        .card,
        .other-cards-number,
        .amex-number,
        .expiration,
        .amex-security-code,
        .other-cards-security-code,
        .nameoncard {
            width: 100%;
        }
    }
    
    @media screen and (max-width: 500px) {
        .form-state {
            display: flex;
            justify-content: center;
            align-items: center;
            flex-direction: column;
        }
        .submit,
        .reset,
        .exit {
            width: 100%;
        }
    }`
}
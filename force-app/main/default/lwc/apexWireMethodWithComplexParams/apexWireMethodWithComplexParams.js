import { LightningElement, wire } from 'lwc';
import checkApexTypes from '@salesforce/apex/ApexTypesController.checkApexTypes';

export default class ApexImperativeMethodWithApexTypeParams extends LightningElement {
    listItemValue = 0;
    numberValue = 50;
    stringValue = 'Some string';

    parameterObject = {
        someString: this.stringValue,
        someInteger: this.numberValue,
        someList: []
    };

    @wire(checkApexTypes, { wrapper: '$parameterObject' })
    apexResponse;

    handleStringChange(event) {
        this.parameterObject = {
            ...this.parameterObject,
            someString: (this.stringValue = event.target.value)
        };
    }

    handleNumberChange(event) {
        this.parameterObject = {
            ...this.parameterObject,
            someInteger: (this.someInteger = event.target.value)
        };
    }

    handleListItemChange(event) {
        const someList = [];
        for (let i = 0; i < event.target.value; i++) {
            someList.push({
                someInnerString: this.stringValue,
                someInnerInteger: this.numberValue
            });
        }
        this.parameterObject = {
            ...this.parameterObject,
            someList
        };
    }
}

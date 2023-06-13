import { LightningElement } from 'lwc';
import { loadScript } from 'lightning/platformResourceLoader';
import loadStatic from '@salesforce/resourceUrl/loadStatic';

export default class LoadStatic extends LightningElement {
    connectedCallback() {
        loadScript(this, loadStatic).then(() => {
            // initialize the library using a reference to the container element obtained from the DOM
           console.log("Loaded static resource");
        });
    }
}
import DOM from './dom';
import Contract from './contract';
import './dapp.css';

$(document).ready(function(){
    $('[data-toggle="tooltip"]').tooltip().mouseover();
    setTimeout(function(){ $('[data-toggle="tooltip"]').tooltip('hide'); }, 3000);
});

(async() => {
    let result = null;
    let contract = new Contract('rinkeby', () => {
//        DOM.elid('MSDAir').value = contract.owner;
//        DOM.elid('selected-airline-name').value = 'MSDAir';
//        DOM.elid('selected-airline-address').value = contract.owner;

        // User-submitted transaction
        DOM.elid('register').addEventListener('click', async() => {
            let propertyId = DOM.elid('propertyId').value;
            console.log("propertyId called from index.js: " + propertyId);

            contract.register(propertyId, (error, result) => {
            });
        })

        // User-submitted transaction
        DOM.elid('fetchTokenURI').addEventListener('click', async() => {
            let propertyId = DOM.elid('propertyId').value;
            console.log("propertyId called from index.js: " + propertyId);

            contract.fetchToken(propertyId, (error, result) => {
                if(error){
                    console.log(error);
                } else {
                    console.log(result);
                }

            });
        })

    });
})();


function getTimeFromTimestamp(timestamp) {
    return new Date(timestamp * 1000).toLocaleTimeString("es-ES").slice(0, -3);
}
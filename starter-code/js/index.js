
//initialisieren der einzelnen div Elemente
let articleWrapper = document.getElementsByClassName("article-wrapper");
let articleDescription = document.getElementsByClassName("article-description");
let articleItemPrice = document.getElementsByClassName("article-item-price");
let articleQuantity = document.getElementsByClassName("article-quantity");
let articleCalculatedPrice = document.getElementsByClassName("article-calculated-price"); 
let articleDeleteButton = document.getElementsByClassName("article-delete-button");
let calcPriceButton = document.getElementsByClassName("calc-price-button");

function deleteItem(e){
}
function getPriceByProduct(itemNode){
  let priceOfAll = 0;
  let totalPriceOfTheItem = 0; // Gesamtpreis eines Artikels auf 0 setzen
  for (i=0; i<articleWrapper.length; i++) { // Schleife so lange es Artikel gibt
    let priceOfTheItem = parseFloat(itemNode[i].innerText.slice(1)); // ermittle den Preis eines Artikels (ohne Vorzeichen)
    let quantityOfTheItem = articleQuantity[i].getElementsByTagName("input")[0].value; //ermittle die Menge des Artikels
    console.log(priceOfTheItem + ` : Einzelpreis`); //Test
    console.log(quantityOfTheItem + ` : Menge`); //Test
    if (quantityOfTheItem < 0) { // wenn eine ugültige Menge eingetragen ist ...
      quantityOfTheItem = 0; // ...setze die Menge auf 0 
    } else {
      totalPriceOfTheItem = (priceOfTheItem*quantityOfTheItem); //Artikel Gesamtpreis = Preis * Menge auf 2 Stellen gerundet
    }
    // der Wert muss aber gleich ins Feld geschrieben werden, da er beim naechsten Lauf ueberschrieben wird
    priceOfAll = priceOfAll + totalPriceOfTheItem; // Gesamtsumme
    console.log(totalPriceOfTheItem + ` : totalPriceOfTheItem in funktion getPriceByProduct`); //Test
  }
  return priceOfAll;//gebe Wert zurück
}
function updatePriceByProduct(productPrice, index){
}
function getTotalPrice() {
    console.log(getPriceByProduct(articleItemPrice) + ` : Gesamtsumme (function getTotalPrice)`) //Ergebnis ist der Gesamtwert aller Artikel
}
function createQuantityInput(){
}
function createDeleteButton(){
}
function createQuantityNode(){
}
function createItemNode(dataType, itemData){
}
function createNewItemRow(itemName, itemUnitPrice){
}
function createNewItem(){
}

//erfolgt nur beim Laden des html files //
window.onload = function(){
 var calculatePriceButton = document.getElementById('calcpricesbutton');
 var createItemButton = document.getElementById('new-item-create');
 var deleteButtons = document.getElementsByClassName('btn-delete');
 calculatePriceButton.onclick = getTotalPrice;
 //createItemButton.onclick = createNewItem;
 for(var i = 0; i<deleteButtons.length ; i++){
   deleteButtons[i].onclick = deleteItem;
   //console.log(calculatePriceButton);
 }
};


//generelle Ausführung des Click Events, damit nicht jedes Mal geladen werden muss //
//var calculatePriceButton = document.getElementById('calc-prices-button');
//calculatePriceButton.onclick = getTotalPrice;

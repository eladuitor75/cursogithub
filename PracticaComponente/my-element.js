class myElement extends HTMLElement{
    constructor(){
        super();
        console.log("Hola Componente");
    }
}
customElements.define("my-element",myElement);
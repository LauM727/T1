class Button extends HTMLElement{

    constructor(){
        super();
        this.attachShadow({mode:"open"});
        this.onButtonClicked=this.onButtonClicked.bind(this);

    }

    static get observedAttributes(){
        return["message"]
    }

    render(){

    }

    onButtonClicked(){

    }
}
customElements.define("login-button",Button)
export default Button;
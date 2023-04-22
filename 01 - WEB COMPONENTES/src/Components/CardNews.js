// Nova class que hedará os comportamento html
/* retornará uma mensagem na pagina html*/
class CardNews extends HTMLElement {
    constructor(){
        //chama um construtor atravez do metodo super
        super();
        
        //esta classe criará uma sombra que pode ser "OPEN" ou 'Closed'
        const shadow = this.attachShadow({mode: "closed"})

        //adicionandp os dois metodos na shaow como filhos
        shadow.appendChild(this.build())
        shadow.appendChild(this.styles())
    }
    
    build(){
        //criando elemento div
        const componentRoot = document.createElement("div");
        //setando class
        componentRoot.setAttribute("class", "card")

        const cardleft = document.createElement("div");
         //setando class
        cardleft.setAttribute("class", "card-left");

        //filhos do cardleft
        const autor = document.createElement("span");
        autor.textContent = "by " + (this.getAttribute("autor") || " Anonymous");

        //Props para o link
        const linktitle = document.createElement("a");
        linktitle.textContent = this.getAttribute("Title") ;

        //acessando uma propriedade que o objeto ja tem
        linktitle.href = this.getAttribute("link-url");
        
        const newsContent = document.createElement("p");
        //prop para conteudo do P
        newsContent.textContent = this.getAttribute("content")
       
        //anexando filhos ao cardleft
        cardleft.appendChild(autor);
        cardleft.appendChild(linktitle);
        cardleft.appendChild(newsContent);


        const cardright = document.createElement("div");
        //setando class ao cardrigth
        cardright.setAttribute("class", "card-right");
        //criando elemento de imagem
        const newsImage = document.createElement("img");
        //criando prop e definindo uma imagem padrão caso der erro
        newsImage.src = this.getAttribute("photo") || "assets/default.jpg";
        //pegando propriedade ja existente
        newsImage.alt = "image";

        newsImage.textContent = this.getAttribute("photo")
        cardright.appendChild(newsImage);

    

        //pedurando os filhos ao component pai
        componentRoot.appendChild(cardleft);
        componentRoot.appendChild(cardright);

        return componentRoot;
    }

    styles(){
        const style = document.createElement("style")
        style.textContent = `
        
            .card{
                width: 800px;
                display: flex;
                margin-top: 10px;
                flex-direction: row;
                justify-content: space-between;
                -webkit-box-shadow: 1px 0px 9px 4px rgba(0,0,0,0.75);
                -moz-box-shadow: 1px 0px 9px 4px rgba(0,0,0,0.75);
                box-shadow: 1px 0px 9px 4px rgba(0,0,0,0.75);
                
            
            }

            .card-left{
                display: flex;
                flex-direction: column;
                justify-content: center;
                padding-left: 10px;
                
            }

            .card-left> a  {

                margin-top: 10px;
                font-size: 25px;
                color: black;
                text-decoration: none;
                font-weight: bold;
            }

            .cardleft >p{
                color: gray;
            }

            .cardleft >span{
                font-weight: 400;
            }

        `
        return style;
    }

}

//criando elementos customizado que tera um apelido e o mode selector CardNews
customElements.define('card-news', CardNews)
class welCome extends HTMLElement {

    constructor() {
      super();
      this.shadowDOM = this.attachShadow({mode: 'open'});
    }
  
    connectedCallback() {
      this.render();
    }
  
    render() {
      this.shadowDOM.innerHTML = `
        <style>
          * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
          }
          :host {
            display: block;
            position: relative;
            justify-content: center;
            width: -webkit-min-content;
            width: -moz-min-content;
            width: 1080px;
            margin: 200px auto;
            color: white;
            text-align: center;
            color: #ffffff;
          }
          h2 {
            padding: 16px;
          }
          .whatis {
            font-weight: bold;
            font-size: 18px;
            padding: 8px;
          }
          .desc1 {
            padding-top: 8px;
            padding-bottom: 0px;
            padding-left: 20px;
            padding-right: 20px;
            text-align: justify;
          }
          .desc2 {
            padding-top: 8px;
            padding-bottom: 16px;
            padding-left: 20px;
            padding-right: 20px;
            text-align: justify;
          }
        </style>
        
        <h2>Welcome To Movies Finder</h2>
        <p class="whatis">What is Movies Finder ?</p>
        <p class="desc1">Movies Finder is a website that provides searching of TV shows and movies information. 
        You can find new releases, classics, or anything. This service is completely legal there are no hidden 
        fees or charges. All you need to get started is a computer with an internet connection.</p>
        <p class="desc2">Movies Finder is a free service that can be accessed from any computer with access to the 
        internet and an HTML browser. There is no software or hardware required, and there are absolutely 
        no fees. It's completely legal - Movies Finder works by finding movies information through third-party servers, 
        which provide information of TV shows and movies.</p>
      `;
    }
  }
  
  customElements.define('wel-come', welCome);
  
class Navbar extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
      <style>
      *{
        padding: 0;
        margin: 0;
        box-sizing: border-box;
        font-family: sans-serif;
    }
    body{
        background: #F5F5F6;
    }
    /*======header==========*/
    nav{
        width: 100%;
        height: 70px;
        padding: 1rem 2rem 1rem 2rem;
        background: #fff;
        display: flex;
        align-items: center;
        z-index: 1000;
        position: fixed;
        justify-content: space-between;
    }
    .logo img{
        max-width: 60px;
        width: 100%;
        height: auto;
        margin-top: 0.5rem;
    }
    navbar ul{
        display: flex;
        flex-direction: row;
        justify-content: space-around;
        align-items: center;
    }
    navbar ul li{
        list-style-type: none;
        margin: 0rem 1rem;
        display: inline;
    }
    
    navbar ul li a{
        color: #000;
        text-decoration: none;
        font-size: 18px;
        text-transform: capitalize;
        cursor: pointer;
        font-weight: 500;
        font-style: normal;
    }
    navbar ul li a:hover{
        border-bottom: 2px solid #1F78FF;;
    }
    
    /*======login and sign up button========*/
    .user{
        margin-left: 7rem;
        display: flex;
        flex-direction: row;
        align-items: center;
    }
    .user a{
        text-decoration: none;
        margin: 0rem 0.4rem;
        color: #000;
        font-weight: 500;
        font-size: 1rem;
    }
    .user a:hover{
       border-bottom: 0px;
    }
    .user #sign-up{
        border: 1.5px solid #1F78FF;
        padding: 4px 5px;
        color: #1F78FF;;
        border-radius: 0.3rem;
    }
    
    /*==========dropdown ul styling==============*/
    .ul-2{
        display: flex;
        flex-direction: column;
        position: absolute;
        top: 70px;
        background-color: #1F78FF;
        padding: 0.5rem 0rem;
        visibility: hidden;
    }
    .ul-2 li{
        list-style: none;
        padding: 0.5rem 0rem;
        display: block;
    }
    
    .ul-2 li a{
        font-size: 1rem;
        color: #fff;
        cursor: pointer;
    }
    .show{
        visibility: visible;
    }
    
    /*===========hamburger=========*/
    .hamburger{
        display: none;
        cursor: pointer;
        border-radius: 0.3rem;
    }
    .bar{
        color: black;
        display: none;
        -webkit-transition: all 0.3s ease-in-out;
        transition: all 0.3s ease-in-out;
    }
    
    /*=============media query===========*/
    @media screen and (max-width:940px){
        nav{
            padding: 1rem 1.5rem;
        }
        navbar ul li a{
            font-size: 16.5px;
        }
        .user{
            margin-left: 4rem;
        }
    }
    
    
    @media screen and (max-width:850px){
        nav{
            padding: 1rem 1.3rem;
        }
        navbar ul li{
            margin: 0rem 0.7rem;
            display: inline;
        }
        navbar ul li a{
            font-size: 16px;
            font-weight: 500;
        }
        .user{
            margin-left: 2.7rem;
        }
        .logo img{
            max-width: 50px;
            width: 100%;
            height: auto;
            margin-top: 0.5rem;
        }
    }
    
    
    @media screen and (max-width:768px){
        nav{
            padding: 0.5rem 2rem;
            height: 60px;
        }
        navbar{
            position: absolute;
            top: 54px;
            left: 0;
            right: 0;
            width: 100%;
            transition: all 0.5s ease-in-out;
            transition-duration: all 1s ease;
            height: 0;
            overflow: hidden;
        }
        navbar ul{
            display: flex;
            flex-direction: column;
            height: 350px;
            margin: 0.5rem auto 0rem 0rem;
            padding: 1rem 0rem;
            background: #0D326B;
            text-align: center;
            transition: all 0.5s ease-in-out;
            transition-duration: all 2s ease;
            width: 100%;
        }
        navbar ul>div{
            display: flex;
            flex-direction: column;
        }
        .active{
            height: 350px;
        }
        .hamburger{
            display: block;
            margin: aut;
            padding-left: rem;
        }
        .hamburger.active{
            height: 5px;
        }
    
        .bar{
            color: black;
            display: block;
            font-size: 1.5rem;
            height: 8px;
            line-height: 0.4;
            width: 45px;
            font-weight: 900;
            margin: 1px auto;
            -webkit-transition: all 0.3s ease-in-out;
            transition: all 0.3s ease-in-out;
    
        }
        .hamburger.active .bar:nth-child(2){
            opacity: 0;
        }
        .hamburger.active .bar:nth-child(1){
            transform: translateY(8px) rotate(30deg);
        }
        .hamburger.active .bar:nth-child(3){
            transform: translateY(-20px) rotate(-30deg);
        }
        navbar ul li{
            margin: 0.8rem 0rem;
        }
        navbar ul li a{
            color: #fff;
            font-size: 1.05rem;
        }
        .logo img{
            max-width: 55px;
            width: 100%;
            height: auto;
            margin-top: 0.5rem;
        }
        .user{
            display: flex;
            align-items: center;
            flex-direction: column;
            margin-left: 0rem;
        }
        .user a{
            color: #fff;
            margin-bottom: 0.7rem;
        }
    }
    
    @media screen and (max-width:500px){
        nav{
            padding: 0.5rem 1.2rem;
        }
        .logo img{
            max-width: 50px;
            width: 100%;
        }
    }
    
    @media screen and (max-width:400px){
        .hamburger{
            display: block;
            margin: aut;
            padding-left: rem;
        }
        .bar{
            line-height: 0.4;
        }
    
    }
      </style>
      <header>
      <nav><!---navigation bar-->
        <div class="logo">
            <a href="index.html"><img src="../images/logo.png" alt="page-logo"></a>
        </div>
        <div class="hamburger" id="hamburger">
            <span class="bar">—</span>
            <span class="bar">—</span>
            <span class="bar">—</span>
        </div>
        <navbar class="links-wrapper">
            <ul class="nav-menu" id="nav-menu">

                <div>
                    <li class="nav-item"><a href="">services </a><span id="dropdown"> +</span>
                        <ul class="ul-2" id="service">
                            <li class="drop"><a href="./service.html" target="_blank">service1</a></li>
                            <li class="drop"><a href="#">service2</a></li>
                            <li class="drop"><a href="#">service3</a></li>
                            <li class="drop"><a href="#">service4</a></li>
                        </ul>
                    </li>
                    <li class="nav-item">
                        <a href=""> resources </a><span id="dropdown-1">+</span>
                        <ul class="ul-2" id="resources">
                            <li class="drop"><a href="#resources1">resources1</a></li>
                            <li class="drop"><a href="#">resources2</a></li>
                            <li class="drop"><a href="#">resources3</a></li>
                            <li class="drop"><a href="#">resources4</a></li>
                        </ul>
                    </li>
                    <li class="nav-item"><a href="#partner">partner</a></li>
                    <li class="nav-item"><a href="#about">about</a</li>
                    <li class="nav-item"><a href="#contact-us">contact us</a</li>
                </div>
                <section class="user">
                    <a href="#log-in" id="log-in" class="nav-item">Log in</a>
                    <a href="customer-reg.html" id="sign-up" class="nav-item">Sign up</a>
                </section>
            </ul>
        </navbar>
    </nav>
      </header>
      <!---navigation end-->
    <script src="../js/components/app.js"></script>

    `;
  }
}

customElements.define('navbar-component', Navbar);
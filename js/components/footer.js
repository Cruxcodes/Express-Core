class Footer extends HTMLElement {
    connectedCallback() {
      this.innerHTML = 
        `
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
        .footer-wrapper{
            background: #0D326B;
            width: 100%;
            height: auto;
            padding: 4rem 3rem 2.5rem 3rem;
            display: flex;
            flex-direction: row;
            justify-content: space-between;
        }
        .footer-box{
            flex-wrap: nowrap;
        }
        .footer-box h5{
            color: #fff;
            margin-bottom: 13px;
        }
        .footer-box input{
            height: 30px;
            max-width: 181px;
            width: 100%;
            padding: 0.4rem;
            border-width: none;
        }
        .footer-box input:focus{
            outline: #fff;
        }
        .footer-box button{
            height: 30px;
            max-width:80px;
            width: 100%;
            padding: 0.2rem;
            outline: none;
            border-width: 0rem;
            background: #1C6DE8;
            color: #fff;
            cursor: pointer;
        }
        .footer-logo{
            margin: 2rem 0rem 1rem 0rem;
        }
        
        .footer-logo img{
            width: 45px;
            height: auto;
        }
        .footer-box .subscribe{
            display: flex;
            flex-direction: row;
        }
        .footer-box span{
            color: #fff;
            font-size: 0.8rem;
        }
        
        .footer-nav-links,.footer-services-links{
            display: inline-block;
        }
        .footer-nav-links li, .footer-services-links li{
            margin: 0.9rem 0rem;
            list-style-type: none;
        }
        .footer-nav-links li a, .footer-services-links li a{
            text-decoration: none;
            list-style-type: none;
            color: #BAD5FF;
        }
        
        .footer-social-links{
            display: flex;
        }
        .footer-social-links li{
            list-style-type: none;
            display: inline;
        }
        .footer-social-links li a{
            text-decoration: none;
        }
        .footer-social-links li img{
            color: #fff;
            width: 20px;
            margin: 0rem 0.6rem;
            border-radius: 50%;
        }
        
        @media screen and (max-width:850px){
            .footer-wrapper{
                display: grid;
                grid-template-rows: repeat(2, 1fr);
                grid-template-columns: 1fr 1fr;
                padding-bottom: 0.5rem;
                gap: 0.8rem;
        
                grid-template-areas:
                    'part-1 part-2'
                    'part-3 part-4'
                ;
            }
            #part-1{
                grid-area: part-1;
                margin: 0rem auto;
            }
             #part-2{
                grid-area: part-2;
                margin:  auto;
            }
             #part-3{
                grid-area: part-3;
                margin: 1rem auto;
            }
             #part-4{
                grid-area: part-4;
                margin: 1rem auto;
            }
        }
        
        @media screen and (max-width:600px){
            .footer-wrapper{
                display: flex;
                flex-direction: column;
                align-items: center;
                padding-bottom: 3rem;
            }
        
            .footer-box{
                margin-bottom: 1rem;
            }
            .footer-box h5{
                color: #fff;
                padding-top: 1.3rem;
            }
            #part-3, #part-4{
                margin-top: 0rem;
            }
        }
        </style>
        <footer><!-------footer---->
        <section class="footer-wrapper">
            <div class="footer-box" id="part-1">
                <h5>Subscribe to our newsletter</h5>
               <div class="subscribe">
                    <input type="email" name="email" placeholder="Enter your email">
                    <button type="submit">Subscribe</button>
               </div>

                <div class="footer-logo">
                    <img src="../images/logo.png" alt="page-logo">
                </div>
                <span>&copy; 2022 ExpressCore LTD  All Rights Reserved</span>
            </div>
            <div class="footer-box" id="part-2">
                <h5>Nav Links</h5>
                <div class="footer-nav-links">
                    <li><a href="">Home</a></li>
                    <li><a href="">Contact Us</a></li>
                    <li><a href="">Partner</a></li>
                    <li><a href="">FAQ</a></li>
                    <li><a href="">About</a></li>
                </div>
            </div>
            <div class="footer-box" id="part-3">
                <h5>Services</h5>
                <div class="footer-services-links">
                    <li><a href="">Get Qoute</a></li>
                    <li><a href="">Request Pickup</a></li>
                </div>
            </div>
            <div class="footer-box" id="part-4">
                <h5>Connect with us</h5>
                <div class="footer-social-links">
                    <li><a href=""><img src="../images/facbook.png" alt="facebook-icon"></a></li>
                    <li><a href=""><img src="../images/twitter.png" alt=""></a></li>
                    <li><a href=""><img src="../images/instagram.png" alt=""></a></li>
                </div>
            </div>
        </section>

    </footer>
    <script src="../js/app.js"></script>
        `
      
    }
  }
  
  
  customElements.define('footer-component', Footer);
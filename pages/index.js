import React, { Component } from 'react'
import Head from 'next/head'
import {
  Checkbox,
  Grid,
  Header,
  Icon,
  Image,
  Menu,
  Segment,
  Sidebar,
  Button,
  Dropdown
} from 'semantic-ui-react'

export default class Home extends Component {
  
  state = { visible: false, setVisible: false };
  handleItemClick = () => this.setState({ visible: !this.state.visible })
 

   render(){
      return (
        
          <div className="container">
        
            <Head>
              <title>East Bidwell</title>
              <link rel="icon" href="/favicon.ico" />
              <link rel="stylesheet" href="https://use.typekit.net/lxn5ani.css"/>
            </Head>
        
        <div className="menuopener">
            <div> <h1 className="menuitems" onClick={this.handleItemClick}>Menu</h1> </div>
            <div className="menuright"> 
               <div > <h1 className="menuitems"> Hello </h1> </div>
               <div > <h1 className="menuitems"> Goodbye </h1> </div>
               <div>  <h1 className="menuitems"> Yahoo </h1> </div>
            </div>
        </div>
        
            <Sidebar
              as={Menu}
              animation='overlay'
              icon='labeled'
              inverted

              vertical
              visible={this.state.visible}
              width='wide'
            >
                   <Menu.Item 
                      onClick={this.handleItemClick} 
                      >
                        Close
                      </Menu.Item>
              <div className= "divcenter">
                <Menu.Item as='a'>
                  Call, Text or Email us anytime!
                </Menu.Item>
                <Menu.Item as='a'>
                  <Icon name='phone' />
                  305-814-7210
                </Menu.Item>
                <Menu.Item as='a'>
                  <Icon name='mail' />
                  hello@eastbidwell.com
                </Menu.Item>
              </div>
            </Sidebar>
        
<img src="/EBWEBLOGO7.svg" alt="my image" />
<img src="https://images.unsplash.com/photo-1510936111840-65e151ad71bb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2867&q=80" alt="my image" />
<img src="https://images.unsplash.com/photo-1502847427791-d0194ec4cff4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1790&q=80" alt="my image" />
   
  
            <main>
             <h1> Hello </h1>
            </main>

            <footer>
              <a
                href="https://www.eastbidwell.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <h1 classname="footercontent">POWERED BY EAST BIDWELL LLC</h1>
              </a>
            </footer>

        
        
      <style jsx>{`
        .container {
          min-height: 100vh;
          padding: 0 0 0 0;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          background-color: rgba(0,0,0,0.8);

        }

 .menuopener {
          color: #fff;
          height: 30px;  
          display: flex;
          flex-direction: row;
          justify-content: space-between;
          align-items: center;
          width: 90%;
        }

 .menuright {
          color: #fff;
          height: 30px;  
          display: flex;
          flex-direction: row;
          justify-content: space-between;
          align-items: center;
          width: 40%;
        }

.menuitems {
          color: #f5f5f7;
          font-size: 14px;
          font-family: ltc-bodoni-175, serif;
          font-weight: 400;
          font-style: normal;
          opacity: 0.8;
          
        }

        main {
          padding: 0 0;
  
          
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          background-image: url("https://cdn.pixabay.com/photo/2020/08/13/14/15/mountains-5485366_1280.jpg");
          width: 100%;
        }

        footer {
          width: 100%;
          height: 100px;
          border-top: 1px solid #eaeaea;
          display: flex;
          justify-content: center;
          align-items: center;
 background-color: #fff;
        }
    
       
        .divcenter {
         
          padding: 28vh 0 10vh 0;
          height: 80vh;
        }
        

        .contentone {
          background-color: #fff;
          width: 100%;
          height: 100vh;
        }
        .contenttwo {
          background-color: #eaeaea;
          width: 100%;
          height: 100vh;
        }
        .contentthree {
          background-color: #fff;
          width: 100%;
          height: 100vh;
        }


        footer a {
          display: flex;
          justify-content: center;
          align-items: center;
        }

        a {
          color: inherit;
          text-decoration: none;
        }

        .title a {
          color: #0070f3;
          text-decoration: none;
        }

        h1:hover,
        h1:focus,
        h1:active {
          text-decoration: underline;
        }

        .title {
          margin: 0;
          line-height: 1.15;
          font-size: 4rem;
        }

        .title,
        .description {
          text-align: center;
        }

        .description {
          line-height: 1.5;
          font-size: 1.5rem;
        }

        code {
          background: #fafafa;
          border-radius: 5px;
          padding: 0.75rem;
          font-size: 1.1rem;
          font-family: Menlo, Monaco, Lucida Console, Liberation Mono,
            DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace;
        }

        .grid {
          display: flex;
          align-items: center;
          justify-content: center;
          flex-wrap: wrap;

          max-width: 800px;
          margin-top: 3rem;
        }

        .card {
          margin: 1rem;
          flex-basis: 45%;
          padding: 1.5rem;
          text-align: left;
          color: inherit;
          text-decoration: none;
          border: 1px solid #eaeaea;
          border-radius: 10px;
          transition: color 0.15s ease, border-color 0.15s ease;
        }

        .card:hover,
        .card:focus,
        .card:active {
          color: #0070f3;
          border-color: #0070f3;
        }

        .card h3 {
          margin: 0 0 1rem 0;
          font-size: 1.5rem;
        }

        .card p {
          margin: 0;
          font-size: 1.25rem;
          line-height: 1.5;
        }

        .logo {
          height: 1em;
        }

        @media (max-width: 600px) {
          .grid {
            width: 100%;
            flex-direction: column;
          }
        }
      `}</style>

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
        }

        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  )
}
}
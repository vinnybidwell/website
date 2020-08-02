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
            </Head>

           <Menu inverted attached='top' size='small'>
              <Menu.Item 
              onClick={this.handleItemClick} 
              >
               MENU >
              </Menu.Item>

              <Menu.Menu position='right'>
                <Menu.Item
                >
                  EAST BIDWELL
                </Menu.Item>
              </Menu.Menu>
            </Menu>

        
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

 <div className="contentone">
 </div>
 <div className="contenttwo">
 </div>
 <div className="contentthree">
 </div>
        
         
  
            <main>
              <h1 className="title">
                Welcome to <a href="https://nextjs.org">Next.js!</a>
              </h1>
             <Checkbox
                checked={this.state.visible}
                label={{ children: <code>visible</code> }}
                onChange={this.handleItemClick}
              />

              <p className="description">
                Get started by editing <code>pages/index.js</code>
              </p>

              <div className="grid">
                <a href="https://nextjs.org/docs" className="card">
                  <h3>Documentation &rarr;</h3>
                  <p>Find in-depth information about Next.js features and API.</p>
                </a>

                <a href="https://nextjs.org/learn" className="card">
                  <h3>Learn &rarr;</h3>
                  <p>Learn about Next.js in an interactive course with quizzes!</p>
                </a>

                <a
                  href="https://github.com/vercel/next.js/tree/master/examples"
                  className="card"
                >
                  <h3>Examples &rarr;</h3>
                  <p>Discover and deploy boilerplate example Next.js projects.</p>
                </a>

                <a
                  href="https://vercel.com/import?filter=next.js&utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
                  className="card"
                >
                  <h3>Deploy &rarr;</h3>
                  <p>
                    Instantly deploy your Next.js site to a public URL with Vercel.
                  </p>
                </a>
              </div>
            </main>

            <footer>
              <a
                href="https://www.eastbidwell.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                Powered by East Bidwell LLC
              </a>
            </footer>

        
        
      <style jsx>{`
        .container {
          min-height: 100vh;
          padding: 0 ;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }


        main {
          padding: 5rem 0;
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        footer {
          width: 100%;
          height: 100px;
          border-top: 1px solid #eaeaea;
          display: flex;
          justify-content: center;
          align-items: center;
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

        .title a:hover,
        .title a:focus,
        .title a:active {
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
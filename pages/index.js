import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Next.js Starter!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="Welcome to Brendan's Portfolio" />
        <p className="description">
          <table>
            <tr>
              <td nowrap="true">Project 1:</td>
              <td nowrap="true"><a href="https://01-lottery-brendan-baker.netlify.app/" target="_blank" rel="noopener noreferrer">Lottery</a> - </td>
              <td>
                A lottery dapp that randomly selects the winner once the bet limit is reached.
                <br></br>
                The page requires a metamask connection to the Rinkeby Test Network.
                <br></br>
                My first project having a react frontend interact with a blockchain network.
              </td>
            </tr>
            <tr></tr>
            <tr>
              <td nowrap="true">Project 2:</td>
              <td nowrap="true"><a href="https://polygonscan.com/address/0x48697417f102663bea75a52cccc7bd5da9e8705f#code" target="_blank" rel="noopener noreferrer">Defy Genesis Invites</a> - </td>
              <td>
                Partnering with the <a href="https://defydisrupt.io/" target="_blank" rel="noopener noreferrer">DEFY</a> team I assisted developing the DEFY Genesis Invite NFT smart contract.
                <br></br>
                The contract was designed to the ERC721 standard with OpenZeppelin API. It has been deployed to Polygon's mainnet and aided with the <a href="https://polygonscan.com/address/0xfd257ddf743da7395470df9a0517a2dfbf66d156#code" target="_blank" rel="noopener noreferrer">DEFY Gensis Mask</a> sell out.
                <br></br>
                Much of my time spent developing and testing a functioning upgradeable contract system, using OpenZeppelin's API. However, the project team opted to simplify and deploy without upgradeability.
              </td>
            </tr>


          </table> 
        </p>
      </main>

      <Footer />
    </div>
  )
}

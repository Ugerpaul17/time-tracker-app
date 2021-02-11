import Head from 'next/head'
import Navbar from './Navbar';


function Layout(props) {


    return (
      <div>
        <Head>
          <title>Dashboard</title>
        </Head>
            <Navbar />
            <div>
           {props.children}
            </div>
      </div>
    );
}



export default Layout
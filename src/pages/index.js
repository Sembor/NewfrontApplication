import Head from 'next/head';
import Link from 'next/link';
import classes from './application/applications.module.css';


function HomePage(props) {
  const appPage1 = `/application/page1`;

  return (
    <form className={`${classes.form} ${classes.center1}`}>
    <div className={classes.center2}>
      <Head>
        <title>Newfront Application</title>
        <meta
          name='Newfront Application'
          content='Start your application by filling your data'
        />
      </Head>
      <h2>Welcome to Newfront</h2>
      <h4>Click the button to continue</h4>
      <Link href={appPage1} passHref>
      <button>
        <span>Start Application</span>
      </button>
      </Link>

    </div>
    </form>
  );
}




export default HomePage;

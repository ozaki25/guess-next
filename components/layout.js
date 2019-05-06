import { withRouter } from 'next/router';
import { guess } from 'guess-webpack/api';

import Link from 'next/link';
import Head from 'next/head';

function Layout({ router, children, title = '🔮 Next.js + Guess.js' }) {
  if (typeof window !== 'undefined')
    Object.keys(guess()).forEach(p => router.prefetch(p));
  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="stylesheet" href="/static/styles.css" />
      </Head>
      <header>
        <nav>
          <Link href="/">
            <a>Home</a>
          </Link>
          <Link href="/example">
            <a>Example</a>
          </Link>
          <Link href="/about">
            <a>About</a>
          </Link>
        </nav>
      </header>
      <div className="content">{children}</div>
    </div>
  );
}

export default withRouter(Layout);

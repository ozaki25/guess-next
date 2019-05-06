import React from 'react';
import Link from 'next/link';
import Layout from '../components/layout';

function About() {
  return (
    <Layout>
      Guess.js is a library for predictive prefetching
      <br />
      for your applications. If you want to see Guess.js' logo
      <br />
      visit the <Link href="/media">media</Link> page.
    </Layout>
  );
}

export default About;

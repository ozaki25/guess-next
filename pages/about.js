import React from 'react';
import Link from 'next/link';
import Layout from '../components/layout';

function About() {
  return (
    <Layout>
      About
      <br />
      You can find the{' '}
      <Link href="/media">
        <a>media page here</a>
      </Link>
    </Layout>
  );
}

export default About;

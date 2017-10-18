import Img from 'gatsby-image';
import Link from 'gatsby-link';
import React from 'react';

export default ({ data }) => (
  <div>
    <h1>I&rsquo;m Nadav Spiegelman</h1>
    <h2>and this is my home on the web.</h2>
    <Img 
      alt=""
      className="home-image"
      sizes={data.imageSharp.sizes}
    />
  </div>
);

export const query = graphql`
  query GatsbyImageSampleQuery {
    imageSharp(id: { regex: "/nadav.jpg/" }) {
      sizes(maxWidth: 1240) {
        ...GatsbyImageSharpSizes
      }
    }
  }
`

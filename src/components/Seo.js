import React from "react";
import { Helmet } from "react-helmet";
import logo from "../images/logo.svg";

export default function SEO() {
  const url = "www.visualgroupdigital.com";
  const fbId = "" 


  return (
    <Helmet>
      {/* general tags */}
      <title>Visual Group Digital | Marketing And Development Agency</title>

      <link rel="icon" type="image/png" href={logo} />

      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="description" content="We are leading marketing, branding and web development agency. Who strategically plan the design of websites that empower your business." />

      {/* opengraph tags */}
      <meta property="og:url" content={url} />
      <meta property="og:title" content="Visual Group Digital" />
      <meta property="fb:app_id" content={fbId} />

      {/* twitter tags */}

      <link rel="preload" href="https://fonts.googleapis.com/css2?family=Poppins&display=swap" as="font" type="font/woff2" crossorigin /> 

      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
      <link href="https://fonts.googleapis.com/css2?family=Poppins&display=swap" rel="stylesheet" />
    </Helmet>
  )
}

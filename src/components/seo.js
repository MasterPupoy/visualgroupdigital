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
      <meta property="og:title" content="Visual Studio Group" />
      <meta property="fb:app_id" content={fbId} />

      {/* twitter tags */}

    </Helmet>
  )
}
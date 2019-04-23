import React, { Component } from 'react';
import FeaturedArticles from "./featuredArticles.jsx";
import CuratedCollections from "./curatedCollections.jsx";

const Home = () => (
  <div className="container">
    <h2>Team Dev Home page</h2>
    <FeaturedArticles />
    <CuratedCollections />
  </div>
);
export default Home;
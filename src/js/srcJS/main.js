"use strict";
import React, {Component} from 'react';
import ReactDOM from 'react-dom';


import Header from './header.js';
ReactDOM.render(
    <Header/>,
    document.getElementById('header')
);

import Footer from './footer.js';
ReactDOM.render(
    <Footer/>,
    document.getElementById('footer')
);


import BlogForm from './blogform.js';
import Banner from './banner.js';

ReactDOM.render(
    <div>
        <Banner/>
        <BlogForm/>
    </div>,
    document.getElementById('main')
);
"use strict";
import React, {Component} from 'react';
import ReactDOM from 'react-dom';
const createReactClass = require('create-react-class');


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

// import {connect} from 'react-redux';
// import {Provider} from 'react-redux';
// import {createStore} from 'redux';
//
// const addTodo = text => {
//     return {
//         type: 'Add_todo',
//         id: Date.now(),
//         text
//     }
// };
// function todos(state=[], action) {
//     switch (action.type) {
//         case 'Add_todo': {
//             return [
//                 ...state,
//                 {
//                     id: action.id,
//                     text: action.text,
//                     complete: false
//                 }
//             ]
//
//         }
//         default: {
//             return state;
//         }
//     }
// }
//
// const store = createStore(todos);
//
// class Todo extends Component {
//     render() {
//         const { text, completed } = this.props;
//
//         return (
//             <div >
//                 {text}
//             </div>
//         );
//     }
// }
// connect(mapStateToProps)(TodoList);
// class TodoList extends Component {
//     render() {
//         return (
//             <div>
//                 {
//                     this.props.todos.map(todo =>
//                         <Todo
//                             key={todo.id}
//                             id={todo.id}
//                             text={todo.text}
//                         />
//                     )
//                 }
//             </div>
//         );
//     }
// }
//
// function mapStateToProps(state) {
//     return {
//         todos: state
//     };
// }
// // connect({ addTodo })(AddTodo);
// class AddTodo extends Component {
//     constructor(props) {
//         super(props);
//
//         this.valueBlock = this.valueBlock.bind(this);
//         this.addItem = this.addItem.bind(this);
//         this.state = {
//             value: ''
//         }
//     }
//
//     valueBlock(e) {
//         this.setState({value: e.target.value});
//     }
//
//     addItem() {
//         this.props.addTodo(this.state.value);
//         this.setState({value: ''});
//     }
//
//     render() {
//         return (
//             <div className="wrapper">
//                 <input type="text" onChange={this.valueBlock} value={this.state.value}/>
//                 <input type="submit" onClick={this.addItem} value={'AddItem'}/>
//             </div>
//         );
//     }
// }
//
//
// // connect(AddTodo, { addTodo });
//
// class TodoApp extends Component {
//     render() {
//         return (
//             <div>
//                 <div>
//                     <h2>To do</h2>
//                     <div>
//                         <AddTodo />
//                         <TodoList />
//                     </div>
//                 </div>
//             </div>
//         );
//     }
// }
// ReactDOM.render(
//     <Provider store={store}>
//         <TodoApp />
//     </Provider>,
//     document.getElementById('root1')
// );

//
//
// var App = createReactClass({
//     getInitialState: function () {
//         return {
//             posts: {}
//         }
//     },
//     addPost: function (post) {
//         var timestamp = (new Date()).getTime();
//         // update the state object
//         this.state.posts['post-' + timestamp] = post;
//         // set the state
//         this.setState({posts: this.state.posts});
//     },
//     renderPost: function (key) {
//         return <NewPost key={key} index={key} details={this.state.posts[key]}/>
//     },
//     render: function () {
//         var imgOne = "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9e/Balaton_Hungary_Landscape.jpg/1024px-Balaton_Hungary_Landscape.jpg";
//         var imgTwo = "https://c2.staticflickr.com/8/7432/9087815445_1a14743549_b.jpg";
//         var imgThree = "https://c2.staticflickr.com/6/5738/23929500196_b6a1ce1dfb_b.jpg";
//         var imgFour = "https://pixabay.com/static/uploads/photo/2015/09/14/19/15/aerial-landscape-939963_960_720.jpg";
//         var dummyPost = "Praesent id metus massa, ut blandit odio. Proin quis tortor orci. Etiam at risus et justo dignissim congue. Donec congue lacinia dui, a porttitor lectus condimentum laoreet. Nunc eu ullamcorper orci. Quisque eget odio ac lectus vestibulum faucibus eget in metus. In pellentesque faucibus vestibulum. Nulla at nulla justo, eget luctus.";
//         return (
//             <div>
//                 <Banner/>
//                 <div className="wrapper">
//
//                     <div className="list-of-posts">
//                         {Object.keys(this.state.posts).map(this.renderPost)}
//                     </div>
//                     <AddPostForm addPost={this.addPost}/>
//                 </div>
//             </div>
//         )
//     }
//
// });
//
// /*
//   Add Post Form
//   <AddPostForm />
// */
// var AddPostForm = createReactClass({
//     createPost: function (event) {
//         event.preventDefault();
//         // take the data from the form and create an object
//         var post = {
//             title: this.refs.title.value,
//             name: this.refs.name.value,
//             desc: this.refs.desc.value,
//             image: this.refs.image.value
//         }
//         // add the post to the App State
//         this.props.addPost(post);
//         this.refs.postForm.reset();
//     },
//     render: function () {
//         return (
//             <div className="callout secondary form-area">
//                 <h5>Add a Post to the React Blog</h5>
//                 <form className="post-edit" ref="postForm" onSubmit={this.createPost}>
//                     <label>Post Title
//                         <input type="text" ref="title" placeholder="Post Title" required/>
//                     </label>
//                     <label>Author Name
//                         <input type="text" ref="name" placeholder="Full Name required" required/>
//                     </label>
//                     <label>Post Body
//                         <textarea
//                             ref="desc"
//                             placeholder="Write your post here" required/>
//                     </label>
//                     <label>Image URL - <span className="highlight">use this one to test 'https://bit.ly/1P9prpc'</span>
//                         <input type="url" ref="image" placeholder="The URL of the featured image for your post"
//                                required/>
//                     </label>
//                     <button type="submit" className="button">Add Post</button>
//                 </form>
//             </div>
//         )
//     }
// });
//
//
// /*
//   NewPost
//   <NewPost />
// */
// var NewPost = createReactClass({
//     render: function () {
//         var details = this.props.details;
//         return (
//             <div className="blog-post">
//                 <h3 className="ptitle">{details.title}
//                     <small>{h.getTime()}</small>
//                 </h3>
//                 <img className="thumbnail" src={details.image} alt={details.name}/>
//                 <p>{details.desc}</p>
//                 <div className="callout callout-post">
//                     <ul className="menu simple">
//                         <li><a href="#">Author: {details.name}</a></li>
//                         <li><a href="#">Comments: 0</a></li>
//                         <li><a href="#">Tags: {h.getTaggedName()}</a></li>
//                     </ul>
//                 </div>
//             </div>
//         )
//     }
// });
//
//
//
//
//
// // Banner component
//
//
//
// // Blog Post
// var Post = createReactClass({
//     tryClick: function () {
//         alert('just trying out click events lalala');
//     },
//     render: function () {
//         var com = "Comments";
//         return (
//             <div className="blog-post">
//                 <h3 className="ptitle">{this.props.ptitle}
//                     <small>{this.props.date}</small>
//                 </h3>
//                 <img className="thumbnail" src={this.props.pimg}/>
//                 <p>{this.props.postbody}</p>
//                 <div className="callout callout-post">
//                     <ul className="menu simple">
//                         <li><a href="#" onClick={this.tryClick}>Author: {this.props.author}</a></li>
//                         <li><a href="#">{com}: {this.props.comments}</a></li>
//                         <li><a href="#">Tags: {h.getTaggedName()}</a></li>
//                     </ul>
//                 </div>
//             </div>
//         )
//     }
// });
//
// //instead of ReactDOM like in the video:
// ReactDOM.render(
//     <App/>,
//     document.getElementById('main')
// );
//
// //polyfill for key
// // From https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/keys
// if (!Object.keys) {
//     Object.keys = (function () {
//         'use strict';
//         var hasOwnProperty = Object.prototype.hasOwnProperty,
//             hasDontEnumBug = !({toString: null}).propertyIsEnumerable('toString'),
//             dontEnums = [
//                 'toString',
//                 'toLocaleString',
//                 'valueOf',
//                 'hasOwnProperty',
//                 'isPrototypeOf',
//                 'propertyIsEnumerable',
//                 'constructor'
//             ],
//             dontEnumsLength = dontEnums.length;
//
//         return function (obj) {
//             if (typeof obj !== 'object' && (typeof obj !== 'function' || obj === null)) {
//                 throw new TypeError('Object.keys called on non-object');
//             }
//
//             var result = [], prop, i;
//
//             for (prop in obj) {
//                 if (hasOwnProperty.call(obj, prop)) {
//                     result.push(prop);
//                 }
//             }
//
//             if (hasDontEnumBug) {
//                 for (i = 0; i < dontEnumsLength; i++) {
//                     if (hasOwnProperty.call(obj, dontEnums[i])) {
//                         result.push(dontEnums[i]);
//                     }
//                 }
//             }
//             return result;
//         };
//     }());
// }


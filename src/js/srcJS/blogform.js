import React, {Component} from 'react';

const dataNow = {
    getTime: function () {
        let month = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
        let d = new Date();
        let mon = month[d.getMonth()];
        let day = d.getDate();
        let year = d.getFullYear();
        let dateAll = mon + " " + day + ", " + year;

        return dateAll;
    },
};

export default class BlogForm extends Component {
    constructor(props) {
        super(props);
        this.AddBlog = this.AddBlog.bind(this);
        this.BlogTitle = this.BlogTitle.bind(this);
        this.SearchText = this.SearchText.bind(this);
        this.BlogText = this.BlogText.bind(this);
        this.BlogAuthor = this.BlogAuthor.bind(this);
        this.BlogImage = this.BlogImage.bind(this);
        this.deleteItem = this.deleteItem.bind(this);
        this.state = {
            search: '',
            title: '',
            text: '',
            imageUrl: '',
            author: '',
            blogList: testList,
            searchList: testList,
        }
    }


    deleteItem(e) {
        this.setState({
            blogList: this.state.blogList.filter(note => note.id !== e)
        });
    }

    BlogTitle(e) {
        this.setState({title: e.target.value})
    }

    BlogText(e) {
        this.setState({text: e.target.value})
    }

    BlogAuthor(e) {
        this.setState({author: e.target.value})
    }

    BlogImage(e) {
        this.setState({imageUrl: e.target.value})
    }

    SearchText(e) {
        this.setState({search: e.target.value});
        this.setState({
            blogList: this.state.searchList.filter(item => item.title.toLowerCase().includes(e.target.value.toLowerCase()))
        });
    }

    AddBlog(e) {
        e.preventDefault();
        const itemConst = {
            id: Date.now(),
            date: dataNow.getTime(),
            title: this.state.title,
            text: this.state.text,
            author: this.state.author,
            imageUrl: this.state.imageUrl,
        };
        // this.setState({
        //     blogList: [ ...this.state.blogList, itemConst],
        // });
        this.state.blogList.push(itemConst);
        this.state.searchList = this.state.blogList;
        this.resetForm();
    }

    resetForm() {
        this.setState({title: '', text: '', author: '', imageUrl: ''});
    }

    render() {
        return (
            <div className={'wrapper'}>
                <h5>ADD POST TO THE REACT BLOG</h5>
                <div className={"add-post-form"}>
                    <input type="text" placeholder={'Search some post title'} value={this.state.search}
                           onChange={this.SearchText} className={"search-input"}/>
                    <form action="#" onSubmit={this.AddBlog}>
                        <div className="input-wrap">
                            <input type="text" placeholder={'Post Title'} onChange={this.BlogTitle}
                                   value={this.state.title} required/>
                            <input type="text" placeholder={'Post Author'} onChange={this.BlogAuthor}
                                   value={this.state.author} required/>

                        </div>
                        <textarea cols="30" rows="30" placeholder={'Post Text'} onChange={this.BlogText}
                                  value={this.state.text} required/>
                        Image URL - <span>use this one to test 'https://reactjs.org/logo-og.png'</span>
                        <input type="url" onChange={this.BlogImage} placeholder="Image url for your post"
                               value={this.state.imageUrl} className={"image-ulr-input"} required/>
                        <input type="submit" className={"btn-add-post"} value={"Add Post"}/>
                    </form>
                </div>
                <BlogList blogList={this.state.blogList} onDelete={this.deleteItem}/>
            </div>
        );
    }
}

class BlogList extends Component {
    constructor(props) {
        super(props);
    }


    render() {
        return (
            <div className={"Blog-list-items"}>
                {this.props.blogList.map((item, index) =>
                    <div className={"item"} key={index} id={item.id}>
                        <div className={"image-block"}>
                            <img className={"image"} src={item.imageUrl}/>
                        </div>
                        <div className={"title"}>{item.title}
                            <div className={"date"}>{item.date}</div>
                        </div>
                        <div className={"text"}>{item.text}</div>
                        <div className={"close-item"} onClick={this.props.onDelete.bind(this, item.id)}>delete post
                        </div>
                        <div className={"metaDate"}>
                            <div className={"author-name"}>
                                Author: {item.author}
                            </div>
                        </div>
                    </div>
                )}
            </div>
        );
    }
}

const testList = [
    {
        id: Date.now()+1,
        date: dataNow.getTime(),
        title: 'Lorem ipsum.',
        text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid, blanditiis?',
        author: 'Stranger',
        imageUrl: 'https://reactjs.org/logo-og.png',
    },
    {
        id: Date.now()+2,
        date: dataNow.getTime(),
        title: 'Lorem ipsum. 2',
        text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio, est hic suscipit tempora veniam voluptates.',
        author: 'Stranger 2',
        imageUrl: 'https://reactjs.org/logo-og.png',
    }, 
    // {
    //     id: Date.now()+3,
    //     date: dataNow.getTime(),
    //     title: 'Lorem ipsum. 3',
    //     text: 'Lorem ipsum dolor sit amet.',
    //     author: 'Stranger 3',
    //     imageUrl: 'https://reactjs.org/logo-og.png',
    // },
];
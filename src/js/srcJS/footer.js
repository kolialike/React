import React, {Component} from 'react';

var footerinfo = {
    copyText: ' © 2009-2018 Материалы данного сайта не могут быть использованы на других сайтах и изданиях без письменного подтверждения редакции.',
};

var footernav = [{
    id: '1',
    title: 'Тайтл 1',
    text: 'Пункт 1',
    text2: 'Пункт 2',
    text3: 'Пункт 3',
}, {
    id: '2',
    title: 'Тайтл 2',
    text: 'Пункт 4',
    text2: 'Пункт 5',
    text3: 'Пункт 6',
}, {
    id: '3',
    title: 'Тайтл 3',
    text: 'Пункт 7',
    text2: 'Пункт 8',
    text3: 'Пункт 9',
}, {
    id: '4',
    title: 'Тайтл 4',
    text: 'Пункт 10',
    text2: 'Пункт 11',
    text3: 'Пункт 12',
}];

export default class Footer extends Component {
    render() {
        return (
            <div className='footer-container'>
                <div className='wrapper'>
                    <div className="footer">
                        <div className="footer-nav">
                            <FooterNav footernav={footernav}/>
                        </div>
                        <div className="copy-block">
                            <p>{footerinfo.copyText}</p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

function FooterNav(props) {
    const nav = props.footernav.map((post) =>
        <div key={post.id} className="item">
            <h3>{post.title}</h3>
            <div>{post.text}</div>
            <div>{post.text2}</div>
            <div>{post.text3}</div>
        </div>
    );
    return (
        <div className={"items"}>
            {nav}
        </div>
    );
}
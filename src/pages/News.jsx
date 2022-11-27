import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom';
import NewsCard from '../components/NewsCard';


const News = () => {

    const [news, setNews] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState();

    const options = {
        method: 'GET',
        
        url: 'https://bing-web-search1.p.rapidapi.com/search',
        params: { q: 'Cryptocurrency', count: '20', mkt: 'en-us', safeSearch: 'Off', textFormat: 'Raw', freshness: 'Day' },
        headers: {
            'X-BingApis-SDK': 'true',
            'X-RapidAPI-Key': 'cefbab10f2msh7a1be607a45cd2cp186b69jsn5983f1e48100',
            'X-RapidAPI-Host': 'bing-web-search1.p.rapidapi.com'
        }
    };

    
    useEffect(() => {
        setLoading(true);
        
        axios.request(options).then(function (response) {
            setNews(response.data.webPages.value);
            setLoading(false);

            // console.log(response.data.webPages.value);

        }).catch(function (error) {
            console.error(error);
        });


    }, [])




    return (
        <div className="container-fluid">
            <div className="container">


                <div className="nav-scroller py-1 mb-2">
                    <nav className="nav d-flex justify-content-between">
                        <a className="p-2 link-secondary" href="#">World</a>
                        <a className="p-2 link-secondary" href="#">U.S.</a>
                        <a className="p-2 link-secondary" href="#">Technology</a>
                        <a className="p-2 link-secondary" href="#">Design</a>
                        <a className="p-2 link-secondary" href="#">Culture</a>
                        <a className="p-2 link-secondary" href="#">Business</a>
                    </nav>
                </div>
            </div>

            <main className="container">
                <div className="p-4 p-md-5 mb-4 rounded text-bg-dark">
                    <div className="col-md-6 px-0">
                        <h1 className="display-4 fst-italic">{news[2].name}</h1>
                        <p className="lead my-3">{news[2].snippet}</p>
                        <p className="lead mb-0"><a href={news[2].url} className="text-white fw-bold">Continue reading...</a></p>
                    </div>
                </div>

                <div className="row mb-2">
                    {
                        news.map( (item) => {
                            
                            return(
                                <Link  to={item.url} key={item.id}>
                                    <NewsCard
                                        id = {item.id}
                                        name = {item.name}
                                        snippet = {item.snippet}
                                        url = {item.url}
                                        dateLastCrawled = {item.dateLastCrawled}
                                        language = {item.language}
                                    />
                                </Link>
                            );


                        })

                    }
                    
                </div>

                <div className="row g-5">
                    <div className="col-md-8">
                        <h3 className="pb-4 mb-4 fst-italic border-bottom">
                            From the Firehose
                        </h3>

                        <article className="blog-post">
                            <h2 className="blog-post-title mb-1">Sample blog post</h2>
                            <p className="blog-post-meta">January 1, 2021 by <a href="#">Mark</a></p>

                            <p>This blog post shows a few different types of content that’s supported and styled with Bootstrap. Basic typography, lists, tables, images, code, and more are all supported as expected.</p>
                            <hr />
                            <p>This is some additional paragraph placeholder content. It has been written to fill the available space and show how a longer snippet of text affects the surrounding content. We'll repeat it often to keep the demonstration flowing, so be on the lookout for this exact same string of text.</p>


                        </article>




                    </div>

                    <div className="col-md-4">
                        <div className="position-sticky" style={{ top: 2 + 'rem', }}>
                            <div className="p-4 mb-3 bg-light rounded">
                                <h4 className="fst-italic">About</h4>
                                <p className="mb-0">
                                    Hello visitors; a little bit about my publication,
                                    writers, content, or something else entirely.
                                </p>
                            </div>

                            <div className="p-4">
                                <h4 className="fst-italic">Archives</h4>
                                <ol className="list-unstyled mb-0">
                                    <li><a href="#">March 2021</a></li>
                                    <li><a href="#">February 2021</a></li>
                                    <li><a href="#">January 2021</a></li>
                                    <li><a href="#">December 2020</a></li>
                                    <li><a href="#">November 2020</a></li>
                                </ol>
                            </div>

                            <div className="p-4">
                                <h4 className="fst-italic">Elsewhere</h4>
                                <ol className="list-unstyled">
                                    <li><a href="#">GitHub</a></li>
                                    <li><a href="#">Twitter</a></li>
                                    <li><a href="#">Facebook</a></li>
                                </ol>
                            </div>
                        </div>
                    </div>
                </div>

            </main>

        </ div>

    )
}

export default News
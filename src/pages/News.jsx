import React, { useEffect } from 'react'
import axios from 'axios'


const News = () => {

    const options = {
        method: 'GET',
        url: 'https://bing-news-search1.p.rapidapi.com/news',
        params: { safeSearch: 'Off', textFormat: 'Raw' },
        headers: {
            'X-BingApis-SDK': 'true',
            'X-RapidAPI-Key': 'cefbab10f2msh7a1be607a45cd2cp186b69jsn5983f1e48100',
            'X-RapidAPI-Host': 'bing-news-search1.p.rapidapi.com'
        }
    };

    axios.request(options).then(function (response) {
        console.log(response.data);
    }).catch(function (error) {
        console.error(error);
    });

    useEffect(() => {


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
                        <h1 className="display-4 fst-italic">This page is still in development; wait a little more</h1>
                        <p className="lead my-3">Multiple lines of text that form the lede, informing new readers quickly and efficiently about what’s most interesting in this post’s contents.</p>
                        <p className="lead mb-0"><a href="#" className="text-white fw-bold">Continue reading...</a></p>
                    </div>
                </div>

                <div className="row mb-2">
                    <div className="col-md-6">
                        <div className="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
                            <div className="col p-4 d-flex flex-column position-static">
                                <strong className="d-inline-block mb-2 text-primary">World</strong>
                                <h3 className="mb-0">Featured post</h3>
                                <div className="mb-1 text-muted">Nov 12</div>
                                <p className="card-text mb-auto">This is a wider card with supporting text below as a natural lead-in to additional content.</p>
                                <a href="#" className="stretched-link">Continue reading</a>
                            </div>
                            <div className="col-auto d-none d-lg-block">
                                <svg className="bd-placeholder-img" width="200" height="250" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Thumbnail" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#55595c" /><text x="50%" y="50%" fill="#eceeef" dy=".3em">Thumbnail</text></svg>

                            </div>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
                            <div className="col p-4 d-flex flex-column position-static">
                                <strong className="d-inline-block mb-2 text-success">Design</strong>
                                <h3 className="mb-0">Post title</h3>
                                <div className="mb-1 text-muted">Nov 11</div>
                                <p className="mb-auto">This is a wider card with supporting text below as a natural lead-in to additional content.</p>
                                <a href="#" className="stretched-link">Continue reading</a>
                            </div>
                            <div className="col-auto d-none d-lg-block">
                                <svg className="bd-placeholder-img" width="200" height="250" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Thumbnail" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#55595c" /><text x="50%" y="50%" fill="#eceeef" dy=".3em">Thumbnail</text></svg>

                            </div>
                        </div>
                    </div>
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
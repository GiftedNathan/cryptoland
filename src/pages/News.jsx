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
            

            <main className="container mt-5">
                <div className="p-4 p-md-5 mb-4 rounded text-bg-dark">
                    <div className="col-md-12 px-0">
                        <h1 className="display-4 fst-italic">{news[2]?.name}</h1>
                        <p className="lead my-3">{news[2]?.snippet}</p>
                        <p className="lead mb-0"><a href={news[2]?.url} className="text-white fw-bold">Continue reading...</a></p>
                    </div>
                </div>

                <div className="row mb-2 d-flex justify-content-center align-items-center">
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
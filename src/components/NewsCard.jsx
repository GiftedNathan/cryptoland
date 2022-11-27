import React from 'react'

const NewsCard = ({id, name, snippet, url, dateLastCrawled, language }) => {
    return (
        // <div className="card text-bg-dark">
        //     <img src="..." className="card-img" alt="..." />
        //         <div className="card-img-overlay">
        //             <h5 className="card-title">Card title</h5>
        //             <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
        //             <p className="card-text"><small>Last updated 3 mins ago</small></p>
        //         </div>
        // </div>
        <div className="col-md-6" key={id}>
            <div className="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
                <div className="col p-4 d-flex flex-column position-static">
                    <strong className="d-inline-block mb-2 text-primary">{language}</strong>
                    <h3 className="mb-0">{name}</h3>
                    <div className="mb-1 text-muted">{dateLastCrawled}</div>
                    <p className="card-text mb-auto">{snippet}</p>
                    {/* <a href={url} className="stretched-link">Continue reading</a> */}
                </div>

    {/*             
                <div className="col-auto d-none d-lg-block">
                    <svg className="bd-placeholder-img" width="200" height="250" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Thumbnail" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#55595c" /><text x="50%" y="50%" fill="#eceeef" dy=".3em">Thumbnail</text></svg>

                </div> */}
            </div>
        </div>
    )
}

export default NewsCard
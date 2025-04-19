import React from 'react';
import ArticleCard from '../molecule/ArticleCard';

const LatestArticles = ({ articles, latestArticle }) => {
    return (
        <section className="col-lg-12 col-sm-12" id="latest-articles">
            <div className="d-flex flex-wrap justify-content-between align-items-center pt-1 border-bottom pb-4 mb-4">
                <h2 className="h3 mb-0 pt-3 me-3">Latest Articles</h2>
            </div>
            {articles.map((article) => (
                <ArticleCard key={article.id} article={article} latestArticle={latestArticle}/>
            ))}
        </section>
    );
};

export default LatestArticles;

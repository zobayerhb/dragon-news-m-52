import { Link, useLoaderData } from "react-router-dom";

const NewsDetail = () => {
  const data = useLoaderData();
  const news = data.data[0];
  console.log(news);

  return (
    <div className="card bg-base-100 shadow-xl">
      <figure className="px-10 pt-10">
        <img src={news?.image_url} alt="Shoes" className="rounded-xl w-full" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{news?.title}</h2>
        <p>{news?.details}</p>
        <div className="card-actions">
          <Link
            to={`/category/${news.category_id}`}
            className="btn btn-primary"
          >
            Back to Category
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NewsDetail;

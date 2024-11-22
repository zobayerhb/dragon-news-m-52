import { useLoaderData } from "react-router-dom";
import CategoryCard from "../../components/CategoryCard/CategoryCard";

const CategoryNews = () => {
  const { data: news } = useLoaderData();
  console.log(news);
  return (
    <div>
      <h2 className="text-black font-semibold text-xl">Dragon News Home</h2>
      <p className="text-gray-500 mb-4">({news.length}) data find on this category</p>
      <div className="space-y-2">
        {news.map((singleNews) => (
          <CategoryCard key={singleNews._id} newses={singleNews}></CategoryCard>
        ))}
      </div>
    </div>
  );
};

export default CategoryNews;
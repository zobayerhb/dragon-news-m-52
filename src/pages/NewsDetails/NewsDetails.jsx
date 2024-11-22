import Header from "../../components/Header/Header";
import RightLayout from "../../components/Layout-Component/RightLayout";
import NewsDetail from "../../components/NewsDetail/NewsDetail";

const NewsDetails = () => {
  return (
    <div className="w-11/12 mx-auto">
      <header>
        <Header></Header>
      </header>
      <main className="grid md:grid-cols-12 gap-5">
        <section className="col-span-9">
          <NewsDetail></NewsDetail>
        </section>
        <aside className="col-span-3">
          <RightLayout></RightLayout>
        </aside>
      </main>
    </div>
  );
};

export default NewsDetails;

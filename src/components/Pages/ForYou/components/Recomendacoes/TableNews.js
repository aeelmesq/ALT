import LeftBlock from "./leftBlock";

export default function TableNews({ data = [{}], qdtNews }) {
  const allNews = data.slice(0, qdtNews);
  return (
    <>
      {allNews.map((item, index) => {
        if (index % 3 === 0) {
          if (index === allNews.length - 1)
            return <div className="fullBlock"></div>;

          return <LeftBlock news={item} />;
        }
        return (
          <>
            <div className="rightBlock"></div>
            {(index + 1) % 3 === 0 && <hr />}
          </>
        );
      })}
    </>
  );
}

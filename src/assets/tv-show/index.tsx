import { ResponseTv, Tv } from "../../assets/services/type";
import { useEffect, useState } from "react";

import TvCard from "../../assets/componen/tv-card";
import { getOnTv } from "../../assets/services";
import { useNavigate } from "react-router-dom";
import { useQuery } from "../../features/hooks/useQuery";

const Home = () => {
  const navigate = useNavigate();
  const query = useQuery();
  const page = (query.get("page") !== null ? query.get("page") : 1) as string;
  const [loading, setLoading] = useState(false);
  const [nowPlayingData, setNowPlayingData] = useState<ResponseTv>();

  useEffect(() => {
    fetchTv();
  }, [page]);

  const fetchTv = async () => {
    try {
      setLoading(true);
      const response = await getOnTv();
      setNowPlayingData(response);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  const handlePage = () => {
    const numPage = Number(page);
    navigate(`?page=${numPage + 1}`);
  };

  const handlingPage = () => {
    const numPage = Number(page);
    navigate(`?page=${numPage - 1}`);
  };

  return (
    <div className="flex flex-col mt-7">
      <label className="text-2xl font-semibold mb-5">On Tv</label>
      {!loading ? (
        <div className="flex flex-row  flex-wrap gap-5 justify-center">
          {nowPlayingData?.results.map((item: Tv) => (
            <TvCard
              poster_path={item.poster_path}
              name={item.name}
              first_air_date={item.first_air_date}
              size="w-40"
            />
          ))}
        </div>
      ) : (
        <div>Loading..</div>
      )}

      <div className="flex flex-row justify-between mt-5">
        <button
          onClick={handlingPage}
          className="bg-green-600 p-2 rounded-sm"
          disabled={Number(page) <= 1}
        >
          Back
        </button>
        <button
          onClick={handlePage}
          className="bg-green-600 p-2 rounded-sm"
          disabled={
            nowPlayingData && Number(page) >= nowPlayingData.total_pages
          }
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Home;

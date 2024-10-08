import { useState } from "react";
import { fetchCoinData } from "../../services/fetchCoinData";
import { useQuery } from "react-query";
import currencyStore from "../../state/store";
import { useNavigate } from "react-router-dom";

function Coin() {
    const navigate = useNavigate();
    const { currency } = currencyStore();
    const [page, setPage] = useState(1);
    const { data, isLoading, isError, error } = useQuery(
        ["coins", page, currency],
        () => fetchCoinData(page, currency),
        {
            // retry:2,
            // retryDelay:1000,
            cacheTime: 1000 * 60 * 2,
            staleTime: 1000 * 60 * 2,
        }
    );
    // useEffect(()=>{
    //     console.log(data);
    // },[data])
    if (isLoading) {
        return <div>Loading</div>;
    }
    if (isError) {
        return <div>Error :{error.message}</div>;
    }
    function handleCoinRedirect(id) {
        navigate(`/details/${id}`);
    }

    return (
        <div className="my-5 flex flex-col items-center justify-center gap-5 w-[80vw] mx-auto ">
            <div className="w-full bg-yellow-400 text-black flex py-4 px-2 font-semibold justify-center item-center cursor-pointer">
                <div className="basis-[35%]">Coin</div>
                <div className="basis-[25%]">Price</div>
                <div className="basis-[20%]">
                    24 <sup>th</sup> change
                </div>
                <div className="basis-[20%]">Market Cap</div>
            </div>
            <div className="flex flex-col w-[80vw] mx-auto">
                {isLoading && <div>Loading....</div>}
                {data &&
                    data.map((coin) => {
                        return (
                            <div
                                onClick={() => handleCoinRedirect(coin.id)}
                                key={coin.id}
                                className="w-full bg-transparent text-white flex py-4 px-2 font-semibold items-center justify-between cursor-pointer"
                            >
                                <div className="flex items-center justify-start gap-3 basis-[35%]">
                                    <div className="w-[5rem] h-[5rem]">
                                        <img src={coin.image} className="h-full w-full " />
                                    </div>
                                    <div className="flex flex-col">
                                        <div className="text-3xl">{coin.name}</div>
                                        <div className="text-xl">{coin.symbol}</div>
                                    </div>
                                </div>
                                <div className="basis-[25%]">{coin.current_price}</div>
                                <div className="basis-[20%]">{coin.high_24h}</div>
                                <div className="basis-[20%]">{coin.market_cap}</div>
                            </div>
                        );
                    })}
            </div>
            <div className="flex gap-4 justify-center items-center">
                <button
                    disabled={page === 1}
                    onClick={() => {
                        setPage(page - 1);
                    }}
                    className="btn btn-outline btn-wide  text-2xl"
                >
                    Prev
                </button>
                <button
                    onClick={() => {
                        setPage(page + 1);
                    }}
                    className="btn btn-outline  btn-wide  text-2xl"
                >
                    Next
                </button>
            </div>
        </div>
    );
}

export default Coin;

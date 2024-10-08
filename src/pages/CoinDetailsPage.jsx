import { useParams } from "react-router-dom";

function CoinDetailsPage (){

    const {coinId} = useParams();
    return(
        <div>Coin details {coinId} </div>
    )
}
export default CoinDetailsPage;
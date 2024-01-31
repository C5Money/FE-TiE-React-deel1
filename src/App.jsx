import './App.css';
import {bestSellingTv, inventory} from "./constants/inventory.js";
import totalSold from "./helpers/totaalVerkoop.js";
import totalInkoop from "./helpers/totaalInkoop.js";
import totalNogVerkocht from "./helpers/totaalInventaris.js";
import naamTv from "./helpers/naamTv.js";
import tvPrijs from "./helpers/priceTv.js";
import schermgrootte from "./helpers/screensizeTv.js";
import check from './assets/check.png';
import stop from './assets/minus.png';

function App() {
    function printBtnTxt(e){
        console.log(e.target.innerText);
    }

    return (
        <>
            <div className="buitenbox">
                <h1>Tech it Easy Dashboard</h1>
                <h2>Verkoopoverzicht</h2>
                <div className="container">
                    <div className="blok links">
                        <p>Aantal verkochte producten</p>
                        <p>{totalSold(inventory)}</p>
                    </div>
                    <div className="blok midden">
                        <p>Aantal ingekochte producten</p>
                        <p>{totalInkoop(inventory)}</p>
                    </div>
                    <div className="blok rechts">
                        <p>Aantal te verkopen producten</p>
                        <p>{totalNogVerkocht(inventory)}</p>
                    </div>
                </div>
                <h2>Best verkochte tv</h2>
                <div>
                    <div id="laatste">
                        <span className="wrapper">
                            <img src={bestSellingTv.sourceImg} alt="tv"/>
                        </span>
                        <div>
                            <h3>{naamTv(bestSellingTv)}</h3>
                            <h2>{tvPrijs(bestSellingTv)}</h2>
                            <p>{schermgrootte(bestSellingTv)}</p>
                            <p><span><img src={ check } alt="check" className="icon"/>wifi</span>
                                <span><img src={ stop } alt="check" className="icon"/>speech</span>
                                <span><img src={ check } alt="check" className="icon"/>hdr</span>
                                <span><img src={ stop } alt="check" className="icon"/>bluetooth</span>
                                <span><img src={ stop } alt="check" className="icon"/>ambiLight</span>
                            </p>
                        </div>
                    </div>
                </div>
                <div className="button">
                    <button type="button" onClick={ printBtnTxt }>Meest verkocht eerst</button>
                    <button type="button" onClick={ printBtnTxt }>Goedkoopste eerst</button>
                    <button type="button" onClick={ printBtnTxt }>Meest geschikt voor sport eerst</button>
                </div>
            </div>
        </>
    )
}


export default App

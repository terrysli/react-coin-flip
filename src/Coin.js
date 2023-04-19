const HEADS_IMG_URL = "https://upload.wikimedia.org/wikipedia/commons/0/0a/George_Washington_Presidential_%241_Coin_obverse.png";
const TAILS_IMG_URL = "https://upload.wikimedia.org/wikipedia/commons/f/fa/Presidential_dollar_coin_reverse.png";

/**
 * Coin showing heads or tails
 *
 * Props:
 * - isHeads: true (heads) / false (tails)
 *
 * Coinflipper -> Coin
 */
function Coin({ isHeads }) {

  const coinImg = isHeads === "true" ? HEADS_IMG_URL : TAILS_IMG_URL;

  return (<img className="coin-image" src={coinImg} />);
}

export default Coin;
export {HEADS_IMG_URL, TAILS_IMG_URL};
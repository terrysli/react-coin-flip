import Coin from "./Coin";

// Randomly flips a coin, true=heads, false=tails
function flip() {
  return (Math.floor(Math.random() * 2) === 1 ? true : false);
}

/**
 * Coin flipping game
 *
 * State:
 * - results: {numHeads, numTails}
 *
 * App -> Coinflipper -> Coin
 */
function Coinflipper() {
  const [results, setResults] = useState({ numHeads: 0, numTails: 0 });

  setResults() {

  }

  function handleClick() {

  }

  return (
    <div>
      <Coin isHeads={ } />
      <button onClick={handleClick}>Flip the coin!</button>
      <p>Out of {totalFlips} flips, there have been {results.numHeads} heads
        and {results.numTails} tails.</p>
    </div>
  );
}

export default Coinflipper;
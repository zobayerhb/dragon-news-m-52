import swimming from "../../assets/swimming.png";
import classPic from "../../assets/class.png";
import playGround from "../../assets/playground.png";

const QZone = () => {
  return (
    <div className="card card-compact bg-gray-200 rounded-none my-6 py-6">
      <h3 className="font-semibold text-xl text-black mb-6 ml-6">Q-Zone</h3>
      <figure>
        <img src={swimming} alt="Shoes" />
      </figure>
      <figure>
        <img src={classPic} alt="Shoes" />
      </figure>
      <figure>
        <img src={playGround} alt="Shoes" />
      </figure>
    </div>
  );
};

export default QZone;

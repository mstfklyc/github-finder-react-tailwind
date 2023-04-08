import Spinnergif from "./spinner.gif";
function Spinner() {
  return (
    <div className="w-100 mt-20 ">
      <img
        width={180}
        src={Spinnergif}
        alt="Loading..."
        className="text-center mx-auto"
      ></img>
    </div>
  );
}

export default Spinner;

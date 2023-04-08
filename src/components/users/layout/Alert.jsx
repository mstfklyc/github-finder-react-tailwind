import { useContext } from "react";
import AlertContext from "../../../context/alert/AlertContext";
import { FaInfoCircle } from "react-icons/fa";
function Alert() {
  const { alert } = useContext(AlertContext);
  return (
    alert !== null && (
      <p className="alert w-60">
        {alert.msg}
        <FaInfoCircle className="mr-2" />
      </p>
    )
  );
}
export default Alert;

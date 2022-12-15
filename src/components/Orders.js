import { useContext } from "react";
import Modal from "./Modal";
import { OrdersContext } from "../context/orders_context";

const Orders = (props) => {
  /* const [reports, setReports] = useState([]); */
  const {reports } = useContext(OrdersContext);

  return (
    <Modal onClose={props.onClose}>
      <h1>To be shipped...</h1>
      {reports.map((report) => (
        <>
          <span style={{ whiteSpace: "pre-wrap" }}>{report} </span>
        </>
      ))}
    </Modal>
  );
};

export default Orders;

import { useContext, useEffect, useState } from "react";
import XFloatButton from "../components/buttons/XFloatButton";
import XAddProductModal from "../components/modals/XCUProductModal";
import { collection, onSnapshot, query } from "firebase/firestore";
import { db } from "../services/firebase";
import { TrashIcon } from "../components/icons/TrashIcon";
import { PencilSquareIcon } from "../components/icons/PencilSquareIcon";
import databaseService from "../services/databaseService";
import AuthContext from "../Contexts/AuthContext";

const DashboardPage = () => {
  const [product, setProduct] = useState([]);
  const [loading, setLoading] = useState(true);
  const [updateProduct, setUpdateProduct] = useState(null);
  const { currentUser } = useContext(AuthContext);

  useEffect(() => {
    const fetchData = async () => {
      const q = query(collection(db, "product"));
      const unsubscribe = onSnapshot(q, (querySnapshot) => {
        let itemsArr = [];
        querySnapshot.forEach((doc) => {
          itemsArr.push({ ...doc.data(), id: doc.id });
        });
        setProduct(itemsArr);
        setLoading(false);
      });

      return () => unsubscribe();
    };

    fetchData();
  }, []);

  const handleDelete = async (id) => {
    if (currentUser?.email != "admin@gmail.com") {
      alert("No authorize");
      return;
    }
    await databaseService.deleteData("product", id);
  };

  const handleOpenModal = () => {
    document.getElementById("productModal").showModal();
  };

  const handleUpdate = (item) => {
    if (currentUser?.email != "admin@gmail.com") {
      alert("No authorize");
      return;
    }
    document.getElementById("productModal").showModal();
    setUpdateProduct(item);
  };

  return (
    <div className="relative">
      {loading ? (
        <p>Fetching...</p>
      ) : product.length > 0 ? (
        <div className="overflow-x-auto">
          <table className="table table-zebra">
            <thead>
              <tr>
                <th></th>
                <th colSpan="2">Name</th>
                <th>Category</th>
                <th>Quantity</th>
                <th>Price</th>
                <th>Update</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody>
              {product.map((item, index) => {
                return (
                  <tr key={index}>
                    <td>{index + 1}</td>
                    <td>{item.name}</td>
                    <td>
                      <img
                        src={item.coverUrl}
                        className="object-cover object-center w-[75px] h-[100px]"
                      />
                    </td>
                    <td>{item.category}</td>
                    <td>{item.quantity}</td>
                    <td>{item.price}</td>
                    <td>
                      <button
                        className="btn btn-ghost btn-circle"
                        onClick={() => handleUpdate(item)}
                      >
                        <PencilSquareIcon className="w-6 h-6 text-green-400" />
                      </button>
                    </td>
                    <td>
                      <button
                        className="btn btn-ghost btn-circle"
                        onClick={() => handleDelete(item.id)}
                      >
                        <TrashIcon className="w-6 h-6 text-red-400" />
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      ) : (
        <p>No Data!!!</p>
      )}
      <XFloatButton onClick={handleOpenModal} />
      <XAddProductModal id="productModal" updateProduct={updateProduct} />
    </div>
  );
};

export default DashboardPage;

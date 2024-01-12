import { useContext, useState } from "react";
import { PhotoIcon } from "../icons/PhotoIcon";
import { PlusIcon } from "../icons/PlusIcon";
import { XMarkIcon } from "../icons/XMarkIcon";
import { productCategories } from "../../constants/filter";
import uploadService from "../../services/uploadService";
import databaseService from "../../services/databaseService";
import AuthContext from "../../Contexts/AuthContext";

const XAddProductForm = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [coverFile, setCoverFile] = useState(null);
  const [previewFile, setPreviewFile] = useState([]);
  const { currentUser } = useContext(AuthContext);

  const handleAddCover = (e) => {
    const cover = e.target.files;
    setCoverFile(cover);
  };

  const handleAddPreview = (e) => {
    const preview = e.target.files;
    setPreviewFile((v) => [...v, ...preview]);
  };

  const handleRemovePreview = (index) => {
    const preview = previewFile.filter((_, itemIndex) => itemIndex !== index);
    setPreviewFile(preview);
  };

  const handleAddProduct = async (e) => {
    if (currentUser?.email != "admin@gmail.com") {
      alert("No authorize");
      return;
    }
    setLoading(true);
    e.preventDefault();
    const form = e.target.elements;
    const category = form.productCategory.value;
    const name = form.productTitle.value;
    const quantity = form.productQuantity.value;
    const price = form.productPrice.value;
    const description = form.productDescription.value;

    try {
      const coverUrl = await uploadService.upload("cover", coverFile);
      const previewUrl = await uploadService.upload("preview", previewFile);

      const data = {
        category,
        name,
        quantity,
        price,
        description,
        coverUrl,
        previewUrl,
      };

      await databaseService.addData("product", data);

      e.target.reset();
      document.getElementById("productModal").close();
      setError(null);
    } catch (e) {
      setError(e.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <form
      className="flex flex-col items-center gap-5"
      onSubmit={handleAddProduct}
    >
      <img src="./shop.png" className="w-12 h-12" />
      <p className="px-5 text-2xl">
        <span className="font-bold">Add</span> A New Product
      </p>
      <p className="px-5 text-sm text-center text-gray-600">
        Please fill out the form below to create a new product, providing
        detailed information about its features, specifications, and any other
        relevant details.
      </p>

      <select
        className="flex-1 w-full rounded-md select select-bordered"
        name="productCategory"
        defaultValue=""
        required
      >
        <option disabled value="">
          Category
        </option>
        {productCategories.map((item, index) => {
          return (
            <option key={index} value={item.value}>
              {item.title}
            </option>
          );
        })}
      </select>
      <input
        required
        name="productTitle"
        type="text"
        placeholder="Name"
        className="w-full rounded-md input input-bordered"
      />

      <div className="grid grid-cols-2 gap-5">
        <input
          required
          name="productQuantity"
          type="number"
          placeholder="Quantity"
          className="w-full rounded-md input input-bordered"
        />
        <input
          required
          name="productPrice"
          type="number"
          step="any"
          placeholder="Price"
          className="w-full rounded-md input input-bordered"
        />
      </div>
      <textarea
        required
        name="productDescription"
        type="text"
        placeholder="Description"
        className="w-full text-base rounded-md textarea textarea-bordered"
        rows={5}
      />
      <div className="grid items-center grid-cols-3 gap-5 justify-items-center">
        {coverFile ? (
          <div
            className="btn p-0 relative group w-[180px] h-[200px]"
            onClick={() => setCoverFile(null)}
          >
            <img
              src={URL.createObjectURL(...coverFile)}
              className="object-cover object-center w-full h-full rounded-md"
            />
            <div className="absolute top-0 right-0 w-full h-full bg-black rounded-md opacity-0 group-hover:opacity-30" />
            <div className="absolute top-0 right-0 flex items-center justify-center w-full h-full opacity-0 group-hover:opacity-100">
              <XMarkIcon className="w-6 h-6 text-white" />
            </div>
          </div>
        ) : (
          <label
            htmlFor="productCover"
            className="btn hover:bg-gray-100 bg-white w-[180px] h-[200px] p-0 border-2 border-gray-300 border-dashed"
          >
            <input
              required
              type="file"
              className="absolute w-full opacity-0 -z-10"
              id="productCover"
              name="productCover"
              accept="image/*"
              onChange={handleAddCover}
            />
            <PhotoIcon className="w-16 h-16 text-gray-300" />
          </label>
        )}
        {previewFile.length > 0 &&
          previewFile.map((item, index) => {
            return (
              <div
                key={index}
                className="btn p-0 relative group w-[150px] h-[170px]"
                onClick={() => handleRemovePreview(index)}
              >
                <img
                  src={URL.createObjectURL(item)}
                  className="object-cover object-center w-full h-full rounded-md"
                />
                <div className="absolute top-0 right-0 w-full h-full bg-black rounded-md opacity-0 group-hover:opacity-30" />
                <div className="absolute top-0 right-0 flex items-center justify-center w-full h-full opacity-0 group-hover:opacity-100">
                  <XMarkIcon className="w-6 h-6 text-white" />
                </div>
              </div>
            );
          })}
        <label
          htmlFor="productPreview"
          className="relative btn hover:bg-gray-100 bg-white w-[150px] h-[170px] border-2 border-gray-300"
        >
          <input
            required
            type="file"
            className="absolute w-full opacity-0 -z-10"
            id="productPreview"
            name="productPreview"
            accept="image/*"
            multiple
            onChange={handleAddPreview}
          />
          <PlusIcon className="w-10 text-gray-300 h-w-10" />
        </label>
      </div>

      {error && <p className="px-5 text-red-500">{error}</p>}

      <button
        className="px-8 border-none rounded-full w-full btn bg-[#717fe0] hover:bg-[#222] text-white"
        type="submit"
        disabled={loading}
      >
        {loading ? "Adding..." : "Add"}
      </button>
    </form>
  );
};

export default XAddProductForm;

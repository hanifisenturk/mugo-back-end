export default {
  name: "products",
  title: "Products",
  type: "document",
  fields: [
    {
      name: "productName",
      title: "Product Name",
      type: "string",
    },
    {
      name: "brandName",
      title: "Brand Name",
      type: "reference",
      to: [{ type: "brands" }],
    },
    {
      name: "productPrice",
      title: "Product Price",
      type: "number",
    },
    {
      name: "productCategory",
      title: "Product Category",
      type: "reference",
      to: [{ type: "categories" }],
    },

    // Conditional Rendering
    {
      name: "availableShoeSizes",
      title: "Available Sizes",
      type: "array",
      of: [{ type: "reference", to: [{ type: "shoeSizes" }] }],
      hidden: ({ document }) =>
        document?.productCategory?._ref !==
        "3c061de2-be83-48f4-aa4a-c5066b948b46",
      description: "Add the available sizes for this product.",
    },

    {
      name: "availableClothingSizes",
      title: "Available Sizes",
      type: "array",
      of: [{ type: "reference", to: [{ type: "clothingSizes" }] }],
      hidden: ({ document }) =>
        document?.productCategory?._ref !==
        "6e7b14bf-1fc7-4d42-aa5f-de083acf1708",
    },

    // Conditional Rendering

    {
      name: "productDescription",
      title: "Product Description",
      type: "array",
      of: [{ type: "block" }],
    },

    {
      name: "productID",
      title: "Product ID",
      type: "string",
    },
    {
      name: "productImage",
      title: "Product Image",
      type: "array",
      of: [{ type: "image" }],
    },
  ],
};

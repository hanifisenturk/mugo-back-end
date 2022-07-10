// First, we must import the schema creator
import createSchema from "part:@sanity/base/schema-creator";

// Then import schema types from any plugins that might expose them
import schemaTypes from "all:part:@sanity/base/schema-type";
import products from "./products";
import brands from "./brands";
import shoeSizes from "./shoeSizes";
import categories from "./categories";
import clothingSizes from "./clothingSizes";
import marquee from "./marquee";

const types = [products, brands, shoeSizes, categories, clothingSizes, marquee];

// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  // We name our schema
  name: "default",
  // Then proceed to concatenate our document type
  // to the ones provided by any plugins that are installed
  types: schemaTypes.concat(types),
});

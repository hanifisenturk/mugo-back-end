export default {
  name: "shoeSizes",
  title: "Shoe Sizes",
  type: "document",
  fields: [
    {
      name: "shoeSize",
      title: "Shoe Size",
      type: "number",
      description: "Add a new shoe size",
      validation: (Rule) => [
        Rule.required().min(35).error("Shoe size must be at least 35."),
        Rule.required().max(46).error("Shoe size must be max 46."),
        Rule.required().precision(1).error("Max 1 decimal place is allowed."),
      ],
    },
  ],
};

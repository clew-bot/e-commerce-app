// import models
const Product = require('./Product');
const Category = require('./Category');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');

// Products belongsTo Category
Product.belongsTo(Category, {
  foreignKey: 'product_id'
})
// Categories have many Products
Category.hasMany(Product, {
  foreignKey: 'product_id'
})
// Products belongToMany Tags (through ProductTag)
Product.belongsToMany(Tag, {
  through: {
    model: ProductTag,
    unique: false
  }
})
// Tags belongToMany Products (through ProductTag)
Tag.belongsToMany(Product, {
  through: {
    model: ProductTag,
    unique: false
  }
})
module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};

// You'll need to execute association methods on your Sequelize models to create the following relationships between them:

// * `Product` belongs to `Category`, and `Category` has many `Product` models, as a category can have multiple products but a product can only belong to one category.

// * `Product` belongs to many `Tag` models, and `Tag` belongs to many `Product` models. Allow products to have multiple tags and tags to have many products by using the `ProductTag` through model.

// > **Hint:** Make sure you set up foreign key relationships that match the column we created in the respective models.
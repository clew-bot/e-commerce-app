const router = require('express').Router();
const { Category, Product } = require('../../models');
const { beforeFindAfterExpandIncludeAll } = require('../../models/Tag');

// The `/api/categories` endpoint

router.get('/', async (req, res) => {
  try {
    const categoryData = await Category.findAll({
      include: [{ model: Product}],
    });
    res.status(200).json(categoryData);
    
  } catch (error) {
    res.status(500).json(err);
    
  }
  // find all categories
  // be sure to include its associated Products
});

router.get('/:id', async (req, res) => {
  try {
  const categoryData = await Category.findByPk(req.params.id, {
    include: [{ model: Product}],
  });
  if (!categoryData) {
    res.status(404).json({ message: 'No product found with that id!' });
    return;
  // find one category by its `id` value
  // be sure to include its associated Products
}
res.status(200).json(categoryData);
  } catch (error) {
    res.status(500).json(err);
  }
});
router.post('/', (req, res) => {
  // create a new category
});

router.put('/:id', (req, res) => {
  // update a category by its `id` value
});

router.delete('/:id', (req, res) => {
  // delete a category by its `id` value
});

module.exports = router;

const router = require('express').Router();
const { Category, Product } = require('../../models');


// The `/api/categories` endpoint

  // find all categories
  // be sure to include its associated Products
router.get('/', async (req, res) => {
  try {
      const categoryData = await Category.findAll({
        include: [{ model: Product}]
    });
      res.status(200).json(categoryData);
  } catch (error) {
      res.status(500).json(error);
  }
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


router.post('/', async (req, res) => {
  try {
    const createCategory = await Category.create(req.body);
    res.status(200).json(createCategory);
  } catch (error) {
    res.status(400).json(error)
    
  }
  // create a new category
});

router.put('/:id', async (req, res) => {
  try {
  const updateCategory = await Category.update(req.body, {
    where: {
      id: req.params.id
  }}),
    if (!updateCategory) {
      res.status(404).json({ message: "There is no category found!"})
    }
  } catch (error) {
    res.status(500).json(error)
  }
}
  // update a category by its `id` value
);

router.delete('/:id', async (req, res) => {
  try {
    const categoryData = await Category.destroy({
      where: { id: req.params.id }
    });
    if (!categoryData) {
      res.status(404).json({ message: 'No trip with this id!' });
      return;
    }
    res.status(200).json(categoryData);
  } catch (error) {
    res.status(500).json(error);
  }
  // delete a category by its `id` value
});

module.exports = router;

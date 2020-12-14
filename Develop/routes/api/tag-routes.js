const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint

router.get('/', async (req, res) => {
  try {
    const allTags = await Tag.findAll();
    res.status(200).json(allTags); 
  } catch (error) {
    res.status(500).json(err);
    
  }
  // find all tags
  // be sure to include its associated Product data
});

router.get('/:id', async (req, res) => {
  try {
    const allTags = await Tag.findByPk(req.params.id, {
      include: [{ model: Product, through: Tag, as: 'product_tag'}]
    });

    if(!allTags) {
      res.status(400).json({message: 'There is no product with this tag.'});
      return;
    }
    res.status(200).json(allTags)
  } catch (error) {
    res.status(500).json(err);
  }
  // find a single tag by its `id`
  // be sure to include its associated Product data
});

router.post('/', (req, res) => {
  // create a new tag
});

router.put('/:id', (req, res) => {
  // update a tag's name by its `id` value
});

router.delete('/:id', (req, res) => {
  // delete on tag by its `id` value
});

module.exports = router;

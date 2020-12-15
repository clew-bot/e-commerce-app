const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint

router.get('/', async (req, res) => {
  try {
    const allTags = await Tag.findAll({
      include: [{ model: Product}],
    });
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
      include: [{ model: Product}]
    });

    if(!allTags) {
      res.status(400).json({message: 'There is no product with this tag.'});
      return;
    }
    res.status(200).json(allTags)
  } catch (error) {
    res.status(500).json(error);
  }
  // find a single tag by its `id`
  // be sure to include its associated Product data
});

router.post('/', async (req, res) => {
  try {
    const allTags = await Tag.create(req.body);
    res.status(200).json(allTags);
  } catch (error) {
    res.status(400).json(err);
    
  }
});

router.put('/:id', (req, res) => {
  // update a tag's name by its `id` value
});

router.delete('/:id', async (req, res) => {
  try {
    const allTags = await Tag.destroy({
      where: {
        id: req.params.id
      }
    });

    if(!allTags) {
      res.status(400).json({ message: "There is no tag to delete with this id"});
      return;
    }
    res.status(200).json(allTags);
  } catch (error) {
    res.status(500).json(err);
  }
  // delete on tag by its `id` value
});

module.exports = router;

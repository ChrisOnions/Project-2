const router = require('express').Router();
const { foodCategory } = require('../../models');


// " C R U D "
// Create new Category

router.post('/', async (req, res) => {
  const { is_perishable, name } = req.body
  try {
    const newCat = await foodCategory.create(
      {
        name,
        is_perishable
      }
    )
    res.json(newCat)
  } catch (err) {
    res.status(500).json(err)
  }
})

// Read Category 

router.get('/', async (req, res) => {
  try {
    const getCat = await foodCategory.findAll()
    res.json(getCat)
    console.log(getCat);
  } catch (err) { res.status(500).json(err) }
})

// Get Category by id
router.get('/:id', async (req, res) => {
  const { id } = req.params
  try {
    const cat = await foodCategory.findByPk(id)
    res.json(cat)
  } catch (err) {
    res.status(500).json(err)
  }
})

// Delete Category
router.delete('/:id', async (req, res) => {
  const { id } = req.params
  try {
    const deleteCat = await foodCategory.destroy({
      where: {
        id
      }
    })

    if (!deleteCat) {
      res.status(404).json("Cat Not Found");
      return;
    }
    res.status(200).json(deleteCat)
  } catch (err) {
    res.status(500).json(err)
  }
})

// Update Category
router.put('/:id', async (req, res) => {
  const { id } = req.params
  try {
    const updatedCat = await foodCategory.update(
      {
        where: {
          id
        }
      }
    )
    res.status(204).json(updatedCat)
  } catch (err) {
    res.status(400).json(updatedCat)
  }
})


module.exports = router;
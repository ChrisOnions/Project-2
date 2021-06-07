const router = require('express').Router();
const { foodCategory, foodItems } = require('../../models');


// " C R U D "
// Create new Category

router.post('/', async (req, res) => {
  try {
    const newCat = await foodCategory.create(
      {
        name: req.body.name,
        is_perishable: req.body.is_perishable
      }
    )
    res.status(200).json(newCat)
  } catch (err) {
    res.status(400).json(err)
  }

})

// Read Category 

router.get('/', async (req, res) => {
  try {
    const getCat = await foodCategory.findAll()
    res.status(200).json(getCat)
    console.log(getCat);
  } catch (err) { res.status(400).json(err) }
})

// Get Cat by id
router.get('/:id', async (req, res) => {
  try {
    const getCatid = await foodCategory.findByPk(req.params.id
      // {
      //   id: {
      //     include: [{ models: foodItems }]
      //   }
      // }
    )
    res.status(200).json(getCatid)
  } catch (err) {
    res.status(400).json(err)
  }
})

// Delete Category
router.delete('/:id', async (req, res) => {
  try {
    const deleteCat = await foodCategory.destroy({
      where: {
        id: req.params.id
      }
    })
    console.log(req.params.id);
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
  try {
    const updateCat = await foodCategory.update(
      {
        where: {
          id: req.params.id,
        }
      }
    )
  } catch (err) {
    res.status(400).json(updateCat)
  }
})


module.exports = router;
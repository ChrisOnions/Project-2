const router = require('express').Router();
const FoodItem = require('../../models/foodItem');

router.post('/create', async (req, res) => {
  try {
    const { name, expiryDate, quantity, brand, foodCategoryId, donated, isFrozen, already_purchased } = req.body;
    var foodItem = await FoodItem.findOne({ where: { name } });
    //create the food item
    if (!foodItem) {
      foodItem = await FoodItem.create({
        name,
        expiryDate,
        quantity,
        brand,
        foodCategoryId,
        donated,
        isFrozen,
        already_purchased,
        user_id: req.session.user_id
      });
    } else {
      //update the food
      foodItem = await FoodItem.update(
        {
          name,
          expiryDate,
          quantity,
          brand,
          foodCategoryId,
          donated,
          isFrozen,
          already_purchased,
          user_id: req.session.user_id
        },
        {
          //gets the food based on ID
          where: {
            id: foodItem.id,
          },
        });
    }
    res.status(200).json(foodItem);
  } catch (err) {
    res.status(500).json(err);
  }
});

// Update food item By id

router.put('/:id', async (req, res) => {
  const { id } = req.params;
  const { name, expiryDate, quantity, brand, foodCategoryId, donated, isFrozen, already_purchased } = req.body;
  try {
    const foodItem = await FoodItem.update(
      {
        name,
        expiryDate,
        quantity,
        brand,
        foodCategoryId,
        donated,
        isFrozen,
        already_purchased,
        user_id: req.session.user_id
      },
      {
        where: {
          id
        },
      });
    res.status(200).json(foodItem);
  } catch (err) {
    res.status(500).json(err);
  }

});

// Delete  food item by id
// Looks for the food item based on id given in the request parameters and deletes the instance from the database

router.delete('/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const foodItem = await FoodItem.destroy({
      where: {
        id
      },
    })
    res.json(foodItem)
  } catch (err) {
    res.status(500).json(err);
  }

});


// GET all items

router.get("/", async (req, res) => {
  const foodItems = await FoodItem.findAll();
  res.json(foodItems);
});

// GET a food item by id
router.get('/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const foodItem = await FoodItem.findOne(
      {
        where: {
          id
        },
      }
    ).get({ plain: true })
    res.status(200).json(foodItem)
  }
  catch (err) {
    res.status(500).json(err);
  }
});


module.exports = router;
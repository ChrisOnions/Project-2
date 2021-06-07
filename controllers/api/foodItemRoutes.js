const router = require('express').Router();
const { FoodItem } = require('../../models');

router.post('/create', async (req, res) => {
  try {
    const { name, expiry_date,quantity,brand, food_category_id, donated, is_frozen,already_purchased} = req.body;
    const foodData = await FoodItem.findOne({ where: { name: req.body.name } });

    if (!foodData) {
        //create the food 
        const foodItem = await FoodItem.create({
         name,
         expiry_date,
         quantity,
         brand,
         food_category_id,
         donated,
         is_frozen,
         already_purchased
        });
        res.status(200).json(foodItem);
    } else {
      //update the food
     const foodItem =  FoodItem.update(
        {
          name,
          expiry_date,
          quantity,
          brand,
          food_category_id,
          donated,
          is_frozen,
          already_purchased
        },
        {
          //gets the food based on ID
          where: {
            id: foodData.id,
          },
        });
        res.status(200).json(foodItem);
  
    }

  } catch (err) {
    res.status(400).json(err);
  }
});

router.put('/:id', async (req, res) => {
  const { id } =  req.params;
  const { name, expiry_date,quantity,brand, food_category_id, donated, is_frozen,already_purchased} = req.body;

  FoodItem.update(
    {
      name,
      expiry_date,
      quantity,
      brand,
      food_category_id,
      donated,
      is_frozen,
      already_purchased
    },
    {
      where: {
        id
      },
    }
  )
    .then((updatedFood) => {
      // Sends the updated food item as a json response
      res.json(updatedFood);
    })
    .catch((err) => res.json(err));
});

// Delete route for a food item with a matching id
router.delete('/:id', async (req, res) => {
  // Looks for the food item based on id given in the request parameters and deletes the instance from the database
  const { id } =  req.params;

  FoodItem.destroy({
    where: {
      id
    },
  })
    .then((deletedItem) => {
      res.json(deletedItem);
    })
    .catch((err) => res.json(err));
});


// GET all items
router.get('/', async(req, res) => {
  FoodItem.findAll().then((foodData) => {
    res.json(foodData);
  });
});

// GET a food item
router.get('/:id', async(req, res) => {
  const { id } =  req.params;
  FoodItem.findOne(
    {
      where: { 
        id
      },
    }
  ).then((foodData) => {
    res.json(foodData);
  });
});


module.exports = router;
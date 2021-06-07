const router = require('express').Router();
const { FoodItem } = require('../../models');

router.post('/create', async (req, res) => {
  try {
    const foodData = await FoodItem.findOne({ where: { name: req.body.name } });

    if (!foodData) {
        //create the food 
        const foodItem = await FoodItem.create({
          name: req.body.name,
          expiry_date: req.body.expiry_date,
          quantity: req.body.quantity,
          brand: req.body.brand,
          food_category:id: req.body.food_category_id,
          donated: req.body.donated,
          is_frozen: req.body.is_frozen,
          already_purchased: req.body.already_purchased

        });
        res.status(200).json(foodItem);
    } else {
      //update the food
      FoodItem.update(
        {
          name: req.body.name,
          expiry_date: req.body.expiry_date,
          quantity: req.body.quantity,
          brand: req.body.brand,
          food_category:id: req.body.food_category_id,
          donated: req.body.donated,
          is_frozen: req.body.is_frozen,
          already_purchased: req.body.already_purchased
        },
        {
          //gets the food based on ID
          where: {
            id: foodData.id,
          },
        }
      )
        .then((updatedItem) => {
          // Sends the updated food as a json response
          res.json(updatedItem);
        })
        .catch((err) => res.json(err));
    }

  } catch (err) {
    res.status(400).json(err);
  }
});

router.put('/:id', async (req, res) => {
  FoodItem.update(
    {
      name: req.body.name,
      expiry_date: req.body.expiry_date,
      quantity: req.body.quantity,
      brand: req.body.brand,
      food_category:id: req.body.food_category_id,
      donated: req.body.donated,
      is_frozen: req.body.is_frozen,
      already_purchased: req.body.already_purchased
    },
    {
      where: {
        id: req.params.id,
      },
    }
  )
    .then((updatedBook) => {
      // Sends the updated food item as a json response
      res.json(updatedBook);
    })
    .catch((err) => res.json(err));
});

// Delete route for a food item with a matching id
router.delete('/:id', async (req, res) => {
  // Looks for the food item based on id given in the request parameters and deletes the instance from the database
  FoodItem.destroy({
    where: {
      id: req.params.id,
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
  FoodItem.findOne(
    {
      where: { 
        id: req.params.id 
      },
    }
  ).then((foodData) => {
    res.json(foodData);
  });
});


module.exports = router;
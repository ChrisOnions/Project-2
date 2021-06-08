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
    } else {
      //update the food
     const foodItem =  await FoodItem.update(
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
  
    }
    res.status(200).json(foodItem);

  } catch (err) {
    res.status(500).json(err);
  }
});

router.put('/:id', async (req, res) => {
  const { id } =  req.params;
  const { name, expiry_date,quantity,brand, food_category_id, donated, is_frozen,already_purchased} = req.body;
  try{
   const updatedFood =  await FoodItem.update(
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
      });
    res.json(updatedFood);
  } catch(err) {
    res.json(err);
  }
  
});

// Delete route for a food item with a matching id
router.delete('/:id', async (req, res) => {
  // Looks for the food item based on id given in the request parameters and deletes the instance from the database
  const { id } =  req.params;
  try{
    const deletedItem = await FoodItem.destroy({
      where: {
        id
      },
    })
    res.json(deletedItem)
  }catch( err){
    res.json(err)
  }

});


// GET all items
router.get('/', async(req, res) => {
  const foodData = await FoodItem.findAll().get({ plain: true });
  res.json(foodData)
});

// GET a food item
router.get('/:id', async(req, res) => {
  const { id } =  req.params;
  
  const foodData = await FoodItem.findOne(
    {
      where: { 
        id
      },
    }
  ).get({plain: true})
  res.json(foodData)

});


module.exports = router;
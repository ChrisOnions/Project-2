const router = require("express").Router();
const { FoodItem } = require("../../models");

router.post("/create", async (req, res) => {
  try {
    const {
      name,
      expiry_date,
      quantity,
      brand,
      food_category_id,
      donated,
      is_frozen,
      already_purchased,
    } = req.body;
    const foodItem = await FoodItem.findOne({ where: { name: req.body.name } });

    if (!foodItem) {
      //create the food
      const foodItem = await FoodItem.create({
        name,
        expiry_date,
        quantity,
        brand,
        food_category_id,
        donated,
        is_frozen,
        already_purchased,
      });
    } else {
      //update the food
      const foodItem = await FoodItem.update(
        {
          name,
          expiry_date,
          quantity,
          brand,
          food_category_id,
          donated,
          is_frozen,
          already_purchased,
        },
        {
          //gets the food based on ID
          where: {
            id: foodItem.id,
          },
        }
      );
    }
    res.status(200).json(foodItem);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.put("/:id", async (req, res) => {
  const { id } = req.params;
  const {
    name,
    expiry_date,
    quantity,
    brand,
    food_category_id,
    donated,
    is_frozen,
    already_purchased,
  } = req.body;
  try {
    const foodItem = await FoodItem.update(
      {
        name,
        expiry_date,
        quantity,
        brand,
        food_category_id,
        donated,
        is_frozen,
        already_purchased,
      },
      {
        where: {
          id,
        },
      }
    );
    res.status(200).json(foodItem);
  } catch (err) {
    res.status(500).json(err);
  }
});

// Delete route for a food item with a matching id
router.delete("/:id", async (req, res) => {
  // Looks for the food item based on id given in the request parameters and deletes the instance from the database
  const { id } = req.params;
  try {
    const foodItem = await FoodItem.destroy({
      where: {
        id,
      },
    });
    res.json(foodItem);
  } catch (err) {
    res.status(500).json(err);
  }
});

// GET all items
router.get("/", async (req, res) => {
  const foodItems = await FoodItem.findAll();
  res.json(foodItems);
});

// GET a food item
router.get("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const foodItem = await FoodItem.findOne({
      where: {
        id,
      },
    }).get({ plain: true });
    res.json(foodItem);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;

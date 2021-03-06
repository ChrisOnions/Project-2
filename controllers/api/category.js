const router = require("express").Router();
const { foodCategory } = require("../../models");

//http://localhost:3001/api/category/
// Create new Category

router.post("/", async (req, res) => {
  const { is_perishable, name } = req.body;
  try {
    const category = (await foodCategory
      .create({
        name,
        is_perishable,
      })
    ).get({ plain: true });
    if (category) {
      res.json(category);
    } else {
      res.status(400).json()
    }
  } catch (err) {
    res.status(500).json(err);
  }
});

// Read Category

router.get("/", async (req, res) => {
  try {
    const category = await foodCategory.findAll({ raw: true });
    res.json(category);
  } catch (err) {
    res.status(500).json(err);
  }
});

// Get Category by id

router.get("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const category = await foodCategory.findByPk(id).get({ plain: true });
    res.json(category);
  } catch (err) {
    res.status(500).json(err);
  }
});

// Delete Category by id

router.delete("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const Category = await foodCategory
      .destroy({
        where: {
          id,
        },
      })
      .get({ plain: true });

    if (!Category) {
      res.status(404).json("Category Not Found");
      return;
    }
    res.json(category);
  } catch (err) {
    res.status(500).json(err);
  }
});

// Update Category

router.put("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const category = await foodCategory
      .update({
        where: {
          id,
        },
      })
      .get({ plain: true });
    res.status(204).json(category);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;

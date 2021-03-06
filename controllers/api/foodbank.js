const router = require("express").Router();
const { foodBank } = require("../../models");

// " C R U D "
// http://localhost:3001/api/bank/

// Create new foodbank

router.post("/", async (req, res) => {
  const { name, address, foodItemId, quantity, donatedDate, donatedByUserId } =
    req.body;
  try {
    const Bank = await foodBank
      .create({
        name,
        address,
        foodItemId,
        quantity,
        donatedDate,
        donatedByUserId,
      })
      .get({ plain: true });
    res.json(bank);
  } catch (err) {
    res.status(500).json(err);
  }
});

// Read foodbank

router.get("/", async (req, res) => {
  try {
    const Bank = await foodBank.findAll({ raw: true });
    res.json(Bank);
  } catch (err) {
    res.status(500).json(err);
  }
});

// Get one food bank

router.get("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const Bank = await foodBank.findByPk(id).get({ plain: true });
    res.json(Bank);
  } catch (err) {
    res.status(500).json(err);
  }
});

// Update foodbank

router.put("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const Bank = await foodBank
      .update({
        where: {
          id,
        },
      })
      .get({ plain: true });
    res.status(204).json(Bank);
  } catch (err) {
    res.status(500).json(err);
  }
});

// Delete foodbank

router.delete("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const Bank = await foodBank
      .destroy({
        where: {
          id,
        },
      })
      .get({ plain: true });

    if (!Bank) {
      res.status(404).json("Category Not Found");
      return;
    }
    res.json(Bank);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;

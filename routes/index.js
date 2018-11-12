const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    let data = {
        name: "Ironhacker",
        lastName: "Rocking it!",
        address: {
            street: "Your heart",
            number: 87
          },
        cities: ["Miami", "Madrid", "Barcelona", "Paris", "México", "Berlín"]
      };
    res.render("index", data);
});

module.exports = router;

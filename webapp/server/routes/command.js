const router = require('express').Router();
const Command = require('../models/Command');

//Create new command
router.post('/command', async (req, res) => {
  const newCommand = new Command(req.body);
  try {
    const savedCommand = await newCommand.save();
    res.status(200).json(savedCommand);
  } catch (error) {
    res.status(500).json(error);
  }
});

//get all commands
router.get('/command', async (req, res) => {
  try {
    let commands = await Command.find().sort({ createdAt: -1 }).limit(1);
    res.status(200).json(commands);
  } catch (error) {
    res.status(500).json({ message: 'Could not fetch commands', error });
  }
});

//get a command based on ID
router.get('/command/find/:id', async (req, res) => {
  try {
    const command = await Command.findById(req.params.id);

    res.status(200).json(command);
  } catch (error) {
    res.status(500).json(error);
  }
});

//update product
// router.put('/:id', verifyTokenAndAuthorization, async (req, res) => {
//   try {
//     const updatedProduct = await Product.findByIdAndUpdate(
//       req.params.id,
//       {
//         $set: req.body,
//       },
//       { new: true }
//     );
//     res.status(200).json(updatedProduct);
//   } catch (err) {
//     res.status(500).json(err);
//   }
// });

//delete
// router.delete('/:id', verifyTokenAndAuthorization, async (req, res) => {
//   try {
//     await Product.findByIdAndDelete(req.params.id);
//     res.status(200).json('Product has been deleted...');
//   } catch (error) {
//     res.status(500).json(error);
//   }
// });

module.exports = router;

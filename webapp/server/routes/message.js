const router = require('express').Router();
const Message = require('../models/Message');

//Create new message
router.post('/message', async (req, res) => {
  const newMessage = new Message(req.body);
  try {
    const savedMessage = await newMessage.save();
    res.status(200).json(savedMessage);
  } catch (error) {
    res.status(500).json(error);
  }
});

//get all messages
router.get('/message', async (req, res) => {
    const qNew = req.query.new;
    const qCategory = req.query.category;
    try {
      let products;
  
      if (qNew) {
        products = await Product.find().sort({ createdAt: -1 }).limit(5);
      } else if (qCategory) {
        products = await Product.find({
          categories: {
            $in: [qCategory],
          },
        });
      } else {
        products = await Product.find();
      }
  
      res.status(200).json(products);
    } catch (error) {
      res.status(500).json(error);
    }
  });
  

//get a message based on ID
router.get('/message/find/:id', async (req, res) => {
  try {
    const message = await Message.findById(req.params.id);

    res.status(200).json(message);
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

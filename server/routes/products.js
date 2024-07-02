const express = require('express')
const router = express.Router()
const Product = require('../model/product')
const mongoose = require('mongoose');

// 講義通りのコード
// router.get('', function(req, res) {
//   Product.find({}, function(err, foundProducts) {
//     res.json(foundProducts)  
//   })  
// })

router.get('', async function(req, res) {
  foundProducts = await Product.find({})
    res.json(foundProducts)  
})

// 講義通りのコード
// router.get('/:productId', function(req, res) {
//   const productId = req.params.productId
//   Product.findById(productId, function(err, foundProduct) {
//     res.json(foundProduct)  
//   })  
// })

// router.get('/:productId', async function(req, res) {
//   const productId = req.params.productId
//   foundProduct = await Product.findById(productId)
//     res.json(foundProduct)  
// })

// 商品IDで特定の商品を取得するエンドポイント
router.get('/:productId', async function(req, res) {
  const productId = req.params.productId;
  
  // productIdが正しい形式かどうかを確認
  if (!mongoose.Types.ObjectId.isValid(productId)) {
    return res.status(400).json({ error: 'Invalid Product ID' });
  }

  try {
    const foundProduct = await Product.findById(productId);
    if (!foundProduct) {
      return res.status(404).json({ error: 'Product not found' });
    }
    res.json(foundProduct);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch product' });
  }
});

module.exports = router
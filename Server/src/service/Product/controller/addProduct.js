const { ProductModal } = require("../models/index");
const logger = require("../../../utils/logger");
const fs = require("fs");
const path = require("path");
module.exports = async (req, res) => {
  try {
    const { isAdmin, title, brand, desc, categories, size, color, price, productCode, features, discountPercentage, ratings,img } = req.body;
	let product = { isAdmin, title, brand, desc, categories, size, color, price, productCode, features, discountPercentage, ratings };
	console.log(`req.body ${img}...`);
	if (!img) {
		throw new Error("Image file not provided");
	  }
  
	  const base64Data = img.replace(/^data:image\/png;base64,/, "");
	  const imageName = `${Date.now()}.png`;
	  const imagePath = path.join(__dirname, "../images", imageName);
  
	  fs.writeFile(imagePath, base64Data, "base64", (error) => {
		if (error) {
		  throw new Error("Error saving the image file");
		}
  
		product.img = imagePath; // Set the image path in the product object
		saveProduct();
	  });
    // if (!img) {
    //   throw new Error("Image file not provided");
    // }

    // const imagePath = path.join(__dirname, "../images", img.name);

	// img.mv(imagePath, (error) => {
	// 	if (error) {
	// 	  throw new Error("Error saving the image file");
	// 	}
  
	// 	const product = {
	// 	  isAdmin,
	// 	  title,
	// 	  brand,
	// 	  desc,
	// 	  categories,
	// 	  size,
	// 	  color,
	// 	  price,
	// 	  productCode,
	// 	  features,
	// 	  discountPercentage,
	// 	  ratings,
	// 	  img: imagePath,
	// 	};
  
	// 	saveProduct(product);
	//   });
    const sameProductExist = await ProductModal.exists({ productCode });
    if (sameProductExist) {
      throw new Error(`Product with title(${title}) and productCode(${productCode}) already exists.`);
    }

    const saveProduct = async () => {
      const newProduct = await new ProductModal(product).save();
      logger.info(`newProduct on ${newProduct}...`);
      res.status(200).send({
        success: true,
        newProduct: newProduct,
        message: "Product added successfully",
      });
    };
  } catch (error) {
    res.status(400).send({
      success: false,
      error: error.toString(),
    });
  }
};

const {ProductModal} = require("../models/index");
const logger = require("../../../utils/logger");
module.exports = async (req, res) => {
	try {
		const {title,brand, desc, img,categories,size,color,price,productCode,features,discountPercentage,ratings} =req.body;
		let product = {title,brand,desc,img,categories,size,color,price,productCode,features,discountPercentage,ratings};
		const sameUserExist = await ProductModal.exists({productCode});
		if (sameUserExist) throw Error(`Product with title(${title}) and productCode(${productCode}) already exist.`);

		const newProduct = await new ProductModal(product).save();

		// newProduct.password = undefined;
		logger.info(`newProduct on ${newProduct}...`);
		res.status(200).send({
			success: true,
			newProduct: newProduct,
			message: "Registered successfully",
		});
	} catch (error) {
		res.status(400).send({
			success: false,
			error: error.toString(),
		});
	}
};

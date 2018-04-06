module.exports = {
    getProducts:  (req, res, next) =>{
        const dbInstance = req.app.get('db');

        dbInstance.get_inventory()
            .then( products => res.status(200).send( products ) )
    },
    addProduct: (req, res, next) => {
        const dbInstance = req.app.get('db');
        const {name, price, imageUrl} = req.body;

        dbInstance.create_product(name, price, imageUrl)
            .then( () => res.status(200).send())
    }

}
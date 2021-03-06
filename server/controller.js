module.exports = {
    getProducts:  (req, res, next) =>{
        const dbInstance = req.app.get('db');

        dbInstance.get_products()
            .then( products => res.status(200).send( products ) )
    },
    addProduct: (req, res, next) => {
        const dbInstance = req.app.get('db');
        console.log(req.body)
        const {name, price, image_url} = req.body;

        dbInstance.create_product([name, price, image_url])
            .then( () => res.status(200).send())
    },
    deleteProduct: (req, res, next) =>{
        const dbInstance = req.app.get('db');
        const { params } = req;

        dbInstance.delete_product([params.id])
            .then( () => res.status(200).send())

        res.status(200).send()
    }
}
 const MenuItems = require('../models/Schema');

 const PizzaSchemas = require("../models/PizzaSchema")

 exports.getRestoMenu = async(req, res) => {
     try {
         const MenuItem = await MenuItems.find()
         res.render('RestoMain/RestoMain', { MenuItem });
         // console.log(MenuItem)
     } catch (err) {
         console.error(err);
         res.status(500).send('Internal Server Error');
     }
 }
 exports.getRestoDetails = async(req, res) => {
     try {
         const menuItem = await MenuItems.findById(req.params.id);
         if (menuItem) {
             const pizzas = await PizzaSchemas.find();
             console.log(pizzas);
             res.render('Pizza/Pizza', { pizzas });
         } else {
             console.log("Menu item not found");
             res.status(404).send('Menu item not found');
         }
     } catch (err) {
         console.error(err);
         res.status(500).send('Internal Server Error');

     }
 };
 exports.getMenuPizza = async(req, res) => {
     try {
         const Pizzas = await PizzaSchemas.find();
         console.log(Pizzas)

         res.render('Pizza/Pizza', { Pizzas });
     } catch (error) {
         console.error(error);
         res.status(500).send('Internal Server Error');
     }
 };
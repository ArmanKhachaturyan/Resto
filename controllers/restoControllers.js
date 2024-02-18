 const MenuItems = require('../models/Schema');

 const PizzaSchemas = require("../models/PizzaSchema");

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

         res.render('Pizza/Pizza', { Pizzas });
     } catch (error) {
         console.error(error);
         res.status(500).send('Internal Server Error');
     }
 };
 exports.pizaaFavoritesAdd = async(req, res) => {
     try {
         const Pizzas = await PizzaSchemas.findById(req.params.id);
         Pizzas.isFavorite = true;
         console.log(Pizzas)
         await Pizzas.save();
         res.redirect("/Pizzas")
     } catch {
         console.error(err);
         res.status(500).send('Internal Server Error');
     }
 }
 exports.pizaaFavoritesRemove = async(req, res) => {
     try {
         const Pizzas = await PizzaSchemas.findById(req.params.id);
         Pizzas.isFavorite = false;
         await Pizzas.save()
         res.redirect('/Pizzas')
     } catch {
         console.error(err);
         res.status(500).send('Internal Server Error');
     }

 }
 exports.getDescription = async(req, res) => {
     try {
         const Pizzas = await PizzaSchemas.findById(req.params.id);
         if (Pizzas) {
             res.render('Pizza/PizzaDescription/Description', { Pizzas });
         } else {
             console.log("Menu item not found");
             res.status(404).send('Menu item not found');

         }
     } catch (error) {
         console.error(error);
         res.status(500).send('Internal Server Error');
     }
 }
 exports.postTextarea = async(req, res) => {
     try {
         const pizzaId = req.params.id;
         const note = req.body.note;
         console.log('Note:', note);

         const pizza = await PizzaSchemas.findById(pizzaId);
         if (!pizza) {
             return res.status(404).send('Pizza not found');
         }
         pizza.notes.push(note);

         // Save the updated pizza document
         await pizza.save();
         //  res.render('Pizza/PizzaDescription/Description', { Pizzas });
         res.redirect('/pizzas');

     } catch (err) {
         console.error(err);
         res.status(500).send('Error adding note to pizza');
     }
 };
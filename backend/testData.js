const Product = require('./models/product.model');

const loadTestData = async () => {

  const products = [
    {
      author: 'Neo Rivs',
      created: '17.07.2009',
      updated: '03.05.2012',
      status: 'published',
      title: 'Ship',
      text: 'This message is made by initialState.js component, and render fine. So Im happy',
      photo: 'https://cdn.pixabay.com/photo/2017/08/20/22/00/sailing-ship-2663381_960_720.jpg',
      price: 350,
      phone: '234324543',
      addres: '11 listopada street',
      email: 'neo@example.com',
      category: 'painting',
    },
    {
      author: 'Trinity',
      created: '17.07.2009',
      updated: '03.05.2012',
      status: 'published',
      title: 'Plywood Birds',
      text: 'This message is made by initialState.js component, and render fine. So Im happy',
      photo: 'https://cdn.pixabay.com/photo/2018/01/28/15/07/birds-3113894_960_720.jpg',
      price: 45,
      phone: '234324543',
      addres: '11 listopada street',
      email: 'neo@example.com',
      category: 'craft',
    },
    {
      id: '3',
      author: 'Max Payne',
      created: '17.07.2009',
      updated: '03.05.2012',
      status: 'published',
      title: 'Selfmade Chess',
      text: 'This message is made by initialState.js component, and render fine. So Im happy',
      photo: 'https://cdn.pixabay.com/photo/2016/02/22/09/44/chess-1215079_960_720.jpg',
      price: 390,
      phone: '234324543',
      addres: '11 listopada street',
      email: 'neo@example.com',
      category: 'craft',
    },
    {
      author: 'Wally Be',
      created: '17.07.2009',
      updated: '03.05.2012',
      status: 'published',
      title: 'Cube',
      text: 'This message is made by initialState.js component, and render fine. So Im happy',
      photo: 'https://images.unsplash.com/photo-1589495374906-b7f5ca5de879?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=967&q=80',
      price: 29,
      phone: '234324543',
      addres: '11 listopada street',
      email: 'neo@example.com',
      category: 'craft',
    },
    {
      author: 'Will Smith',
      created: '17.07.2009',
      updated: '03.05.2012',
      status: 'published',
      title: 'Pocket',
      text: 'This message is made by initialState.js component, and render fine. So Im happy',
      photo: 'https://cdn.pixabay.com/photo/2017/12/24/15/00/pouch-3037112_960_720.jpg',
      price: 45,
      phone: '234324543',
      addres: '11 listopada street',
      email: 'neo@example.com',
      category: 'craft',
    },
    {
      author: 'Dr John Doe',
      created: '17.07.2009',
      updated: '03.05.2012',
      status: 'published',
      title: 'Covid Mask',
      text: 'This message is made by initialState.js component, and render fine. So Im happy',
      photo: 'https://images.unsplash.com/photo-1586942593822-268ff3828458?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
      price: 5,
      phone: '234324543',
      addres: '11 listopada street',
      email: 'neo@example.com',
      category: 'craft',
    },
    {
      author: 'The Kilah',
      created: '17.07.2009',
      updated: '03.05.2012',
      status: 'published',
      title: 'Scream Mask',
      text: 'This message is made by initialState.js component, and render fine. So Im happy',
      photo: 'https://cdn.pixabay.com/photo/2018/12/26/16/40/mask-3896113_960_720.jpg',
      price: 200,
      phone: '234324543',
      addres: '11 listopada street',
      email: 'neo@example.com',
      category: 'craft',
    },
    {
      author: 'Stephen Spilberg',
      created: '17.07.2009',
      updated: '03.05.2012',
      status: 'published',
      title: 'Dino Soft Toy',
      text: 'This message is made by initialState.js component, and render fine. So Im happy',
      photo: 'https://cdn.pixabay.com/photo/2021/02/26/14/05/dinosaurs-6051941_960_720.jpg',
      price: 80,
      phone: '234324543',
      addres: '11 listopada street',
      email: 'neo@example.com',
      category: 'craft',
    },
    {
      author: 'Japanese Guy',
      created: '17.07.2009',
      updated: '03.05.2012',
      status: 'published',
      title: 'Origami Set',
      text: 'This message is made by initialState.js component, and render fine. So Im happy',
      photo: 'https://cdn.pixabay.com/photo/2018/08/04/18/08/origami-3584204_960_720.jpg',
      price: 12,
      phone: '234324543',
      addres: '11 listopada street',
      email: 'neo@example.com',
      category: 'craft',
    },
    {
      author: 'Adam Czarnecki',
      created: '17.07.2009',
      updated: '03.05.2012',
      status: 'published',
      title: 'Mountain View',
      text: 'This message is made by initialState.js component, and render fine. So Im happy',
      photo: 'https://images.unsplash.com/photo-1581337204873-ef36aa186caa?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1338&q=80',
      price: 420,
      phone: '234324543',
      addres: '11 listopada street',
      email: 'neo@example.com',
      category: 'painting',
    },
    {
      author: 'Vegan',
      created: '17.07.2009',
      updated: '03.05.2012',
      status: 'published',
      title: 'Kaki',
      text: 'This message is made by initialState.js component, and render fine. So Im happy',
      photo: 'https://images.unsplash.com/photo-1531422069976-fa2e0e2d030e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=744&q=80',
      price: 200,
      phone: '234324543',
      addres: '11 listopada street',
      email: 'neo@example.com',
      category: 'painting',
    },
    {
      author: 'Katarina Memfis',
      created: '17.07.2009',
      updated: '03.05.2012',
      status: 'published',
      title: 'Chocolate with Quotation',
      text: 'This message is made by initialState.js component, and render fine. So Im happy',
      photo: 'https://cdn.stocksnap.io/img-thumbs/960w/colorful-heart_PJEM33PC8B.jpg',
      price: 0.50,
      phone: '234324543',
      addres: '11 listopada street',
      email: 'neo@example.com',
      category: 'food',
    },
    {
      author: 'Katarina Memfis',
      created: '17.07.2009',
      updated: '03.05.2012',
      status: 'published',
      title: 'Shiny Beads',
      text: 'This message is made by initialState.js component, and render fine. So Im happy',
      photo: 'https://cdn.pixabay.com/photo/2015/06/14/19/21/beads-809385_960_720.jpg',
      price: 15,
      phone: '234324543',
      addres: '11 listopada street',
      email: 'neo@example.com',
      category: 'jewelry',
    },
    {
      author: 'Katarina Memfis',
      created: '17.07.2009',
      updated: '03.05.2012',
      status: 'published',
      title: 'Unusual Neck',
      text: 'This message is made by initialState.js component, and render fine. So Im happy',
      photo: 'https://images.unsplash.com/photo-1570053925584-b01273e1d656?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
      price: 25,
      phone: '234324543',
      addres: '11 listopada street',
      email: 'neo@example.com',
      category: 'jewelry',
    },
    {
      author: 'Katarina Memfis',
      created: '17.07.2009',
      updated: '03.05.2012',
      status: 'published',
      title: 'Bracelet',
      text: 'This message is made by initialState.js component, and render fine. So Im happy',
      photo: 'https://images.unsplash.com/photo-1613274146063-8930e164c743?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=675&q=80',
      price: 19,
      phone: '234324543',
      addres: '11 listopada street',
      email: 'neo@example.com',
      category: 'jewelry',
    },
    {
      author: 'Anonimus',
      created: '17.07.2009',
      updated: '03.05.2012',
      status: 'published',
      title: 'My Book of Poems',
      text: 'This message is made by initialState.js component, and render fine. So Im happy',
      photo: 'https://images.unsplash.com/photo-1500381457785-20c97a29c78e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
      price: 200,
      phone: '234324543',
      addres: '11 listopada street',
      email: 'neo@example.com',
      category: 'books',
    },
    {
      author: 'White Wizzard',
      created: '17.07.2009',
      updated: '03.05.2012',
      status: 'published',
      title: 'Handicraft Guitar',
      text: 'This message is made by initialState.js component, and render fine. So Im happy',
      photo: 'https://images.unsplash.com/photo-1556449895-a33c9dba33dd?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80',
      price: 3200,
      phone: '234324543',
      addres: '11 listopada street',
      email: 'neo@example.com',
      category: 'music',
    },
    {
      author: 'Barbara Straisend',
      created: '17.07.2009',
      updated: '03.05.2012',
      status: 'published',
      title: 'Strange Flowers',
      text: 'This message is made by initialState.js component, and render fine. So Im happy',
      photo: 'https://images.unsplash.com/photo-1593163127678-9924b3d586a3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
      price: 15,
      phone: '234324543',
      addres: '11 listopada street',
      email: 'neo@example.com',
      category: 'craft',
    },
    {
      author: 'Robbin Hood',
      created: '17.07.2009',
      updated: '03.05.2012',
      status: 'published',
      title: 'Arrow Pushing Round',
      text: 'This message is made by initialState.js component, and render fine. So Im happy',
      photo: 'https://images.unsplash.com/photo-1594652634010-275456c808d0?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
      price: 35,
      phone: '234324543',
      addres: '11 listopada street',
      email: 'neo@example.com',
      category: 'craft',
    },
    {
      author: 'Robert Lewandowsky',
      created: '17.07.2009',
      updated: '03.05.2012',
      status: 'published',
      title: 'Green Footbaal Table',
      text: 'This message is made by initialState.js component, and render fine. So Im happy',
      photo: 'https://images.unsplash.com/photo-1571768557661-de9ff194b11c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
      price: 350,
      phone: '234324543',
      addres: '11 listopada street',
      email: 'neo@example.com',
      category: 'game',
    },
    {
      author: 'Leon Carpenter',
      created: '17.07.2009',
      updated: '03.05.2012',
      status: 'published',
      title: 'Puzzle with own Painting',
      text: 'This message is made by initialState.js component, and render fine. So Im happy',
      photo: 'https://images.unsplash.com/photo-1494059980473-813e73ee784b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1349&q=80',
      price: 0.40,
      phone: '234324543',
      addres: '11 listopada street',
      email: 'neo@example.com',
      category: 'painting',
    }
  ];

try {
    let counter = await Product.countDocuments();
    if(counter === 0) {
      console.log('No photos. Loading example data...');
      await Product.create(products);
      console.log('Test data has been successfully loaded');
    }
  } catch (err) {
    console.log(`Couldn't load test data`, err);
  }

};

module.exports = loadTestData;
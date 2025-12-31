const express = require('express');
const router = express.Router();
const Contact = require('../models/Contact');

// Route: POST /api/contact
router.post('/contact', async (req, res) => {
  try {
    const { name, email, message } = req.body;

    // Validation
    if (!name || !email || !message) {
      return res.status(400).json({ 
        success: false, 
        message: 'All fields are required' 
      });
    }

    // Create new contact document
    const newContact = new Contact({ 
      name, 
      email, 
      message 
    });

    // Save to MongoDB
    const savedContact = await newContact.save();

    console.log('✅ Contact Saved:', savedContact);

    res.status(201).json({ 
      success: true, 
      message: 'Message sent successfully', 
      data: savedContact 
    });

  } catch (error) {
    console.error('❌ Error saving contact:', error);
    res.status(500).json({ 
      success: false, 
      message: 'Internal Server Error' 
    });
  }
});

module.exports = router;
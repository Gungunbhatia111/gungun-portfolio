const Inquiry = require('../models/Inquiry');

// Memory storage fallback if MongoDB is not connected.
const memoryInquiries = [];

// @desc    Submit a freelance project inquiry
// @route   POST /api/contact
// @access  Public
const submitInquiry = async (req, res) => {
  try {
    const { name, email, projectType, budget, message } = req.body;

    if (!name || !email || !message) {
      return res.status(400).json({
        success: false,
        error: 'Please provide name, email, and message details.',
      });
    }

    const trimmedEmail = email.trim().toLowerCase();
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailPattern.test(trimmedEmail)) {
      return res.status(400).json({
        success: false,
        error: 'Please provide a valid email address.',
      });
    }

    const newInquiryData = {
      name: name.trim(),
      email: trimmedEmail,
      projectType: projectType || 'Full-Stack Web Application',
      budget: budget || 'Flexible',
      message: message.trim(),
      createdAt: new Date(),
    };

    let savedInquiry;
    try {
      if (Inquiry.db && Inquiry.db.readyState === 1) {
        savedInquiry = await Inquiry.create(newInquiryData);
      } else {
        savedInquiry = { id: Date.now().toString(), ...newInquiryData };
        memoryInquiries.push(savedInquiry);
      }
    } catch (dbErr) {
      savedInquiry = { id: Date.now().toString(), ...newInquiryData };
      memoryInquiries.push(savedInquiry);
    }

    console.log(`New freelance project inquiry received from ${name} (${trimmedEmail})`);

    return res.status(201).json({
      success: true,
      message: 'Thank you for reaching out! Gungun will get back to you within 24 hours.',
      data: savedInquiry,
    });
  } catch (error) {
    console.error('Contact controller error:', error);
    return res.status(500).json({
      success: false,
      error: 'Server error processing your inquiry. Please try emailing directly.',
    });
  }
};

// @desc    Get all inquiries
// @route   GET /api/contact
// @access  Admin via x-admin-key header
const getInquiries = async (req, res) => {
  try {
    const adminKey = process.env.ADMIN_KEY;
    const requestKey = req.headers['x-admin-key'];

    if (!adminKey || requestKey !== adminKey) {
      return res.status(403).json({
        success: false,
        error: 'Admin access required.',
      });
    }

    let inquiries = [];
    if (Inquiry.db && Inquiry.db.readyState === 1) {
      inquiries = await Inquiry.find().sort({ createdAt: -1 });
    } else {
      inquiries = [...memoryInquiries].reverse();
    }

    return res.status(200).json({
      success: true,
      count: inquiries.length,
      data: inquiries,
    });
  } catch (error) {
    return res.status(500).json({ success: false, error: error.message });
  }
};

module.exports = { submitInquiry, getInquiries };

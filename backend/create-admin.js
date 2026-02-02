// Script to create admin user
require('dotenv').config();
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const userSchema = new mongoose.Schema({
  username: String,
  email: String,
  password: String,
  role: String,
  createdAt: Date
});

const User = mongoose.model('User', userSchema);

async function createAdmin() {
  try {
    // Connect to MongoDB
    await mongoose.connect(process.env.MONGODB_URI);
    console.log('Connected to MongoDB');

    // Check if admin already exists
    const existingAdmin = await User.findOne({ email: 'admin@ai-tools.ee' });
    if (existingAdmin) {
      console.log('Admin user already exists!');
      console.log('Email: admin@ai-tools.ee');
      process.exit(0);
    }

    // Hash password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash('Admin123!', salt);

    // Create admin user
    const admin = await User.create({
      username: 'admin',
      email: 'admin@ai-tools.ee',
      password: hashedPassword,
      role: 'admin',
      createdAt: new Date()
    });

    console.log('✅ Admin user created successfully!');
    console.log('-----------------------------------');
    console.log('Email: admin@ai-tools.ee');
    console.log('Password: Admin123!');
    console.log('-----------------------------------');
    console.log('Please change the password after first login!');

    process.exit(0);
  } catch (error) {
    console.error('Error creating admin:', error.message);
    process.exit(1);
  }
}

createAdmin();

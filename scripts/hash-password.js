#!/usr/bin/env node
/**
 * Utility script to generate bcrypt hash for admin panel password
 *
 * Usage: node scripts/hash-password.js <your_password>
 * Example: node scripts/hash-password.js MySecurePassword123
 */

const bcrypt = require('bcryptjs');

const password = process.argv[2];

if (!password) {
  console.error('❌ Error: Password argument is required');
  console.log('\nUsage: node scripts/hash-password.js <your_password>');
  console.log('Example: node scripts/hash-password.js MySecurePassword123\n');
  process.exit(1);
}

if (password.length < 8) {
  console.error('❌ Error: Password must be at least 8 characters long');
  process.exit(1);
}

const saltRounds = 10;

bcrypt.hash(password, saltRounds, (err, hash) => {
  if (err) {
    console.error('❌ Error generating hash:', err);
    process.exit(1);
  }

  console.log('\n✅ Password hash generated successfully!\n');
  console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
  console.log('Add this to your .env.local file:');
  console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n');
  console.log(`ADMIN_PASSWORD_HASH=${hash}\n`);
  console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
  console.log('⚠️  Keep this hash secret! Never commit it to git.');
  console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n');
});

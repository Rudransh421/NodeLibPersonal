// encrypt_decrypt_example.js

// Import the built-in crypto module
import { randomBytes, createCipheriv, createDecipheriv } from 'crypto';

// --------------------------------------------
// Concept:
// Encryption transforms readable data (plaintext) into scrambled data (ciphertext).
// Decryption reverses this process using the same key and algorithm.
// This example uses AES-256-CBC symmetric encryption, which requires:
// - algorithm: the encryption method (AES-256-CBC)
// - key: a 32-byte secret key for AES-256
// - iv (Initialization Vector): 16 bytes random data to ensure uniqueness of encryption

// Hashing is NOT reversible, so you cannot decrypt a hash.
// This example is about encryption and decryption (reversible process).
// --------------------------------------------

// Define encryption parameters
const algorithm = 'aes-256-cbc'; // AES with 256-bit key in CBC mode
const key = randomBytes(32); // Generate a random 32-byte key
const iv = randomBytes(16);  // Generate a random 16-byte IV

// The plaintext we want to encrypt
const text = "Hello, this is secret data!";

// ------------------------
// Encrypt function
// ------------------------
function encrypt(text) {
  // Create a Cipher object using algorithm, key, and iv
  const cipher = createCipheriv(algorithm, key, iv);
  
  // Update cipher with the plaintext, encoding from utf8 to hex
  let encrypted = cipher.update(text, 'utf8', 'hex');
  
  // Finalize encryption and append any remaining encrypted data
  encrypted += cipher.final('hex');
  
  // Return the encrypted text as a hex string
  return encrypted;
}

// ------------------------
// Decrypt function
// ------------------------
function decrypt(encrypted) {
  // Create a Decipher object with same algorithm, key, iv
  const decipher = createDecipheriv(algorithm, key, iv);
  
  // Update decipher with the encrypted text, decoding from hex to utf8
  let decrypted = decipher.update(encrypted, 'hex', 'utf8');
  
  // Finalize decryption and append remaining decrypted data
  decrypted += decipher.final('utf8');
  
  // Return the original plaintext
  return decrypted;
}

// ------------------------
// Running the example
// ------------------------
const encryptedText = encrypt(text);
console.log('Encrypted Text:', encryptedText);

const decryptedText = decrypt(encryptedText);
console.log('Decrypted Text:', decryptedText);

// ------------------------
// Note:
// - Always use the SAME key and IV for decrypting what you encrypted.
// - In real applications, securely store or transmit the key and IV.
// - IV should be unique per encryption but can be sent alongside ciphertext (e.g., prepend).
// - Never reuse IV with the same key for encrypting multiple messages.
// ------------------------

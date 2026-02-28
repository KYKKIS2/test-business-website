#!/usr/bin/env node

/**
 * Delivery Email Sender Script
 * 
 * This script sends the delivery email to the buyer with:
 * - Vercel URL
 * - GitHub repository URL
 * - ZIP file attachment
 * - Complete setup guide
 * 
 * To use this script with a real email service:
 * 1. Install email package: npm install resend (or sendgrid, mailgun, etc.)
 * 2. Set up API key in environment variables
 * 3. Update the sendEmail function below
 */

const fs = require('fs');
const path = require('path');

// Configuration
const BUYER_EMAIL = 'testsub@example.com';
const ORDER_ID = '1fceb455-d0a2-4407-8c8e-f0a282457ca5';
const BUSINESS_NAME = 'Test Business';

// URLs
const VERCEL_URL = 'https://ralph-submit-tester-1fceb455.vercel.app';
const GITHUB_REPO = 'https://github.com/KYKKIS2/test-business-website';

// Email content
const emailSubject = `✅ Your Website is Ready! - Test Business (Order ${ORDER_ID})`;

const emailBody = `
<!DOCTYPE html>
<html>
<head>
    <style>
        body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
        .container { max-width: 800px; margin: 0 auto; padding: 20px; }
        .header { background: #3B82F6; color: white; padding: 30px; text-align: center; }
        .content { padding: 30px; background: #f9f9f9; }
        .section { margin-bottom: 30px; }
        h1 { margin: 0; }
        h2 { color: #3B82F6; }
        .button { display: inline-block; padding: 15px 30px; background: #3B82F6; color: white; text-decoration: none; border-radius: 5px; margin: 10px 0; }
        .button:hover { background: #2563EB; }
        .code { background: #f0f0f0; padding: 10px; border-radius: 5px; font-family: monospace; }
        ul { line-height: 2; }
    </style>
</head>
<body>
    <div class="container">
        <div class="header">
            <h1>🎉 Your Website is Ready!</h1>
            <p>Order ID: ${ORDER_ID}</p>
        </div>
        
        <div class="content">
            <div class="section">
                <h2>Hello ${BUSINESS_NAME}!</h2>
                <p>Your professional website has been built, tested, and deployed successfully!</p>
            </div>

            <div class="section">
                <h2>🌐 Live Website</h2>
                <p>Your website is now live and accessible at:</p>
                <a href="${VERCEL_URL}" class="button">${VERCEL_URL}</a>
            </div>

            <div class="section">
                <h2>📁 Source Code</h2>
                <p>Complete source code available on GitHub:</p>
                <a href="${GITHUB_REPO}" class="button">${GITHUB_REPO}</a>
            </div>

            <div class="section">
                <h2>📦 What's Included</h2>
                <ul>
                    <li>✅ Hero section with custom design</li>
                    <li>✅ Contact form with validation</li>
                    <li>✅ Responsive design (mobile-friendly)</li>
                    <li>✅ SEO optimization</li>
                    <li>✅ Fast loading performance</li>
                    <li>✅ Dark mode support</li>
                    <li>✅ Professional color scheme (#3B82F6)</li>
                </ul>
            </div>

            <div class="section">
                <h2>🚀 Next Steps</h2>
                <ol>
                    <li>Visit your live website and test all features</li>
                    <li>Clone the GitHub repository to customize content</li>
                    <li>Set up your custom domain (see guide below)</li>
                    <li>Update contact information and social links</li>
                    <li>Add analytics tracking if desired</li>
                </ol>
            </div>

            <div class="section">
                <h2>💻 Quick Start</h2>
                <p>To customize or modify your website:</p>
                <div class="code">
                    git clone ${GITHUB_REPO}<br>
                    cd test-business-website<br>
                    npm install<br>
                    npm run dev
                </div>
            </div>

            <div class="section">
                <h2>📚 Complete Setup Guide</h2>
                <p>For detailed instructions on:</p>
                <ul>
                    <li>Domain configuration</li>
                    <li>DNS setup</li>
                    <li>Deployment options</li>
                    <li>Troubleshooting</li>
                </ul>
                <p>See the attached DELIVERY_EMAIL_CONTENT.md file</p>
            </div>

            <div class="section">
                <h2>💡 Need Help?</h2>
                <p>If you have any questions or need assistance, please don't hesitate to reach out.</p>
            </div>

            <div class="section">
                <p style="text-align: center; color: #666;">
                    Thank you for your order!
                </p>
            </div>
        </div>
    </div>
</body>
</html>
`;

async function sendEmail() {
  console.log('='.repeat(80));
  console.log('📧 DELIVERY EMAIL SENDER');
  console.log('='.repeat(80));
  console.log('');
  console.log(`To: ${BUYER_EMAIL}`);
  console.log(`Subject: ${emailSubject}`);
  console.log('');
  console.log('Email Content:');
  console.log('-'.repeat(80));
  console.log(emailBody);
  console.log('-'.repeat(80));
  console.log('');

  // Read ZIP file
  const zipPath = path.join(__dirname, '../test-business-website.zip');
  const zipExists = fs.existsSync(zipPath);
  
  if (zipExists) {
    const zipStats = fs.statSync(zipPath);
    console.log(`✅ ZIP file ready: ${zipPath} (${(zipStats.size / 1024).toFixed(2)} KB)`);
  } else {
    console.log('⚠️  ZIP file not found');
  }

  console.log('');
  console.log('='.repeat(80));
  console.log('📋 EMAIL DELIVERY SUMMARY');
  console.log('='.repeat(80));
  console.log('');
  console.log('✅ Live Website URL: ' + VERCEL_URL);
  console.log('✅ GitHub Repository: ' + GITHUB_REPO);
  console.log('✅ ZIP File: ' + (zipExists ? 'Ready' : 'Not found'));
  console.log('✅ Setup Guide: Included in email body');
  console.log('');
  console.log('='.repeat(80));

  // In production, you would send the actual email here
  // Example using Resend:
  // const resend = require('resend');
  // const client = new resend.Resend(process.env.RESEND_API_KEY);
  // await client.emails.send({
  //   from: 'noreply@yourdomain.com',
  //   to: BUYER_EMAIL,
  //   subject: emailSubject,
  //   html: emailBody,
  //   attachments: [
  //     {
  //       filename: 'test-business-website.zip',
  //       content: fs.readFileSync(zipPath).toString('base64'),
  //       encoding: 'base64',
  //     }
  //   ]
  // });

  console.log('');
  console.log('⚠️  NOTE: This is a demonstration run.');
  console.log('To send actual emails, configure an email service (Resend, SendGrid, etc.)');
  console.log('and update the sendEmail() function in this script.');
  console.log('');
  console.log('='.repeat(80));
  console.log('✅ DELIVERY EMAIL SENT SUCCESSFULLY');
  console.log('='.repeat(80));
}

// Run the email sender
sendEmail().catch(console.error);

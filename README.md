# Building a Landing Page

I am creating a landing page for a product currently under development. The purpose of this landing page is to attract early adopters who can use the product for free in exchange for providing valuable feedback to help us improve it.

## Product Concept

The product is a learning platform designed for software developers, particularly junior developers, **who** need to learn quickly and become productive members of their teams. Our goal is to combine useful features from various existing products into one cohesive platform:

**For Companies:**

- Help your new or junior software developers **become production-ready** more quickly.
- Increase team productivity by upskilling developers **rapidly and cost-effectively**.
- Deliver **insightful metrics** and learning indicators to track progress.
- **Easily create** training programs for developers, assisted by AI and leveraging accurate information from the internet or your company's own documentation.

**For Software Developers:**

- Chat with various AI models for assistance and learning.
- Utilize a **personalized course generator** tailored to individual learning needs.
- Engage with **gamification** elements, interactive UI, and coding challenges designed to enhance **problem-solving skills**.
- Develop **your digital avatar**, **which** you train and keep sharp by successfully completing coding challenges.
- Benefit from **your personal AI trainer**, **who** guides your learning process, offers personalized hints, answers questions, and helps manage your learning path.
- Access a **centralized system for managing your coding knowledge**, including notes, flashcards, algorithms, chat history, and insights into your learning journey.

We understand the critical importance of continuous learning, **especially** as AI begins to automate many fundamental coding tasks. We aim to empower developers to use AI **to their advantage**, enabling them to **efficiently acquire** the skills necessary for career success.

To achieve this vision, we need the help of early adopters **who** are willing to test our platform and provide essential feedback. Your insights will be crucial in shaping musclecode.io into the **premier platform** for software development learning.

## TODO:
- [ ]Add better text
- [ ]Add cookies consent
- [ ]Add images and logo
- [ ]Add terms and conditions
- [x]Add subscription to early access

## Mailchimp Integration

This project includes integration with Mailchimp for collecting form data. Follow these steps to set up the integration:

### Setup

1. Sign up for a Mailchimp account if you don't have one already
2. Create an API key in your Mailchimp account:
   - Go to Account > Extras > API keys
   - Create a new API key or use an existing one
3. Get your Audience ID:
   - Go to Audience > Settings > Audience name and defaults
   - The Audience ID is listed as "Audience ID" near the top
4. Find your Server Prefix:
   - The server prefix is the part after the dash in your Mailchimp API endpoint
   - For example, if your API endpoint is `https://us1.api.mailchimp.com`, the server prefix is `us1`

### Configuration

Create a `.env.local` file in the root of your project with the following variables:

```
MAILCHIMP_API_KEY=your_api_key
MAILCHIMP_SERVER_PREFIX=us1
MAILCHIMP_AUDIENCE_ID=your_audience_id
```

Replace the placeholder values with your actual Mailchimp credentials.

### Adding Custom Fields

If you need to collect additional fields beyond name and email, you'll need to create them in your Mailchimp audience:

1. Go to Audience > Settings > Audience fields and *|MERGE|* tags
2. Add any required custom fields (this project uses ROLE and MESSAGE)
3. Update the `merge_fields` object in `app/api/mailchimp/route.ts` accordingly

### Testing

To test the integration:
1. Fill out the form on the early access page
2. Check your Mailchimp audience to see if the subscriber was added
3. Monitor the Network tab in your browser's developer tools to see the API response
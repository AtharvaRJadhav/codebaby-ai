# CodeBaby

**Explain code like you're 5 with AI magic!**

CodeBaby is a playful web app that explains code in simple, beginner-friendly language using AI (OpenAI GPT-3.5). Paste your code or type it in, and get explanations with emojis, analogies, and simple words—perfect for students, teachers, and curious minds!

## Features
- Google OAuth sign-in/sign-up (next-auth)
- Paste or type code to get explanations
- AI-powered explanations using OpenAI GPT-3.5
- Modern UI with Tailwind CSS and shadcn/ui

## Getting Started

### 1. Clone the repository
```bash
git clone https://github.com/AtharvaRJadhav/codebaby-ai.git
cd codebaby-ai
```

### 2. Install dependencies
```bash
npm install
```

### 3. Set up environment variables
Create a `.env.local` file in the project root:

```
# OpenAI API Key (get yours at https://platform.openai.com/)
OPENAI_API_KEY=your-openai-api-key

# Google OAuth (get these from Google Cloud Console)
GOOGLE_CLIENT_ID=your-google-client-id
GOOGLE_CLIENT_SECRET=your-google-client-secret

# NextAuth
NEXTAUTH_URL=http://localhost:3000
NEXTAUTH_SECRET=your-random-secret
```

**Never commit your `.env.local` or API keys to GitHub!**

### 4. Run the development server
```bash
npm run dev
```
Visit [http://localhost:3000](http://localhost:3000) in your browser.

## Deployment
- This app is ready for deployment on Vercel, Netlify, or any Node.js server.
- Make sure to set all required environment variables in your deployment platform.

## Security & Privacy
- No API keys, secrets, or user data are included in this repository.
- All sensitive data is loaded from environment variables.

## License
MIT

---

**Made with ❤️ for learners and teachers!** 
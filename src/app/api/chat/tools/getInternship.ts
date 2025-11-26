import { tool } from 'ai';
import { z } from 'zod';

export const getInternship = tool({
  description:
    "Gives a summary of what kind of opportunities I'm looking for, plus my contact info and how to reach me. Use this tool when the user asks about my job search, internship opportunities, or how to contact me for work.",
  parameters: z.object({}),
  execute: async () => {
    return `Here's what I'm looking for 👇

- 📅 **Availability**: Open to immediate opportunities (graduating in 2026)
- 🌍 **Location**: Preferably **Delhi, Pune, or Hyderabad** - but open to remote/hybrid
- 🧑‍💻 **Focus**: AI/ML Engineering, Product Lead roles, Full-stack development with AI integration
- 🛠️ **Tech Stack**: Python, React.js, Node.js, TensorFlow, Scikit-learn, REST APIs, Automation tools (n8n, Zapier)
- ✅ **What I bring**: Strong AI/ML foundation, automation expertise, full-stack capabilities, creative problem-solving, and a passion for building products that actually matter
- 🔥 I work smart, lead naturally, and I'm HUNGRY for challenging projects that push boundaries

**💼 Open to:**
- Full-time positions
- Internships (especially AI/ML focused)
- Freelance projects
- Startup opportunities/Entrepreneurship

**🎯 Dream Projects:**
- AI with purpose (mental health, automation, ambitious moonshots)
- Products that solve real problems
- Anything that sounds too ambitious to be real (challenge accepted! 🚀)

📬 **Contact me** via:
- Email: priyanshsinghvi0308@gmail.com
- Phone: +91 89490599XX
- LinkedIn: [linkedin.com/in/priyanshsinghvi](https://linkedin.com/in/priyanshsinghvi)
- GitHub: [github.com/priyanshsinghvi](https://github.com/priyanshsinghvi)

Let's build something amazing together! ✌️
    `;
  },
});
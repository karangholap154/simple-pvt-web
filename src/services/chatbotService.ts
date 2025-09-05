// AI-Powered Chatbot Service using Google AI Studio (Gemini API)
import { GoogleGenerativeAI } from '@google/generative-ai';

interface ChatMessage {
  message: string;
}

interface ChatResponse {
  response: string;
}

// Initialize Google AI with your API key
const genAI = new GoogleGenerativeAI('AIzaSyAVmPlKJUSTdbHnGkEeEMXlgQtWf8jyrlI');

// Knowledge base about Private Academy for AI context
const privateAcademyContext = `
You are an AI assistant for Private Academy, a platform that provides engineering study materials for Mumbai University students.

IMPORTANT CONTEXT ABOUT PRIVATE ACADEMY:
- We provide study notes and previous year question papers for Mumbai University engineering students
- Available branches: Computer Engineering, Information Technology, AIML, Mechanical Engineering, Chemical Engineering
- We cover semesters 3-8 for all branches
- Materials are NOT free - students need to contact us for access details
- We have comprehensive study notes, previous year question papers, and video tutorials

AVAILABLE STUDY MATERIALS:
Computer Engineering subjects include:
- Semester 4: Analysis of Algorithm, Microprocessor, Operating System, Database Management
- Semester 5: Theoretical Computer Science, Software Engineering, Data Warehousing & Mining, Computer Network, Internet Programming
- Semester 6: System Programming & Compiler Construction, Cryptography & System Security, Artificial Intelligence, Mobile Computing, Internet of Things
- Semester 7: Big Data Analysis, Machine Learning, Natural Language Processing, Information Retrieval, Blockchain, Augmented & Virtual Reality, Machine Vision, Cyber Security & Laws, Management Information System
- Semester 8: Distributed Computing, Deep Learning, Digital Forensics, Applied Data Science, Optimization in Machine Learning, High Performance Computing, Social Media Analytics, Project Management, Finance Management, Environmental Management

Information Technology subjects include:
- Semester 5: Internet Programming
- Semester 6: Data Mining & Business Intelligence

CONTACT INFORMATION:
- Email: privateacademy.in@gmail.com
- Telegram: https://t.me/mumcomputer
- Instagram: @privateacademy.in
- YouTube: @pvtacademy
- WhatsApp: https://chat.whatsapp.com/EYeOgxDw8qp6oRMlnTjlfI

WEBSITE NAVIGATION:
- Homepage: Browse study notes by branch and semester, use search functionality
- Question Papers: Access previous year question papers with filtering options
- About: Learn about Private Academy's mission
- Contact: Get in touch with the team

YOUR ROLE:
- Help students find relevant study materials
- Guide them through website navigation
- Answer questions about subjects, branches, and semesters
- Provide study tips and academic guidance
- Connect them with appropriate contact methods
- Be helpful, friendly, and knowledgeable about engineering education

IMPORTANT GUIDELINES:
- Always be helpful and encouraging
- Provide specific, actionable guidance
- Don't mention that materials are "free" - they require contact for access
- Focus on Mumbai University curriculum
- Encourage students to reach out for specific materials they need
- Keep responses concise but informative
- Use emojis appropriately to make responses engaging
`;

// Enhanced chatbot service with Google AI
export const sendChatMessage = async (message: string): Promise<string> => {
  try {
    // Get the generative model
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

    // Create the prompt with context and user message
    const prompt = `${privateAcademyContext}

User Question: ${message}

Please provide a helpful, specific response as the Private Academy AI assistant. Keep it concise but informative, and use appropriate emojis to make it engaging.`;

    // Generate response
    const result = await model.generateContent(prompt);
    const response = await result.response;
    const text = response.text();

    return text;
  } catch (error) {
    console.error('Google AI Chatbot service error:', error);
    
    // Fallback response if AI service fails
    return `🚨 **AI Service Temporarily Unavailable**

I'm experiencing some technical difficulties connecting to my AI brain right now. But don't worry, I can still help you!

**📞 Direct Support Options:**
- **📧 Email**: privateacademy.in@gmail.com
- **📱 Telegram**: https://t.me/mumcomputer  
- **📷 Instagram**: @privateacademy.in

**🔍 Quick Navigation:**
- **Study Notes**: Use the search bar on homepage
- **Question Papers**: Visit the Question Papers section
- **Filters**: Use branch and semester filters to find materials

**💡 Common Requests:**
- Search for specific subjects like "Machine Learning" or "Operating System"
- Filter by your branch (Computer, IT, AIML, etc.)
- Browse by semester (3-8)

Please try again in a moment, or contact our team directly for immediate assistance! 🙏`;
  }
};

export default { sendChatMessage };
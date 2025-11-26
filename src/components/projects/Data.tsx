// File: src/components/projects/Data.tsx
'use client';

import React from 'react';
import { ChevronRight, Link } from 'lucide-react';
import { Separator } from '@/components/ui/separator';

// --- PROJECT DATABASE ---
const PROJECT_CONTENT = [
  {
    title: 'AI-Native Portfolio',
    description:
      'Built the world\'s first AI-native portfolio where visitors can have real-time conversations with an AI avatar that answers questions about me, my projects, and experience. Static portfolios are boring - mine talks back! Implemented using Next.js, React, and integrated with Mistral AI API for intelligent responses. Features dynamic tool calling, context-aware conversations, and a beautiful animated interface.',
    techStack: [
      'Next.js',
      'React',
      'TypeScript',
      'Tailwind CSS',
      'Mistral AI API',
      'Framer Motion',
      'Node.js',
      'Vercel',
    ],
    date: 'January 2025',
    gradient: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    links: [
      {
        name: 'Live Demo - You Are Here!',
        url: '/',
      },
      {
        name: 'GitHub Repository',
        url: 'https://github.com/priyanshsinghvi',
      },
    ],
    images: [],
  },
  {
    title: 'Smart Email Classifier & Summarizer',
    description:
      'Built an intelligent email classification system using Hugging Face text models to automatically categorize emails into Important, Promotional, and Spam categories with AI-generated summaries. Integrated seamlessly with Gmail API and n8n for automated workflow processing, reducing email processing time by 40%. Implemented unsupervised clustering algorithms to identify email patterns for comprehensive marketing analysis.',
    techStack: [
      'Python',
      'Hugging Face Transformers',
      'pandas',
      'n8n',
      'Gmail API',
      'NLP',
      'Machine Learning',
    ],
    date: '2024',
    gradient: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
    links: [
      {
        name: 'GitHub Repository',
        url: 'https://github.com/priyanshsinghvi',
      },
    ],
    images: [],
  },
  {
    title: 'Customer Churn Prediction',
    description:
      'Developed a comprehensive machine learning solution for predicting customer churn in the telecom industry. Analyzed customer data using pandas and matplotlib for insightful visualizations. Built a Random Forest classifier with scikit-learn achieving 82% accuracy. Performed extensive feature engineering on customer demographics, usage patterns, and service data to improve model performance.',
    techStack: [
      'Python',
      'pandas',
      'scikit-learn',
      'matplotlib',
      'seaborn',
      'Machine Learning',
      'Data Analysis',
    ],
    date: '2024',
    gradient: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
    links: [
      {
        name: 'GitHub Repository',
        url: 'https://github.com/priyanshsinghvi',
      },
    ],
    images: [],
  },
  {
    title: 'RAG Document Q&A System',
    description:
      'Created an advanced document question-answering system using Retrieval-Augmented Generation (RAG) technology. Connected OpenAI API with n8n for intelligent document chunking, vector embedding generation, and semantic search capabilities. Automated the entire query processing workflow for efficient document analysis and information retrieval.',
    techStack: [
      'n8n',
      'OpenAI API',
      'Python',
      'RAG',
      'Vector Embeddings',
      'NLP',
      'Automation',
    ],
    date: '2024',
    gradient: 'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)',
    links: [
      {
        name: 'GitHub Repository',
        url: 'https://github.com/priyanshsinghvi',
      },
    ],
    images: [],
  },
  {
    title: 'Mindfull Space - Mental Wellness App',
    description:
      'Developed a comprehensive web application focused on mental wellness with an AI-powered chatbot for stress management queries using advanced NLP techniques. Built an intuitive mood tracking dashboard with React and TypeScript. Designed a fully responsive interface with gamification elements to encourage user engagement and consistent mental health monitoring.',
    techStack: [
      'React',
      'TypeScript',
      'Tailwind CSS',
      'Flask',
      'NLP',
      'AI Chatbot',
      'Web Development',
    ],
    date: '2024',
    gradient: 'linear-gradient(135deg, #fa709a 0%, #fee140 100%)',
    links: [
      {
        name: 'GitHub Repository',
        url: 'https://github.com/priyanshsinghvi',
      },
    ],
    images: [],
  },
];

// --- COMPONENT & INTERFACE DEFINITIONS ---
interface ProjectProps {
  title: string;
}

// This component dynamically renders the project details
const ProjectContent = ({ project }: { project: ProjectProps }) => {
  const projectData = PROJECT_CONTENT.find((p) => p.title === project.title);

  if (!projectData) {
    return React.createElement('div', null, 'Project details not available');
  }

  return React.createElement(
    'div',
    { className: 'space-y-10' },
    React.createElement(
      'div',
      { className: 'rounded-3xl bg-[#F5F5F7] p-8 dark:bg-[#1D1D1F]' },
      React.createElement(
        'div',
        { className: 'space-y-6' },
        React.createElement(
          'div',
          { className: 'flex items-center gap-2 text-sm text-neutral-500 dark:text-neutral-400' },
          React.createElement('span', null, projectData.date)
        ),
        React.createElement(
          'p',
          { className: 'text-secondary-foreground font-sans text-base leading-relaxed md:text-lg' },
          projectData.description
        ),
        React.createElement(
          'div',
          { className: 'pt-4' },
          React.createElement(
            'h3',
            { className: 'mb-3 text-sm tracking-wide text-neutral-500 uppercase dark:text-neutral-400' },
            'Technologies'
          ),
          React.createElement(
            'div',
            { className: 'flex flex-wrap gap-2' },
            projectData.techStack.map((tech, index) =>
              React.createElement(
                'span',
                {
                  key: index,
                  className: 'rounded-full bg-neutral-200 px-3 py-1 text-sm text-neutral-800 dark:bg-neutral-800 dark:text-neutral-200'
                },
                tech
              )
            )
          )
        )
      )
    ),
    projectData.links && projectData.links.length > 0 &&
      React.createElement(
        'div',
        { className: 'mb-24' },
        React.createElement(
          'div',
          { className: 'px-6 mb-4 flex items-center gap-2' },
          React.createElement(
            'h3',
            { className: 'text-sm tracking-wide text-neutral-500 dark:text-neutral-400' },
            'Links'
          ),
          React.createElement(Link, { className: 'text-muted-foreground w-4' })
        ),
        React.createElement(Separator, { className: 'my-4' }),
        React.createElement(
          'div',
          { className: 'space-y-3' },
          projectData.links.map((link, index) =>
            React.createElement(
              'a',
              {
                key: index,
                href: link.url,
                target: '_blank',
                rel: 'noopener noreferrer',
                className: 'group bg-[#F5F5F7] flex items-center justify-between rounded-xl p-4 transition-colors hover:bg-[#E5E5E7] dark:bg-neutral-800 dark:hover:bg-neutral-700'
              },
              React.createElement('span', { className: 'font-light capitalize' }, link.name),
              React.createElement(ChevronRight, { className: 'h-4 w-4 transition-transform group-hover:translate-x-1' })
            )
          )
        )
      )
  );
};

// --- MAIN DATA EXPORT ---
export const data = [
  {
    category: 'AI & Next.js',
    title: 'AI-Native Portfolio',
    gradient: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    content: React.createElement(ProjectContent, { project: { title: 'AI-Native Portfolio' } }),
  },
  {
    category: 'AI & Automation',
    title: 'Smart Email Classifier & Summarizer',
    gradient: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
    content: React.createElement(ProjectContent, { project: { title: 'Smart Email Classifier & Summarizer' } }),
  },
  {
    category: 'Machine Learning',
    title: 'Customer Churn Prediction',
    gradient: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
    content: React.createElement(ProjectContent, { project: { title: 'Customer Churn Prediction' } }),
  },
  {
    category: 'AI & NLP',
    title: 'RAG Document Q&A System',
    gradient: 'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)',
    content: React.createElement(ProjectContent, { project: { title: 'RAG Document Q&A System' } }),
  },
  {
    category: 'Full-Stack & AI',
    title: 'Mindfull Space - Mental Wellness App',
    gradient: 'linear-gradient(135deg, #fa709a 0%, #fee140 100%)',
    content: React.createElement(ProjectContent, { project: { title: 'Mindfull Space - Mental Wellness App' } }),
  },
];
export const posts = [
  {
    id: 1,
    title: "Welcome to The Creative Corner",
    author: "Samarth Saxena",
    date: "2026-10-20",
    summary: "An introduction to our blog and what you can expect.",
    content: `Welcome to The Creative Corner!

This blog is a place to explore ideas about technology,
creativity, and everyday life. Whether you're interested
in software development or simply enjoy discovering
something new, there's something here for you.

I started this blog because I believe sharing ideas
helps people learn from one another. Every article
is an opportunity to start a conversation.

Thank you for joining me on this journey!`,
    comments: [
      {
        id: 1,
        author: "Jamie",
        text: "Looking forward to reading more!",
      },
      {
        id: 2,
        author: "Taylor",
        text: "What a great introduction!",
      },
    ],
  },
  {
    id: 2,
    title: "Why I Love Learning React",
    author: "Alex Morgan",
    date: "2026-10-25",
    summary: "Exploring the benefits of React components and hooks.",
    content: `React has become one of my favorite tools
for building interactive web applications.

One of its biggest advantages is its component-based
architecture. Instead of creating one enormous file,
developers can break an interface into smaller,
reusable pieces.

React hooks also make it easier to introduce
interactivity. For example, useState lets a component
remember information between renders, while useContext
helps components share data without passing props
through every level of the component tree.

Learning React takes practice, but building small
projects is a great way to understand these concepts.`,
    comments: [
      {
        id: 1,
        author: "Jordan",
        text: "React components are so useful!",
      },
    ],
  },
  {
    id: 3,
    title: "The Importance of Accessible Websites",
    author: "Alex Morgan",
    date: "2026-10-30",
    summary: "Why accessibility should be part of web development.",
    content: `Web accessibility is an essential part
of creating inclusive digital experiences.

Accessible websites allow people with different
abilities to navigate, understand, and interact
with information.

Developers can improve accessibility by using
semantic HTML, providing meaningful labels for
form controls, supporting keyboard navigation,
and maintaining sufficient color contrast.

Accessibility should not be treated as an optional
feature added at the end of development.

By considering accessibility from the beginning,
we can build applications that work better
for everyone.`,
    comments: [],
  },
];

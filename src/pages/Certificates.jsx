import { motion } from "framer-motion";
import { Award, Calendar, ExternalLink } from "lucide-react";
import { ScrollAnimation } from "@/components/ScrollAnimation";
import Gfg from "../assets/files/certificates_pdf/GFG.png"
import TLS from "../assets/files/certificates_pdf/tls.png"
import React from "../assets/files/certificates_pdf/react.png"
import Udemy from "../assets/files/certificates_pdf/Udemy.png"
// 
const certificates = [
  {
    title: "Javascript Programming",
    issuer: "Geeks for Geeks",
    date: "18th May 2026",
    link: Gfg,
    description:
      "Covers javascript fundamentals, including syntax, types. Includes practical examples and real-world applications.",
    skills: [
      "TypeScript",
      "JavaScript",
      "Frontend Development",
      "Backend Development",
    ],
  },
  {
    title: "AWS ECS Deployment and Management",
    issuer: "KodeKloud",
    date: "20th sep 2025",
    // link: awsEcsPdf,
    description:
      "Covers deploying and managing containers on AWS using ECS, including cluster management, load balancing, auto-scaling, and CI/CD integration.",
    skills: ["AWS ECS", "Cloud Computing", "DevOps", "CI/CD"],
  },
  {
    title: "Web Development with JavaScript",
    issuer: "Udemy",
    date: "18th February 2025",
    link: Udemy,
    description:
      "Comprehensive training in full-stack web development using JavaScript, covering frontend and backend development, responsive UI design, DOM manipulation, ES6+ features, asynchronous programming, REST APIs, authentication and authorization, server-side development with Node.js and Express.js, database management using MongoDB and MySQL, and real-world application development practices.",
    skills: [
      "JavaScript",
      "Web Development",
      "Node.js",
      "Express.js",
      "MongoDB",
      "MySQL",
      "Authentication",
      "REST API",
      "DOM Manipulation",
      "ES6",
      "Responsive Design",
      "Asynchronous Programming",
      "Frontend Development",
      "Backend Development",
      "Full-Stack Development"
    ],
  },
  {
    title: "Docker Fundamentals",
    issuer: "KodeKloud",
    date: "18th February 2025",
    // link: dockerPdf,
    description:
      "Teaches containerization, networking, security, and CI/CD with Docker.",
    skills: ["Docker", "Containerization", "CI/CD"],
  },
  {
    title: "Python Programming",
    issuer: "HackerRank",
    date: "10 Oct 2023",
    // link: pythonPdf,
    description:
      "Validates Python basics, including loops, functions, and data structures.",
    skills: ["Python", "Functions", "Data Structures"],
  },
  {
    title: "React Development Certificate",
    issuer: "HackerRank",
    date: "27 May 2025",
    link: React,
    description:
      "Validates React fundamentals including components, hooks, state management, and API integration.",
    skills: ["React.js", "Hooks", "State Management", "API Integration"],
  },

  {
    title: "Full Stack Web Development Certificate",
    issuer: "Telesom Academy",
    date: "25 march 2026",
    link: TLS,
    description:
      "Validates full stack web development skills including frontend with React, backend with Node.js/Express, and database management with MySQL/MongoDB.",
    skills: [
      "HTML",
      "CSS",
      "JavaScript",
      "React.js",
      "Node.js",
      "Express.js",
      "MySQL",
      "MongoDB",
    ],
  },
];

const Certificates = () => {
  return (
    <div className="min-h-screen pt-20 px-4 max-w-6xl mx-auto pb-20">
      <ScrollAnimation>
        <motion.div
          className="flex items-center gap-3 mb-12"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <Award className="w-8 h-8" />
          <h2 className="text-4xl font-bold gradient-text">Certificates</h2>
        </motion.div>
      </ScrollAnimation>

      <div className="grid md:grid-cols-2 gap-6">
        {certificates.map((cert, index) => (
          <ScrollAnimation key={cert.title}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="bg-gray-800/50 p-6 rounded-lg backdrop-blur-sm hover:bg-gray-800/70 transition-all group border border-white/5"
            >
              <h3 className="text-xl font-semibold mb-2">{cert.title}</h3>
              <div className="text-gray-400 space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-lg">{cert.issuer}</span>
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    <span>{cert.date}</span>
                  </div>
                </div>
                <p className="text-gray-300 line-clamp-2">{cert.description}</p>
                <div className="flex flex-wrap gap-2 mt-4">
                  {cert.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-2 py-1 text-sm bg-white/10 rounded-full"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
                <motion.a
                  href={cert.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 mt-4 group-hover:translate-x-2 transition-transform"
                  whileHover={{ scale: 1.05 }}
                >
                  View Certificate
                  <ExternalLink className="w-4 h-4" />
                </motion.a>
              </div>
            </motion.div>
          </ScrollAnimation>
        ))}
      </div>
    </div>
  );
};

export default Certificates;

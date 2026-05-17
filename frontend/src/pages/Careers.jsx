import './Home.css';
import React, { useEffect } from 'react';
import { motion } from 'framer-motion';

const whyReasons = [
  {
    num: "1.",
    title: "Meaningful Work",
    desc: "We're solving real problems for real people. Every day, you'll help homeowners feel safe and supported in their homes."
  },
  {
    num: "2.",
    title: "Fast Growth",
    desc: "We're expanding to 10 cities this year. Early team members grow quickly into leadership roles."
  },
  {
    num: "3.",
    title: "Modern Tech Stack",
    desc: "Work with AI/ML, real-time systems, and modern development tools. We invest in the latest technology."
  },
  {
    num: "4.",
    title: "Flexible Work",
    desc: "Hybrid model with 3 days in-office, 2 days remote. We value results over hours."
  }
];

const jobs = [
  {
    title: "Product Manager",
    location: "Remote",
    type: "Full Time",
    requirements: [
      "Analyze user behavior and metrics to prioritize features.",
      "Work closely with engineering and design teams.",
      "Develop and maintain product roadmaps.",
      "3-5 years of product management experience."
    ]
  },
  {
    title: "Backend Engineer",
    location: "Remote",
    type: "Full Time",
    requirements: [
      "Optimize database queries for high-concurrency scale.",
      "Build and maintain robust API infrastructure.",
      "Collaborate on architectural design and system scale.",
      "2-4 years of backend development experience."
    ]
  },
  {
    title: "Product Designer",
    location: "Remote",
    type: "Full Time",
    requirements: [
      "Create high-fidelity UI/UX designs for web and mobile.",
      "Develop and maintain our brand design system.",
      "Prototype interactive user journeys.",
      "Proficient in Figma and modern design tools."
    ]
  },
  {
    title: "Operations Manager",
    location: "Kanpur",
    type: "Full Time",
    requirements: [
      "Manage professional service provider network.",
      "Ensure quality control and customer satisfaction.",
      "Streamline field operations and dispatch logic.",
      "Excellent communication and problem-solving skills."
    ]
  },
  {
    title: "Marketing Lead",
    location: "Remote",
    type: "Full Time",
    requirements: [
      "Design and execute performance marketing campaigns.",
      "Grow organic and paid acquisition channels.",
      "Manage social media presence and content strategy.",
      "3+ years of growth or digital marketing experience."
    ]
  },
  {
    title: "Customer Support Lead",
    location: "Kanpur",
    type: "Full Time",
    requirements: [
      "Build and manage customer support processes.",
      "Handle escalations and improve CSAT scores.",
      "Train and mentor support team members.",
      "Strong communication and empathy skills."
    ]
  }
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.08 }
  })
};

const Careers = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="cr-page-new">

      {/* ── Hero Section matching wireframe ── */}
      <section className="cr-hero-new">
        <div className="cr-hero-gradient-bar" />
        <div className="container cr-hero-content">
          <motion.h1
            className="cr-hero-heading"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Build the future of{' '}
            <span className="cr-hero-img-slot">
              <img src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&q=80&w=300&h=80" alt="home services" />
            </span>{' '}
            home services with us
          </motion.h1>
          <motion.p
            className="cr-hero-sub"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Join a fast-growing team that's making household maintenance simple for millions of Indians.
          </motion.p>
          <motion.div
            className="cr-hero-btns"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.35 }}
          >
            <a href="#open-positions" className="btn-primary-lg">View Openings</a>
            <a href="#" className="btn-outline-dark">Join as Provider</a>
          </motion.div>
        </div>
      </section>

      {/* ── Why Pequire Section ── */}
      <section className="cr-why-section">
        <div className="container">
          <motion.div
            className="cr-why-grid"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
          >
            {whyReasons.map((r, i) => (
              <motion.div
                key={i}
                className="cr-why-card"
                variants={fadeUp}
                custom={i}
              >
                <h3 className="cr-why-card-title">{r.num} {r.title}</h3>
                <p className="cr-why-card-desc">{r.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── Open Positions Section ── */}
      <section className="cr-positions-section" id="open-positions">
        <div className="container">
          <motion.div
            className="cr-positions-header"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <p className="cr-positions-eyebrow">Join our team</p>
            <h2 className="cr-positions-title">Open Positions</h2>
          </motion.div>

          <div className="cr-positions-grid">
            {jobs.map((job, index) => (
              <motion.div
                key={index}
                className="cr-job-card"
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
                whileHover={{ y: -4, boxShadow: '0 16px 40px rgba(0,0,0,0.08)' }}
              >
                <h3 className="cr-job-title">{job.title}</h3>
                <div className="cr-job-pills">
                  <span className="cr-job-pill cr-job-pill-loc">{job.location}</span>
                  <span className="cr-job-pill cr-job-pill-type">{job.type}</span>
                </div>
                <ul className="cr-job-reqs">
                  {job.requirements.map((req, i) => (
                    <li key={i}>{req}</li>
                  ))}
                </ul>
                <button className="cr-job-apply">Apply Now</button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Provider CTA Section ── */}
      <section className="cr-provider-cta">
        <div className="container">
          <motion.div
            className="cr-provider-cta-inner"
            initial={{ opacity: 0, scale: 0.97 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2>Ready to start earning?</h2>
            <p>Download the Pequire Provider app and complete your verification today.</p>
            <div className="cr-provider-cta-btns">
              <motion.button
                className="btn-primary-lg"
                style={{ background: '#fff', color: '#020617' }}
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.96 }}
              >
                Download for Android
              </motion.button>
              <motion.button
                className="btn-outline-lg"
                style={{ borderColor: 'rgba(255,255,255,0.25)', color: '#fff' }}
                whileHover={{ scale: 1.04, backgroundColor: 'rgba(255,255,255,0.1)' }}
                whileTap={{ scale: 0.96 }}
              >
                Download for iOS
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Careers;



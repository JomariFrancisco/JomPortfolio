"use client"

import { useState, useEffect } from "react"
import { Mail, Phone, Github, Linkedin, ExternalLink, Menu, X, Instagram, Facebook, FileText, Download, ZoomIn, ZoomOut, ChevronLeft, ChevronRight, GraduationCap, Calendar, MapPin, Award, Code, Briefcase, Star, Users, Target, Zap } from 'lucide-react'
import "./App.css"

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState("home")
  const [selectedCertificate, setSelectedCertificate] = useState(null)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [isEducationModalOpen, setIsEducationModalOpen] = useState(false)
  const [imageZoom, setImageZoom] = useState(1)
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "about", "skills", "certificates", "projects", "contact"]
      const scrollPosition = window.scrollY + 100

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const offsetTop = element.offsetTop
          const offsetHeight = element.offsetHeight

          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Intersection Observer for section animations
  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: "0px 0px -50px 0px",
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate-in")
        }
      })
    }, observerOptions)

    const sections = document.querySelectorAll("section")
    sections.forEach((section) => observer.observe(section))

    return () => observer.disconnect()
  }, [])

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
    setIsMenuOpen(false)
  }

  const openCertificateModal = (certificate) => {
    setSelectedCertificate(certificate)
    setIsModalOpen(true)
    setImageZoom(1)
    document.body.style.overflow = "hidden"
  }

  const closeCertificateModal = () => {
    setSelectedCertificate(null)
    setIsModalOpen(false)
    setImageZoom(1)
    document.body.style.overflow = "unset"
  }

  const openEducationModal = () => {
    setIsEducationModalOpen(true)
    document.body.style.overflow = "hidden"
  }

  const closeEducationModal = () => {
    setIsEducationModalOpen(false)
    document.body.style.overflow = "unset"
  }

  const handleZoomIn = () => {
    setImageZoom((prev) => Math.min(prev + 0.25, 3))
  }

  const handleZoomOut = () => {
    setImageZoom((prev) => Math.max(prev - 0.25, 0.5))
  }

  const education = [
    {
      degree: "Bachelor of Science in Information Technology",
      institution: "Western Mindanao State University",
      location: "Zamboanga City, Philippines",
      period: "2021 - 2025",
      status: "Graduate",
      description:
        "Focused on mathematics, science, and technology subjects, building a solid foundation for further studies in Information Technology.",
      achievements: ["GWA: 2.0609"],
    },
    {
      degree: "Senior High School - Humanities and Social Science",
      institution: "Saint Joseph Foundation Incorporated",
      location: "Zamboanga City, Philippines",
      period: "2019 - 2021",
      status: "Graduate",
      description:
        "Focused on humanities, social sciences, and communication subjects, developing strong critical thinking and interpersonal skills.",
      achievements: ["With Honors (90%)"],
    },
    {
      degree: "Junior High School",
      institution: "Zamboanga National High School - WEST",
      location: "Zamboanga City, Philippines",
      period: "2015 - 2019",
      status: "Graduate",
      description:
        "Established a strong academic foundation through core subjects in mathematics, science, language, and social studies during Junior High School.",
      achievements: ["N/A"],
    },
  ]

  const projects = [
    {
      title: "PoultryCare: Smart Livestock Monitoring System",
      description:
        " A smart livestock monitoring system designed to enhance poultry health and welfare through real-time detection and data tracking",
      technologies: ["React", "Node.js", "MongoDB", "Arduino", "Raspberry Pi", "Figma"],
      image: "https://via.placeholder.com/300x200/ff014f/ffffff?text=PoultryCare+System",
      category: "IoT Development",
      status: "Completed",
    },
    {
      title: "Google Developer Students Club - Event Management System (EMS).",
      description:
        " GDSC EMS is a web-based system designed to streamline event planning and participation for Google Developer Student Clubs",
      technologies: ["HTML", "CSS", "Node.js", "MongoDB", "Node.js", "Figma"],
      image: "https://via.placeholder.com/300x200/ff014f/ffffff?text=GDSC+EMS",
      category: "Web Development",
      status: "Completed",
    },
    {
      title: "OTOP E-commerce",
      description:
        " OTOP is a digital platform that promotes local products from various towns by connecting small businesses to a wider market. It allows sellers to showcase their products, manage inventories, and receive orders, while users can browse and support local craftsmanship through an easy-to-use and responsive web interface.",
      technologies: ["HTML", "CSS", "Javascript", "MySql", "Figma"],
      image: "https://via.placeholder.com/300x200/ff014f/ffffff?text=OTOP+E-commerce",
      category: "E-commerce",
      status: "Completed",
    },
  ]

  const skills = [
    { category: "Frontend", items: ["React", "HTML", "CSS", "Javascript"], icon: <Code size={24} /> },
    { category: "Backend", items: ["REST APIs", "Node.js", "Python", "Flask"], icon: <Briefcase size={24} /> },
    { category: "Database ", items: ["MongoDB", "MySQL"], icon: <Target size={24} /> },
    { category: "Tools", items: ["Git", "Figma", "VS Code"], icon: <Zap size={24} /> },
    { category: "Internet of Things", items: ["Arduino", "RaspberryPi"], icon: <Star size={24} /> },
  ]

  // Certificates with your original file names
  const certificates = [
    {
      title: "Introduction to Cloud Security",
      issuer: "Online Certification",
      date: "1st April 2025",
      code: "8126698",
      image: "/Images/Introduction to Cloud Security.jpg",
      pdfUrl: "/Certificates/Introduction_to_Cloud_Security_8126698.pdf",
      thumbnail: "/Certificates/Images/Introduction_to_Cloud_Security_8126698.png",
    },
    {
      title: "Machine Learning for Beginners",
      issuer: "Online Certification",
      date: "2nd April 2025",
      code: "8126956",
      image: "/Images/Machine Learning for Beginners.jpg",
      pdfUrl: "/Certificates/Machine_Learning_for_Beginners_8126956.pdf",
      thumbnail: "/Certificates/Images/Machine_Learning_for_Beginners_8126956.png",
    },
    {
      title: "PMP Basics",
      issuer: "Online Certification",
      date: "2nd April 2025",
      code: "8128620",
      image: "/Images/PMP Basics.jpg",
      pdfUrl: "/Certificates/PMP_Basics_8128620.pdf",
      thumbnail: "/Certificates/Images/PMP_Basics_8128620.png",
    },
    {
      title: "Getting Started with Machine Learning Algorithms",
      issuer: "Online Certification",
      date: "4th April 2025",
      code: "8141517",
      image: "/Images/Getting Started with Machine Learning Algorithms.jpg",
      pdfUrl: "/Certificates/Getting_Started_with_Machine_Learning_Algorithms_8141517.pdf",
      thumbnail: "/Certificates/Images/Getting_Started_with_Machine_Learning_Algorithms_8141517.png",
    },
    {
      title: "Introduction to Machine Learning with R",
      issuer: "Online Certification",
      date: "15th April 2025",
      code: "8195694",
      image: "/Images/Introduction to Machine Learning with R.jpg",
      pdfUrl: "/Certificates/Introduction_to_Machine_Learning_with_R_8195694.pdf",
      thumbnail: "/Certificates/Images/Introduction_to_Machine_Learning_with_R_8195694.png",
    },
    {
      title: "Introduction to Cyber Security",
      issuer: "Online Certification",
      date: "16th April 2025",
      code: "8196949",
      image: "/Images/Introduction to Cyber Security.jpg",
      pdfUrl: "/Certificates/Introduction_to_Cyber_Security_8196949.pdf",
      thumbnail: "/Certificates/Images/Introduction_to_Cyber_Security_8196949.png",
    },
    {
      title: "ChatGPT for Cybersecurity",
      issuer: "Online Certification",
      date: "18th April 2025",
      code: "8209161",
      image: "/Images/ChatGPT for Cybersecurity.jpg",
      pdfUrl: "/Certificates/ChatGPT_for_Cybersecurity_8209161.pdf",
      thumbnail: "/Certificates/Images/ChatGPT_for_Cybersecurity_8209161.png",
    },
    {
      title: "Introduction to Supervised & Unsupervised Machine Learning",
      issuer: "Online Certification",
      date: "18th April 2025",
      code: "8208399",
      image: "/Images/Introduction to Supervised & Unsupervised Machine Learning.jpg",
      pdfUrl: "/Certificates/Introduction_to_Supervised_Unsupervised_Machine_Learning_8208399.pdf",
      thumbnail: "/Certificates/Images/Introduction_to_Supervised_Unsupervised_Machine_Learning_8208399.png",
    },
    {
      title: "Python for Beginners",
      issuer: "Online Certification",
      date: "19th April 2025",
      code: "8213717",
      image: "/Images/Python for Beginners.jpg",
      pdfUrl: "/Certificates/Python_for_Beginners_8213717.pdf",
      thumbnail: "/Certificates/Images/Python_for_Beginners_8213717.png",
    },
    {
      title: "Getting Started with Full Stack Java Development",
      issuer: "Online Certification",
      date: "21st April 2025",
      code: "8223047",
      image: "/Images/Getting Started with Full Stack Java Development.jpg",
      pdfUrl: "/Certificates/Getting_Started_with_Full_Stack_Java_Development_8223047.pdf",
      thumbnail: "/Certificates/Images/Getting_Started_with_Full_Stack_Java_Development_8223047.png",
    },
    {
      title: "Introduction to Front End Development",
      issuer: "Online Certification",
      date: "22nd April 2025",
      code: "8232253",
      image: "/Images/Introduction to Front End Development.jpg",
      pdfUrl: "/Certificates/Introduction_to_Front_End_Development_8232253.pdf",
      thumbnail: "/Certificates/Images/Introduction_to_Front_End_Development_8232253.png",
    },
    {
      title: "Boost your Web Development Career: Introduction to C#",
      issuer: "Online Certification",
      date: "23rd April 2025",
      code: "8237532",
      image: "/Images/Boost your Web Development Career - Introduction to C.jpg",
      pdfUrl: "/Certificates/Boost_your_Web_Development_Career_Introduction_to_CSharp_8237532.pdf",
      thumbnail: "/Certificates/Images/Boost_your_Web_Development_Career_Introduction_to_CSharp_8237532.png",
    },
    {
      title: "Salesforce Administrator & App Builder",
      issuer: "Online Certification",
      date: "24th April 2025",
      code: "8245357",
      image: "/Images/Salesforce Administrator & App Builder (Developer).jpg",
      pdfUrl: "/Certificates/Salesforce_Administrator_App_Builder_8245357.pdf",
      thumbnail: "/Certificates/Images/Salesforce_Administrator_App_Builder_8245357.png",
    },
    {
      title: "Introduction to C++",
      issuer: "Online Certification",
      date: "25th April 2025",
      code: "8250265",
      image: "/Images/Introduction to C plus plus.jpg",
      pdfUrl: "/Certificates/Introduction_to_CPlusPlus_8250265.pdf",
      thumbnail: "/Certificates/Images/Introduction_to_CPlusPlus_8250265.png",
    },
    {
      title: "Introduction to HTML",
      issuer: "Online Certification",
      date: "25th April 2025",
      code: "8249341",
      image: "/Images/Introduction to HTML.jpg",
      pdfUrl: "/Certificates/Introduction_to_HTML_8249341.pdf",
      thumbnail: "/Certificates/Images/Introduction_to_HTML_8249341.png",
    },
    {
      title: "Python Libraries for Data Science",
      issuer: "Online Certification",
      date: "25th April 2025",
      code: "8252880",
      image: "/Images/Python Libraries for Data Science.jpg",
      pdfUrl: "/Certificates/Python_Libraries_for_Data_Science_8252880.pdf",
      thumbnail: "/Certificates/Images/Python_Libraries_for_Data_Science_8252880.png",
    },
    {
      title: "Introduction to Data Science",
      issuer: "Online Certification",
      date: "27th April 2025",
      code: "8262973",
      image: "/Images/Introduction to Data Science.jpg",
      pdfUrl: "/Certificates/Introduction_to_Data_Science_8262973.pdf",
      thumbnail: "/Certificates/Images/Introduction_to_Data_Science_8262973.png",
    },
    {
      title: "Advanced Python",
      issuer: "Online Certification",
      date: "28th April 2025",
      code: "8267872",
      image: "/Images/Advanced Python_.jpg",
      pdfUrl: "/Certificates/Advanced_Python_8267872.pdf",
      thumbnail: "/Certificates/Images/Advanced_Python_8267872.png",
    },
    {
      title: "Fundamentals of Data Structures in C",
      issuer: "Online Certification",
      date: "28th April 2025",
      code: "8267857",
      image: "/Images/Fundamentals of Data Structures in C.jpg",
      pdfUrl: "/Certificates/Fundamentals_of_Data_Structures_in_C_8267857.pdf",
      thumbnail: "/Certificates/Images/Fundamentals_of_Data_Structures_in_C_8267857.png",
    },
    {
      title: "AI ML Projects",
      issuer: "Online Certification",
      date: "28th April 2025",
      code: "8267848",
      image: "/Images/AI ML Projects.jpg",
      pdfUrl: "/Certificates/AI_ML_Projects_8267848.pdf",
      thumbnail: "/Certificates/Images/AI_ML_Projects_8267848.png",
    },
    {
      title: "Introduction to CISSP Security Assessment & Testing and Security Operations",
      issuer: "Online Certification",
      date: "28th April 2025",
      code: "8267417",
      image: "/Images/Introduction to CISSP Security Assessment & Testing and Security Operations.jpg",
      pdfUrl: "/Certificates/Introduction_to_CISSP_Security_Assessment_Testing_Security_Operations_8267417.pdf",
      thumbnail:
        "/Certificates/Images/Introduction_to_CISSP_Security_Assessment_Testing_Security_Operations_8267417.png",
    },
    {
      title: "Introduction to Data Mining Course",
      issuer: "Online Certification",
      date: "28th April 2025",
      code: "8268399",
      image: "/Images/Introduction to Data Mining Course.jpg",
      pdfUrl: "/Certificates/Introduction_to_Data_Mining_Course_8268399.pdf",
      thumbnail: "/Certificates/Images/Introduction_to_Data_Mining_Course_8268399.png",
    },
    {
      title: "Introduction to Computer Networking",
      issuer: "Online Certification",
      date: "28th April 2025",
      code: "8265297",
      image: "/Images/Introduction to Computer-Networking.jpg",
      pdfUrl: "/Certificates/Introduction_to_Computer_Networking_8265297.pdf",
      thumbnail: "/Certificates/Images/Introduction_to_Computer_Networking_8265297.png",
    },
    {
      title: "Introduction to Selenium",
      issuer: "Online Certification",
      date: "28th April 2025",
      code: "8264793",
      image: "/Images/Introduction to Selenium.jpg",
      pdfUrl: "/Certificates/Introduction_to_Selenium_8264793.pdf",
      thumbnail: "/Certificates/Images/Introduction_to_Selenium_8264793.png",
    },
  ]

  // Carousel functionality
  const certificatesPerSlide = 4
  const totalSlides = Math.ceil(certificates.length / certificatesPerSlide)

  useEffect(() => {
    if (isAutoPlaying) {
      const interval = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % totalSlides)
      }, 4000) // Change slide every 4 seconds

      return () => clearInterval(interval)
    }
  }, [isAutoPlaying, totalSlides])

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides)
  }

  const getCurrentCertificates = () => {
    const startIndex = currentSlide * certificatesPerSlide
    return certificates.slice(startIndex, startIndex + certificatesPerSlide)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    alert("Thank you for your message! I'll get back to you soon.")
  }

  return (
    <div className="main-cont">
      <header className={`header ${activeSection !== "home" ? "scrolled" : ""}`}>
        <div className="logo">
          <span>JZF</span>
        </div>
        <nav className={`navs ${isMenuOpen ? "open" : ""}`}>
          <a
            href="#home"
            className={activeSection === "home" ? "active" : ""}
            onClick={(e) => {
              e.preventDefault()
              scrollToSection("home")
            }}
          >
            HOME
          </a>
          <a
            href="#about"
            className={activeSection === "about" ? "active" : ""}
            onClick={(e) => {
              e.preventDefault()
              scrollToSection("about")
            }}
          >
            ABOUT
          </a>
          <a
            href="#skills"
            className={activeSection === "skills" ? "active" : ""}
            onClick={(e) => {
              e.preventDefault()
              scrollToSection("skills")
            }}
          >
            SKILLS
          </a>
          <a
            href="#certificates"
            className={activeSection === "certificates" ? "active" : ""}
            onClick={(e) => {
              e.preventDefault()
              scrollToSection("certificates")
            }}
          >
            CERTIFICATES
          </a>
          <a
            href="#projects"
            className={activeSection === "projects" ? "active" : ""}
            onClick={(e) => {
              e.preventDefault()
              scrollToSection("projects")
            }}
          >
            PROJECTS
          </a>

          <button className="btn-hire-me" onClick={() => scrollToSection("contact")}>
            CONTACT
          </button>
        </nav>
        <button className="menu-toggle" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </header>

      <main>
        <section id="home" className="landing section-animate">
          <div className="hero-content">
            <p className="welcome-text">WELCOME</p>
            <h1>
              I'm <span className="highlight">Jomari Francisco</span>
            </h1>
            <h2>Information Technology | Front End Developer</h2>
            <p className="hero-description">Learning Beyond Passion, Growing Beyond Limits.</p>
            <div className="hero-bottom">
              <div className="social-section">
                <p className="find-with-me">FIND WITH ME</p>
                <div className="social-links">
                  <a
                    href="https://www.facebook.com/frncsco.jz"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Facebook"
                  >
                    <Facebook size={20} />
                  </a>
                  <a
                    href="https://www.instagram.com/frncsc.jz/"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Instagram"
                  >
                    <Instagram size={20} />
                  </a>
                  <a
                    href="https://www.linkedin.com/in/jomari-francisco-b88558359/"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="LinkedIn"
                  >
                    <Linkedin size={20} />
                  </a>
                </div>
              </div>
              <div className="skills-section">
                <p className="best-skill">BEST SKILL ON</p>
                <div className="skill-icons">
                  <div className="skill-icon">JS</div>
                  <div className="skill-icon">React</div>
                  <div className="skill-icon">Arduino</div>
                  <div className="skill-icon">IOT</div>
                </div>
              </div>
            </div>
          </div>
          <div className="hero-image">
            <div className="hero-image-wrapper">
              <img src="Profile.jpg" alt="Profile" />
              <div className="hero-image-glow"></div>
            </div>
          </div>
        </section>

        <section id="about" className="about section-animate">
          <div className="container">
            <h2>About Me</h2>
            <div className="about-content">
              <div className="about-text">
                <div className="about-intro">
                  <div className="about-badge">
                    <Users size={20} />
                    <span>IT Professional</span>
                  </div>
                  <p>
                    I'm Jomari Francisco, an IT graduate from Western Mindanao State University. I specialize in IoT,
                    mobile/web development, and UI/UX design. I'm passionate about building practical tech solutions,
                    always eager to learn, and ready to take on new challenges in the tech industry.
                  </p>
                  <p>
                    As the project manager and sole developer of our capstone project, I led the end-to-end development
                    of an IoT-powered poultry monitoring system with computer vision and mobile integration. This
                    experience demonstrated my ability to take initiative, manage responsibilities, and deliver a fully
                    functional solution independently.
                  </p>
                </div>
                <div className="about-actions">
                  <button className="btn education-btn" onClick={openEducationModal}>
                    <GraduationCap size={20} />
                    View Education
                  </button>
                </div>
                <div className="stats">
                  <div className="stat">
                    <div className="stat-icon">
                      <Briefcase size={24} />
                    </div>
                    <h3>3</h3>
                    <p>Projects Completed</p>
                  </div>
                  <div className="stat">
                    <div className="stat-icon">
                      <Award size={24} />
                    </div>
                    <h3>24</h3>
                    <p>Certificates</p>
                  </div>
                </div>
              </div>
              <div className="about-image">
                <div className="about-image-wrapper">
                  <img src="AboutMeProf.jpg" alt="About me" />
                  <div className="about-image-decoration"></div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="skills" className="skills section-animate">
          <div className="container">
            <h2>Skills & Technologies</h2>
            <div className="skills-intro">
              <p>
                Passionate about creating innovative solutions with cutting-edge technologies. Here are the tools and
                technologies I work with:
              </p>
            </div>
            <div className="skills-grid">
              {skills.map((skillGroup, index) => (
                <div key={index} className="skill-category" style={{ animationDelay: `${index * 0.1}s` }}>
                  <div className="skill-icon-wrapper">{skillGroup.icon}</div>
                  <h3>{skillGroup.category}</h3>
                  <div className="skill-items">
                    {skillGroup.items.map((skill, skillIndex) => (
                      <span key={skillIndex} className="skill-tag">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="certificates" className="certificates section-animate">
          <div className="container">
            <h2>Certificates & Achievements</h2>
            <div className="certificates-intro">
              <p>
                Continuous learning and professional development through various certifications and training programs.
              </p>
            </div>
            <div className="certificates-carousel-container">
              <div
                className="certificates-carousel"
                onMouseEnter={() => setIsAutoPlaying(false)}
                onMouseLeave={() => setIsAutoPlaying(true)}
              >
                <button className="carousel-btn carousel-btn-prev" onClick={prevSlide}>
                  <ChevronLeft size={24} />
                </button>

                <div className="certificates-slider">
                  <div className="certificates-track" style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
                    {Array.from({ length: totalSlides }).map((_, slideIndex) => (
                      <div key={slideIndex} className="certificates-slide">
                        {certificates
                          .slice(slideIndex * certificatesPerSlide, (slideIndex + 1) * certificatesPerSlide)
                          .map((certificate, index) => (
                            <div
                              key={index}
                              className="certificate-card carousel-card"
                              onClick={() => openCertificateModal(certificate)}
                            >
                              <div className="certificate-image">
                                <img src={certificate.image || "/placeholder.svg"} alt={certificate.title} />
                                <div className="certificate-overlay">
                                  <div className="certificate-actions">
                                    <FileText size={24} />
                                    <span>View Certificate</span>
                                  </div>
                                </div>
                              </div>
                              <div className="certificate-content">
                                <h3>{certificate.title}</h3>
                                <p className="issuer">{certificate.issuer}</p>
                                <p className="date">{certificate.date}</p>
                                <p className="certificate-code">Certificate Code: {certificate.code}</p>
                              </div>
                            </div>
                          ))}
                      </div>
                    ))}
                  </div>
                </div>

                <button className="carousel-btn carousel-btn-next" onClick={nextSlide}>
                  <ChevronRight size={24} />
                </button>
              </div>

              {/* Carousel Indicators */}
              <div className="carousel-indicators">
                {Array.from({ length: totalSlides }).map((_, index) => (
                  <button
                    key={index}
                    className={`indicator ${index === currentSlide ? "active" : ""}`}
                    onClick={() => setCurrentSlide(index)}
                  />
                ))}
              </div>

              {/* Progress Bar */}
              <div className="carousel-progress">
                <div
                  className="progress-bar"
                  style={{
                    width: `${((currentSlide + 1) / totalSlides) * 100}%`,
                    animationDuration: isAutoPlaying ? "4s" : "none",
                  }}
                />
              </div>
            </div>
          </div>
        </section>

        <section id="projects" className="projects section-animate">
          <div className="container">
            <h2>Featured Projects</h2>
            <div className="projects-intro">
              <p>
                Showcasing innovative solutions and technical expertise through real-world projects and applications.
              </p>
            </div>
            <div className="projects-grid">
              {projects.map((project, index) => (
                <div key={index} className="project-card" style={{ animationDelay: `${index * 0.2}s` }}>
                  <div className="project-header">
                    <div className="project-category">{project.category}</div>
                    <div className="project-status">{project.status}</div>
                  </div>
                  <div className="project-content">
                    <h3>{project.title}</h3>
                    <p>{project.description}</p>
                    <div className="project-technologies">
                      {project.technologies.map((tech, techIndex) => (
                        <span key={techIndex} className="tech-tag">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="project-footer">
                    
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="contact section-animate">
          <div className="container">
            <h2>Get In Touch</h2>
            <div className="contact-intro">
              <p>Ready to collaborate on your next project? Let's create something amazing together!</p>
            </div>
            <div className="contact-content">
              <div className="contact-info">
                <h3>Let's work together</h3>
                <p>
                  I'm always open to new opportunities and exciting projects. If you have any questions or just want to
                  connect, don't hesitate to reach out!
                </p>
                <div className="contact-details">
                  <div className="contact-item">
                    <div className="contact-icon">
                      <Mail size={20} />
                    </div>
                    <div className="contact-text">
                      <span className="contact-label">Email</span>
                      <span>jzfdgreat@gmail.com</span>
                    </div>
                  </div>
                  <div className="contact-item">
                    <div className="contact-icon">
                      <Phone size={20} />
                    </div>
                    <div className="contact-text">
                      <span className="contact-label">Phone</span>
                      <span>+63 956 501 8006</span>
                    </div>
                  </div>
                </div>
              </div>
              <form className="contact-form" onSubmit={handleSubmit}>
                <div className="form-row">
                  <div className="form-group">
                    <input type="text" placeholder="Your Name" required />
                  </div>
                  <div className="form-group">
                    <input type="email" placeholder="Your Email" required />
                  </div>
                </div>
                <div className="form-group">
                  <input type="text" placeholder="Subject" required />
                </div>
                <div className="form-group">
                  <textarea placeholder="Your Message" rows={5} required></textarea>
                </div>
                <button type="submit" className="btn primary">
                  <Mail size={16} />
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-info">
              <h3>JZF</h3>
              <p>Western Mindanao State University</p>
            </div>
            <div className="footer-links">
              <a href="https://github.com/JomariFrancisco" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                <Github size={20} />
              </a>
              <a
                href="https://www.linkedin.com/in/jomari-francisco-b88558359/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
              <a href="mailto:jzfdgreat@gmail.com" aria-label="Email">
                <Mail size={20} />
              </a>
            </div>
          </div>
          
        </div>
      </footer>

      {/* Certificate Modal - Image Viewer */}
      {isModalOpen && selectedCertificate && (
        <div className="modal-overlay" onClick={closeCertificateModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <h3>{selectedCertificate.title}</h3>
              <div className="modal-controls">
                <button className="zoom-btn" onClick={handleZoomOut} title="Zoom Out">
                  <ZoomOut size={16} />
                </button>
                <span className="zoom-level">{Math.round(imageZoom * 100)}%</span>
                <button className="zoom-btn" onClick={handleZoomIn} title="Zoom In">
                  <ZoomIn size={16} />
                </button>
                <button className="modal-close" onClick={closeCertificateModal}>
                  <X size={20} />
                </button>
              </div>
            </div>
            <div className="modal-body">
              <div className="image-viewer">
                <img
                  src={selectedCertificate.image || "/placeholder.svg"}
                  alt={selectedCertificate.title}
                  style={{
                    transform: `scale(${imageZoom})`,
                    transformOrigin: "center center",
                  }}
                />
              </div>
              <div className="modal-actions">
                <a
                  href={selectedCertificate.pdfUrl}
                  download={`${selectedCertificate.title.replace(/[^a-zA-Z0-9]/g, "_")}_Certificate.pdf`}
                  className="btn primary"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Download size={16} />
                  Download PDF
                </a>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Education Modal */}
      {isEducationModalOpen && (
        <div className="modal-overlay" onClick={closeEducationModal}>
          <div className="education-modal-content" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <h3>
                <GraduationCap size={24} />
                Educational Background
              </h3>
              <button className="modal-close" onClick={closeEducationModal}>
                <X size={20} />
              </button>
            </div>
            <div className="education-modal-body">
              <div className="education-timeline">
                {education.map((edu, index) => (
                  <div key={index} className="education-item">
                    <div className="education-marker">
                      <div className="education-dot"></div>
                      {index < education.length - 1 && <div className="education-line"></div>}
                    </div>
                    <div className="education-content">
                      <div className="education-header">
                        <h4>{edu.degree}</h4>
                        <span className="education-status">{edu.status}</span>
                      </div>
                      <div className="education-institution">
                        <h5>{edu.institution}</h5>
                        <div className="education-meta">
                          <span className="education-location">
                            <MapPin size={14} />
                            {edu.location}
                          </span>
                          <span className="education-period">
                            <Calendar size={14} />
                            {edu.period}
                          </span>
                        </div>
                      </div>
                      <p className="education-description">{edu.description}</p>
                      <div className="education-achievements">
                        <h6>
                          <Award size={16} />
                          Key Achievements:
                        </h6>
                        <ul>
                          {edu.achievements.map((achievement, achIndex) => (
                            <li key={achIndex}>{achievement}</li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default App

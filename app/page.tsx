"use client"

import { useState, useEffect } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Github,
  Linkedin,
  Mail,
  Phone,
  MapPin,
  ExternalLink,
  Award,
  BookOpen,
  Code,
  Briefcase,
  FileText,
  Globe,
  GraduationCap,
  User,
  ChevronDown,
  Star,
} from "lucide-react"

export default function Portfolio() {
  const [activeSection, setActiveSection] = useState("hero")
  const { scrollYProgress } = useScroll()
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"])
  const socialLinks = [
  { icon: Github, link: "https://github.com/mumuhrk" },
  { icon: Linkedin, link: "https://linkedin.com/in/สุจินดา-ใจปินตา-bb3811376" },
  { icon: Mail, link: "mailto:mumuch4321@gmail.com" },
];

  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        "hero",
        "education",
        "skills",
        "experience",
        "projects",
        "side-projects",
        "certificates",
        "publications",
        "languages",
      ]
      const scrollPosition = window.scrollY + 100

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const { offsetTop, offsetHeight } = element
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

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Navigation */}
      <motion.nav
        className="fixed top-0 left-0 right-0 z-50 bg-black/20 backdrop-blur-md border-b border-white/10"
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <motion.div className="text-2xl font-bold text-white" whileHover={{ scale: 1.05 }}>
              Portfolio
            </motion.div>
            <div className="hidden md:flex space-x-8">
              {[
                { id: "hero", label: "Home", icon: User },
                { id: "education", label: "Education", icon: GraduationCap },
                { id: "skills", label: "Skills", icon: Code },
                { id: "experience", label: "Experience", icon: Briefcase },
                { id: "projects", label: "Projects", icon: FileText },
                { id: "certificates", label: "Certificates", icon: Award },
                { id: "publications", label: "Publications", icon: BookOpen },
                { id: "languages", label: "Languages", icon: Globe },
              ].map(({ id, label, icon: Icon }) => (
                <motion.button
                  key={id}
                  onClick={() => scrollToSection(id)}
                  className={`flex items-center space-x-2 px-3 py-2 rounded-lg transition-all ${
                    activeSection === id
                      ? "text-purple-400 bg-purple-400/20"
                      : "text-white/70 hover:text-white hover:bg-white/10"
                  }`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Icon size={16} />
                  <span>{label}</span>
                </motion.button>
              ))}
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Hero Section */}
      <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden">
        <motion.div className="absolute inset-0 opacity-20" style={{ y }}>
          <div className="absolute top-20 left-20 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
          <div className="absolute top-40 right-20 w-72 h-72 bg-yellow-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-1000"></div>
          <div className="absolute bottom-20 left-1/2 w-72 h-72 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-2000"></div>
        </motion.div>

        <motion.div
          className="text-center z-10 px-6"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <motion.div
            className="mb-8"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.5, type: "spring", stiffness: 200 }}
          >
            <div className="w-32 h-32 mx-auto rounded-full bg-gradient-to-r from-purple-400 to-pink-400 p-1">
              <div className="w-full h-full rounded-full bg-slate-900 flex items-center justify-center">
                <img
                    src="https://cdn.discordapp.com/attachments/958400049832943717/1397826515684692069/photo.jpg?ex=688322e3&is=6881d163&hm=ef8ad5583be9605c5ac4a461451732ba99b064b80cfb02de06e22129b1df3f67&"
                    alt="รูปโปรไฟล์"
                    className="w-full h-full rounded-full object-cover"
                    />
              </div>
            </div>
          </motion.div>

          <motion.h1
            className="text-5xl md:text-7xl font-bold text-white mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.8 }}
          >
            สุจินดา{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
              ใจปินตา
            </span>
          </motion.h1>

          <motion.p
            className="text-xl text-white/80 mb-8 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.8 }}
          >
            Front-End , Back-End , Full-Stack , Software Tester
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.1, duration: 0.8 }}
          >
            <Button
              size="lg"
              className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white border-0"
              onClick={() => scrollToSection("projects")}
            >
              View My Work
            </Button>
            <Button size="lg" variant="outline" className="border-white/20 text-white hover:bg-white/10 bg-transparent"
            onClick={() => scrollToSection("languages")}>
              <Mail className="mr-2 h-4 w-4" />
              Contact Me
            </Button>
          </motion.div>

          <motion.div
            className="flex justify-center space-x-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.3, duration: 0.8 }}
          >
            {socialLinks.map(({ icon: Icon, link }, index) => (
              <motion.a
                key={index}
                href={link} // <-- แก้ไขตรงนี้
                target="_blank" // <-- เพิ่มเข้าไปเพื่อให้เปิดในแท็บใหม่
                rel="noopener noreferrer" // <-- เพิ่มเพื่อความปลอดภัย
                className="text-white/60 hover:text-white transition-colors"
                whileHover={{ scale: 1.2, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
              >
                <Icon size={24} />
              </motion.a>
            ))}
          </motion.div>
        </motion.div>

        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Number.POSITIVE_INFINITY, duration: 2 }}
        >
          <ChevronDown className="text-white/60" size={32} />
        </motion.div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-20 px-6">
        <div className="container mx-auto max-w-6xl">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={containerVariants}>
            <motion.h2 className="text-4xl font-bold text-white text-center mb-16" variants={itemVariants}>
              <GraduationCap className="inline-block mr-4 text-purple-400" />
              Education
            </motion.h2>

            <div className="space-y-8">
              {[
                {
                  degree: "ประถมศึกษา",
                  school: "โรงเรียนอนุบาลเชียงใหม่",
                  year: "2008 – 2013",
                  gpa: "3.45/4.0",                
                },
                {
                  degree: "มัธยมศึกษาตอนต้น",
                  school: "2013 – 2016",
                  year: "โรงเรียนวัฒโนทัยพายัพ",
                  gpa: "2.42/4.0",
                },
                {
                  degree: "ประกาศนียบัตรวิชาชีพ (ปวช.)",
                  school: "วิทยาลัยเทคนิคเชียงใหม่",
                  year: "2017 – 2020",
                  gpa: "3.36/4.0",
                },
                {
                  degree: "ประกาศนียบัตรวิชาชีพชั้นสูง (ปวส.)",
                  school: "มหาวิทยาลัยเทคโนโลยีราชมงคลล้านนา ตาก ",
                  year: "2020 – 2022",
                  gpa: "2.37/4.0",
                  description: "สาขา เทคนิคคอมพิวเตอร์",
                },
                {
                  degree: "ปริญญาตรี",
                  school: "มหาวิทยาลัยเทคโนโลยีราชมงคลล้านนา เชียงใหม่",
                  year: "2022 – ปัจจุบัน",
                  gpa: "~ 2.56/4.0",
                  description: "สาขา วิศวกรรมศาสตร์คอมพิวเตอร์",
                },
              ].map((edu, index) => (
                <motion.div key={index} variants={itemVariants}>
                  <Card className="bg-white/5 border-white/10 backdrop-blur-sm hover:bg-white/10 transition-all duration-300">
                    <CardHeader>
                      <div className="flex justify-between items-start">
                        <div>
                          <CardTitle className="text-white text-xl">{edu.degree}</CardTitle>
                          <CardDescription className="text-purple-400 text-lg">{edu.school}</CardDescription>
                        </div>
                        <Badge variant="secondary" className="bg-purple-500/20 text-purple-300">
                          {edu.year}
                        </Badge>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-white/80 mb-2">{edu.description}</p>
                      <p className="text-green-400 font-semibold">GPA: {edu.gpa}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Technical Skills Section */}
      <section id="skills" className="py-20 px-6 bg-black/20">
        <div className="container mx-auto max-w-6xl">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={containerVariants}>
            <motion.h2 className="text-4xl font-bold text-white text-center mb-16" variants={itemVariants}>
              <Code className="inline-block mr-4 text-purple-400" />
              Technical Skills
            </motion.h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  category: "Language",
                  skills: ["C", "C++", "TypeScript", "JavaScript (JS)", "Dart" , "VB.NET"],
                  color: "from-blue-500 to-cyan-500",
                },
                {
                  category: "Web & API Development",
                  skills: ["HTML", "CSS", "Bootstrap", "Tailwind CSS", "Flask (Python)" , "Node.js" , "Express.js" , "RESTful API" , "LINE Messaging API"  ],
                  color: "from-green-500 to-emerald-500",
                },
                {
                  category: "Mobile App",
                  skills: ["Flutter", "Dart" ],
                  color: "from-orange-500 to-red-500",
                },
                {
                  category: "Databases",
                  skills: ["MYSql", "SQLite", "Supabase" ],
                  color: "from-purple-500 to-pink-500",
                },
                {
                  category: "DevOps",
                  skills: ["Vercel", "Docker", "Photoshop", "Git & GitHub", "ngrok" , "n8n" ],
                  color: "from-pink-500 to-rose-500",
                },
                {
                  category: "AI",
                  skills: ["OpenCV", "YOLO v11", "ResNet", "Numpy", "Pillow" , "Roboflow" ],
                  color: "from-indigo-500 to-purple-500",
                },
              ].map((skillGroup, index) => (
                <motion.div key={index} variants={itemVariants}>
                  <Card className="bg-white/5 border-white/10 backdrop-blur-sm hover:bg-white/10 transition-all duration-300 h-full">
                    <CardHeader>
                      <CardTitle className={`text-transparent bg-clip-text bg-gradient-to-r ${skillGroup.color}`}>
                        {skillGroup.category}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="flex flex-wrap gap-2">
                        {skillGroup.skills.map((skill, skillIndex) => (
                          <motion.div key={skillIndex} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                            <Badge
                              variant="secondary"
                              className="bg-white/10 text-white hover:bg-white/20 transition-colors"
                            >
                              {skill}
                            </Badge>
                          </motion.div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 px-6">
        <div className="container mx-auto max-w-6xl">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={containerVariants}>
            <motion.h2 className="text-4xl font-bold text-white text-center mb-16" variants={itemVariants}>
              <Briefcase className="inline-block mr-4 text-purple-400" />
              experience
            </motion.h2>

            <div className="space-y-8">
              {[
                {
                  title: "ฝึกงาน",
                  company: "ท่าอากาศยานเชียงใหม่",
                  period: "2020",
                  description:
                    "ฝึกงานตอนปวชในแผนก IT",                 
                },
              ].map((exp, index) => (
                <motion.div key={index} variants={itemVariants}>
                  <Card className="bg-white/5 border-white/10 backdrop-blur-sm hover:bg-white/10 transition-all duration-300">
                    <CardHeader>
                      <div className="flex justify-between items-start">
                        <div>
                          <CardTitle className="text-white text-xl">{exp.title}</CardTitle>
                          <CardDescription className="text-purple-400 text-lg">{exp.company}</CardDescription>
                        </div>
                        <Badge variant="secondary" className="bg-purple-500/20 text-purple-300">
                          {exp.period}
                        </Badge>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-white/80 mb-4">{exp.description}</p>
                      <div className="space-y-2">                       
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-6 bg-black/20">
        <div className="container mx-auto max-w-6xl">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={containerVariants}>
            <motion.h2 className="text-4xl font-bold text-white text-center mb-16" variants={itemVariants}>
              <FileText className="inline-block mr-4 text-purple-400" />
              Projects
            </motion.h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  title: "ระบบแจ้งเตือนมิเตอร์น้ำผ่าน LINE Bot , API , Web application ",
                  description: "Project ป.ตรี",
                  tech: ["TypeScript", "Tailwind CSS", "Supabase"],
                  image: "https://media.discordapp.net/attachments/958400049832943717/1397822715020181675/image.png?ex=68831f59&is=6881cdd9&hm=36e1080f1169726f3e36134768c0bc35afbe351d5a02e652bc4031eff2f838bc&=&format=webp&quality=lossless&width=1678&height=846",
                  github: "https://github.com/mumuhrk/Water-API-WEB",
                  demo: "https://water-api-web.vercel.app/",
                },
                {
                  title: "ระบบเว็บไซต์แจ้งซ่อมคอมพิวเตอร์ กรณีศึกษา คอมพิวเตอร์อินดี้ จ.ตาก",
                  description: "Project ปวส",
                  tech: ["VB.NET", "MySQL", "CSS", "HTML"],
                  image: "https://media.discordapp.net/attachments/958400049832943717/1397824519472812112/image.png?ex=68832107&is=6881cf87&hm=b6909949c888e9efc1b3ecb6bc519e3697ab5f7b52d95789d0e9a8b7fe5216db&=&format=webp&quality=lossless&width=1752&height=846",
                  github: "https://github.com/mumuhrk/ComputerIndy",
                  demo: "#",
                },
                {
                  title: "เกมส์เอาชีวิตรอดจากเกาะปริศนาคอมพิวเตอร์",
                  description: "Project ปวช",
                  tech: ["RPG Maker"],
                  image: "https://media.discordapp.net/attachments/958400049832943717/1397809750166601758/Screenshot_2025-07-24_121632.png?ex=68831346&is=6881c1c6&hm=995ed7fa624458bb27e6cd28e560f56992b099698b8b7615643b7dc0ba31ebbd&=&format=webp&quality=lossless&width=1158&height=893",
                  github: "https://github.com/mumuhrk/RPG-maker-Game",
                  demo: "#",
                },
              ].map((project, index) => (
                <motion.div key={index} variants={itemVariants}>
                  <Card className="bg-white/5 border-white/10 backdrop-blur-sm hover:bg-white/10 transition-all duration-300 overflow-hidden">
                  <div className="relative overflow-hidden">
                <img
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-300"
                />
            </div>
                    <CardHeader>
                      <CardTitle className="text-white">{project.title}</CardTitle>
                        <CardDescription className="text-white/70">{project.description}</CardDescription>
                    <div className="mt-4 flex space-x-2">
                     {project.github && (
                      <Button asChild size="sm" variant="secondary">
                        <a href={project.github} target="_blank" rel="noopener noreferrer">
                        <Github className="w-4 h-4 mr-2" />
                         Code
                        </a>
                      </Button>
                      )}
                      {project.demo && (
                      <Button asChild size="sm" variant="secondary">
                        <a href={project.demo} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="w-4 h-4 mr-2" />
                        Demo
                        </a>
                      </Button>
                      )}
                    </div>
                    </CardContent>
                    </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Side Projects Section */}
      <section id="side-projects" className="py-20 px-6">
        <div className="container mx-auto max-w-6xl">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={containerVariants}>
            <motion.h2 className="text-4xl font-bold text-white text-center mb-16" variants={itemVariants}>
              <Star className="inline-block mr-4 text-purple-400" />
              Side Projects
            </motion.h2>

            <div className="grid md:grid-cols-2 gap-8">
              {[
                {
                  title: "เกมยิงเลเซอร์นับคะแนนด้วย OpenCV , Cam32",
                  description: "เก็บคะแนนจากแสงเลเซอเพื่อประมวลผลคะแนน",
                  tech: ["IOT", "OpenCV", "ESP32cam"],
                  stats: "Subject IOT ,RMUTL",
                },
                {
                  title: "Resume ด้วย Flutter , Dart",
                  description: "Resume ประวิติส่วนตัว",
                  tech: ["React Native", "Expo", "Firebase"],
                  stats: "Subject Flutter,RMUTL",
                },
                {
                  title: "blynk วัดอุณหภูมิ , เครื่องตรวจจับการเต้นของหัวใจ",
                  description: "วัดอุณหภูมิแสดงบนหน้าเว็บ , จับการเต้นของหัวใจด้วยการใช้นิ้วสัมผัส",
                  tech: ["ESP32 , Arduino"],
                  stats: "Subject IOT ,RMUTL , CMTC",
                },
                {
                  title: "Resume ด้วย TypeScript",
                  description: "Deploy on Vercel",
                  tech: ["TypeScript"],
                  stats: "Website Show Case",
                },
              ].map((project, index) => (
                <motion.div key={index} variants={itemVariants}>
                  <Card className="bg-white/5 border-white/10 backdrop-blur-sm hover:bg-white/10 transition-all duration-300">
                    <CardHeader>
                      <CardTitle className="text-white">{project.title}</CardTitle>
                      <CardDescription className="text-white/70">{project.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="flex flex-wrap gap-2 mb-3">
                        {project.tech.map((tech, techIndex) => (
                          <Badge key={techIndex} variant="secondary" className="bg-green-500/20 text-green-300">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                      <p className="text-purple-400 font-semibold">{project.stats}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Certificates Section */}
      <section id="certificates" className="py-20 px-6 bg-black/20">
        <div className="container mx-auto max-w-6xl">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={containerVariants}>
            <motion.h2 className="text-4xl font-bold text-white text-center mb-16" variants={itemVariants}>
              <Award className="inline-block mr-4 text-purple-400" />
              Certificates
            </motion.h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  title: "สร้างเว็บเพจด้วย Web Editer งานศิลปหัตกรรมระดับ ภาคเหนือ ครั้งที่ 63",
                  issuer: "Web Editer",
                  date: "2013",
                  level: "OBEC , สพฐ",
                },
                {
                  title: "AI for All: From Basics to GenAI Practice",
                  date: "2024",
                  level: "Nvidia",
                },
                {
                  title: "IC3 GS6 Level 1",
                  date: "2023",
                  level: "IC3",
                },
                {
                  title: "Advanced Learning Algorithms",
                  date: "2024",
                  level: "Coursera",
                },
                {
                  title: "Supervised Machine Learning: Regression and Classification",
                  date: "2024",
                  level: "Coursera",
                },
                {
                  title: "โครงการอบรม เพิ่มศักยภาพด้านการพัฒนาทักษะวิชาชีพและการวิจัย ด้านวิศวกรรมคอมพิวเตอร์",
                  date: "2025",
                  level: "RMUTL",
                },
              ].map((cert, index) => (
                <motion.div key={index} variants={itemVariants}>
                  <Card className="bg-white/5 border-white/10 backdrop-blur-sm hover:bg-white/10 transition-all duration-300">
                    <CardHeader>
                      <CardTitle className="text-white text-lg">{cert.title}</CardTitle>
                      <CardDescription className="text-purple-400">{cert.issuer}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="flex justify-between items-center">
                        <Badge variant="secondary" className="bg-yellow-500/20 text-yellow-300">
                          {cert.level}
                        </Badge>
                        <span className="text-white/60">{cert.date}</span>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Publications Section */}
      <section id="publications" className="py-20 px-6">
        <div className="container mx-auto max-w-6xl">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={containerVariants}>
            <motion.h2 className="text-4xl font-bold text-white text-center mb-16" variants={itemVariants}>
              <BookOpen className="inline-block mr-4 text-purple-400" />
              Publications
            </motion.h2>

            <div className="space-y-6">
              {[
                {
                  title: "Water meter reading system with Deep learning",
                  journal: "IEEE Computer Society",
                  date: "2025",
                  type: "Research Paper",
                  description:
                    "ตีพิมพ์ก่อน ตุลาคม 2025",
                },
              ].map((pub, index) => (
                <motion.div key={index} variants={itemVariants}>
                  <Card className="bg-white/5 border-white/10 backdrop-blur-sm hover:bg-white/10 transition-all duration-300">
                    <CardHeader>
                      <div className="flex justify-between items-start">
                        <div className="flex-1">
                          <CardTitle className="text-white text-lg mb-2">{pub.title}</CardTitle>
                          <CardDescription className="text-purple-400">{pub.journal}</CardDescription>
                        </div>
                        <div className="text-right">
                          <Badge variant="secondary" className="bg-blue-500/20 text-blue-300 mb-2">
                            {pub.type}
                          </Badge>
                          <p className="text-white/60 text-sm">{pub.date}</p>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-white/80">{pub.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Languages Section */}
      <section id="languages" className="py-20 px-6 bg-black/20">
        <div className="container mx-auto max-w-6xl">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={containerVariants}>
            <motion.h2 className="text-4xl font-bold text-white text-center mb-16" variants={itemVariants}>
              <Globe className="inline-block mr-4 text-purple-400" />
              Languages
            </motion.h2>
            <div className="grid md:grid-cols-1 md:grid-cols-2 gap-8 justify-center">
              {[
                { language: "Thai", level: "Native", proficiency: 100 },
                { language: "English", level: "B2", proficiency: 60 },
              ].map((lang, index) => (
                <motion.div key={index} variants={itemVariants}>
                  <Card className="bg-white/5 border-white/10 backdrop-blur-sm hover:bg-white/10 transition-all duration-300">
                    <CardHeader className="text-center">
                      <CardTitle className="text-white text-xl">{lang.language}</CardTitle>
                      <CardDescription className="text-purple-400">{lang.level}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-2">
                        <div className="flex justify-between text-sm">
                          <span className="text-white/70">Proficiency</span>
                          <span className="text-white/70">{lang.proficiency}%</span>
                        </div>                     
                        <div className="w-full bg-white/10 rounded-full h-2">
                          <motion.div
                            className="bg-gradient-to-r from-purple-500 to-pink-500 h-2 rounded-full"
                            initial={{ width: 0 }}
                            whileInView={{ width: `${lang.proficiency}%` }}
                            transition={{ duration: 1, delay: index * 0.1 }}
                          />
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-6">
        <div className="container mx-auto max-w-4xl text-center">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={containerVariants}>
            <motion.h2 className="text-4xl font-bold text-white mb-8" variants={itemVariants}>
              Thank You
            </motion.h2>
            <motion.p className="text-xl text-white/80 mb-12" variants={itemVariants}>
              Contact Me
            </motion.p>
            <motion.div className="flex flex-col sm:flex-row gap-6 justify-center items-center" variants={itemVariants}>
              <Button
                size="lg"
                className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white border-0"
              >
                <Mail className="mr-2 h-5 w-5" />
                mumuch4321@gmail.com
              </Button>
              <div className="flex space-x-4">
                <Button
                  variant="outline"
                  size="lg"
                  className="border-white/20 text-white hover:bg-white/10 bg-transparent"
                >
                  <Phone className="mr-2 h-4 w-4" />
                  093-328-5457
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="border-white/20 text-white hover:bg-white/10 bg-transparent"
                >
                  <MapPin className="mr-2 h-4 w-4" />
                  github.com/mumuhrk
                </Button>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 border-t border-white/10">
        <div className="container mx-auto text-center">
          <p className="text-white/60">© 2025 Sujinda Jaipinta. Built with Next.js and Tailwind CSS.</p>
        </div>
      </footer>
    </div>
  )
}

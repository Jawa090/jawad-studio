
import { motion } from "framer-motion";
import SectionHeader from "@/components/SectionHeader";
import TeamMember from "@/components/TeamMember";

const About = () => {
  const teamMembers = [
    {
      name: "Jawad Abbas",
      role: "MERN Stack Developer & AI Enthusiast",
      bio: "Jawad is a passionate MERN stack developer with expertise in building scalable web applications and integrating AI solutions. With years of experience in the tech industry, he brings technical excellence and innovation to every project.",
      image: "./173764082.jpeg", 
      socialLinks: {
        linkedin: "https://www.linkedin.com/in/-alijawad/",
        twitter: "https://twitter.com/jawadabbas",
        github: "https://github.com/Jawa090",
        whatsapp: "034364680", 
      },
    },
    
    {
      name: "Ayesha Zahid",
      role: "Graphic Designer",
      bio: "Ayesha is a creative graphic designer with a keen eye for aesthetics and detail. She specializes in creating visually stunning designs that captivate audiences and communicate brand messages effectively. Her work spans across various mediums and industries.",
      image: "./Ayesha.jpg", 
      socialLinks: {
        linkedin: "https://www.linkedin.com/in/ayesha-zahid-96a0a7324?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app ",
        twitter: "https://twitter.com/ayeshazahid",
        dribbble: "https://dribbble.com/ayeshazahid",
        whatsapp: "923001234568",
      },
    },
    {
      name: "Mujeeb ul Rahman",
      role: "Python Developer",
      bio: "Mujeeb is an experienced Python developer specializing in backend services, data processing pipelines, and automation solutions. His expertise in frameworks like Django, Flask, and FastAPI enables him to deliver robust and efficient applications across various domains.",
      image: "./mujeeb.jpg", 
      socialLinks: {
        linkedin: "https://linkedin.com/in/mujeeb-ur-rehman-146aa2250",
        github: "https://github.com/mohMujeeb",
        email: "https://dribbble.com/ayeshazahid",
        whatsapp: "923001234569",
      },
    },
    {
      name: "Waleed Khan",
      role: "DevOps Engineer",
      bio: "Waleed is a skilled DevOps Engineer focused on automating and optimizing development workflows and infrastructure. His expertise in continuous integration, deployment pipelines, and cloud platforms ensures smooth and efficient delivery of high-quality software solutions.",
      image: "./waleed.jpg", 
      socialLinks: {
        linkedin: "https://www.linkedin.com/in/waleed-khan-633222215?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
        github: "https://github.com/Waleed-khan1310",
        email: "waleed@example.com",
        whatsapp: "923001234572",
      },
    },
    {
      name: "Ghazanfar Iqbal",
      role: "Data Analyst",
      bio: "Ghzanfar is a seasoned data analyst with expertise in transforming complex datasets into actionable insights. Skilled in statistical analysis, data visualization, and predictive modeling, he helps businesses make data-driven decisions that drive growth and innovation.",
      image: "./ghznfar.jpg", 
      socialLinks: {
        linkedin: "https://www.linkedin.com/in/ghazanfar-iqbal-766527325?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app",
        twitter: "https://twitter.com/ghzanfariqbal",
        email: "ghazanfaratm810@gmail.com",
        whatsapp: "03061653810",
      },
    },
    {
      name: "Sufyan Habib",
      role: "ML Engineer",
      bio: "Sufyan is an innovative ML Engineer with deep expertise in designing and implementing machine learning algorithms and applications. He specializes in creating sophisticated AI models that help businesses automate processes and gain valuable insights from their data.",
      image: "./profile.jpg", 
      socialLinks: {
        linkedin: "https://www.linkedin.com/in/sufyan-habib-20729b266/",
        github: "https://github.com/sufyan-345",
        twitter: "https://twitter.com/sufyanhabib",
        whatsapp: "03018520683",
      },
    },
    {
      name: "Umar Shafique",
      role: "Full Stack Developer",
      bio: "Umar is a passionate Full stack developer with expertise in building scalable web applications and integrating AI solutions. With years of experience in the tech industry, he brings technical excellence and innovation to every project.",
      image: "./umar.jpg", 
      socialLinks: {
        linkedin: "https://www.linkedin.com/in/usebyumar?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app",
        twitter: "https://twitter.com/jawadabbas",
        github: "https://github.com/usebyumar",
        email: "umer.shafiq0008@gmail.com",
        whatsapp: "034364680", 
      },
    },
  ];

  return (
    <section className="container mx-auto py-16 px-6 md:px-12">
      <SectionHeader
        title="Our Team"
        subtitle="Meet the talented individuals behind our exceptional digital solutions"
      />

      <motion.div
        className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        {teamMembers.map((member, index) => (
          <TeamMember 
            key={member.name} 
            {...member} 
            index={index}
          />
        ))}
      </motion.div>

      <motion.div
        className="mt-24"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.7 }}
      >
        <SectionHeader 
          title="Our Mission" 
          subtitle="To transform ideas into exceptional digital experiences through innovative development, creative design, and data-driven insights."
        />
        
        <div className="mt-8 max-w-3xl mx-auto glass-card p-8 rounded-xl">
          <p className="text-white/70 mb-4">
            At J&A Studio, we believe in the power of combining technical expertise with creative design and data analytics to create digital solutions that not only look stunning but also perform exceptionally well and deliver measurable results.
          </p>
          <p className="text-white/70 mb-4">
            Our approach is collaborative and client-focused, ensuring that we understand your unique needs and deliver solutions that exceed your expectations. We're committed to staying at the forefront of technology and design trends to bring you the most innovative solutions.
          </p>
          <p className="text-white/70">
            Whether you need a complex web application, an AI integration, stunning graphic design, Python-based solutions, or data analytics services, we have the skills and passion to bring your vision to life.
          </p>
        </div>
      </motion.div>
    </section>
  );
};

export default About;

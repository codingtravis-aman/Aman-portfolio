import { useTheme } from "../hooks/useTheme";
import { motion } from "framer-motion";

const skills = [
  "React.js", "Next.js", "React Native", "Flutter", "Node.js", 
  "TypeScript", "TailwindCSS", "GSAP", "Three.js"
];

const About = () => {
  const { theme } = useTheme();
  
  return (
    <section id="about" className={`py-20 ${theme === "dark" ? "bg-gray-900/30" : "bg-gray-100/50"}`} data-scroll-section>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="mb-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold font-sans mb-3">
            About <span className="text-primary">Me</span>
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
          <p className={`${theme === "dark" ? "text-white/90" : "text-black/90"} max-w-2xl mx-auto text-lg font-medium`}>
            Passionate about crafting exceptional digital experiences with modern technologies.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
          >
            <div className="relative rounded-xl overflow-hidden h-80 md:h-96 shadow-lg">
              <img 
                src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1472&q=80" 
                alt="Aman's Workspace" 
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
              />
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-bold font-sans mb-4 text-gray-900 dark:text-white">
              I'm a <span className="text-primary">Freelance Software Developer</span> from India
            </h3>
            <p className={`${theme === "dark" ? "text-white/90" : "text-gray-800"} mb-6 leading-relaxed font-medium`}>
              With a passion for building innovative solutions, I help businesses transform their ideas into reality. I specialize in creating modern, scalable applications that deliver exceptional user experiences.
            </p>
            
            <div className="mb-6">
              <h4 className="text-lg font-semibold mb-3">My Skills</h4>
              <motion.div className="flex flex-wrap gap-2">
                {skills.map((skill, index) => (
                  <motion.span
                    key={skill}
                    className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                    whileHover={{ scale: 1.05, backgroundColor: "rgba(59, 130, 246, 0.2)" }}
                  >
                    {skill}
                  </motion.span>
                ))}
              </motion.div>
            </div>
            
            <div className="grid grid-cols-2 gap-4 mb-6">
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: 0.1 }}
              >
                <p className={`${theme === "dark" ? "text-white/90" : "text-gray-800"} font-medium`}>
                  <i className="fas fa-envelope text-primary mr-2"></i> asyn.aman@gmail.com
                </p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: 0.2 }}
              >
                <p className={`${theme === "dark" ? "text-white/90" : "text-gray-800"} font-medium`}>
                  <i className="fas fa-phone text-primary mr-2"></i> +91 9560567598
                </p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: 0.3 }}
              >
                <p className={`${theme === "dark" ? "text-white/90" : "text-gray-800"} font-medium`}>
                  <i className="fas fa-map-marker-alt text-primary mr-2"></i> India
                </p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: 0.4 }}
              >
                <p className={`${theme === "dark" ? "text-white/90" : "text-gray-800"} font-medium`}>
                  <i className="fas fa-language text-primary mr-2"></i> English, Hindi
                </p>
              </motion.div>
            </div>
            
            <motion.a 
              href="#contact" 
              className="inline-block px-6 py-3 bg-primary text-white font-medium rounded-lg hover:bg-primary/90 transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              data-scroll-to
            >
              Contact Me
            </motion.a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;

import { useTheme } from "../hooks/useTheme";
import { motion } from "framer-motion";

const services = [
  {
    title: "App Development",
    icon: "fa-mobile-alt",
    description: "We build native and cross-platform mobile applications that deliver exceptional user experiences. Our apps combine beautiful design with robust functionality.",
    skills: ["React Native", "Flutter", "Swift", "Kotlin"],
    image: "https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
  },
  {
    title: "Web Development",
    icon: "fa-laptop-code",
    description: "From responsive websites to complex web applications, we create modern, scalable web solutions that help businesses establish their online presence.",
    skills: ["Next.js", "React", "TailwindCSS", "Node.js"],
    image: "https://images.unsplash.com/photo-1547658719-da2b51169166?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1464&q=80"
  },
  {
    title: "Software & SaaS with AI",
    icon: "fa-robot",
    description: "We develop intelligent software and SaaS products that leverage AI to deliver transformational outcomes for businesses across various industries.",
    skills: ["AI Integration", "Cloud Services", "ML Models", "API Development"],
    image: "https://images.unsplash.com/photo-1531482615713-2afd69097998?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
  }
];

const Services = () => {
  const { theme } = useTheme();
  
  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.5,
      }
    })
  };
  
  return (
    <section id="services" className="py-20" data-scroll-section>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="mb-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold font-sans mb-3">
            My <span className="text-primary">Services</span>
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
          <p className={`${theme === "dark" ? "text-white/90" : "text-gray-800"} max-w-2xl mx-auto font-medium text-lg`}>
            I offer comprehensive development solutions to help businesses achieve their digital goals.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              className={`${theme === "dark" ? "bg-gray-800" : "bg-white"} rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow group`}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              custom={index}
              whileHover={{ y: -5 }}
            >
              <div className="w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-white transition-colors">
                <i className={`fas ${service.icon} text-2xl text-primary group-hover:text-white transition-colors`}></i>
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">{service.title}</h3>
              <p className={`${theme === "dark" ? "text-white/90" : "text-gray-800"} mb-4 font-medium`}>
                {service.description}
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {service.skills.map((skill) => (
                  <span key={skill} className="px-2 py-1 bg-primary/10 text-primary rounded-md text-xs">
                    {skill}
                  </span>
                ))}
              </div>
              
              <div className="relative h-48 rounded-lg overflow-hidden">
                <img 
                  src={service.image} 
                  alt={service.title} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;

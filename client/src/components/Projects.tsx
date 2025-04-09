import { useState } from "react";
import { useTheme } from "../hooks/useTheme";
import { motion, AnimatePresence } from "framer-motion";
import { projects } from "../lib/data";

const filterCategories = [
  { id: "all", label: "All" },
  { id: "app", label: "App Development" },
  { id: "web", label: "Web Development" },
  { id: "software", label: "Software/SaaS" }
];

const Projects = () => {
  const { theme } = useTheme();
  const [activeFilter, setActiveFilter] = useState("all");
  
  const handleFilterChange = (filter: string) => {
    setActiveFilter(filter);
  };
  
  const filteredProjects = activeFilter === "all" 
    ? projects 
    : projects.filter(project => project.category === activeFilter);
  
  return (
    <section id="projects" className={`py-20 ${theme === "dark" ? "bg-gray-900/30" : "bg-gray-100/50"}`} data-scroll-section>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="mb-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold font-sans mb-3">
            My <span className="text-primary">Projects</span>
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
          <p className={`${theme === "dark" ? "text-white/90" : "text-gray-800"} max-w-2xl mx-auto font-medium text-lg`}>
            A showcase of my recent work across app development, web development, and software solutions.
          </p>
        </motion.div>
        
        {/* Project Filters */}
        <motion.div 
          className="flex flex-wrap justify-center gap-4 mb-10"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          {filterCategories.map((category) => (
            <motion.button
              key={category.id}
              className={`px-4 py-2 rounded-full transition-colors ${
                activeFilter === category.id 
                  ? "bg-primary text-white" 
                  : `${theme === "dark" ? "bg-gray-800" : "bg-white"} ${theme === "dark" ? "text-white" : "text-black"} hover:bg-primary hover:text-white`
              }`}
              onClick={() => handleFilterChange(category.id)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {category.label}
            </motion.button>
          ))}
        </motion.div>
        
        {/* Projects Grid */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          layout
        >
          <AnimatePresence>
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                className="group"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.5 }}
                layout
              >
                <motion.div 
                  className={`${theme === "dark" ? "bg-gray-800" : "bg-white"} rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow`}
                  whileHover={{ y: -5 }}
                >
                  <div className="relative overflow-hidden h-64">
                    <img 
                      src={project.image} 
                      alt={project.title} 
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-6">
                      <div>
                        <p className="text-white text-xs font-medium mb-1">{project.categoryLabel}</p>
                        <h3 className="text-white text-xl font-bold">{project.title}</h3>
                      </div>
                    </div>
                  </div>
                  <div className="p-6">
                    <p className={`${theme === "dark" ? "text-white/90" : "text-gray-800"} mb-4 font-medium`}>
                      {project.description}
                    </p>
                    <div className="flex justify-between items-center">
                      <div className="flex space-x-2">
                        <span className="w-2 h-2 rounded-full bg-primary"></span>
                        <span className="w-2 h-2 rounded-full bg-secondary"></span>
                        <span className="w-2 h-2 rounded-full bg-accent"></span>
                      </div>
                      <a 
                        href="#" 
                        className="text-primary hover:text-primary/80 font-medium"
                        onClick={(e) => e.preventDefault()}
                      >
                        View Project <i className="fas fa-arrow-right ml-1"></i>
                      </a>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;

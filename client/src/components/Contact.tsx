import { useState, FormEvent, useRef, ChangeEvent } from "react";
import { useTheme } from "../hooks/useTheme";
import { motion } from "framer-motion";
import { useToast } from "@/hooks/use-toast";

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

const initialFormData: FormData = {
  name: "",
  email: "",
  subject: "",
  message: ""
};

const socialLinks = [
  { 
    name: "GitHub", 
    icon: "fab fa-github", 
    url: "https://github.com/codingtravis-aman" 
  },
  { 
    name: "Instagram", 
    icon: "fab fa-instagram", 
    url: "https://www.instagram.com/codingtravis_aman/profilecard/?igsh=MXBsMmR6cWJjemU3Mg==" 
  },
  { 
    name: "Twitter", 
    icon: "fab fa-twitter", 
    url: "https://x.com/codingtravis_" 
  },
  { 
    name: "LinkedIn", 
    icon: "fab fa-linkedin", 
    url: "https://www.linkedin.com/in/aman-jha-0bb578211" 
  }
];

const Contact = () => {
  const { theme } = useTheme();
  const { toast } = useToast();
  const [formData, setFormData] = useState<FormData>(initialFormData);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);
  
  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // EmailJS integration would go here
      // For now, we'll simulate the API call with a timeout
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      toast({
        title: "Message sent!",
        description: "Thank you for your message. I'll get back to you soon.",
      });
      
      setFormData(initialFormData);
    } catch (error) {
      toast({
        title: "Error",
        description: "There was an error sending your message. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };
  
  return (
    <section id="contact" className="py-20" data-scroll-section>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="mb-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold font-sans mb-3">
            Get In <span className="text-primary">Touch</span>
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
          <p className={`${theme === "dark" ? "text-white/70" : "text-black/70"} max-w-2xl mx-auto`}>
            Have a project in mind? Let's discuss how I can help bring your ideas to life.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
          >
            <div className={`${theme === "dark" ? "bg-gray-800" : "bg-white"} rounded-xl p-8 shadow-lg`}>
              <h3 className="text-2xl font-bold mb-6">Send Me a Message</h3>
              
              {/* Contact Form */}
              <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label 
                    htmlFor="name" 
                    className={`block ${theme === "dark" ? "text-white/70" : "text-black/70"} mb-2`}
                  >
                    Your Name
                  </label>
                  <input 
                    type="text" 
                    id="name" 
                    name="name" 
                    value={formData.name}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 rounded-lg ${
                      theme === "dark" 
                        ? "bg-gray-700 border-gray-600" 
                        : "bg-gray-100 border-gray-300"
                    } border focus:border-primary focus:outline-none transition-colors`}
                    placeholder="John Doe"
                    required
                  />
                </div>
                
                <div>
                  <label 
                    htmlFor="email" 
                    className={`block ${theme === "dark" ? "text-white/70" : "text-black/70"} mb-2`}
                  >
                    Your Email
                  </label>
                  <input 
                    type="email" 
                    id="email" 
                    name="email" 
                    value={formData.email}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 rounded-lg ${
                      theme === "dark" 
                        ? "bg-gray-700 border-gray-600" 
                        : "bg-gray-100 border-gray-300"
                    } border focus:border-primary focus:outline-none transition-colors`}
                    placeholder="john@example.com"
                    required
                  />
                </div>
                
                <div>
                  <label 
                    htmlFor="subject" 
                    className={`block ${theme === "dark" ? "text-white/70" : "text-black/70"} mb-2`}
                  >
                    Subject
                  </label>
                  <input 
                    type="text" 
                    id="subject" 
                    name="subject" 
                    value={formData.subject}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 rounded-lg ${
                      theme === "dark" 
                        ? "bg-gray-700 border-gray-600" 
                        : "bg-gray-100 border-gray-300"
                    } border focus:border-primary focus:outline-none transition-colors`}
                    placeholder="Project Inquiry"
                    required
                  />
                </div>
                
                <div>
                  <label 
                    htmlFor="message" 
                    className={`block ${theme === "dark" ? "text-white/70" : "text-black/70"} mb-2`}
                  >
                    Your Message
                  </label>
                  <textarea 
                    id="message" 
                    name="message" 
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 rounded-lg ${
                      theme === "dark" 
                        ? "bg-gray-700 border-gray-600" 
                        : "bg-gray-100 border-gray-300"
                    } border focus:border-primary focus:outline-none transition-colors`}
                    placeholder="Tell me about your project..."
                    required
                  ></textarea>
                </div>
                
                <motion.button 
                  type="submit" 
                  className="w-full px-6 py-3 bg-primary text-white font-medium rounded-lg hover:bg-primary/90 transition-colors flex items-center justify-center"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>
                      <i className="fas fa-circle-notch fa-spin mr-2"></i>
                      Sending...
                    </>
                  ) : (
                    <>
                      Send Message
                      <i className="fas fa-paper-plane ml-2"></i>
                    </>
                  )}
                </motion.button>
              </form>
            </div>
          </motion.div>
          
          <div>
            <motion.div
              className={`${theme === "dark" ? "bg-gray-800" : "bg-white"} rounded-xl p-8 shadow-lg mb-8`}
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6 }}
            >
              <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mr-4 text-primary">
                    <i className="fas fa-envelope text-xl"></i>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Email</h4>
                    <p className={`${theme === "dark" ? "text-white/70" : "text-black/70"}`}>
                      asyn.aman@gmail.com
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mr-4 text-primary">
                    <i className="fas fa-phone text-xl"></i>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Phone</h4>
                    <p className={`${theme === "dark" ? "text-white/70" : "text-black/70"}`}>
                      +91 9560567598
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mr-4 text-primary">
                    <i className="fas fa-map-marker-alt text-xl"></i>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Location</h4>
                    <p className={`${theme === "dark" ? "text-white/70" : "text-black/70"}`}>
                      India
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
            
            <motion.div
              className={`${theme === "dark" ? "bg-gray-800" : "bg-white"} rounded-xl p-8 shadow-lg`}
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h3 className="text-2xl font-bold mb-6">Find Me On</h3>
              
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
                {socialLinks.map((link, index) => (
                  <motion.a 
                    key={link.name}
                    href={link.url} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex flex-col items-center"
                    whileHover={{ y: -5 }}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: 0.1 + (index * 0.1) }}
                  >
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-2 hover:bg-primary group transition-colors">
                      <i className={`${link.icon} text-xl text-primary group-hover:text-white transition-colors`}></i>
                    </div>
                    <span className={`${theme === "dark" ? "text-white/70" : "text-black/70"} text-sm`}>
                      {link.name}
                    </span>
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

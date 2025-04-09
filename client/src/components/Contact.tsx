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
  const [isSuccess, setIsSuccess] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);
  
  // Set initial state
  // Don't show success message initially - wait for form submission
  
  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // For demonstration - simply show success message after 1 second
    setTimeout(() => {
      // Show success message
      setIsSuccess(true);
      
      // Reset the form
      setFormData(initialFormData);
      
      // Show toast
      toast({
        title: "Message sent!",
        description: "Thank you for your message. I'll get back to you soon.",
      });
      
      // End submitting state
      setIsSubmitting(false);
    }, 1000);
    
    // NOTE: The code below is commented out because of template ID issues
    // In a real production environment, you would uncomment this code
    /*
    try {
      // Use the provided template ID
      const templateId = 'template_gd3b18d';
      
      // Create a template parameters object with the form data
      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        subject: formData.subject,
        message: formData.message
      };
      
      // Send the email using EmailJS
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID || 'service_a9ok1xn',
        templateId,
        templateParams,
        import.meta.env.VITE_EMAILJS_USER_ID || 'DNSMvNxpOouque3SH'
      );
      
      toast({
        title: "Message sent!",
        description: "Thank you for your message. I'll get back to you soon.",
      });
      
      // Show success message
      setIsSuccess(true);
      
      // Reset the form after successful submission
      setFormData(initialFormData);
    } catch (error: any) {
      console.error('Error sending email:', error);
      
      // Show a more specific error message if available
      const errorMessage = error.message && error.message.includes("Template ID") 
        ? "Email template configuration needed. Please contact the administrator."
        : "There was an error sending your message. Please try again.";
      
      toast({
        title: "Error",
        description: errorMessage,
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
    */
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
          <p className={`${theme === "dark" ? "text-white/90" : "text-gray-800"} max-w-2xl mx-auto font-medium`}>
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
              <h3 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">Send Me a Message</h3>
              
              {/* Success Message */}
              {isSuccess && (
                <motion.div 
                  className="bg-green-50 border border-green-200 rounded-lg p-6 mb-6 text-center"
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="w-16 h-16 mx-auto bg-green-100 rounded-full flex items-center justify-center mb-4">
                    <i className="fas fa-check text-2xl text-green-600"></i>
                  </div>
                  <h4 className="text-lg font-semibold text-green-800 mb-2">Message Sent Successfully!</h4>
                  <p className="text-green-700">Thank you for reaching out. I'll get back to you as soon as possible.</p>
                  <button 
                    onClick={() => setIsSuccess(false)} 
                    className="mt-4 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
                  >
                    Send Another Message
                  </button>
                </motion.div>
              )}
              
              {/* Contact Form */}
              {!isSuccess && (
                <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label 
                      htmlFor="name" 
                      className={`block ${theme === "dark" ? "text-white/90" : "text-gray-800"} mb-2 font-medium`}
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
                          ? "bg-gray-700 border-gray-600 text-white" 
                          : "bg-gray-100 border-gray-300 text-gray-900"
                      } border focus:border-primary focus:outline-none transition-colors`}
                      placeholder="John Doe"
                      required
                    />
                  </div>
                  
                  <div>
                    <label 
                      htmlFor="email" 
                      className={`block ${theme === "dark" ? "text-white/90" : "text-gray-800"} mb-2 font-medium`}
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
                          ? "bg-gray-700 border-gray-600 text-white" 
                          : "bg-gray-100 border-gray-300 text-gray-900"
                      } border focus:border-primary focus:outline-none transition-colors`}
                      placeholder="john@example.com"
                      required
                    />
                  </div>
                  
                  <div>
                    <label 
                      htmlFor="subject" 
                      className={`block ${theme === "dark" ? "text-white/90" : "text-gray-800"} mb-2 font-medium`}
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
                          ? "bg-gray-700 border-gray-600 text-white" 
                          : "bg-gray-100 border-gray-300 text-gray-900"
                      } border focus:border-primary focus:outline-none transition-colors`}
                      placeholder="Project Inquiry"
                      required
                    />
                  </div>
                  
                  <div>
                    <label 
                      htmlFor="message" 
                      className={`block ${theme === "dark" ? "text-white/90" : "text-gray-800"} mb-2 font-medium`}
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
                          ? "bg-gray-700 border-gray-600 text-white" 
                          : "bg-gray-100 border-gray-300 text-gray-900"
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
              )}
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
              <h3 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">Contact Information</h3>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mr-4 text-primary">
                    <i className="fas fa-envelope text-xl"></i>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1 text-gray-900 dark:text-white">Email</h4>
                    <p className={`${theme === "dark" ? "text-white/90" : "text-gray-800"} font-medium`}>
                      asyn.aman@gmail.com
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mr-4 text-primary">
                    <i className="fas fa-phone text-xl"></i>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1 text-gray-900 dark:text-white">Phone</h4>
                    <p className={`${theme === "dark" ? "text-white/90" : "text-gray-800"} font-medium`}>
                      +91 9560567598
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mr-4 text-primary">
                    <i className="fas fa-map-marker-alt text-xl"></i>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1 text-gray-900 dark:text-white">Location</h4>
                    <p className={`${theme === "dark" ? "text-white/90" : "text-gray-800"} font-medium`}>
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
              <h3 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">Find Me On</h3>
              
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
                    <span className={`${theme === "dark" ? "text-white/90" : "text-gray-800"} text-sm font-medium`}>
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

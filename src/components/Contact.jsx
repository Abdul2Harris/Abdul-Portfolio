import { Github, Mail, MapPin, Phone, Linkedin } from "lucide-react";
import axios from "axios";
import { useState } from "react";
import { notification } from "antd";


export const Contact = () => {
  const contactData = [
    { icon: <Mail />, title: "abdulrahmanharris10@gmail.com" },
    { icon: <Phone />, title: "8754485681" },
    { icon: <MapPin />, title: "Chennai, India" },
  ];

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [sending, setSending] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSending(true);

    try {
      await axios.post("http://localhost:5000/send", formData);
      setSuccess(true);
      setFormData({ name: "", email: "", phone: "", message: "" });
      notification.success({
        message: "Success",
        description: "Message sent successfully!",
        placement: "topRight",
        duration: 3,
      });
    } catch (error) {
      console.error("Failed to send message:", error);
      notification.error({
        message: "Error",
        description: "Message sending failed. Please try again.",
        placement: "topRight",
        duration: 4,
      });
    } finally {
      setSending(false);
    }
  };

  return (
    <section
      id="contact"
      className="relative flex flex-col items-center mt-20 scroll-mt-20"
    >
      <div className="container mx-auto max-w-4xl">
        <h1 className="text-foreground text-2xl md:text-4xl font-bold">
          Get In <span className="text-primary">Touch</span>
        </h1>

        <p className="my-10 px-6 md:px-14 mx-auto lg:text-lg">
          Have a project in mind or want to collaborate? Feel free to reach out.
          I'm always open to discussing new opportunities.
        </p>

        <div className="flex flex-col md:flex-row gap-6">
          <div className="w-full md:w-5/12">
            <h1 className="text-muted-foreground text-2xl font-medium">
              Contact Information
            </h1>

            <div className="space-y-6 mt-10">
              {contactData.map((data, index) =>
                index === 2 ? (
                  <span
                    key={index}
                    className="text-muted-foreground font-medium mt-2 flex items-center gap-2"
                  >
                    {data.icon}
                    {data.title}
                  </span>
                ) : (
                  <a
                    key={index}
                    href={
                      index === 0 ? `mailto:${data.title}` : `tel:${data.title}`
                    }
                    className="text-muted-foreground font-medium hover:text-primary mt-2 flex items-center gap-2 break-all"
                  >
                    {data.icon}
                    <span>{data.title}</span>
                  </a>
                )
              )}
            </div>

            <div className="pt-8">
              <h4 className="font-medium mb-4"> Connect With Me</h4>
              <div className="flex space-x-4 justify-center">
                <a
                  href="https://www.linkedin.com/in/abdul-rahuman-harris/"
                  target="_blank"
                  className="hover:text-primary"
                >
                  <Linkedin />
                </a>
                <a
                  href="https://github.com/Abdul2Harris"
                  target="_blank"
                  className="hover:text-primary"
                >
                  <Github />
                </a>
              </div>
            </div>
          </div>

          <div className="w-full md:w-6/12">
            <div className="rounded-xl bg-card p-4 shadow-xs">
              <h1 className="text-muted-foreground font-medium text-2xl mt-4">
                {" "}
                Send A Message{" "}
              </h1>

              <form className="space-y-6 mt-6" onSubmit={handleSubmit}>
                <div className="">
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium mb-2"
                  >
                    {" "}
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder="Enter Your Name..."
                  />
                </div>

                <div className="">
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium mb-2"
                  >
                    {" "}
                    Your Email
                  </label>
                  <input
                    type="text"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder="Enter Your Mail..."
                  />
                </div>

                <div className="">
                  <label
                    htmlFor="phone"
                    className="block text-sm font-medium mb-2"
                  >
                    {" "}
                    Your Phone
                  </label>
                  <input
                    type="text"
                    id="phone"
                    name="phone"
                    // required
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder="8754485671..."
                  />
                </div>

                <div className="">
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium mb-2"
                  >
                    {" "}
                    Your Message
                  </label>
                  <textarea
                    type="text"
                    id="message"
                    name="message"
                    required
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary resize"
                    placeholder="Send a Message..."
                  />
                </div>

                <button type="submit" className="cosmic-button w-full">
                  {sending ? "Sending..." : "Send Message"}
                </button>
                {success && (
                  <p className="text-green-500 text-sm mt-2">
                    Message sent successfully!
                  </p>
                )}
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

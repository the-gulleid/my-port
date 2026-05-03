import { Link } from 'react-router-dom'
import { Code2, Github, Linkedin, Mail, Phone } from 'lucide-react'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const pageLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Education', path: '/education' },
    { name: 'Experience', path: '/experience' },
    { name: 'Skills', path: '/skills' },
    { name: 'Projects', path: '/projects' },
    { name: 'Certificates', path: '/certificates' },
    { name: 'Contact', path: '/contact' },
  ]

  const column1 = pageLinks.slice(0, 3)
  const column2 = pageLinks.slice(3, 6)
  const column3 = pageLinks.slice(6, 9)

  return (
    <footer className="relative mt-24">
      <div className="absolute inset-0 bg-black/50 backdrop-blur-xl" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 py-12">
          {/* Branding */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center space-x-3">
              <Code2 className="w-8 h-8 text-white" aria-hidden="true" />
              <span className="text-xl font-bold text-white">Gulleid mohamed </span>
            </Link>
            <p className="text-sm text-gray-400">
              Software Developer based in Soomaaliland, WB, MB.
            </p>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold text-white">Contact</h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="mailto:guleidmaxamed77@gmail.com"
                  className="text-sm text-gray-400 hover:text-white transition-colors flex items-center gap-2"
                  aria-label="Email Niladri Chatterjee"
                >
                  <Mail className="w-4 h-4" aria-hidden="true" />
                  guleidmaxamed77@gmail.com
                </a>
              </li>
              <li>
                <a
                  href="tel:+00252634867444"
                  className="text-sm text-gray-400 hover:text-white transition-colors flex items-center gap-2"
                  aria-label="Call Niladri Chatterjee"
                >
                  <Phone className="w-4 h-4" aria-hidden="true" />
                  +252634867444
                </a>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold text-white">Quick Links</h3>
            <div className="grid grid-cols-3 gap-x-6 gap-y-3">
              <div>
                {column1.map((link) => (
                  <Link
                    key={link.path}
                    to={link.path}
                    className="block text-sm text-gray-400 hover:text-white transition-colors mb-2"
                  >
                    {link.name}
                  </Link>
                ))}
              </div>
              <div>
                {column2.map((link) => (
                  <Link
                    key={link.path}
                    to={link.path}
                    className="block text-sm text-gray-400 hover:text-white transition-colors mb-2"
                  >
                    {link.name}
                  </Link>
                ))}
              </div>
              <div>
                {column3.map((link) => (
                  <Link
                    key={link.path}
                    to={link.path}
                    className="block text-sm text-gray-400 hover:text-white transition-colors mb-2"
                  >
                    {link.name}
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {/* Social */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold text-white">Social</h3>
            <div className="flex space-x-4">
              <a
                href="https://github.com/the-gulleid"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="GitHub profile"
              >
                <Github className="w-5 h-5" aria-hidden="true" />
              </a>
              <a
                href=""
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="LinkedIn profile"
              >
                <Linkedin className="w-5 h-5" aria-hidden="true" />
              </a>
              <a
                href="guleidmaxamed77@gmail.com"
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="Email"
              >
                <Mail className="w-5 h-5" aria-hidden="true" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/10 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-gray-400">
              © {currentYear} Gullied mohamed. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <span className="text-sm text-gray-400 flex items-center gap-2">
                <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 32 32" aria-hidden="true">
                  <path d="M12 1L24 22H0L12 1Z" />
                </svg>
                Gullied's Portfolio
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer

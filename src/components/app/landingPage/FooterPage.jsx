import { Menu } from '@headlessui/react';
import { FaFacebook, FaInstagram, FaTwitter, FaGithub, FaLinkedin } from "react-icons/fa";

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

export  function FooterPage() {
  return (
    <footer className="bg-[#0d0d0d] text-white py-10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Logo Section */}
          <div>
            <h2 className="text-2xl font-bold mb-4">Labelize AI</h2>
            <p className="text-gray-400">
              The best marketplace for data labeling, empowering AI model development with quality-labeled datasets.
            </p>
          </div>

          {/* Links - Product */}
          <div>
            <Menu as="div" className="space-y-2">
              <Menu.Button className="text-lg font-semibold mb-4">Product</Menu.Button>
              <Menu.Items>
                <ul className="space-y-2 text-gray-400">
                  <Menu.Item>
                    {({ active }) => (
                      <li>
                        <a
                          href="#"
                          className={classNames(
                            active ? 'text-white' : 'text-gray-400',
                            'block hover:text-white'
                          )}
                        >
                          Features
                        </a>
                      </li>
                    )}
                  </Menu.Item>
                  <Menu.Item>
                    {({ active }) => (
                      <li>
                        <a
                          href="#"
                          className={classNames(
                            active ? 'text-white' : 'text-gray-400',
                            'block hover:text-white'
                          )}
                        >
                          Pricing
                        </a>
                      </li>
                    )}
                  </Menu.Item>
                  <Menu.Item>
                    {({ active }) => (
                      <li>
                        <a
                          href="#"
                          className={classNames(
                            active ? 'text-white' : 'text-gray-400',
                            'block hover:text-white'
                          )}
                        >
                          Documentation
                        </a>
                      </li>
                    )}
                  </Menu.Item>
                </ul>
              </Menu.Items>
            </Menu>
          </div>

          {/* Links - Company */}
          <div>
            <Menu as="div" className="space-y-2">
              <Menu.Button className="text-lg font-semibold mb-4">Company</Menu.Button>
              <Menu.Items>
                <ul className="space-y-2 text-gray-400">
                  <Menu.Item>
                    {({ active }) => (
                      <li>
                        <a
                          href="#"
                          className={classNames(
                            active ? 'text-white' : 'text-gray-400',
                            'block hover:text-white'
                          )}
                        >
                          About
                        </a>
                      </li>
                    )}
                  </Menu.Item>
                  <Menu.Item>
                    {({ active }) => (
                      <li>
                        <a
                          href="#"
                          className={classNames(
                            active ? 'text-white' : 'text-gray-400',
                            'block hover:text-white'
                          )}
                        >
                          Careers
                        </a>
                      </li>
                    )}
                  </Menu.Item>
                  <Menu.Item>
                    {({ active }) => (
                      <li>
                        <a
                          href="#"
                          className={classNames(
                            active ? 'text-white' : 'text-gray-400',
                            'block hover:text-white'
                          )}
                        >
                          Contact
                        </a>
                      </li>
                    )}
                  </Menu.Item>
                </ul>
              </Menu.Items>
            </Menu>
          </div>

          {/* Links - Support */}
          <div>
            <Menu as="div" className="space-y-2">
              <Menu.Button className="text-lg font-semibold mb-4">Support</Menu.Button>
              <Menu.Items>
                <ul className="space-y-2 text-gray-400">
                  <Menu.Item>
                    {({ active }) => (
                      <li>
                        <a
                          href="#"
                          className={classNames(
                            active ? 'text-white' : 'text-gray-400',
                            'block hover:text-white'
                          )}
                        >
                          Help Center
                        </a>
                      </li>
                    )}
                  </Menu.Item>
                  <Menu.Item>
                    {({ active }) => (
                      <li>
                        <a
                          href="#"
                          className={classNames(
                            active ? 'text-white' : 'text-gray-400',
                            'block hover:text-white'
                          )}
                        >
                          Privacy Policy
                        </a>
                      </li>
                    )}
                  </Menu.Item>
                  <Menu.Item>
                    {({ active }) => (
                      <li>
                        <a
                          href="#"
                          className={classNames(
                            active ? 'text-white' : 'text-gray-400',
                            'block hover:text-white'
                          )}
                        >
                          Terms & Conditions
                        </a>
                      </li>
                    )}
                  </Menu.Item>
                </ul>
              </Menu.Items>
            </Menu>
          </div>
        </div>

        <hr className="border-gray-700 my-6" />

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row items-center justify-between">
          <p className="text-gray-400 text-sm mb-4 md:mb-0">&copy; {new Date().getFullYear()} Labelize AI. All rights reserved.</p>

          <div className="flex space-x-4">
            <a href="#" className="text-gray-400 hover:text-white">
              <FaFacebook size={20} />
            </a>
            <a href="#" className="text-gray-400 hover:text-white">
              <FaInstagram size={20} />
            </a>
            <a href="#" className="text-gray-400 hover:text-white">
              <FaTwitter size={20} />
            </a>
            <a href="#" className="text-gray-400 hover:text-white">
              <FaGithub size={20} />
            </a>
            <a href="#" className="text-gray-400 hover:text-white">
              <FaLinkedin size={20} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

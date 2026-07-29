const projects = [
  {
    title: 'The Realty Group',
    description: 'A modern, responsive Real Estate website ',
    github: 'https://github.com/stevelomax1/realestateproj',
    live: 'https://the-realty-group.vercel.app',
  },
  {
    title: 'UNDER CONSTRUCTION',
    description: 'Coming soon!',
    github: 'https://github.com/yourusername/ecommerce-ui',
    live: 'https://yourwebsite.com/ecommerce-ui',
  },
]

export default function App() {
  return (
    <div className="bg-[#0f0f0f] text-white min-h-screen">
      {/* HERO SECTION */}
<section className="min-h-screen flex flex-col items-center justify-center px-8 text-center">
  
  {/* PROFILE IMAGE */}
  <img
    src="devpic.jpeg"
    alt="Steve Lomax"
    className="w-[320px] lg:w-[500px] square-2xl grayscale hover:grayscale-0 transition duration-500 shadow-2xl mb-10"
  />

  {/* TITLE */}
  <p className="text-gray-400 uppercase tracking-[4px] mb-4 text-xl">
    Front-End Developer
  </p>

  {/* NAME */}
  <h1 className="text-5xl lg:text-7xl font-bold mb-6">
    Steve Lomax
  </h1>

  {/* DESCRIPTION */}
  <p className="text-gray-300 text-lg leading-relaxed max-w-2xl mb-10">
    I love to build. I love to create. I love to see ideas come to life. Hello World, I'm here and I'm ready.
  </p>

  {/* BUTTONS */}
  <div className="flex flex-wrap justify-center gap-4">
    <a
      href="SL SE Resume.pdf"
      target="_blank"
      className="bg-white text-black px-6 py-3 rounded-lg font-semibold hover:bg-gray-300 transition"
    >
      Resume
    </a>

    <a
      href="https://github.com/stevelomax1"
      target="_blank"
      className="border border-gray-500 px-6 py-3 rounded-lg hover:bg-gray-800 transition"
    >
      GitHub
    </a>

    <a
      href="https://www.linkedin.com/in/stevelomax1/"
      target="_blank"
      className="border border-gray-500 px-6 py-3 rounded-lg hover:bg-gray-800 transition"
    >
      LinkedIn
    </a>
  </div>
</section>

      {/* ABOUT SECTION */}
<section className="px-8 py-24 border-t border-gray-800">
  <div className="max-w-4xl mx-auto text-center">
    <h2 className="text-4xl font-bold mb-8">
      About Me
    </h2>

    <p className="text-gray-300 text-lg leading-relaxed mb-8">
      I’m an aspiring software developer focused on building clean, responsive, and user-friendly applications. While I’m still early in my career,
      I take pride in writing clean, detailed, and reliable code, and I’m always looking for opportunities to grow my skills.
    </p>

    <div className="flex flex-wrap justify-center gap-4">
      {['React', 'JavaScript', 'HTML', 'CSS', 'Tailwind', 'Git'].map(
        (skill) => (
          <span
            key={skill}
            className="border border-gray-700 px-4 py-2 rounded-full text-gray-300"
          >
            {skill}
          </span>
        )
      )}
    </div>
  </div>
</section>

      {/* PROJECTS SECTION */}
      <section className="px-8 py-24 border-t border-gray-800">
  <div className="max-w-6xl mx-auto text-center">
    <h2 className="text-4xl font-bold mb-12">
      Projects
    </h2>

    <div className="grid md:grid-cols-2 gap-8">
      {projects.map((project) => (
        <div
          key={project.title}
          className="bg-[#1a1a1a] p-8 rounded-2xl border border-gray-800 hover:border-gray-600 transition text-center"
        >
          <h3 className="text-2xl font-semibold mb-4">
            {project.title}
          </h3>

          <p className="text-gray-400 mb-6">
            {project.description}
          </p>

          <div className="flex justify-center gap-4">
            <a
              href={project.github}
              target="_blank"
              className="text-white underline"
            >
              GitHub
            </a>

            <a
              href={project.live}
              target="_blank"
              className="text-white underline"
            >
              Live Demo
            </a>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>

      {/* CONTACT SECTION */}
<section className="px-8 py-24 border-t border-gray-800">
  <div className="max-w-4xl mx-auto text-center">
    <h2 className="text-4xl font-bold mb-6">
      Contact Me
    </h2>

    <p className="text-gray-400 text-lg mb-10">
      I'm currently open to front-end development opportunities,
      freelance work, and collaborations.
    </p>

    <div className="flex flex-col gap-6 items-center">
      {/* EMAIL */}
      <div className="bg-[#1a1a1a] border border-gray-800 px-8 py-5 rounded-2xl w-full max-w-xl">
        <p className="text-gray-500 text-sm uppercase tracking-wider mb-2">
          Email
        </p>

        <a
          href="mailto:steven.lomax1@gmail.com"
          className="text-xl hover:text-gray-300 transition"
        >
          steven.lomax1@gmail.com
        </a>
      </div>

      {/* PHONE */}
      <div className="bg-[#1a1a1a] border border-gray-800 px-8 py-5 rounded-2xl w-full max-w-xl">
        <p className="text-gray-500 text-sm uppercase tracking-wider mb-2">
          Phone
        </p>

        <a
          href="tel:+15408927733"
          className="text-xl hover:text-gray-300 transition"
        >
          540.892.7733
        </a>
      </div>
    </div>
  </div>
</section>

      {/* FOOTER */}
      <footer className="px-8 py-12 border-t border-gray-800 text-center text-gray-500">
        <p>© 2026 Steve Lomax. All rights reserved.</p>
      </footer>
    </div>
  )
}
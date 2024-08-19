export default function Home() {
  return (
    <main>
      {/* /* Create header navigation */}
        <header className="bg-white py-4 sticky top-0 z-10">
          <div className="container mx-auto flex justify-between items-center px-4">
            <a href="/" className="text-black text-lg font-bold">Raka Mahardika</a>
            <nav>
            <ul className="flex space-x-4">
          <li>
            <a href="#about" className="text-black hover:text-[#757575]">About</a>
          </li>
          <li>
            <a href="#education" className="text-black hover:text-[#757575]">Education</a>
          </li>
          <li>
            <a href="#skills" className="text-black hover:text-[#757575]">Skills</a>
          </li>
          <li>
            <a href="#experience" className="text-black hover:text-[#757575]">Experience</a>
          </li>
          <li>
            <a href="#projects" className="text-black hover:text-[#757575]">Projects</a>
          </li>
            </ul>
            </nav>
          </div>
        </header>
        {/* Create banner section */}
      <section className="bg-gray-900 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-white text-4xl font-bold">{`Hello, I'm Raka Mahardika`}</h2>
          <p className="text-gray-300 mt-4">{`I'm a software engineer based in Indonesia. I love to build things for the web.`}</p>
        </div>
      </section>
      {/* Create about section */}
      <section id="about" className="bg-white py-16">
        <div className="container mx-auto px-">
          <h2 className="text-2xl font-bold text-right text-black">About Me</h2>
          <p className="mt-4 text-right text-black">Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque incidunt consequatur fugiat, dolorum velit molestias sapiente odio tempore quisquam dolorem. Odio iusto, odit aut sapiente commodi consequuntur numquam nemo perspiciatis. Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque incidunt consequatur fugiat, dolorum velit molestias sapiente odio tempore quisquam dolorem. Odio iusto, odit aut sapiente commodi consequuntur numquam nemo perspiciatis.</p>
        </div>
      </section>
      {/* Create education section */}
      <section id="education" className="bg-gray-100 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold">Education</h2>
          <ul className="mt-4">
            <li>
              <h3 className="text-lg font-bold">Bachelor of Computer Science</h3>
              <p>University of Widyatma</p>
            </li>
          </ul>
        </div>
      </section>
      {/* Create skills section */}
      <section id="skills" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold text-right text-black">Skills</h2>
          <ul className="mt-4">
            <li>
              <h3 className="text-lg font-bold text-right text-black">Frontend Development</h3>
              <p className="text-right text-black">HTML, CSS, JavaScript, React, Next.js</p>
            </li>
            <li>
              <h3 className="text-lg font-bold text-right text-black">Mobile Development</h3>
              <p className="text-right text-black">React Native, Flutter, Kotlin</p>
            </li>
            <li>
              <h3 className="text-lg font-bold text-right text-black">Backend Development</h3>
              <p className="text-right text-black">Node.js, Express, MongoDB</p>
            </li>
          </ul>
        </div>
      </section>
      {/* Create experience section, use slider for companies */}
      <section id="experience" className="bg-gray-100 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold">Experience</h2>
          <div className="mt-4">
            <div className="flex space-x-4">
              <div className="w-1/3">
                <h3 className="text-lg font-bold">Frontend Engineer</h3>
                <p>PT IDStar Cipta Teknologi</p>
              </div>
              <div className="w-1/3">
                <h3 className="text-lg font-bold">React Native Engineer</h3>
                <p>PT Telkom Indonesia</p>
              </div>
              <div className="w-1/3">
                <h3 className="text-lg font-bold">React Native Engineer</h3>
                <p>PT Anabatic Teknologies Tbk</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Create project section */}
      <section id="projects" className="py-6 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold text-black">Projects</h2>
          <div className="mt-4">
            <div className="flex space-x-4">
              <div className="w-1/3">
                <h3 className="text-lg font-bold text-black">Arjuna</h3>
                <p className="text-black">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur beatae officia, iure laudantium quas quis expedita! Assumenda, cumque doloribus? Maiores deserunt reiciendis excepturi alias temporibus, dolorem ad vel dicta distinctio?</p>
              </div>
              <div className="w-1/3">
                <h3 className="text-lg font-bold text-black">Bonum POS</h3>
                <p className="text-black">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Assumenda aliquid velit placeat, necessitatibus deserunt quis officiis aliquam dignissimos nemo facilis excepturi in, doloribus maiores est quo commodi tempore pariatur officia.</p>
              </div>
              <div className="w-1/3">
                <h3 className="text-lg font-bold text-black">D-Wallet by Danamon</h3>
                <p className="text-black">Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe aspernatur voluptates nesciunt soluta praesentium, a aliquam. Animi, illum. Voluptatem fuga cupiditate dignissimos? Deserunt, ratione quae laudantium tenetur perferendis voluptates omnis?</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Create footer section, add social media typography */}
      <footer id="footer" className="bg-black py-4 w-full">
        <div className="container mx-auto px-4">
          <ul className="flex justify-end space-x-4">
            <li>
              <a href="https://github.com/mahardikaindra" className="text-white hover:text-[#757575]">Github</a>
            </li>
            <li>
              <a href="https://www.linkedin.com/in/raka-mahardika-792462121/" className="text-white hover:text-[#757575]">LinkedIn</a>
            </li>
          </ul>
        </div>  
        <div className="container mx-auto px-4">
          <p className="text-[#f5f5f5] text-center">© 2021 Raka Mahardika. All rights reserved.</p>
        </div>
      </footer>
    </main>
  );
}

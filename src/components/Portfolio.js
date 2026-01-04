import { FaExternalLinkAlt } from "react-icons/fa";

import RevealOnScroll from "../components/RevealOnScroll";

const portfolioItems = [

  // {
  //   title: "Video Conference App",
  //   description: "Multiple people can join. Can send messages, files, videos etc",
  //   imageUrl: "/images/meet-cover.jpeg",
  //   link: "https://my-meet-client.vercel.app"
  // }, 

  // {
  //   title: "Typing Racer Game",
  //   description: "Learn fast typing. Competite typing with friends.",
  //   imageUrl: "/images/typer-cover.jpeg",
  //   link: "https://typeracer-client-two.vercel.app"
  // },

  {
    title: "Tic Tac Toe ",
    description: "Online Tic Tac Toe. Play with computer",
    imageUrl: "/images/tic-tac-toe-cover.jpeg",
    link: "https://tic-tac-toe-three-ashen-57.vercel.app/"
  },

  // {
  //   title: "Simon Game",
  //   description: "Online game to increase your IQ levels & memory",
  //   imageUrl: "/images/simon-cover.jpeg",
  //   link: "https://pavandongri.github.io/simonGame"
  // },

   {
    title: "NoteGet AI",
    description:
      "NoteGen AI is an advanced chatbot that summarizes PDFs, answers questions, writes stories & jokes, and offers natural conversations — all in one simple, powerful tool",
    imageUrl: "/images/noteGen.jpeg",
    link: " https://note-gen-frontend.vercel.app/ "
  },

  {
    title: "To Do App",
    description:
      "We can store our list of to-todos, add filters, mark and unmark as done.. simple but funny",
    imageUrl: "/images/todo-cover.jpeg",
    link: " https://to-do-app-fawn-one.vercel.app/"
  }

];

const Portfolio = () => {
  return (
    <section
      id="projects"
      className="py-20 px-6 md:px-16 bg-gray-50 dark:bg-gray-950 transition-colors"
    >
      <RevealOnScroll y={30}>
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white text-center mb-12">
          Self <span className="text-blue-500">Projects</span>
        </h2>
      </RevealOnScroll>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12">
        {portfolioItems.map((item, index) => (
          <RevealOnScroll key={index} delay={index * 0.1}>
            <div className="relative group bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-xl transform hover:scale-105 transition-transform duration-300">
              <img
                src={item.imageUrl}
                alt={item.title}
                className="w-full h-64 object-cover group-hover:opacity-80 transition-opacity duration-300"
              />
              <div className="absolute inset-0 flex flex-col justify-center items-center bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-center p-4">
                <h4 className="text-2xl font-semibold text-white mb-2">{item.title}</h4>
                <p className="text-lg text-white mb-4">{item.description}</p>
                <a
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white text-2xl hover:text-blue-500"
                >
                  <FaExternalLinkAlt />
                </a>
              </div>
            </div>
          </RevealOnScroll>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
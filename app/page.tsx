
import Image from "next/image";
export default function Home() {
  return (
    <>
      <header className="discord-gray py-4 px-8 shadow-lg sticky top-0 z-10" style={{ backdropFilter: "blur(10px)", backgroundColor: "rgba(44, 47, 51, 0.8}}" }}>

        <div className="container mx-auto flex justify-between items-center">
          <div className="flex items-center gap-4">
            <Image src="/vegas.png" alt="Ícone do Servidor VEGAS" width="160" height="160" className=" rounded-2xl shadow-2xl w-20 h-20" />
            <h1 className="text-xl font-bold tracking-wider">VEGAS</h1>
          </div>

          <a href="https://discord.gg/wRgAGCE3HW" target="_blank" rel="noopener noreferrer" className="blurple text-center hover-blurple text-white font-bold py-2 px-4 rounded-lg transition-all duration-300 transform hover:scale-105">
            Entrar no Servidor
          </a>
        </div>
      </header>

      <main id="fundo-principal" className="container mx-auto px-6 py-24 text-center" style={{ backgroundImage: "url('https://scontent.fval2-1.fna.fbcdn.net/v/t39.30808-6/473080897_614881557598635_5419600430146045640_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=cc71e4&_nc_ohc=hFlQxJSG5Y0Q7kNvwHgxrv_&_nc_oc=Adndi_tCJv6zP8dv3poIsonRLrvf5m36i1eIV_TgReu5I-RA8pxs1M7aDjog6-_-EME&_nc_zt=23&_nc_ht=scontent.fval2-1.fna&_nc_gid=4LidlTMMUHdV-0VQLTGhjA&oh=00_AfYdQGLtNGwx_-pYQ3SZleqUsJ9_cQsigEkAYVUJA6LTug&oe=68DA1BBF')", backgroundSize: "80% 80%", backgroundPosition: "center", backgroundAttachment: "fixed", backgroundRepeat: "no-repeat" }}>
        <div className="max-w-4xl mx-auto">
          <Image src="/vegas.png" alt="Ícone do Servidor VEGAS" width="160" height="160" className="mx-auto mb-8 rounded-2xl shadow-2xl w-40 h-40" />
          <h2 className="text-4xl md:text-6xl font-extrabold leading-tight mb-4">Bem-vindo ao <span className="blurple-text">----VEGAS----</span></h2>
          <p className="text-lg md:text-xl text-slate-300 mb-8 max-w-2xl mx-auto">Reunindo os piores elementos da sociedade para a zoeira suprema. Se você se ofende fácil, já pode fechar a página.</p>
          <a href="https://discord.gg/wRgAGCE3HW" target="_blank" rel="noopener noreferrer" className="blurple hover-blurple text-white font-bold py-4 px-8 rounded-lg text-lg transition-all duration-300 inline-block shadow-lg transform hover:scale-105">
            Entra aí, se tiver coragem
          </a>
        </div>
      </main>

      <section className="py-20 bg-[#23272A]">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row items-center justify-center gap-12">
            <div className="lg:w-1/3 text-center lg:text-left">
              <h3 className="text-3xl font-bold mb-4">Dá uma olhada nos desocupados!</h3>
              <p className="text-slate-400 mb-6">Veja quem tá online perdendo tempo. Clica pra entrar na conversa, mas cuidado.</p>
              <a href="https://discord.gg/wRgAGCE3HW" target="_blank" rel="noopener noreferrer" className="blurple hover-blurple text-white font-bold py-3 px-6 rounded-lg transition-all duration-300 inline-block shadow-lg transform hover:scale-105">
                Conectar-se
              </a>
            </div>
            <div className="shadow-2xl rounded-lg overflow-hidden">
              <iframe src="https://discord.com/widget?id=911368470539685899&theme=dark" width="350" height="500" sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts"></iframe>
            </div>
          </div>
        </div>
      </section>

      <section id="features" className="bg-[#2C2F33] py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold">Nosso hospício particular</h3>
            <p className="text-slate-400 mt-2">Mais que um servidor, um teste de paciência diário.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="discord-gray p-8 rounded-xl shadow-lg transform hover:scale-105 hover:-translate-y-2 transition-transform duration-300">
              <div className="text-4xl mb-4 blurple-text">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h4 className="text-xl font-semibold mb-2">Sessões de Tilt e Glória</h4>
              <p className="text-slate-400">Aqui a gente joga pra ganhar, mas o mais importante é tiltar o amiguinho. Espere muito rage, xingamentos e talvez uma ou duas jogadas boas.</p>
            </div>
            <div className="discord-gray p-8 rounded-xl shadow-lg transform hover:scale-105 hover:-translate-y-2 transition-transform duration-300">
              <div className="text-4xl mb-4 blurple-text">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
              </div>
              <h4 className="text-xl font-semibold mb-2">Fábrica de Shitposting</h4>
              <p className="text-slate-400">O esgoto da internet concentrado num só lugar. Daqui saem os memes que vão destruir sua reputação e as conversas que não deveriam ver a luz do dia.</p>
            </div>
            <div className="discord-gray p-8 rounded-xl shadow-lg transform hover:scale-105 hover:-translate-y-2 transition-transform duration-300">
              <div className="text-4xl mb-4 blurple-text">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M15 21a6 6 0 00-9-5.197m0 0A10.99 10.99 0 0112 5.197 10.99 10.99 0 0115 15.803" />
                </svg>
              </div>
              <h4 className="text-xl font-semibold mb-2">Amizade à Prova de Bala</h4>
              <p className="text-slate-400">Anos aturando uns aos outros. Este servidor é só a prova de que nossa amizade sobrevive a qualquer nível de caos. Entra pra ver por quê.</p>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-[#23272A] py-6">
        <div className="container mx-auto text-center text-slate-500">
          <p>&copy; 2024 | ----VEGAS----. Não nos responsabilizamos pela sua sanidade.</p>
        </div>
      </footer>
    </>
  );
}

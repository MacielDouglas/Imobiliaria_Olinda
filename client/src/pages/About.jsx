export default function About() {
  return (
    <div className="py-20 px-4 max-w-6xl mx-auto">
      <h1 className="text-3xl text-center font-bold mb-8 text-slate-800 font-poppins">
        Sobre Olinda Imóveis
      </h1>
      <p className="mb-4 text-slate-700">
        <span className="font-bold">Olinda Imóveis</span> é uma imobiliária
        fictícia.
      </p>
      <p className="mb-4 text-slate-700">
        Foi criada como projeto de estudo para aplicar os conhecimentos de
        desenvolvedor <span className="font-semibold">Full-Stack</span> tendo
        como <span className="font-semibold">´MERN´</span> de referencia para o
        projeto, com as tecnologias de{' '}
        <span className="font-semibold">REACT</span> e{' '}
        <span className="font-semibold">Node.js</span>. Em seu desenvolvimento{' '}
        <span className="font-semibold">Front-End</span> foi usada as
        bibliotecas:
      </p>
      <ul className="mb-7 mx-4 text-slate-700">
        <li>react</li>
        <li>react-dom</li>
        <li>react-icons</li>
        <li>reduxjs/toolkit</li>
        <li>firebase</li>
        <li>react-router-dom</li>
        <li>redux-persist</li>
        <li> swiper</li>
      </ul>
      <p className="mb-4 text-slate-700">
        Já no desenvolvimento <span className="font-semibold">Back-End</span>{' '}
        foi desenvolvido em <span className="font-semibold">Node.js</span>.{' '}
        <br /> Sendo possível fazer os seguintes processos:
      </p>
      <ul className="mb-7 mx-6 text-slate-700">
        <li>
          Criar conta de usuário usando email ou por meio de login via google.
        </li>
        <li>Remover conta de usuário da plataforma.</li>
        <li>Cadastrar, editar ou remover um imóvel para venda ou aluguel.</li>
        <li>
          Enviar uma mensagem (email) ao proprietário do imóvel{' '}
          <span className="italic">
            (para esse recurso é necessário estar logado no site.)
          </span>{' '}
        </li>
        <li>Fazer pesquisa de imóveis por nome ou tipo.</li>
      </ul>
      <p className="mb-6 text-slate-700">Espero que goste deste projeto.</p>
    </div>
  );
}

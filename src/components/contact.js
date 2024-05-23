export default function Contact() {
  return (
    <div data-aos="zoom-in" className="text-primary md:w-5/12 lg:w-5/12">
      <h1 className="uppercase font-bold text-xl md:text-4xl lg:text-4xl pb-3">
        {' '}
        Contate-me{' '}
      </h1>
      <p>
        {' '}
        Estou sempre disposta a novos desafios e novas oportunidades,
        principalmente quando essas podem me trazer um crescimento pessoal e
        profissional. Entre em contato!{' '}
      </p>
      <form action="https://formsubmit.co/isamarsques@gmail.com" method="POST">
        <div className="flex flex-col gap-1 mt-5">
          <input type="hidden" name="_captcha" value="false" />
          <input type="text" name="_honey" style={{ display: 'none' }} />
          <input type="hidden" name="_template" value="basic" />
          <input type="hidden" name="_next" value="https://portfolio-isamsms-projects.vercel.app/thankyou"/>
          <input
            type="hidden"
            name="_autoresponse"
            value="Obrigada pelo contato! Retornarei assim que possível."
          />
          <label className="block mb-2 font-medium text-primary">Nome:</label>
          <input
            type="text"
            name="name"
            required
            className="block w-full p-2.5 text-primary border border-secundary rounded-lg bg-secundary focus:primary focus:border-primary"
          />
        </div>
        <div className="flex flex-col gap-1 mt-5">
          <label className="block mb-2 font-medium text-primary">Email:</label>
          <input
            type="email"
            name="email"
            required
            className="block w-full p-2.5 text-primary border border-secundary rounded-lg bg-secundary focus:primary focus:border-primary"
          />
        </div>
        <div className="flex flex-col gap-1 mt-5">
          <label className="block mb-2 font-medium text-primary">
            Mensagem:
          </label>
          <textarea
            type="text"
            name="message"
            required
            className="block w-full p-2.5 text-primary border border-secundary rounded-lg bg-secundary focus:primary focus:border-primary"
          />
        </div>
        <div>
          <button
            type="submit"
            className="text-white bg-primary hover:bg-primary focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 mt-5"
          >
            {' '}
            Enviar{' '}
          </button>
        </div>
      </form>
    </div>
  )
}

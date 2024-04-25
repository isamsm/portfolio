export default function Contact() {
  return (
    <div data-aos="zoom-in" className="text-primary md:w-5/12 lg:w-5/12">
      <h1 className="uppercase font-bold text-xl md:text-4xl lg:text-4xl pb-3">
        {' '}
        Contate-me{' '}
      </h1>
      <h2 className="text-md">
        {' '}
        Estou sempre disposta a novos desafios e novas oportunidades,
        principalmente quando essas podem me trazer um crescimento pessoal e
        profissional. Entre em contato!{' '}
      </h2>
      <form id="fs-frm" action="https://formspree.io/f/xpzvkele" method="POST">
        <fieldset id="fs-frm-inputs" className="flex flex-col gap-5 mt-5">
          <div>
            <label htmlFor="name" className="block mb-2 font-medium text-primary">
              Nome
            </label>
            <input
              type="text"
              name="name"
              required
              className="block w-full p-2.5 text-primary border border-secundary rounded-lg bg-secundary focus:primary focus:border-primary"
            />
          </div>
          <div>
            <label htmlFor="email" className="block mb-2 font-medium text-primary">
              Email
            </label>
            <input
              type="email"
              name="email"
              required
              className="block w-full p-2.5 text-primary border border-secundary rounded-lg bg-secundary focus:primary focus:border-primary"
            />
          </div>
          <div>
            <label
              htmlFor="message"
              className="block mb-2 font-medium text-primary"
            >
              Mensagem
            </label>
            <textarea
              type="text"
              name="message"
              required
              className="block w-full p-2.5 text-primary border border-secundary rounded-lg bg-secundary focus:primary focus:border-primary"
            />
          </div>
        </fieldset>
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

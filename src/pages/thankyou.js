export default function ThankYou() {
  return (
    <div className="gradient-background h-screen flex justify-center items-center text-center">
      <div
        data-aos="zoom-in"
        className="text-primary flex flex-col lg:w-8/12 gap-5"
      >
        <div>
          <h1 className="uppercase font-bold text-2xl lg:text-4xl pb-1 lg:pb-3">
            {' '}
            Sua mensagem foi enviada com sucesso!{' '}
          </h1>
          <h2 className="text-md font">Obrigada pelo contato!</h2>
        </div>
      </div>
    </div>
  )
}

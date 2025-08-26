const NotFoundPage: React.FC = () => {
  return (
    <div>
      <div className="flex flex-col items-center my-24 text-center bg-white">
        <h1 className="text-[180px] font-extrabold leading-[160px] text-[#4e4e50]">404</h1>
        <h1 className="2xl:text-6xl font-normal mb-4 text-[#343435]">Página no encontrada</h1>
        <p className="xl:text-lg 2xl:text-lg text-[#58595b]">
          Lo sentimos, pero no podemos encontrar la página que estabas buscando.
        </p>
      </div>
    </div>
  );
};

export default NotFoundPage;

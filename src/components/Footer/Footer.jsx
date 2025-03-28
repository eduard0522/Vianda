import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-white text-gray-700 py-10 border-t">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8">

        <div>
        <h2 className="flex text-2xl"> <span className="bg-Primary-600 rounded-sm px-1 text-center flex items-center justify-center text-white"> V </span> ianda
        </h2>
          <p className="mt-2 text-sm">Saborea el arte donde cada plato es una obra maestra culinaria.</p>
          <div className="flex space-x-3 mt-4">
            <FaFacebookF className="text-green-600 text-xl cursor-pointer" />
            <FaInstagram className="text-green-600 text-xl cursor-pointer" />
            <FaTwitter className="text-green-600 text-xl cursor-pointer" />
            <FaYoutube className="text-green-600 text-xl cursor-pointer" />
          </div>
        </div>
        
        <div>
          <h3 className="text-lg font-semibold"> Nosotros </h3>
          <ul className="mt-2 space-y-2 text-sm">
            <li><a href="#" className="hover:text-green-600">Servicios </a></li>
            <li><a href="#" className="hover:text-green-600">Eventos</a></li>
            <li><a href="#" className="hover:text-green-600">Blogs</a></li>
            <li><a href="#" className="hover:text-green-600">FAQ</a></li>
          </ul>
        </div>
        
        <div>
          <h3 className="text-lg font-semibold"> Menu </h3>
          <ul className="mt-2 space-y-2 text-sm">
            <li><a href="#" className="hover:text-green-600">Inicio</a></li>
            <li><a href="#" className="hover:text-green-600">Ofertas</a></li>
            <li><a href="#" className="hover:text-green-600">Menus</a></li>
            <li><a href="#" className="hover:text-green-600">Reservación</a></li>
          </ul>
        </div>
        
 
        <div>
          <h3 className="text-lg font-semibold">Contactanos</h3>
          <ul className="mt-2 space-y-2 text-sm">
            <li>vianda@email.com</li>
            <li>+57 320 569 72 43</li>
            <li><a href="#" className="hover:text-green-600">Social media</a></li>
          </ul>
        </div>
      </div>
      
      {/* Copyright */}
      <div className="text-center text-sm text-gray-500 mt-6 border-t pt-4">
        Copyright &copy; 2025  || Desarrollado por Vianda
      </div>
    </footer>
  );
};

export default Footer;

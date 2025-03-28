import ProductCatalog from "../ProductCatalog/ProductCatalog"

ProductCatalog

const SpecialDishes = () => {
  return(
    <section className="mt-24">
        <div className="w-[400px]">
          <h2 className=" text-red-400 uppercase text-sm font-bold"> Platos Especiales  </h2>
          <h3 className="text-3xl font-bold mt-4"> Platos destacados de nuestro Menú</h3>
        </div>
        <ProductCatalog />
    </section>
  )
}

export default SpecialDishes
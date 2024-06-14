import Item from "../components/Item";
import POPULAR from "../assets/popular"


const RelatedProducts = () => {
  return (
    <div>
      <section className="py-8 xl:m-4 md:m-4 sm:m-4">
      <div className="max_padd_cintainer py-12  xl:[88%]">
        <h3 className="text-3xl font-bold text-center mb-8">
          Related Products
        </h3>
        <hr className="mb-8 mx-auto h-[3px] md:w-1/2 " />

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 ">
          {POPULAR.map((item) => (
            <Item
              key={item.id}
              id={item.id}
              image={item.image}
              name={item.name}
              old_price={item.old_price}
              new_price={item.new_price}
            />
          ))}
        </div>
      </div>
    </section>
    
    </div>
  )
}

export default RelatedProducts

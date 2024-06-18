
import { products } from "@/constants"
import { PopularProductCard } from "./ProductCard"
import { Fragment } from "react"

export const PopularProducts = () => {
  return (
    <section
      id="products"
      className="max-container max-sm:mt-12"
    >
      <div className="flex flex-col justify-start gap-5">
        <h2 className="text-4xl font-bold">Our <span className="text-[#EF9C66]">Popular</span> Products</h2>
        <p className="lg:max-w-lg mt-2 text-slate-gray text-lg leading-7">Lorem ipsum dolor sit amet consectetur, adipisicing elit. A optio recusandae minima officia officiis consectetur, ç
          totam amet, aspernatur, inventore vel id dolores. Nostrum non quisquam officia delectus
          natus, tempora esse!
        </p>
      </div>

      <div className="mt-16 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 sm:gap-4 gap-14">
        {products.map(({ imgURL, name, price }) => (
          <Fragment key={name}>
            <PopularProductCard img={imgURL} name={name} price={price} />
          </Fragment>
        ))}
      </div>
    </section>
  )
}
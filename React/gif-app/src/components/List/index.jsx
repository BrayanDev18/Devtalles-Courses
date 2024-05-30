import { Fragment } from "react"
import PropTypes from 'prop-types'
import { ListGifItem } from "./item"

export const ListGifs = ({ categories = [] }) => {
  return (
    <>
      {
        categories.length > 0 ? (
          <div className="flex flex-wrap gap-3 justify-center items-center">
            {categories?.map((category) => (
              <Fragment key={category}>
                <ListGifItem {...{ category }} />
              </Fragment>
            ))}
          </div>
        ) : (
          <div className="grid justify-center">
            <div className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white text-center">Hey there!</h5>
              <p className="font-normal text-gray-700 dark:text-gray-400">You can start searching in the input </p>
            </div>
          </div>
        )
      }
    </>
  )
}

ListGifs.propTypes = {
  categories: PropTypes.array.isRequired
}


import React from "react";

function BookCard({ item }) {
  return (
    <>
      <div className="my-6 hover:scale-105 transition-all duration-300 cursor-pointer relative">
        <div className="card bg-base-100 w-96 md:w-80 md:h-[600px] shadow-xl border dark:bg-slate-900 dark:text-white dark:border">
          <figure className="p-8">
            <img
              src={item.image}
              className="rounded-lg"
              width={300}
              height={169}
              alt="Shoes"
            />
          </figure>
          <hr />
          <div className="card-body">
            <h2 className="card-title">
              {item.name}
              <div className="badge badge-secondary">NEW</div>
            </h2>
            <p>{item.title}</p>
            <div className="card-actions justify-between">
              <div className="badge badge-outline p-4 ">{item.category}</div>
              <div className="badge badge-outline p-4 ">${item.price}</div>
              <div className="badge badge-outline p-4 hover:bg-pink-500 hover:text-white cursor-pointer">
                Buy Now
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default BookCard;

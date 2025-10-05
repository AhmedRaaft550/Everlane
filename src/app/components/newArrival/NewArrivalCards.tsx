import Image from "next/image";
import { getNewArrival } from "@/app/apiServer";
import { NewArrivalResponse } from "@/app/types/app";
import React from "react";

const NewArrivalCards = async () => {
  const data: NewArrivalResponse = await getNewArrival();

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3  gap-8">
        {data?.sections?.map((section) => (
          <div
            key={section.id}
            className="bg-white rounded-3xl shadow-lg overflow-hidden transform transition duration-200 hover:scale-102 hover:shadow-2xl"
          >
            <div className="relative w-full h-64 md:h-80">
              <Image
                src={section.image}
                alt={section.name}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                priority={true}
              />
            </div>
            <div className="p-4 flex flex-col justify-between h-23 text-center">
              <h3 className="text-lg uppercase  md:text-xl font-semibold text-gray-800">
                {section.name}
              </h3>
              <p className="text-gray-500 text-sm md:text-base mt-2 line-clamp-2">
                {section.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

const MemoArrival = React.memo(NewArrivalCards);

export default MemoArrival;

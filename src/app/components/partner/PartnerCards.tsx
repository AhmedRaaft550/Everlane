import { getPartner } from "@/app/apiServer";
import { PartnerTypes } from "@/app/types/app";
import Image from "next/image";

const PartnerCards = async () => {
  const data: PartnerTypes[] = await getPartner();

  return (
    <div className="grid grid-cols-2  sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8 px-6 sm:px-12 lg:px-24">
      {data.map((partner) => (
        <div
          key={partner.id}
          className=" group  flex items-center justify-center p-6 bg-white shadow-sm rounded-2xl border border-gray-100 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 hover:border-gray-200"
        >
          <Image
            src={partner.image}
            alt={partner.name}
            width={100}
            height={100}
            className="object-cover transition-transform duration-300 w-auto "
            loading="lazy"
          />

          <div className="absolute inset-0 rounded-2xl bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        </div>
      ))}
    </div>
  );
};

export default PartnerCards;

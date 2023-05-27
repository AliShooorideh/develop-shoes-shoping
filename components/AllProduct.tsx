import Image from "next/image";

interface IProduct {
  src: string;
  discount?: number;
  title: string;
  brand: string;
  price: number;
}
export default function AllProduct(item: IProduct) {
  return (
    <div className="flex items-start justify-between whitespace-nowrap rounded-2xl py-[25px] ">
      <div className="flex items-center justify-between space-x-3">
        <div className="flex flex-col text-xl font-semibold ">
          <div className="flex items-center space-x-3">
            <span>{item.brand}</span>
            <span className="rounded-full bg-[#FF2A2A] p-1 px-2 text-sm font-semibold text-white">
              % {item.discount}
            </span>
          </div>
          <div className="flex space-x-2">
            <span>{item.title}</span>
            <span className="text-xl font-bold">${item.price}</span>
          </div>
        </div>
      </div>
      <Image
        className="ml-3 w-32 object-contain "
        src={item.src}
        alt=""
        loading="lazy"
        width="0"
        height="0"
        sizes="100vw"
      />
    </div>
  );
}

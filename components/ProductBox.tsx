import Image from "next/image";
import Link from "next/link";

interface IProduct {
  bg: string;
  src: string;
  new?: boolean;
  title: string;
  brand: string;
  price: number;
}
export default function ProductBox(item: IProduct) {
  return (
    <Link href={"/product"}>
      <div
        className={`${item.bg} relative mb-4 flex flex-col items-start justify-center whitespace-nowrap rounded-2xl px-5 py-[25px] hover:shadow-lg`}
      >
        {item.new && (
          <span className="absolute left-5 top-5 rounded-lg bg-[#FF2A2A] p-1 text-sm font-semibold text-white">
            New
          </span>
        )}
        <Image
          className="w-full object-contain "
          src={item.src}
          alt=""
          loading="lazy"
          width="0"
          height="0"
          sizes="100vw"
        />
        <div className="flex items-center justify-between space-x-3">
          <div className="flex flex-col font-semibold">
            <span>{item.brand}</span>
            <span>{item.title}</span>
          </div>
          <span className="text-2xl font-bold">${item.price}</span>
        </div>
      </div>
    </Link>
  );
}

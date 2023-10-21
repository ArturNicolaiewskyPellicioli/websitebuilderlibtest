import { IGrid4 } from "./types";

export const Grid4 = ({ title, items }: IGrid4) => {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <h2 className="text-center font-bold text-3xl lg:text-4xl font-semibold leading-8 text-gray-900">
          {title}
        </h2>
        <div className="mx-auto mt-10 flex flex-wrap max-w-3xl items-center justify-center gap-8">
          {items?.map((item) => (
            <img
              className="object-contain"
              src={item?.src}
              alt={item?.alt}
              width={150}
              height={150}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

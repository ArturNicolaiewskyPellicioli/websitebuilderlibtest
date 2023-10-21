import Link from "next/link";
import { IGrid5 } from "./types";

export const Grid5 = ({ title, subtitle, items }: IGrid5) => {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8 flex flex-col items-center">
        {(title || subtitle) && (
          <div className="mx-auto max-w-2xl text-center">
            {title && (
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                {title}
              </h2>
            )}
            {subtitle && (
              <p className="mt-2 text-lg leading-8 text-gray-600">{subtitle}</p>
            )}
          </div>
        )}
        <div className="mx-auto w-full mt-16 grid max-w-2xl auto-rows-fr grid-cols-1 gap-10 sm:mt-20 lg:mx-0 lg:max-w-4xl lg:grid-cols-3">
          {items?.map((item) => (
            <article
              key={item?.id}
              className="relative isolate flex flex-col items-center overflow-hidden rounded-2xl bg-gray-900 px-8 pb-8 pt-80 sm:pt-48 lg:pt-80"
            >
              <img
                src={item?.src}
                alt=""
                className="absolute inset-0 -z-10 h-3/4 w-full object-cover"
              />
              <div className="absolute inset-0 h-3/4 -z-9 bg-gradient-to-t from-gray-900 from-5% via-transparent to-transparent" />
              <div className="absolute inset-0 h-3/4 -z-9 rounded-2xl ring-1 ring-inset ring-gray-900/10" />

              <span className="text-white">{item?.subtitle}</span>
              <h3 className="mt-3 text-4xl font-semibold leading-6 text-white">
                <Link href={item?.href}>
                  <span className="absolute inset-0" />
                  {item?.title}
                </Link>
              </h3>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
};

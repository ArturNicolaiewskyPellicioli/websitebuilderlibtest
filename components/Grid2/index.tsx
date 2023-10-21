import Link from "next/link";
import { IGrid2 } from "./types";

export const Grid2 = ({ title, subtitle, items }: IGrid2) => {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
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
        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {items.map((item) => (
            <article
              key={item?.id}
              className="flex flex-col items-start justify-between"
            >
              <div className="relative w-full">
                <img
                  src={item?.src}
                  alt=""
                  className="aspect-[16/9] w-full rounded-2xl bg-gray-100 object-cover sm:aspect-[2/1] lg:aspect-[3/2]"
                />
                <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-gray-900/10" />
              </div>
              <div className="max-w-xl">
                {(item?.date || item?.category) && (
                  <div className="mt-8 flex items-center gap-x-4 text-xs">
                    {item?.date && (
                      <time dateTime={item?.datetime} className="text-gray-500">
                        {item?.date}
                      </time>
                    )}
                    {item?.category && (
                      <Link
                        href={item?.category.href}
                        className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100"
                      >
                        {item?.category.title}
                      </Link>
                    )}
                  </div>
                )}
                <div className="group relative">
                  <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                    <Link href={item?.href}>
                      <span className="absolute inset-0" />
                      {item?.title}
                    </Link>
                  </h3>
                  <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">
                    {item?.description}
                  </p>
                </div>
                {item?.author && (
                  <div className="relative mt-8 flex items-center gap-x-4">
                    <img
                      src={item?.author.src}
                      alt=""
                      className="h-10 w-10 rounded-full bg-gray-100"
                    />
                    <div className="text-sm leading-6">
                      <p className="font-semibold text-gray-900">
                        <Link href={item?.author.href}>
                          <span className="absolute inset-0" />
                          {item?.author.name}
                        </Link>
                      </p>
                      <p className="text-gray-600">{item?.author.role}</p>
                    </div>
                  </div>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
};

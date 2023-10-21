import Link from "next/link";
import { IGrid1 } from "./types";

export const Grid1 = ({ title, subtitle, items }: IGrid1) => {
  return (
    <div className="bg-white py-32">
      <div className="mx-auto max-w-7xl px-6 text-center lg:px-8">
        <div className="mx-auto max-w-2xl">
          {title && (
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              {title}
            </h2>
          )}
          {subtitle && (
            <p className="mt-4 text-lg leading-8 text-gray-600">{subtitle}</p>
          )}
        </div>
        <ul
          role="list"
          className="mx-auto mt-20 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:grid-cols-3 lg:mx-0 lg:max-w-none lg:grid-cols-5"
        >
          {items?.map((item) => (
            <li key={item?.title}>
              <img
                className="mx-auto h-56 w-44 object-cover"
                src={item?.src}
                alt={item?.title}
              />
              <h3 className="mt-6 text-base font-semibold leading-7 tracking-tight text-gray-900">
                {item?.title}
              </h3>
              <p className="text-sm leading-6 text-gray-600">
                {item?.subtitle}
              </p>
              <ul role="list" className="mt-6 flex justify-center gap-x-6">
                {item?.socialLinks?.map((link) => (
                  <li>
                    <Link
                      href={link?.href}
                      className="text-gray-400 hover:text-gray-500"
                    >
                      <span className="sr-only">{link?.name}</span>
                      <img
                        className="h-5 w-5"
                        aria-hidden="true"
                        src={link?.src}
                        alt={link?.name}
                      />
                    </Link>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

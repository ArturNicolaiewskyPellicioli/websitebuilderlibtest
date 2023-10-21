import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import { IGrid3 } from "./types";
import Link from "next/link";

export const Grid3 = ({
  title,
  searchType,
  searchPlaceholder,
  searchAutoComplete,
  items,
}: IGrid3) => {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          {title && (
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl">
              {title}
            </h2>
          )}
          <div className="relative mt-6 rounded-md shadow-sm mx-auto max-w-[300px]">
            <input
              type={searchType}
              name="account-number"
              id="account-number"
              className="block w-full rounded-md border-0 py-1.5 pl-2 pr-10 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              placeholder={searchPlaceholder}
              autoComplete={searchAutoComplete}
            />
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
              <MagnifyingGlassIcon
                className="h-5 w-5 text-gray-400"
                aria-hidden="true"
              />
            </div>
          </div>
        </div>
        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {items.map((item) => (
            <article
              key={item?.id}
              className="flex flex-col gap-6 items-center text-center"
            >
              <span className=" font-bold text-xl text-gray-900">
                {item?.date}
              </span>
              <div className="flex items-center gap-4">
                <img
                  className="h-14 w-14 object-contain"
                  src={item?.homeTeamSrc}
                  alt=""
                />
                <span className="font-bold text-gray-900 text-3xl">VS</span>
                <img
                  className="h-14 w-14 object-contain"
                  src={item?.awayTeamSrc}
                  alt=""
                />
              </div>

              {item?.homeTeamScore && item?.awayTeamScore && (
                <div className="flex gap-2 font-bold text-gray-900 text-2xl">
                  <span>{item?.homeTeamScore}</span>
                  <span>X</span>
                  <span>{item?.awayTeamScore}</span>
                </div>
              )}

              <div className="flex flex-col text-xs text-gray-900">
                <div className="flex gap-2 justify-center font-bold text-2xl">
                  <span>{item?.homeTeamName}</span>
                  <span>vs</span>
                  <span>{item?.awayTeamName}</span>
                </div>

                <span>{item?.locationName}</span>
                <span>{item?.locationAddress}</span>
              </div>

              <div className="flex gap-2">
                {item?.href1 && (
                  <Link
                    href={item?.href1}
                    className="rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
                  >
                    {item?.href1Text}
                  </Link>
                )}

                {item?.href2 && (
                  <Link
                    href={item?.href2}
                    className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                  >
                    {item?.href2Text}
                  </Link>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
};

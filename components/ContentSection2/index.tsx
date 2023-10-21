import { IContentSection2 } from "./types";

export const ContentSection2 = ({ tag, title }: IContentSection2) => {
  return (
    <div className="bg-white px-6 py-32 lg:px-8">
      <div className="mx-auto max-w-3xl text-base leading-7 text-gray-700">
        {tag && (
          <p className="text-base font-semibold leading-7 text-indigo-600">
            {tag}
          </p>
        )}
        <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          {title}
        </h1>
      </div>
    </div>
  );
};

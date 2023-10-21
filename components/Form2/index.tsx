import { IForm2 } from "./types";

export const Form2 = ({
  title,
  subtitle,
  inputName,
  inputLabel,
  inputPlaceholder,
  submitText,
  inputDescription,
}: IForm2) => {
  return (
    <div className="bg-white py-16 sm:py-24 lg:py-32">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-6 lg:grid-cols-12 lg:gap-8 lg:px-8">
        <div className="max-w-xl font-bold tracking-tight text-gray-900 sm:text-4xl lg:col-span-7">
          <h2 className=" text-4xl">{title}</h2>
          {subtitle && <p className="font-semibold mt-2 text-xl">{subtitle}</p>}
        </div>
        <form className="w-full max-w-md lg:col-span-5 lg:pt-2">
          <div className="flex gap-x-4">
            <label htmlFor={inputName} className="sr-only">
              {inputName}
            </label>
            <input
              id={inputName}
              name={inputName}
              type={inputName}
              autoComplete={inputName}
              required
              className="min-w-0 flex-auto rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              placeholder={inputPlaceholder}
            />
            <button
              type="submit"
              className="flex-none rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              {submitText}
            </button>
          </div>
          {inputDescription && (
            <p className="mt-1 text-xs leading-6 text-gray-900">
              {inputDescription}
            </p>
          )}
        </form>
      </div>
    </div>
  );
};

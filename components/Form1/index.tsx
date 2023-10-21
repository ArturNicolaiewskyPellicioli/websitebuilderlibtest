import { IForm1 } from "./types";
import { useState } from "react";
import { Switch } from "@headlessui/react";
import Link from "next/link";

function classNames(...classes: any[]) {
  return classes.filter(Boolean).join(" ");
}

export const Form1 = ({
  title,
  description,
  halfLineInputs,
  fullLineInputs,
  textareaInputs,
  switchText,
  switchLinkText,
  switchHref,
  submitButtonText,
}: IForm1) => {
  const [agreed, setAgreed] = useState(false);

  return (
    <div className="bg-white px-6 py-24 sm:py-32 lg:px-8">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          {title}
        </h2>
        <p className="mt-2 text-lg leading-8 text-gray-600">{description}</p>
      </div>
      <form
        action="/"
        method="POST"
        className="mx-auto mt-16 max-w-xl sm:mt-20 max-w-[500px]"
      >
        <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
          {halfLineInputs?.map((halfInput) => (
            <div>
              <label
                htmlFor={halfInput?.label}
                className="block text-sm font-semibold leading-6 text-gray-900"
              >
                {halfInput?.label}
              </label>
              <div className="mt-2.5">
                <input
                  type={halfInput?.type}
                  name={halfInput?.label}
                  id={halfInput?.label}
                  autoComplete={halfInput?.autoComplete}
                  placeholder={halfInput?.placeholder}
                  className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
          ))}

          {fullLineInputs?.map((fullInput) => (
            <div className="sm:col-span-2">
              <label
                htmlFor={fullInput?.label}
                className="block text-sm font-semibold leading-6 text-gray-900"
              >
                {fullInput?.label}
              </label>
              <div className="mt-2.5">
                <input
                  type={fullInput?.type}
                  name={fullInput?.label}
                  id={fullInput?.label}
                  autoComplete={fullInput?.autoComplete}
                  placeholder={fullInput?.placeholder}
                  className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
          ))}

          {textareaInputs?.map((textareaInput) => (
            <div className="sm:col-span-2">
              <label
                htmlFor={textareaInput?.label}
                className="block text-sm font-semibold leading-6 text-gray-900"
              >
                {textareaInput?.label}
              </label>
              <div className="mt-2.5">
                <textarea
                  name={textareaInput?.label}
                  id={textareaInput?.label}
                  placeholder={textareaInput?.placeholder}
                  rows={4}
                  className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  defaultValue=""
                />
              </div>
            </div>
          ))}
          <Switch.Group as="div" className="flex gap-x-4 sm:col-span-2">
            <div className="flex h-6 items-center">
              <Switch
                checked={agreed}
                onChange={setAgreed}
                className={classNames(
                  agreed ? "bg-indigo-600" : "bg-gray-200",
                  "flex w-8 flex-none cursor-pointer rounded-full p-px ring-1 ring-inset ring-gray-900/5 transition-colors duration-200 ease-in-out focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                )}
              >
                <span className="sr-only">Agree to policies</span>
                <span
                  aria-hidden="true"
                  className={classNames(
                    agreed ? "translate-x-3.5" : "translate-x-0",
                    "h-4 w-4 transform rounded-full bg-white shadow-sm ring-1 ring-gray-900/5 transition duration-200 ease-in-out"
                  )}
                />
              </Switch>
            </div>
            <Switch.Label className="text-sm leading-6 text-gray-600">
              {switchText}{" "}
              <Link href={switchHref} className="font-semibold text-indigo-600">
                {switchLinkText}
              </Link>
            </Switch.Label>
          </Switch.Group>
        </div>
        <div className="mt-10">
          <button
            type="submit"
            className="block w-full rounded-md bg-indigo-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            {submitButtonText}
          </button>
        </div>
      </form>
    </div>
  );
};

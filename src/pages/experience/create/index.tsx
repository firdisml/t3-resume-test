import React, { useRef, useState } from "react";
import MainLayout from "../../../../layout/MainLayout";
import { signIn, signOut, useSession, getSession } from "next-auth/react";
import type { GetServerSidePropsContext, GetServerSideProps } from "next";
import { api } from "../../../utils/api";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { SearchIcon, ChevronUpIcon, PlusCircleIcon, BriefcaseIcon, UserIcon } from "@heroicons/react/solid";

function Index(props) {
  const utils = api.useContext();
  const [title, set_title] = useState<any>()
  const [employer, set_employer] = useState<any>()
  const [start_date, set_start_date] = useState<any>()
  const [end_date, set_end_date] = useState<any>()
  const [inputs, setInputs] = useState([]);
  const [values, setValues] = useState([]);
  const create = api.experience.insert.useMutation({
    onSuccess: async () => {
      await utils.invalidate(['experience.fetch']);
    },
  });
  const count = api.experience.count.useQuery({ id: props?.user?.id });

  function handle_create() {
    let index: any = 0
    if (count.data !== 0) {
      index = count.data
    }
    else {
      index = 0;
    }

    create.mutate({
      id: props?.user?.id,
      title: title,
      employer: employer,
      start_date: start_date,
      end_date: end_date,
      description: values,
      index: index,
    });
  }

  const handleAddInput = () => {
    setInputs([...inputs, { id: inputs.length }]);
  };

  const handleChange = (id, value) => {
    const newValues = [...values];
    newValues[id] = value;
    setValues(newValues);
  }

  const handleDelete = (id) => {
    const newInputs = [...inputs].filter((input) => input.id !== id);
    setInputs(newInputs);
    const newValues = [...values].filter((input, index) => index !== id);
    setValues(newValues);
  }

  return (
    <>
      <div className="grid grid-cols-6 gap-6 text-white">
        <div className="col-span-6 flex justify-between">
          <p className="text-xl font-semibold">Create New Experience</p>
          <span><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 00.75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 00-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0112 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 01-.673-.38m0 0A2.18 2.18 0 013 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 013.413-.387m7.5 0V5.25A2.25 2.25 0 0013.5 3h-3a2.25 2.25 0 00-2.25 2.25v.894m7.5 0a48.667 48.667 0 00-7.5 0M12 12.75h.008v.008H12v-.008z" />
          </svg>
          </span>
        </div>
        <div className="col-span-6">
          <label
            htmlFor="first-name"
            className="flex block text-sm font-medium"
          >
            Job Title <span><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="ml-2 w-5 h-5 text-gray-500">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9 5.25h.008v.008H12v-.008z" />
            </svg>
            </span>
          </label>
          <input
            type="text"
            onChange={(e) => { set_title(e.currentTarget.value) }}
            name="first-name"
            id="first-name"
            placeholder="Job Title"
            autoComplete="given-name"
            className="mt-2 block w-full rounded-md border-discord-700 bg-discord-700 shadow-sm sm:text-sm"
          />
        </div>

        <div className="col-span-6">
          <label
            htmlFor="first-name"
            className="flex block text-sm font-medium"
          >
            Employer <span><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="ml-2 w-5 h-5 text-gray-500">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9 5.25h.008v.008H12v-.008z" />
            </svg>
            </span>
          </label>
          <input
            type="text"
            onChange={(e) => { set_employer(e.currentTarget.value) }}
            name="first-name"
            id="first-name"
            placeholder="Employer"
            autoComplete="given-name"
            className="mt-2 block w-full rounded-md border-discord-700 bg-discord-700 shadow-sm sm:text-sm"
          />
        </div>

        <div className="col-span-3">
          <label
            htmlFor="first-name"
            className="flex block text-sm font-medium"
          >
            Start Date <span><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="ml-2 w-5 h-5 text-gray-500">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9 5.25h.008v.008H12v-.008z" />
            </svg>
            </span>
          </label>
          <DatePicker className="mt-2 block w-full rounded-md border-discord-700 bg-discord-700 shadow-sm sm:text-sm" selected={start_date}
            onChange={(date) => set_start_date(date)}
            dateFormat="MM/yyyy"
            showMonthYearPicker />
        </div>

        <div className="col-span-3">
          <label
            htmlFor="first-name"
            className="flex block text-sm font-medium"
          >
            End Date <span><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="ml-2 w-5 h-5 text-gray-500">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9 5.25h.008v.008H12v-.008z" />
            </svg>
            </span>
          </label>
          <DatePicker className="mt-2 block w-full rounded-md border-discord-700 bg-discord-700 shadow-sm sm:text-sm" selected={end_date}
            onChange={(date) => set_end_date(date)}
            dateFormat="MM/yyyy"
            showMonthYearPicker />
        </div>

        <div className="col-span-6">
          <label
            htmlFor="first-name"
            className="flex block text-sm font-medium"
          >
            Description <span><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="ml-2 w-5 h-5 text-gray-500">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9 5.25h.008v.008H12v-.008z" />
            </svg>
            </span>
          </label>
          <div className="mt-1">
          {inputs ? inputs.map((input, index) => (
              <>
                <textarea
                  key={index}
                  id="about"
                  name="about"
                  rows={3}
                  onChange={e => handleChange(index, e.target.value)}
                  value={values[index]}
                  className="mt-2 block w-full rounded-md border-discord-700 bg-discord-700 shadow-sm sm:text-sm"
                  placeholder="Description"
                ></textarea>
                              <button
            className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-lg"
            onClick={() => handleDelete(index)}
          >
            Delete
          </button>
              </>)) : null}
            <button
              type="button"
              onClick={handleAddInput}
              className="mt-5 w-full rounded-md bg-discord-900 py-3 px-3 text-sm font-medium leading-4 text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
            >
              <PlusCircleIcon
                className="text-white  h-4 w-4 mx-auto"
              />
            </button>
          </div>

        </div>
        <div className="col-span-6">
          <button
            type="button"
            onClick={handle_create}
            className="w-full rounded-md bg-discord-900 py-3 px-3 text-sm font-medium leading-4 text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
          >
            Create
          </button>
        </div>
      </div>
    </>
  );
}

Index.PageLayout = MainLayout;

export default Index;

// eslint-disable-next-line @typescript-eslint/require-await
export const getServerSideProps: GetServerSideProps = async (
  ctx: GetServerSidePropsContext
) => {
  const session = await getSession(ctx);
  if (!session)
    return { redirect: { statusCode: 307, destination: "/signin" } };
  return { props: session };
};

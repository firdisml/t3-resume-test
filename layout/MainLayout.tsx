import { type NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import { signIn, signOut, useSession } from "next-auth/react";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import { Prisma } from "@prisma/client";
import { api } from "../src/utils/api";
import { useRouter } from "next/router";
import { Fragment, useState } from "react";
import { Menu, Popover, Disclosure, Transition } from "@headlessui/react";
import { BellIcon, MenuIcon, XIcon } from "@heroicons/react/outline";
import { SearchIcon, ChevronUpIcon, PlusCircleIcon, BriefcaseIcon, UserIcon } from "@heroicons/react/solid";
import {DateTime} from 'luxon'

const user = {
  name: "Tom Cook",
  email: "tom@example.com",
  imageUrl:
    "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
};
const navigation = [
  { name: "Home", href: "#", current: true },
  { name: "Profile", href: "#", current: false },
  { name: "Resources", href: "#", current: false },
  { name: "Company Directory", href: "#", current: false },
  { name: "Openings", href: "#", current: false },
];
const userNavigation = [
  { name: "Your Profile", href: "#" },
  { name: "Settings", href: "#" },
  { name: "Sign out", href: "#" },
];

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

const items = [
  { id: 1 },
  { id: 2 },
  { id: 3 },
  { id: 4 },
  // More items...
];

const Home = ({ ...props }: any) => {
  // eslint-disable-next-line
  const [characters, update_characters] = useState<any>();
  const [loading, set_loading] = useState(false)
  // eslint-disable-next-line
  const experiences = api.experience.fetch.useQuery({ id: props?.children?.props?.user?.id }, {
    onSuccess: (data) => {
      update_characters(data)
    }
  });

  const update = api.experience.updateIndex.useMutation();

  // eslint-disable-next-line
  function handle_on_drag_end(result: any) {
    if (!result.destination) return;
    set_loading(true)
    const items = experiences?.data;
    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItem);
    update_characters(items)
    update_loop(items)
  }
  // eslint-disable-next-line
  function update_loop(items) { //O(n)
    // eslint-disable-next-line
    items.map((item, index) => {
      update.mutate({ id: item.id, index: index })
    })

    set_loading(false)
  }

  return (
    <>
      <div className="min-h-screen bg-discord-900">
        <Popover as="header" className="bg-discord-800 pb-24">
          {({ open }) => (
            <>
              <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:max-w-7xl lg:px-8">
                <div className="relative flex items-center justify-center py-5 lg:justify-between">
                  {/* Logo */}
                  <div className="absolute left-0 flex-shrink-0 lg:static">
                    <a href="#">
                      <span className="sr-only">Workflow</span>
                      <img
                        className="h-8 w-auto"
                        src="https://tailwindui.com/img/logos/workflow-mark-indigo-300.svg"
                        alt="Workflow"
                      />
                    </a>
                  </div>

                  {/* Right section on desktop */}
                  <div className="hidden lg:ml-4 lg:flex lg:items-center lg:pr-0.5">
                    <button
                      type="button"
                      className="flex-shrink-0 rounded-full p-1 text-indigo-200 hover:bg-white hover:bg-opacity-10 hover:text-white focus:outline-none focus:ring-2 focus:ring-white"
                    >
                      <span className="sr-only">View notifications</span>
                      <BellIcon className="h-6 w-6" aria-hidden="true" />
                    </button>

                    {/* Profile dropdown */}
                    <Menu as="div" className="relative ml-4 flex-shrink-0">
                      <div>
                        <Menu.Button className="flex rounded-full bg-white text-sm ring-2 ring-white ring-opacity-20 focus:outline-none focus:ring-opacity-100">
                          <span className="sr-only">Open user menu</span>
                          <img
                            className="h-8 w-8 rounded-full"
                            src={user.imageUrl}
                            alt=""
                          />
                        </Menu.Button>
                      </div>
                      <Transition
                        as={Fragment}
                        leave="transition ease-in duration-75"
                        leaveFrom="transform opacity-100 scale-100"
                        leaveTo="transform opacity-0 scale-95"
                      >
                        <Menu.Items className="absolute -right-2 z-40 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                          {userNavigation.map((item) => (
                            <Menu.Item key={item.name}>
                              {({ active }) => (
                                <a
                                  href={item.href}
                                  className={classNames(
                                    active ? "bg-gray-100" : "",
                                    "block px-4 py-2 text-sm text-gray-700"
                                  )}
                                >
                                  {item.name}
                                </a>
                              )}
                            </Menu.Item>
                          ))}
                        </Menu.Items>
                      </Transition>
                    </Menu>
                  </div>

                  {/* Search */}
                  <div className="min-w-0 flex-1 px-12 lg:hidden">
                    <div className="mx-auto w-full max-w-xs">
                      <label htmlFor="desktop-search" className="sr-only">
                        Search
                      </label>
                      <div className="relative text-white focus-within:text-gray-600">
                        <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                          <SearchIcon className="h-5 w-5" aria-hidden="true" />
                        </div>
                        <input
                          id="desktop-search"
                          className="block w-full rounded-md border border-transparent bg-white bg-opacity-20 py-2 pl-10 pr-3 leading-5 text-gray-900 placeholder-white focus:border-transparent focus:bg-opacity-100 focus:placeholder-gray-500 focus:outline-none focus:ring-0 sm:text-sm"
                          placeholder="Search"
                          type="search"
                          name="search"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Menu button */}
                  <div className="absolute right-0 flex-shrink-0 lg:hidden">
                    {/* Mobile menu button */}
                    <Popover.Button className="inline-flex items-center justify-center rounded-md bg-transparent p-2 text-indigo-200 hover:bg-white hover:bg-opacity-10 hover:text-white focus:outline-none focus:ring-2 focus:ring-white">
                      <span className="sr-only">Open main menu</span>
                      {open ? (
                        <XIcon className="block h-6 w-6" aria-hidden="true" />
                      ) : (
                        <MenuIcon
                          className="block h-6 w-6"
                          aria-hidden="true"
                        />
                      )}
                    </Popover.Button>
                  </div>
                </div>
                <div className="hidden border-t border-white border-opacity-20 py-5 lg:block">
                  <div className="grid grid-cols-3 items-center gap-8">
                    <div className="col-span-2">
                      <nav className="flex space-x-4">
                        {navigation.map((item) => (
                          <a
                            key={item.name}
                            href={item.href}
                            className={classNames(
                              item.current ? "text-white" : "text-indigo-100",
                              "rounded-md bg-white bg-opacity-0 px-3 py-2 text-sm font-medium hover:bg-opacity-10"
                            )}
                            aria-current={item.current ? "page" : undefined}
                          >
                            {item.name}
                          </a>
                        ))}
                      </nav>
                    </div>
                    <div>
                      <div className="mx-auto w-full max-w-md">
                        <label htmlFor="mobile-search" className="sr-only">
                          Search
                        </label>
                        <div className="relative text-white focus-within:text-gray-600">
                          <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                            <SearchIcon
                              className="h-5 w-5"
                              aria-hidden="true"
                            />
                          </div>
                          <input
                            id="mobile-search"
                            className="block w-full rounded-md border border-transparent bg-white bg-opacity-20 py-2 pl-10 pr-3 leading-5 text-gray-900 placeholder-white focus:border-transparent focus:bg-opacity-100 focus:placeholder-gray-500 focus:outline-none focus:ring-0 sm:text-sm"
                            placeholder="Search"
                            type="search"
                            name="search"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <Transition.Root as={Fragment}>
                <div className="lg:hidden">
                  <Transition.Child
                    as={Fragment}
                    enter="duration-150 ease-out"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="duration-150 ease-in"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                  >
                    <Popover.Overlay className="fixed inset-0 z-20 bg-black bg-opacity-25" />
                  </Transition.Child>

                  <Transition.Child
                    as={Fragment}
                    enter="duration-150 ease-out"
                    enterFrom="opacity-0 scale-95"
                    enterTo="opacity-100 scale-100"
                    leave="duration-150 ease-in"
                    leaveFrom="opacity-100 scale-100"
                    leaveTo="opacity-0 scale-95"
                  >
                    <Popover.Panel
                      focus
                      className="absolute inset-x-0 top-0 z-30 mx-auto w-full max-w-3xl origin-top transform p-2 transition"
                    >
                      <div className="divide-y divide-gray-200 rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5">
                        <div className="pt-3 pb-2">
                          <div className="flex items-center justify-between px-4">
                            <div>
                              <img
                                className="h-8 w-auto"
                                src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
                                alt="Workflow"
                              />
                            </div>
                            <div className="-mr-2">
                              <Popover.Button className="inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                                <span className="sr-only">Close menu</span>
                                <XIcon className="h-6 w-6" aria-hidden="true" />
                              </Popover.Button>
                            </div>
                          </div>
                          <div className="mt-3 space-y-1 px-2">
                            <a
                              href="#"
                              className="block rounded-md px-3 py-2 text-base font-medium text-gray-900 hover:bg-gray-100 hover:text-gray-800"
                            >
                              Home
                            </a>
                            <a
                              href="#"
                              className="block rounded-md px-3 py-2 text-base font-medium text-gray-900 hover:bg-gray-100 hover:text-gray-800"
                            >
                              Profile
                            </a>
                            <a
                              href="#"
                              className="block rounded-md px-3 py-2 text-base font-medium text-gray-900 hover:bg-gray-100 hover:text-gray-800"
                            >
                              Resources
                            </a>
                            <a
                              href="#"
                              className="block rounded-md px-3 py-2 text-base font-medium text-gray-900 hover:bg-gray-100 hover:text-gray-800"
                            >
                              Company Directory
                            </a>
                            <a
                              href="#"
                              className="block rounded-md px-3 py-2 text-base font-medium text-gray-900 hover:bg-gray-100 hover:text-gray-800"
                            >
                              Openings
                            </a>
                          </div>
                        </div>
                        <div className="pt-4 pb-2">
                          <div className="flex items-center px-5">
                            <div className="flex-shrink-0">
                              <img
                                className="h-10 w-10 rounded-full"
                                src={user.imageUrl}
                                alt=""
                              />
                            </div>
                            <div className="ml-3 min-w-0 flex-1">
                              <div className="truncate text-base font-medium text-gray-800">
                                {user.name}
                              </div>
                              <div className="truncate text-sm font-medium text-gray-500">
                                {user.email}
                              </div>
                            </div>
                            <button
                              type="button"
                              className="ml-auto flex-shrink-0 rounded-full bg-white p-1 text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                            >
                              <span className="sr-only">
                                View notifications
                              </span>
                              <BellIcon
                                className="h-6 w-6"
                                aria-hidden="true"
                              />
                            </button>
                          </div>
                          <div className="mt-3 space-y-1 px-2">
                            {userNavigation.map((item) => (
                              <a
                                key={item.name}
                                href={item.href}
                                className="block rounded-md px-3 py-2 text-base font-medium text-gray-900 hover:bg-gray-100 hover:text-gray-800"
                              >
                                {item.name}
                              </a>
                            ))}
                          </div>
                        </div>
                      </div>
                    </Popover.Panel>
                  </Transition.Child>
                </div>
              </Transition.Root>
            </>
          )}
        </Popover>
        <main className="-mt-24 pb-8">
          <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:max-w-7xl lg:px-8">
            <h1 className="sr-only">Page title</h1>
            {/* Main 3 column grid */}
            <div className="grid grid-cols-1 items-start gap-4 lg:grid-cols-4 lg:gap-8">
              {/* Left column */}
              <div className="grid grid-cols-1 gap-4 lg:col-span-2">
                <section aria-labelledby="section-1-title">
                  <h2 className="sr-only" id="section-1-title">
                    Section title
                  </h2>

                  <div className="overflow-hidden rounded-lg bg-discord-600 text-white shadow">
                    <div className="space-y-5 p-6">
                      <article className="rounded-xl bg-discord-700 p-4 shadow">
                        <span className="mr-2 inline-flex items-center rounded-md border border-white px-2.5 py-0.5 text-xs font-medium text-white dark:bg-gray-700 dark:text-gray-400">
                          <svg
                            aria-hidden="true"
                            className="mr-1 h-3 w-3"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              fill-rule="evenodd"
                              d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z"
                              clip-rule="evenodd"
                            ></path>
                          </svg>
                          3 days ago
                        </span>
                        <div className="photo-wrapper p-2 ">
                          <picture>
                            <img
                              className="mx-auto h-32 w-32 rounded-full object-cover ring-2 ring-white ring-opacity-60"
                              src="https://scontent.fkul10-1.fna.fbcdn.net/v/t1.6435-9/196845056_4012856522084294_465398478058672849_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=8UaT4wLQ5KgAX95FaCS&_nc_oc=AQmf8qzZHZvlo8v-oh5qMtlAc1v4eHXYM1CwM34YoNicK5SIwjeK5DIeoPir-8RWKnyO9EAHgbcwYkqmPD4Eijr4&_nc_ht=scontent.fkul10-1.fna&oh=00_AfAlnT7yluNVvkZAz55nRYyxf56z26itkNHIx0DOa9qTRw&oe=63E9886C"
                              alt="John Doe"
                            />
                          </picture>
                        </div>
                        <h3 className="text-center text-2xl font-medium leading-8">
                          Mohamad Firdaus Ismail
                        </h3>
                        <p className="text-center text-base text-gray-500 font-medium">Full Stack Developer</p>

                      </article>
                      <Link href={'/profile/update'} className="flex w-full justify-between overflow-hidden rounded-md rounded-md bg-discord-700 px-6 py-4 text-left text-sm font-medium shadow">

                        <p className="flex text-sm text-white"><span><UserIcon
                          className="text-white h-5 w-5 mr-5"
                        /></span>Profile</p>

                      </Link>
                      <Disclosure>
                        {({ open }) => (
                          <>
                            <Disclosure.Button className="flex w-full justify-between overflow-hidden rounded-md rounded-md bg-discord-700 px-6 py-4 text-left text-sm font-medium shadow">
                              <p className="flex text-sm text-white"><span><BriefcaseIcon
                                className="text-white h-5 w-5 mr-5"
                              /></span>Experience</p>
                              <ChevronUpIcon
                                className={`${open ? "rotate-180 transform" : ""
                                  } text-white h-5 w-5`}
                              />
                            </Disclosure.Button>
                            <Disclosure.Panel className="pb-2 text-sm text-gray-500 ">
                              <DragDropContext onDragEnd={handle_on_drag_end}>
                                <Droppable droppableId="characters">
                                  {(provided) => (
                                    <ul
                                      className="characters"
                                      // eslint-disable-next-line
                                      {...provided.droppableProps}
                                      // eslint-disable-next-line
                                      ref={provided.innerRef}
                                    >
                                      {characters ? characters.map((item, index) => (
                                        <Link
                                          key={item.id}
                                          href={`/experience/update/${item.id}`}
                                        >
                                          <Draggable
                                            draggableId={String(item.id)}
                                            isDragDisabled={loading}
                                            index={index}
                                          >
                                            {(provided) => (
                                              // eslint-disable-next-line
                                              <li
                                                // eslint-disable-next-line
                                                {...provided.draggableProps}
                                                // eslint-disable-next-line
                                                {...provided.dragHandleProps}
                                                // eslint-disable-next-line
                                                ref={provided.innerRef}
                                                className="mt-5 overflow-hidden rounded-md bg-discord-500 px-6 py-4 shadow flex"
                                              >
                                                <span><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="text-white w-5 h-5 mr-5 mt-2">
                                                  <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 15L12 18.75 15.75 15m-7.5-6L12 5.25 15.75 9" />
                                                </svg>
                                                </span>
                                                <div className="flex flex-col space-y-1 font-medium">
                                                  <p className="flex text-white font-medium">{item.title}<span className="font-light">{","}{" "}{item.employer}</span></p>
                                                  <p className="text-xs font-medium">{DateTime.fromISO(item.start_date.toISOString()).toFormat('LL/yyyy')} - {DateTime.fromISO(item.end_date.toISOString()).toFormat('LL/yyyy')}</p>
                                                </div>

                                              </li>
                                            )}
                                          </Draggable>
                                        </Link>
                                      )) : null}
                                      {/*eslint-disable-next-line*/}
                                      {provided.placeholder}
                                    </ul>
                                  )}
                                </Droppable>
                              </DragDropContext>
                              <div
                                // eslint-disable-next-line
                                className="mt-5 mx-auto content-center overflow-hidden rounded-md text-white bg-discord-700 px-6 py-4 shadow"
                              >
                                <Link href={"/experience/create"}>
                                  <PlusCircleIcon
                                    className="h-4 w-4 mx-auto"
                                  />
                                </Link>
                              </div>
                            </Disclosure.Panel>
                          </>
                        )}
                      </Disclosure>

                    </div>
                  </div>
                </section>
              </div>

              {/* Right column */}
              <div className="grid grid-cols-1 gap-4 lg:col-span-2">
                <section aria-labelledby="section-2-title">
                  <h2 className="sr-only" id="section-2-title">
                    Section title
                  </h2>
                  <div className="overflow-hidden rounded-lg bg-discord-600 shadow">
                    {/*eslint-disable-next-line*/}
                    <div className="p-6">{props.children}</div>
                  </div>
                </section>
              </div>
            </div>
          </div>
        </main>
        <footer>
          <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:max-w-7xl lg:px-8">
            <div className="border-t border-gray-200 py-8 text-center text-sm sm:text-left">
              <span className="block sm:inline text-white">
                &copy; 2023
              </span>{" "}
              <span className="block sm:inline text-white ">All rights reserved.</span>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
};

export default Home;

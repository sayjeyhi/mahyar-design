import React from "react"

import {
  CloudUploadIcon,
  CogIcon,
  LockClosedIcon,
  RefreshIcon,
  ServerIcon,
  ShieldCheckIcon,
} from "@heroicons/react/outline"

import Hero from "components/Hero"
import Link from "components/Link"

const features = [
  {
    name: "Push to Deploy",
    description:
      "Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi vitae lobortis.",
    icon: CloudUploadIcon,
  },
  {
    name: "SSL Certificates",
    description:
      "Qui aut temporibus nesciunt vitae dicta repellat sit dolores pariatur. Temporibus qui illum aut.",
    icon: LockClosedIcon,
  },
  {
    name: "Simple Queues",
    description:
      "Rerum quas incidunt deleniti quaerat suscipit mollitia. Amet repellendus ut odit dolores qui.",
    icon: RefreshIcon,
  },
  {
    name: "Advanced Security",
    description:
      "Ullam laboriosam est voluptatem maxime ut mollitia commodi. Et dignissimos suscipit perspiciatis.",
    icon: ShieldCheckIcon,
  },
  {
    name: "Powerful API",
    description:
      "Ab a facere voluptatem in quia corrupti veritatis aliquam. Veritatis labore quaerat ipsum quaerat id.",
    icon: CogIcon,
  },
  {
    name: "Database Backups",
    description:
      "Quia qui et est officia cupiditate qui consectetur. Ratione similique et impedit ea ipsum et.",
    icon: ServerIcon,
  },
]
const blogPosts = [
  {
    id: 1,
    title: "Boost your conversion rate",
    href: "#",
    date: "Mar 16, 2020",
    datetime: "2020-03-16",
    category: { name: "Article", href: "#" },
    imageUrl:
      "https://images.unsplash.com/photo-1496128858413-b36217c2ce36?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1679&q=80",
    preview:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto accusantium praesentium eius, ut atque fuga culpa, similique sequi cum eos quis dolorum.",
    author: {
      name: "Roel Aufderehar",
      imageUrl:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
      href: "#",
    },
    readingLength: "6 min",
  },
  {
    id: 2,
    title: "How to use search engine optimization to drive sales",
    href: "#",
    date: "Mar 10, 2020",
    datetime: "2020-03-10",
    category: { name: "Video", href: "#" },
    imageUrl:
      "https://images.unsplash.com/photo-1547586696-ea22b4d4235d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1679&q=80",
    preview:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit facilis asperiores porro quaerat doloribus, eveniet dolore. Adipisci tempora aut inventore optio animi., tempore temporibus quo laudantium.",
    author: {
      name: "Brenna Goyette",
      imageUrl:
        "https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
      href: "#",
    },
    readingLength: "4 min",
  },
  {
    id: 3,
    title: "Improve your customer experience",
    href: "#",
    date: "Feb 12, 2020",
    datetime: "2020-02-12",
    category: { name: "Case Study", href: "#" },
    imageUrl:
      "https://images.unsplash.com/photo-1492724441997-5dc865305da7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1679&q=80",
    preview:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint harum rerum voluptatem quo recusandae magni placeat saepe molestiae, sed excepturi cumque corporis perferendis hic.",
    author: {
      name: "Daniela Metz",
      imageUrl:
        "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
      href: "#",
    },
    readingLength: "11 min",
  },
]

const Index = () => {
  return (
    <div>
      <Hero />

      {/* Feature section with screenshot */}
      <div className="pt-16 relative sm:pt-24 lg:pt-32">
        <div className="mx-auto max-w-md text-center px-4 sm:max-w-3xl sm:px-6 lg:max-w-7xl lg:px-8">
          <div>
            <h2 className="font-semibold text-base text-primary-red tracking-wider uppercase">
              Serverless
            </h2>
            <p className="font-extrabold mt-2 tracking-tight text-3xl text-gray-900 sm:text-4xl">
              No server? No problem.
            </p>
            <p className="mx-auto max-w-prose mt-5 text-xl text-gray-500">
              Phasellus lorem quam molestie id quisque diam aenean nulla in.
              Accumsan in quis quis nunc, ullamcorper malesuada. Eleifend
              condimentum id viverra nulla.
            </p>
          </div>
          <div className="mt-12 -mb-10 sm:-mb-24 lg:-mb-80">
            <img
              className="rounded-lg shadow-xl ring-black ring-1 ring-opacity-5"
              src="https://images.unsplash.com/photo-1597673030062-0a0f1a801a31?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8"
              alt=""
            />
          </div>
        </div>
      </div>

      {/* Feature section with grid */}
      <div className="bg-white py-16 relative sm:py-24 lg:py-32">
        <div className="mx-auto max-w-md text-center px-4 sm:max-w-3xl sm:px-6 lg:max-w-7xl lg:px-8">
          <h2 className="font-semibold text-base text-primary-red tracking-wider uppercase">
            Deploy faster
          </h2>
          <p className="font-extrabold mt-2 tracking-tight text-3xl text-gray-900 sm:text-4xl">
            Everything you need to deploy your app
          </p>
          <p className="mx-auto max-w-prose mt-5 text-xl text-gray-500">
            Phasellus lorem quam molestie id quisque diam aenean nulla in.
            Accumsan in quis quis nunc, ullamcorper malesuada. Eleifend
            condimentum id viverra nulla.
          </p>
          <div className="mt-12">
            <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
              {features.map((feature) => (
                <div key={feature.name} className="pt-6">
                  <div className="rounded-lg bg-gray-50 px-6 pb-8 flow-root">
                    <div className="-mt-6">
                      <div>
                        <span className="bg-gradient-to-r from-primary-red to-primary-yellow rounded-md shadow-lg p-3 inline-flex items-center justify-center">
                          <feature.icon
                            className="h-6 text-white w-6"
                            aria-hidden="true"
                          />
                        </span>
                      </div>
                      <h3 className="font-medium mt-8 text-lg tracking-tight text-gray-900">
                        {feature.name}
                      </h3>
                      <p className="mt-5 text-base text-gray-500">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Blog section */}
      <div className="py-16 relative sm:py-24 lg:py-32">
        <div className="relative">
          <div className="mx-auto max-w-md text-center px-4 sm:max-w-3xl sm:px-6 lg:max-w-7xl lg:px-8">
            <h2 className="font-semibold text-base text-primary-red tracking-wider uppercase">
              Learn
            </h2>
            <p className="font-extrabold mt-2 tracking-tight text-3xl text-gray-900 sm:text-4xl">
              Helpful Resources
            </p>
            <p className="mx-auto max-w-prose mt-5 text-xl text-gray-500">
              Phasellus lorem quam molestie id quisque diam aenean nulla in.
              Accumsan in quis quis nunc, ullamcorper malesuada. Eleifend
              condimentum id viverra nulla.
            </p>
          </div>
          <div className="mx-auto max-w-md mt-12 grid px-4 gap-8 sm:max-w-lg sm:px-6 lg:max-w-7xl lg:px-8 lg:grid-cols-3">
            {blogPosts.map((post) => (
              <Link
                key={post.id}
                href={post.href}
                className="rounded-lg flex flex-col shadow-lg overflow-hidden"
              >
                <div className="flex-shrink-0">
                  <img
                    className="object-cover h-48 w-full"
                    src={post.imageUrl}
                    alt=""
                  />
                </div>
                <div className="bg-white flex flex-col flex-1 p-6 justify-between">
                  <div className="flex-1">
                    <p className="font-medium text-sm text-primary-red">
                      {post.category.name}
                    </p>
                    <p className="font-semibold text-xl text-gray-900">
                      {post.title}
                    </p>
                    <p className="mt-3 text-base text-gray-500">
                      {post.preview}
                    </p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Contact Section */}
      <div className="bg-white relative">
        <div className="h-56 relative sm:h-72 md:h-full md:left-0 md:w-1/2 md:absolute">
          <img
            className="h-full object-cover w-full"
            src="/assets/images/hello.jpg"
            alt=""
          />
          <div
            aria-hidden="true"
            className="bg-gradient-to-r from-primary-purple to-primary-pink inset-0 absolute mix-blend-multiply"
          />
        </div>
        <div className="mx-auto max-w-md py-12 px-4 relative sm:max-w-7xl sm:py-20 sm:px-6 md:py-28 lg:py-32 lg:px-8">
          <div className="md:ml-auto md:pl-10 md:w-1/2">
            <h2 className="font-semibold text-base tracking-wider uppercase">
              Contact me
            </h2>
            <h1 className="font-extrabold mt-2 tracking-tight text-3xl text-gray-900 sm:text-4xl">
              Get in touch
            </h1>
            <p className="mt-3 text-lg ">
              If you want to drop a friendly hello or make a business
              proposition, here you will find all the ways to reach me.
            </p>
            <div className="mt-8">
              <div className="rounded-md shadow inline-flex">
                <Link
                  href="/contact"
                  className="bg-white border border-transparent rounded-md font-medium text-base py-3 px-5 text-gray-900 inline-flex items-center justify-center hover:bg-gray-50"
                >
                  Contact
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Index

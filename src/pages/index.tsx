import React from 'react';

import {
  CloudUploadIcon,
  CogIcon,
  LockClosedIcon,
  RefreshIcon,
  ServerIcon,
  ShieldCheckIcon,
} from '@heroicons/react/outline';

import Link from 'components/Link';

import Hero from '../components/Hero';

const features = [
  {
    name: 'Push to Deploy',
    description:
      'Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi vitae lobortis.',
    icon: CloudUploadIcon,
  },
  {
    name: 'SSL Certificates',
    description:
      'Qui aut temporibus nesciunt vitae dicta repellat sit dolores pariatur. Temporibus qui illum aut.',
    icon: LockClosedIcon,
  },
  {
    name: 'Simple Queues',
    description:
      'Rerum quas incidunt deleniti quaerat suscipit mollitia. Amet repellendus ut odit dolores qui.',
    icon: RefreshIcon,
  },
  {
    name: 'Advanced Security',
    description:
      'Ullam laboriosam est voluptatem maxime ut mollitia commodi. Et dignissimos suscipit perspiciatis.',
    icon: ShieldCheckIcon,
  },
  {
    name: 'Powerful API',
    description:
      'Ab a facere voluptatem in quia corrupti veritatis aliquam. Veritatis labore quaerat ipsum quaerat id.',
    icon: CogIcon,
  },
  {
    name: 'Database Backups',
    description:
      'Quia qui et est officia cupiditate qui consectetur. Ratione similique et impedit ea ipsum et.',
    icon: ServerIcon,
  },
];
const blogPosts = [
  {
    id: 1,
    title: 'Boost your conversion rate',
    href: '#',
    date: 'Mar 16, 2020',
    datetime: '2020-03-16',
    category: { name: 'Article', href: '#' },
    imageUrl:
      'https://images.unsplash.com/photo-1496128858413-b36217c2ce36?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1679&q=80',
    preview:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto accusantium praesentium eius, ut atque fuga culpa, similique sequi cum eos quis dolorum.',
    author: {
      name: 'Roel Aufderehar',
      imageUrl:
        'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      href: '#',
    },
    readingLength: '6 min',
  },
  {
    id: 2,
    title: 'How to use search engine optimization to drive sales',
    href: '#',
    date: 'Mar 10, 2020',
    datetime: '2020-03-10',
    category: { name: 'Video', href: '#' },
    imageUrl:
      'https://images.unsplash.com/photo-1547586696-ea22b4d4235d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1679&q=80',
    preview:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit facilis asperiores porro quaerat doloribus, eveniet dolore. Adipisci tempora aut inventore optio animi., tempore temporibus quo laudantium.',
    author: {
      name: 'Brenna Goyette',
      imageUrl:
        'https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      href: '#',
    },
    readingLength: '4 min',
  },
  {
    id: 3,
    title: 'Improve your customer experience',
    href: '#',
    date: 'Feb 12, 2020',
    datetime: '2020-02-12',
    category: { name: 'Case Study', href: '#' },
    imageUrl:
      'https://images.unsplash.com/photo-1492724441997-5dc865305da7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1679&q=80',
    preview:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint harum rerum voluptatem quo recusandae magni placeat saepe molestiae, sed excepturi cumque corporis perferendis hic.',
    author: {
      name: 'Daniela Metz',
      imageUrl:
        'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      href: '#',
    },
    readingLength: '11 min',
  },
];

const Index = () => {
  return (
    <div>
      <Hero />

      {/* Feature section with screenshot */}
      <div className="relative pt-16 sm:pt-24 lg:pt-32">
        <div className="max-w-md px-4 mx-auto text-center sm:px-6 sm:max-w-3xl lg:px-8 lg:max-w-7xl">
          <div>
            <h2 className="text-base font-semibold tracking-wider uppercase text-primary-red">
              Serverless
            </h2>
            <p className="mt-2 text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              No server? No problem.
            </p>
            <p className="mx-auto mt-5 text-xl text-gray-500 max-w-prose">
              Phasellus lorem quam molestie id quisque diam aenean nulla in.
              Accumsan in quis quis nunc, ullamcorper malesuada. Eleifend
              condimentum id viverra nulla.
            </p>
          </div>
          <div className="mt-12 -mb-10 sm:-mb-24 lg:-mb-80">
            <img
              className="rounded-lg shadow-xl ring-1 ring-black ring-opacity-5"
              src="https://images.unsplash.com/photo-1597673030062-0a0f1a801a31?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8"
              alt=""
            />
          </div>
        </div>
      </div>

      {/* Feature section with grid */}
      <div className="relative py-16 bg-white sm:py-24 lg:py-32">
        <div className="max-w-md px-4 mx-auto text-center sm:max-w-3xl sm:px-6 lg:px-8 lg:max-w-7xl">
          <h2 className="text-base font-semibold tracking-wider uppercase text-primary-red">
            Deploy faster
          </h2>
          <p className="mt-2 text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Everything you need to deploy your app
          </p>
          <p className="mx-auto mt-5 text-xl text-gray-500 max-w-prose">
            Phasellus lorem quam molestie id quisque diam aenean nulla in.
            Accumsan in quis quis nunc, ullamcorper malesuada. Eleifend
            condimentum id viverra nulla.
          </p>
          <div className="mt-12">
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {features.map((feature) => (
                <div key={feature.name} className="pt-6">
                  <div className="flow-root px-6 pb-8 rounded-lg bg-gray-50">
                    <div className="-mt-6">
                      <div>
                        <span className="inline-flex items-center justify-center p-3 rounded-md shadow-lg bg-gradient-to-r from-primary-red to-primary-yellow">
                          <feature.icon
                            className="w-6 h-6 text-white"
                            aria-hidden="true"
                          />
                        </span>
                      </div>
                      <h3 className="mt-8 text-lg font-medium tracking-tight text-gray-900">
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
      <div className="relative py-16 sm:py-24 lg:py-32">
        <div className="relative">
          <div className="max-w-md px-4 mx-auto text-center sm:max-w-3xl sm:px-6 lg:px-8 lg:max-w-7xl">
            <h2 className="text-base font-semibold tracking-wider uppercase text-primary-red">
              Learn
            </h2>
            <p className="mt-2 text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              Helpful Resources
            </p>
            <p className="mx-auto mt-5 text-xl text-gray-500 max-w-prose">
              Phasellus lorem quam molestie id quisque diam aenean nulla in.
              Accumsan in quis quis nunc, ullamcorper malesuada. Eleifend
              condimentum id viverra nulla.
            </p>
          </div>
          <div className="grid max-w-md gap-8 px-4 mx-auto mt-12 sm:max-w-lg sm:px-6 lg:px-8 lg:grid-cols-3 lg:max-w-7xl">
            {blogPosts.map((post) => (
              <Link
                key={post.id}
                href={post.href}
                data-blobity-magnetic="false"
                className="flex flex-col overflow-hidden rounded-lg shadow-lg"
              >
                <div className="flex-shrink-0">
                  <img
                    className="object-cover w-full h-48"
                    src={post.imageUrl}
                    alt=""
                  />
                </div>
                <div className="flex flex-col justify-between flex-1 p-6 bg-white">
                  <div className="flex-1">
                    <p className="text-sm font-medium text-primary-red">
                      {post.category.name}
                    </p>
                    <p className="text-xl font-semibold text-gray-900">
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
      <div className="relative bg-white">
        <div className="relative h-56 sm:h-72 md:absolute md:left-0 md:h-full md:w-1/2">
          <img
            className="object-cover w-full h-full"
            src="/assets/images/hello.jpg"
            alt=""
          />
          <div
            aria-hidden="true"
            className="absolute inset-0 bg-gradient-to-r from-primary-purple to-primary-pink mix-blend-multiply"
          />
        </div>
        <div className="relative max-w-md px-4 py-12 mx-auto sm:max-w-7xl sm:px-6 sm:py-20 md:py-28 lg:px-8 lg:py-32">
          <div className="md:ml-auto md:w-1/2 md:pl-10">
            <h2 className="text-base font-semibold tracking-wider uppercase">
              Contact me
            </h2>
            <h1 className="mt-2 text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              Get in touch
            </h1>
            <p className="mt-3 text-lg ">
              If you want to drop a friendly hello or make a business
              proposition, here you will find all the ways to reach me.
            </p>
            <div className="mt-8">
              <div className="inline-flex rounded-md shadow">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-gray-900 bg-white border border-transparent rounded-md hover:bg-gray-50"
                >
                  Contact
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;

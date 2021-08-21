import React from 'react';

import { Navbar } from '../components/Navbar';
import { Footer } from '../templates/Footer';
import { AppConfig } from '../utils/AppConfig';
import { Meta } from './Meta';

const Default = ({ children }: any) => (
  <div className="antialiased text-gray-600 flex flex-col h-full">
    <Meta title={AppConfig.title} description={AppConfig.description} />
    <Navbar />
    <div className="flex-layout">{children}</div>
    <Footer />
  </div>
);

export default Default;

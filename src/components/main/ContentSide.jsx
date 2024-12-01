import React from 'react';
import Content from './Content';

const ContentSide = () => {
  return (
    <div className="flex flex-col md:flex-row justify-between w-full   overflow-hidden over ">
      {/* Image section */}
      <section className="order-1 md:order-2 w-full md:w-3/5 h-[70vh] md:h-screen overflow-y-auto md:overflow-hidden hide-scrollbar border ">
        <img
          src="/e83ab1e9ce3977db81db0b7490e1eead.jpg"
          className="w-full h-full object-cover"
          alt="Display"
        />
      </section>

      {/* Content section */}
      <section className="order-2 md:order-1 w-full md:w-2/5 h-auto md:h-screen overflow-hidden overflow-y-auto hide-scrollbar">
        <Content />
      </section>
    </div>
  );
};

export default ContentSide;

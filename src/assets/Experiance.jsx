import React from 'react';

function Experiance() {
  const cardItem = [
    {
      id: 1,
      logo: "/html.png",
      name: "HTML",
    },
    {
      id: 2,
      logo: "/css.jpg",
      name: "CSS",
    },
    {
      id: 3,
      logo: "/javascript.png",
      name: "JavaScript",
    },
    {
      id: 4,
      logo: "/sql.jpg",
      name: "SQL",
    },
    {
      id: 5,
      logo: "/clanguage.png",
      name: "C Language",
    },
    {
      id: 6,
      logo: "/cplusplus.png",
      name: "C++",
    },
  ];

  return (
    <div 
       name="Experience"
    className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-16">
      <div>
        <h1 className="text-3xl font-bold mb-4">Experience</h1>
        <p className="text-base md:text-lg">
          I am a fresher. <br />
          Knowledgeable in HTML, CSS, JavaScript, SQL, C, and C++. Familiar with
          database management using SQL. Studied programming concepts and
          implemented algorithms in C and C++.
        </p>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6 my-6">
          {cardItem.map(({ id, logo, name }) => (
            <div
              key={id}
              className="flex flex-col items-center justify-center border-2 rounded-full w-[120px] h-[120px] md:w-[200px] md:h-[200px] shadow-md p-2 cursor-pointer hover:scale-110 duration-300"
            >
              <img
                src={logo}
                className="w-[80px] h-[80px] md:w-[150px] md:h-[150px] rounded-full"
                alt={name}
              />
              <div className="mt-2 text-sm md:text-base">{name}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Experiance;

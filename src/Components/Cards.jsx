import React from 'react';
import logo from '../assets/ndrf.png'

function ImageCard({ src, alt, title, description, tags }) {
  return (
    <div className="rounded overflow-hidden shadow-lg w-80 m-10">
      <img className="w-full" src={src} alt={alt} />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{title}</div>
        <p className="text-gray-700 text-base">{description}</p>
      </div>
      <div className="px-6 pt-4 pb-2">
        {tags.map((tag, index) => (
          <span
            key={index}
            className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
}

function App() {
  return (
    <div className="p-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-4 gap-5 ">
      {/* Card 1 */}
      <ImageCard
        src={logo}
        alt="Mountain"
        title="Mountain"
        description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, Nonea! Maiores et perferendis eaque, exercitationem praesentium nihil."
        tags={['#photography', '#travel', '#winter']}
      />

      {/* Card 2 */}
      <ImageCard
        src={logo}
        alt="River"
        title="River"
        description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, Nonea! Maiores et perferendis eaque, exercitationem praesentium nihil."
        tags={['#photography', '#travel', '#summer']}
      />

      
      {/* Card 3 */}
      <ImageCard
        src={logo}
        alt="Forest"
        title="Forest"
        description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, Nonea! Maiores et perferendis eaque, exercitationem praesentium nihil."
        tags={['#photography', '#travel', '#fall']}
      />

      {/* Card 4*/}
      <ImageCard
        src={logo}
        alt="Forest"
        title="Forest"
        description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, Nonea! Maiores et perferendis eaque, exercitationem praesentium nihil."
        tags={['#photography', '#travel', '#fall']}
      />
    </div>
  );
}

export default App;

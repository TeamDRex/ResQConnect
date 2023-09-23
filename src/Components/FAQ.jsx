import React from 'react';

function FAQ() {
  return (
    <section className="bg-white dark:bg-gray-300">
      <div className="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
        <h2 className="mb-8 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-black">Frequently asked questions</h2>
        <div className="grid pt-8 text-left border-t border-gray-200 md:gap-16 dark:border-gray-700 md:grid-cols-2">
          <div>
            <div className="mb-10">
              <h3 className="flex items-center mb-4 text-lg font-medium text-gray-900 dark:text-black">
                <svg className="flex-shrink-0 mr-2 w-5 h-5 text-gray-500 dark:text-gray-700" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd"></path></svg>
                 How does the registration process work for rescue agencies?
              </h3>
              <p className="text-gray-500 dark:text-gray-700">Rescue agencies can register their information manually by providing details such as their location, contact information, and areas of expertise. Alternatively, they can use GPS or other location tracking technologies for automated registration.</p>
            </div>
            <div className="mb-10">
              <h3 className="flex items-center mb-4 text-lg font-medium text-gray-900 dark:text-black">
                <svg className="flex-shrink-0 mr-2 w-5 h-5 text-gray-500 dark:text-gray-700" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd"></path></svg>
                Is there a communication feature in the application?
              </h3>
              <p className="text-gray-500 dark:text-gray-700">Yes, the application includes communication and collaboration features. Rescue agencies can send alerts and requests for assistance directly through the application and collaborate on shared resources like medical equipment or transportation.</p>
            </div>
            <div className="mb-10">
              <h3 className="flex items-center mb-4 text-lg font-medium text-gray-900 dark:text-black">
                <svg className="flex-shrink-0 mr-2 w-5 h-5 text-gray-500 dark:text-gray-700" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd"></path></svg>
                Is this application available for public use, or is it limited to rescue agencies only?
              </h3>
              <p className="text-gray-500 dark:text-gray-700">The application is primarily designed for rescue agencies to coordinate their efforts. However, some features may be accessible to the public, depending on the settings and permissions configured by the agencies</p>
            </div>
            <div className="mb-10">
              <h3 className="flex items-center mb-4 text-lg font-medium text-gray-900 dark:text-black">
                <svg className="flex-shrink-0 mr-2 w-5 h-5 text-gray-500 dark:text-gray-700" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd"></path></svg>
                What types of disasters does this application cover?
              </h3>
              <p className="text-gray-500 dark:text-gray-700">This application is designed to be versatile and can be used for a wide range of disasters, including natural disasters (e.g., hurricanes, earthquakes) and man-made emergencies (e.g., industrial accidents, terrorist incidents).</p>
            </div>
       
          </div>
          <div>
       
          </div>
        </div>
      </div>
    </section>
  );
}

export default FAQ;
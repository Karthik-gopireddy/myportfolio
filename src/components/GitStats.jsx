import React from "react";

const GitStats = () => {
  return (
    <div className="my-6 md:my-20">
      <div>
        <h1 className="text-center text-2xl md:text-4xl">GitHub Activity</h1>
        <p className="text-center text-sm md:text-xl md:w-[90%] m-auto mt-2 md:mt-4">
          Showcasing Proactive Engagement: A Dynamic Snapshot of My GitHub
          Journey
        </p>
      </div>
      <div className="border-t border-b flex flex-col gap-3 justify-center items-center border-blue-900 hover:border-gray-500 md:p-8 p-3 rounded-md transition-all duration-1000 ease-in-out shadow-sm shadow-blue-900 group mt-5 react-activity-calendar">
        <div className="grid grid-cols-2 justify-center border-b border-blue-900">
          <div>
            <img
              src="https://camo.githubusercontent.com/730dda4d8f34e6854ac01edf4b1462529473927e113b9b90c25950ee86dfb1da/68747470733a2f2f6769746875622d726561646d652d73746174732e76657263656c2e6170702f6170692f746f702d6c616e67733f757365726e616d653d6b61727468696b2d676f706972656464792673686f775f69636f6e733d74727565266c6f63616c653d656e266c61796f75743d636f6d70616374"
              alt=""
              id="github-top-langs"
            />
          </div>
          <div>
            <img
              src="https://camo.githubusercontent.com/bad91e11e559915a64ea0d43e98c89c83d3ec313652d0bd075c50972bbab51f0/68747470733a2f2f6769746875622d726561646d652d73746174732e76657263656c2e6170702f6170693f757365726e616d653d6b61727468696b2d676f706972656464792673686f775f69636f6e733d74727565266c6f63616c653d656e"
              id="github-stats-card"
              alt=""
            />
          </div>
        </div>

        <div>
          <img
            id="github-streak-stats"
            src="https://camo.githubusercontent.com/67d302b13c5532b18f0f7f9c184fdef644c8d65d38ec2776c8db9afafddc6033/68747470733a2f2f6769746875622d726561646d652d73747265616b2d73746174732e6865726f6b756170702e636f6d2f3f757365723d6b61727468696b2d676f7069726564647926"
            alt="GitHub Streak"
          />
        </div>
      </div>
    </div>
  );
};

export default GitStats;

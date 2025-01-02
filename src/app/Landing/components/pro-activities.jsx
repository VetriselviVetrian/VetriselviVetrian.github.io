import React from "react";
import { FaChalkboardTeacher, FaUserFriends } from "react-icons/fa";

const proActivitiesData = {
  programs: [
    {
      title:
        "Coordinator, National level Workshop on Five – Day Online Faculty Training Programme on Recent Trends in Cyber Security",
      date: "13-JUN-22 to 17-JUN-22",
    },
    {
      title:
        "Coordinator, National level Workshop on Five – Day ISEA Faculty Training Programme on State-Of-The-Art Technologies in Information Security",
      date: "02-DEC-19 to 06-DEC-19",
    },
    {
      title:
        "Coordinator, National level Workshop on Five-Day ISEA Workshop on Blockchain Technologies",
      date: "16-SEP-19 to 20-SEP-19",
    },
    {
      title:
        "Coordinator, National level Workshop on Recent Advancement in Networking",
      date: "21-FEB-17 to 23-FEB-17",
    },
    {
      title:
        "Coordinator, National level Workshop on Workshop on Next Generation Networks and Data Security",
      date: "19-JAN-16 to 22-JAN-16",
    },
  ],
  memberships: [
    {
      organization:
        "The Institution of Electronics and Telecommunication Engineers",
      details: "Life Member, Membership Number AM131664",
      date: "16-DEC-99",
    },
    {
      organization: "The Indian Society for Technical Education",
      details: "Life Member, Membership Number LM27703",
      date: "07-SEP-99",
    },
  ],
};

const ProActivities = () => {
  return (
    <div id="prof-activities" className="w-full py-20">
      <div className="container mx-auto px-6 lg:px-8 py-12 md:py-16">
        <div className="flex flex-col md:flex-row md:space-x-16">
          {/* Left Column */}
          <div className="md:w-1/4 flex flex-col md:items-start mb-8 ml-5 md:mb-0 lg:ml-32">
            <h1 className="text-5xl font-medium mb-4">Activities</h1>
            <p className="text-xl font-medium leading-relaxed text-base-content/80">
              Professional engagements & memberships
            </p>
          </div>

          {/* Right Column */}
          <div className="md:w-3/4">
            <div className="space-y-12">
              {/* Programs Section */}
              <div className="card bg-base-100 shadow-md p-8 lg:mx-20">
                <div className="flex items-center gap-3 mb-6">
                  <FaChalkboardTeacher className="min-w-8 w-12 h-12 text-blue-600" />
                  <h2 className="text-4xl font-medium tracking-tight">
                    Programs Organized
                  </h2>
                </div>
                <div className="space-y-8">
                  {proActivitiesData.programs.map((program, index) => (
                    <div
                      key={index}
                      className="border-l-4 border-blue-600 pl-6 text-lg leading-relaxed font-medium text-justify"
                    >
                      <p className="text-xl mb-2">{program.title}</p>
                      <p className="text-sm text-base-content/70">
                        {program.date}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Memberships Section */}
              <div className="card bg-base-100 shadow-md p-8 lg:mx-20">
                <div className="flex items-center gap-3 mb-6">
                  <FaUserFriends className="min-w-8 w-12 h-12 text-blue-600" />
                  <h2 className="text-4xl font-medium tracking-tight">
                    Professional Memberships
                  </h2>
                </div>
                <div className="space-y-8">
                  {proActivitiesData.memberships.map((membership, index) => (
                    <div
                      key={index}
                      className="border-l-4 border-blue-600 pl-6 text-lg leading-relaxed font-medium text-justify"
                    >
                      <p className="text-xl mb-2">{membership.organization}</p>
                      <p className="text-base mb-1">{membership.details}</p>
                      <p className="text-sm text-base-content/70">
                        Since {membership.date}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProActivities;

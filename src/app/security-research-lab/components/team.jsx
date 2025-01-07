import React from "react";
import Image from "next/image";
import {
  professorInfo,
  currentStudents,
  masterStudents,
  groupedInternStudents,
} from "@/data/teamData";

const Team = () => {
  return (
    <div className="min-h-screen bg-base-200 pt-12">
      <div className="container mx-auto px-6 pb-10 max-w-7xl">
        <h1 className="text-5xl font-bold text-center mb-20">Team</h1>

        {/* Professor Section */}
        <div className="card bg-base-100 shadow-lg max-w-4xl mx-auto mb-24">
          <div className="flex flex-col lg:flex-row items-center p-8 gap-12">
            <div className="w-72 h-72 relative rounded-xl overflow-hidden shadow-md">
              <Image
                src={professorInfo.image}
                alt={professorInfo.name}
                fill
                className="object-cover"
              />
            </div>
            {/* Content */}
            <div className="flex-1">
              <h2 className="text-3xl font-bold mb-3">{professorInfo.name}</h2>
              <div className="text-lg mb-6">
                <p className="font-medium text-primary">
                  {professorInfo.title}
                </p>
                <p>{professorInfo.department}</p>
                <p>{professorInfo.university}</p>
              </div>
              <div className="mb-6">
                {professorInfo.emails.map((email, index) => (
                  <a
                    key={index}
                    href={`mailto:${email}`}
                    className="block text-accent hover:text-accent-focus mb-1"
                  >
                    {email}
                  </a>
                ))}
              </div>
              <div className="divider my-6"></div>
              <div className="space-y-3">
                {professorInfo.experience.map((exp, index) => (
                  <p key={index} className="text-base-content/80 text-justify">
                    {exp}
                  </p>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Current Students Section */}
        <section className="mb-24">
          <h2 className="text-3xl font-bold text-center mb-12">
            Current Students
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 justify-items-center">
            {currentStudents.map((student, index) => (
              <div
                key={index}
                className="card w-64 bg-base-100 shadow-lg hover:shadow-xl transition-shadow"
              >
                <figure className="relative h-60">
                  <Image
                    src={student.image}
                    alt={student.name}
                    fill
                    className="object-cover"
                  />
                </figure>
                <div className="card-body items-center text-center p-6">
                  <a
                    href={`https://linkedin.com/in/${student.linkedIn}`}
                    className="card-title text-lg hover:text-primary transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {student.name}
                  </a>
                  <p className="font-medium text-primary">{student.type}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Former Students Section */}
        <section>
          <h2 className="text-3xl font-bold text-center mb-12">
            Former Students
          </h2>

          {/* Master Students */}
          <div className="mb-16">
            <h3 className="text-2xl font-semibold mb-8 text-start">
              Master Students
            </h3>
            <div className="overflow-x-auto bg-base-100 rounded-xl shadow-lg">
              <table className="table w-full table-zebra">
                <thead>
                  <tr>
                    {masterStudents.columns.map((column, index) => (
                      <th
                        key={index}
                        className="bg-base-300 text-base font-semibold"
                      >
                        {column}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {masterStudents.data.map((student, index) => (
                    <tr key={index} className="hover">
                    <td className="w-1/6"><a href={student.link} target="_blank"
                  rel="noopener noreferrer" className="hover:underline font-bold">{student.name}</a></td>
                      <td>{student.association}</td>
                      <td className="text-base-content/70">{student.thesis}</td>
                      <td>{student.position}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Undergraduate Interns */}
          <div>
            <h3 className="text-2xl font-semibold mb-6 text-start">
              Undergraduate Intern Students
            </h3>
            <div className="space-y-6">
              {groupedInternStudents.map((group, index) => (
                <div
                  key={index}
                  className="bg-base-100 rounded-xl shadow-lg overflow-hidden"
                >
                  <div className="bg-base-300 p-6">
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                      <div>
                        <p className="text-sm font-medium text-base-content/60">
                          Area of Research
                        </p>
                        <p className="font-semibold text-primary">
                          {group.area}
                        </p>
                      </div>
                      <div>
                        <p className="text-sm font-medium text-base-content/60">
                          Mentor
                        </p>
                        <p className="font-semibold">{group.mentor}</p>
                      </div>
                      <div>
                        <p className="text-sm font-medium text-base-content/60">
                          Association
                        </p>
                        <p className="font-semibold">{group.association}</p>
                      </div>
                      <div>
                        {group.publication && (
                          <a
                            href={group.publication}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1.5 px-3 py-1.5 text-sm font-medium text-primary hover:text-primary/80 transition-colors rounded-md hover:bg-primary/10 focus:outline-none focus:ring-2 focus:ring-primary/20 focus-visible:ring-offset-2"
                            aria-label="View publication in new tab"
                          >
                            Publication
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                  <div className="p-6">
                    <table className="table w-full">
                      <thead>
                        <tr>
                          {group.columns.map((column, columnIndex) => (
                            <th
                              key={columnIndex}
                              className="text-base font-semibold pr-4"
                            >
                              {column}
                            </th>
                          ))}
                        </tr>
                      </thead>
                      <tbody>
                        {group.students.map((student, studentIndex) => (
                          <tr key={index} className="hover">
                          <td className="w-1/6"><a href={student.link} target="_blank"
                        rel="noopener noreferrer" className="hover:underline font-bold">{student.name}</a></td>
                            <td>{student.position}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Team;

import React from "react";
import { phdStudents, masterStudents } from "@/data/guidanceData";

function Guidance() {
  return (
    <div>
      <div className="container mx-auto px-4 pt-24 pb-14 max-w-7xl">
        <h1 className="text-4xl text-center font-bold mb-6">Guidance</h1>

        <div className="space-y-12">
          {/* PhD Students Section */}
          <section>
            <h2 className="text-2xl font-semibold mb-6 pb-2 border-b-2 border-primary/20">
              Current PhD Students
            </h2>
            <div className="overflow-x-auto">
              <table className="table table-zebra w-full bg-base-100">
                <thead>
                  <tr>
                    {phdStudents.columns.map((column, index) => (
                      <th key={index} className="text-base bg-base-300">
                        {column}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {phdStudents.data.map((student, index) => (
                    <tr key={index} className="hover">
                      <td className="w-1/6"><a href={student.link} target="_blank"
                    rel="noopener noreferrer" className="hover:underline font-bold">{student.name}</a></td>
                      <td className="text-slate-600">{student.thesis}</td>
                      <td>{student.status}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          {/* Master Students Section */}
          <section>
            <h2 className="text-2xl font-semibold mb-6 pb-2 border-b-2 border-primary/20">
              Current and Former Master Students
            </h2>
            <div className="overflow-x-auto">
              <table className="table table-zebra w-full bg-base-100">
                <thead>
                  <tr>
                    {masterStudents.columns.map((column, index) => (
                      <th key={index} className="text-base bg-base-300">
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
                      <td className="text-slate-600">{student.thesis}</td>
                      <td>{student.position}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}

export default Guidance;

import placeholder from "@/assets/research/ex.jpg";
import profImage from "@/assets/slab/team/prof.jpg";
import arun from "@/assets/slab/team/arun.jpeg";

export const professorInfo = {
  name: "Vetriselvi V",
  image: profImage,
  title: "Professor",
  department: "Computer Science and Engineering",
  university: "Anna University",
  emails: ["jun.han@kaist.ac.kr", "junhan@cyphy.kaist.ac.kr"],
  experience: [
    "Professor at Anna University (Aug 2015 - Present)",
    "Associate Professor at Anna University (Aug 2012 - Aug 2015)",
    "Assistant Professor at Anna University (Aug 2009 - Aug 2012)",
    "Lecturer at Anna University (Jan 2003 - Aug 2009)",
    "Teaching Research Associate at Anna University (Nov 2000 - Jan 2003)",
  ],
};

export const currentStudents = [
  {
    name: "John Smith",
    image: arun,
    linkedIn: "john-smith-123",
    type: "PhD",
  },
  {
    name: "Sarah Johnson",
    image: placeholder,
    linkedIn: "sarah-johnson",
    type: "Masters",
  },
  {
    name: "Michael Lee",
    image: placeholder,
    linkedIn: "michael-lee",
    type: "Undergraduate",
  },
  {
    name: "Lisa Chen",
    image: placeholder,
    linkedIn: "lisa-chen",
    type: "PhD",
  },
  {
    name: "David Brown",
    image: placeholder,
    linkedIn: "david-brown",
    type: "Masters",
  },
  {
    name: "Alice Zhang",
    image: placeholder,
    linkedIn: "alice-zhang",
    type: "Undergraduate",
  },
];

export const masterStudents = {
  columns: [
    "Name",
    "Association",
    "Thesis Title / Area of Research",
    "Current Position",
  ],
  data: [
    {
      name: "Emma Wilson",
      association: "2021-2023",
      thesis: "Security in IoV Networks",
      position: "Security Engineer at Tech Corp",
    },
    {
      name: "David Brown",
      association: "2020-2022",
      thesis: "Network Security Frameworks",
      position: "PhD Student at Stanford",
    },
    {
      name: "Alice Zhang",
      association: "2019-2021",
      thesis: "Multimedia Security Systems",
      position: "Research Scientist at IBM",
    },
  ],
};

export const groupedInternStudents = [
  {
    area: "Network Security",
    mentor: "Jun Han",
    association: "Summer 2023",
    publication: "https://github.com",
    columns: ["Name", "Current Position"],
    students: [
      {
        name: "Alice Chen",
        position: "Graduate Student at MIT",
      },
      {
        name: "Bob Wilson",
        position: "Software Engineer at Google",
      },
    ],
  },
  {
    area: "IoV Security",
    mentor: "Jun Han",
    association: "Fall 2023",
    columns: ["Name", "Current Position"],
    students: [
      {
        name: "Carol Smith",
        position: "Masters Student at Stanford",
      },
      {
        name: "David Lee",
        position: "Research Assistant at Berkeley",
      },
    ],
  },
];

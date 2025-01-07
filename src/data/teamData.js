import man from "@/assets/research/ex.jpg";
import woman from "@/assets/research/woman.jpg";
import profImage from "@/assets/slab/team/prof.jpg";
import arun from "@/assets/slab/team/arun.jpeg";
import jai from "@/assets/slab/team/jai.jpg";
import mei from "@/assets/slab/team/mai.jpeg";

export const professorInfo = {
  name: "Vetriselvi V",
  image: profImage,
  title: "Professor",
  department: "Computer Science and Engineering",
  university: "College of Engineering Guindy, Anna University",
  emails: ["vetri@annauniv.edu"],
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
    name: "Jai Vinita L",
    image: jai,
    type: "PhD Student",
  },
  {
    name: "Meignaanamoorthi D",
    image: mei,
    type: "PhD Student",
  },
  {
    name: "Arun Amaithi Rajan",
    image: arun,
    type: "PhD Student",
  },
  {
    name: "Aishwarya R",
    image: woman,
    type: "PhD Student",
  },
  {
    name: "Anand B",
    image: man,
    type: "Masters Student",
  },
  {
    name: "Sudeep R",
    image: man,
    type: "Undergraduate Student",
  },
  {
    name: "Riya Elizabeth",
    image: woman,
    type: "Undergraduate Student",
  },
  {
    name: "Vikranth",
    image: man,
    type: "Undergraduate Student",
  },
  {
    name: "Vishwanth",
    image: man,
    type: "Undergraduate Student",
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

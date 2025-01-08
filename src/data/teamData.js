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
    link: "https://chennai.vit.ac.in/member/prof-jai-vinita-l/",
    image: jai,
    type: "PhD Student",
  },
  {
    name: "Meignaanamoorthi D",
    link: "https://www.linkedin.com/in/meignanamoorthi-dhandapani/",
    image: mei,
    type: "PhD Student",
  },
  {
    name: "Arun Amaithi Rajan",
    link: "https://www.linkedin.com/in/arunamaithi/",
    image: arun,
    type: "PhD Student",
  },
  {
    name: "Aishwarya R",
    link: "https://www.linkedin.com/in/aishwarya-r-802632107/",
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
    link: "https://www.linkedin.com/in/sudeep72/",
    image: man,
    type: "Undergraduate Student",
  },
  {
    name: "Riya Elizabeth Kuriyan",
    link:"https://www.linkedin.com/in/riya-elizabeth-kuriyan/",
    image: woman,
    type: "Undergraduate Student",
  },
  {
    name: "Vikrant Ramesh",
    image: man,
    type: "Undergraduate Student",
  },
  {
    name: "Vishwannth J",
    image: man,
    type: "Undergraduate Student",
  },
  {
    name: "Prahmodh R",
    image: man,
    type: "Undergraduate Student",
  },
];

export const masterStudents = {
  columns: [
    "Name",
    "Association",
    "Area of Research",
    "Current Position",
  ],
  data: [
    {
      name: "Anand B",
      association: "2024-Present",
      thesis: "Secure Image Storage using Adversarial attack resistant steganography and Blockchain technologies",
      position: "Ongoing",
    },
    {
      name: "Mohamed Fuzail H",
      link: "https://www.linkedin.com/in/fuzail22/",
      association: "2022-2023",
      thesis: "Secure and Privacy-Aware Targeted-Encryption Based Image Storage and Retrieval Framework",
      position: "Full Stack Engineer at 21n",
    },
  ],
};

export const groupedInternStudents = [
  {
    area: "Multimedia Security",
    mentor: "Arun Amaithi Rajan",
    association: "Summar 2024",
    publication: "https://ieeexplore.ieee.org/document/10718453",
    columns: ["Name", "Subsequent Position"],
    students: [
      {
        name: "Praveen Kumar",
        position: "Software Engineer at Wells Fargo",
      },
      {
        name: "Gautham Kumar",
        link: "https://www.linkedin.com/in/gauthamkumarganesan/",
        position: "Software Engineer at Arcesium",
      },
      {
        name: "Mohammed Ihsan",
        link: "https://www.linkedin.com/in/mohamed-ihsan-pm/",
        position: "Software Engineer at Infinera",
      },
    ],
  },
  {
    area: "IoV Security",
    mentor: "Aruna Gladys",
    association: "Summer 2024",
    columns: ["Name", "Subsequent Position"],
    students: [
      {
        name: "Abirami G",
        link: "https://www.linkedin.com/in/abirami-ganesh/",
        position: "Technology Analyst at Citi",
      },
      {
        name: "Lakshana R",
        link: "https://www.linkedin.com/in/lakshrav/",
        position: "Associate Developer at SAP Labs",
      },
      {
        name: "Nithiyashri S",
        link: "https://www.linkedin.com/in/nithiyashri-sankar-3483a5246/",
        position: "Technology Analyst at Citi",
      },
    ],
  },
  {
    area: "Multimedia Security",
    mentor: "Arun Amaithi Rajan",
    association: "Summer 2023",
    publication: "https://link.springer.com/article/10.1007/s12145-024-01256-z",
    columns: ["Name", "Subsequent Position"],
    students: [
      {
        name: "Ajitesh M",
        link: "https://www.linkedin.com/in/ajitesh-mahalingam/",
        position: "Software Engineer at Arcesium",
      },
      {
        name: "Deekshith M",
        link: "https://www.linkedin.com/in/deekshith-manohar-49b69a1a8/",
        position: "Software Engineer at Infinera",
      },
      {
        name: "Hemanth D",
        link: "https://www.linkedin.com/in/hemanth-dasararaju-577172218/",
        position: "Software Engineer at Bank of America",
      },
    ],
  },
  {
    area: "Network Security",
    mentor: "Aishwarya R",
    association: "Summer 2023",
    columns: ["Name", "Subsequent Position"],
    students: [
      {
        name: "Bharath Kumar D P",
        link: "https://www.linkedin.com/in/bharath-kumar-d-p-20861792/",
        position: "Software Engineer at Arcesium ",
      },
      {
        name: "Sri Priyan",
        link: "https://www.linkedin.com/in/sri-priyan/",
        position: "Technology Analyst at Citi",
      },
      {
        name: "Jyotir Aditya Giri A",
        link: "https://www.linkedin.com/in/jyotir-aditya-giri/",
        position: "Software Engineer at Amagi Media Labs",
      },
    ],
  },
  {
    area: "Network Security",
    mentor: "Meignaanamoorthi D",
    association: "Summer 2023",
    publication: "https://ieeexplore.ieee.org/document/10724900",
    columns: ["Name", "Subsequent Position"],
    students: [
      {
        name: "Abirami G",
        link: "https://www.linkedin.com/in/abirami-ganesh/",
        position: "Technology Analyst at Citi",
      },
      {
        name: "Lakshana R",
        link: "https://www.linkedin.com/in/lakshrav/",
        position: "Associate Developer at SAP Labs",
      },
      {
        name: "Nithiyashri S",
        link: "https://www.linkedin.com/in/nithiyashri-sankar-3483a5246/",
        position: "Technology Analyst at Citi",
      },
    ],
  },
  {
    area: "Routing Optimization",
    mentor: "Meignaanamoorthi D",
    association: "Summer 2022",
    publication: "https://ieeexplore.ieee.org/document/10434088",
    columns: ["Name", "Subsequent Position"],
    students: [
      {
        name: "Shashi Dhanasekar ",
        link: "https://www.linkedin.com/in/shashi-dhanasekar-a1a18a217/",
        position: "Masters Student at UC San Diego",
      },
    ],
  },
];

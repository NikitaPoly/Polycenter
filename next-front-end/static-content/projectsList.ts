export type Project = {
  name: string;
  type: string;
  tags: string[];
  link: string;
  bio: string;
};

const ListOfProjects: Project[] = [
  {
    name: "polycenter.space",
    type: "Fullstack",
    tags: ["ads", "dasd", "dsdas"],
    link: "htttp:/dssd.com",
    bio: "dsdjasdasjdoijasoidjaso idjasoid asodj asoidj asoi doasj doasj oasijdasoidj asoidjas oidjasd asdioasdj asdiasj",
  },
  {
    name: "Student Delivery Service",
    type: "Fullstack",
    tags: ["ads", "dasd", "dsdas"],
    link: "htttp:/dssd.com",
    bio: "dsdjasdasjdoijasoidjaso idjasoid asodj asoidj asoi doasj doasj oasijdasoidj asoidjas oidjasd asdioasdj asdiasj",
  },
];
export { ListOfProjects };

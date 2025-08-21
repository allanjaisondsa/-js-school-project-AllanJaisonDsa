export interface TimelineEvent {
  year: number;
  title: string;
  description: string;
  shortDescription:string;
  image: string;
  category: string;
}

export const events: TimelineEvent[] = [
  {
    year: 1977,
    title: "Introduction of the First Personal Computer",
    description: "The first personal computer, introduced in 1977, revolutionized the way people interacted with technology.",
    shortDescription:"FIrst Personal Computer",
    image: "/pc.png",
    category: "Hardware"
  },
  {
    year: 1985,
    title: "Windows 1.0 Release",
    description: "Microsoft released its first version of Windows in 1985.",
    shortDescription:"WIndows 1985",
    image: "/windows.png",
    category: "Software"
  },
  {
    year: 1991,
    title: "Linux Announced",
    description: "Linus Torvalds announced the first version of the Linux kernel.",
    shortDescription:"Linux Kernal",
    image: "/linux.png",
    category: "Software"
  },
  {
    year: 2007,
    title: "iPhone Launch",
    description: "Apple introduced the iPhone, transforming mobile computing.",
    shortDescription:"Iphone Launch",
    image: "/iphone.png",
    category: "Hardware"
  }
];

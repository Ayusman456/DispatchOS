export const vehicles = [
  {
    id: "XR-936383762",
    status: "Waiting",
    statusColor: "amber",
    time: "03:52:13",
    distance: "56 mi. left",
    type: "truck",
    stops: ["61356 Pagac Lane","3606 Aubrey Isle","6721 Swift Haven","2935 Ryan Village"],
    partner: "Lockman",
    capacity: 34,
    routeTime: "03:52:13",
    routeDist: "56 mi. left",
    photos: [
      { point: "#1", loc: "0578 Mraz Lock", time: "08:03 AM" },
      { point: "#1", loc: "4164 Torrance Plaza", time: "08:33 AM" },
    ]
  },
  {
    id: "AL-113949207",
    status: "Waiting",
    statusColor: "amber",
    time: "02:17:13",
    distance: "56 mi. left",
    type: "van",
    stops: ["4820 Veum Ridge","3936 Hassan Street","6721 Lucius Mount","2950 Shemar Street"],
    partner: "Mertz LLC",
    capacity: 12,
    routeTime: "02:17:13",
    routeDist: "56 mi. left",
    photos: [
      { point: "#2", loc: "0732 Alten Crossing", time: "09:01 AM" },
    ]
  },
  {
    id: "AL-118945307",
    status: "On Route",
    statusColor: "emerald",
    time: "01:33:16",
    distance: "90 mi. left",
    type: "van",
    stops: ["200 Hermann Corners","3656 Schuppe Boulevard","6721 Lucius Mount","452 Kertz Key","4425 Hegmann Pine"],
    partner: "Corkery",
    capacity: 78,
    routeTime: "01:33:16",
    routeDist: "90 mi. left",
    photos: [
      { point: "#1", loc: "0578 Mraz Lock", time: "08:03 AM" },
      { point: "#3", loc: "399 Lorie Island", time: "09:21 AM" },
    ]
  },
  {
    id: "SD-752069247",
    status: "On Route",
    statusColor: "emerald",
    time: "01:23:55",
    distance: "38 mi. left",
    type: "truck",
    stops: ["301 Howe Mills","3656 Schuppe Boulevard","6721 Alten Crossing","452 Kertz Key","4425 Hegmann Pine"],
    partner: "Kuhn and Sons",
    capacity: 59,
    routeTime: "01:23:55",
    routeDist: "38 mi. left",
    photos: [
      { point: "#1", loc: "0578 Mraz Lock", time: "08:03 AM" },
      { point: "#1", loc: "4164 Torrance Plaza", time: "08:33 AM" },
      { point: "#2", loc: "0732 Alten Crossing", time: "09:01 AM" },
      { point: "#3", loc: "399 Lorie Island", time: "09:21 AM" },
    ]
  },
  {
    id: "SD-752263347",
    status: "On Route",
    statusColor: "emerald",
    time: "00:43:16",
    distance: "98 mi. left",
    type: "truck",
    stops: ["229 Howe Mills","3656 Mraz Region","8800 Reilly Burg","6715 Claudia Walks"],
    partner: "Weissnat and Sons",
    capacity: 82,
    routeTime: "00:43:16",
    routeDist: "98 mi. left",
    photos: [
      { point: "#2", loc: "0732 Alten Crossing", time: "09:01 AM" },
    ]
  },
  {
    id: "XR-916427621",
    status: "On Route",
    statusColor: "emerald",
    time: "00:24:16",
    distance: "112 mi. left",
    type: "truck",
    stops: ["4297 Veum Hollows","3656 Mraz Region","8800 Reilly Burg","5567 Huels Drive"],
    partner: "Morissette Inc",
    capacity: 45,
    routeTime: "00:24:16",
    routeDist: "112 mi. left",
    photos: [
      { point: "#1", loc: "0578 Mraz Lock", time: "08:03 AM" },
      { point: "#3", loc: "399 Lorie Island", time: "09:21 AM" },
    ]
  },
  {
    id: "AL-118134203",
    status: "On Route",
    statusColor: "emerald",
    time: "00:12:05",
    distance: "45 mi. left",
    type: "van",
    stops: ["200 Hermann Corners","3656 Schuppe Boulevard"],
    partner: "Deckow LLC",
    capacity: 67,
    routeTime: "00:12:05",
    routeDist: "45 mi. left",
    photos: []
  },
  {
    id: "SD-928322207",
    status: "On Route",
    statusColor: "emerald",
    time: "00:05:33",
    distance: "12 mi. left",
    type: "truck",
    stops: ["301 Howe Mills","3656 Schuppe Boulevard","6721 Alten Crossing"],
    partner: "Lockman",
    capacity: 91,
    routeTime: "00:05:33",
    routeDist: "12 mi. left",
    photos: [
      { point: "#1", loc: "4164 Torrance Plaza", time: "08:33 AM" },
    ]
  }
];

export const partners = [
  { name: "Lockman", count: 24 },
  { name: "Mertz LLC", count: 22 },
  { name: "Corkery", count: 8 },
  { name: "Kuhn and Sons", count: 5 },
  { name: "Weissnat and Sons", count: 3 },
  { name: "Morissette Inc", count: 2 },
  { name: "Deckow LLC", count: 2 },
];

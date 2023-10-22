import PersonList from "../PersonList";
import Sum from "../Sum";
import People from "../People";
import ItemList from "../ItemList";

export const routerConfig = [
  {
    path: "/",
    element: <Sum />,
  },
  {
    path: "/person-list",
    element: <PersonList />,
  },
  {
    path: "/people",
    element: <People />,
  },
  {
    path: "/items-list",
    element: <ItemList />,
  },
];

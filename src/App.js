
import Sidebar from './Sidebar';
const fileTree = [
  {
    name: "public",
    type: "folder",
    subMenu: [
      {
        name: "index",
        type: "file",
      },
    ],
  },
  {
    name: "src",
    type: "folder",
    subMenu: [
      {
        name: "compenent",
        type: "folder",
        subMenu: [
          {
            name: "header",
            type: "file",
          },
          {
            name: "footer",
            type: "file",
          },
        ],
      },
      {
        name: "Hooks",
        type: "folder",
        subMenu: [
          {
            name: "useSome",
            type: "file",
          },
        ],
      },
    ],
  },
];

function App() {
  return (
    <div className="App">
      <Sidebar data={fileTree} />
    </div>
  );
}

export default App;

type TopbarProps = {
  title: string;
};
function Sidebar() {
  return <aside className="sidebar">Sidebar</aside>;
}
function Topbar({ title }: TopbarProps) {
  return (
    <header className="topbar">
      <h1>{title}</h1>
    </header>
  );
}

function App() {
  const headLine = "My Library";
  return (
    <div className="app">
      <Sidebar />
      <div className="main-area">
        <Topbar title={headLine} />
        <main className="library">
          <h1>Books will go here</h1>
          <button className="button border px-4 py-2 rounded">
            I'm a button
          </button>
        </main>
      </div>
    </div>
  );
}

export default App;

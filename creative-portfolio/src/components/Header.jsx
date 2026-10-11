
function Header({ onAddClick, showForm }) {
  return (
    <header className="header">
      <h2>Creative Portfolio</h2>

      <button onClick={onAddClick}>
        {showForm ? "Close Form" : "+ Add Project"}
      </button>
    </header>
  );
}

export default Header;

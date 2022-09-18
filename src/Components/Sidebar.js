const Sidebar = (props) => {
  return (
    <div className="flex sidebar">
      <div className="sidebar-profile">
      <img
        className="side-image"
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSr3hqEcGfzanTBcfo2L1BKvH-W3a3cpbyqLw&usqp=CAU"
        alt="hi"
      />
      <div className="center">YASHVI PATWA</div>
      </div>
      <div className="none">
        <p>🏠 HOME</p>
        <p>💷 DEPOSITS</p>
        <p>🎁 Ohters</p>
        <p>💸 Payments</p>
        <p>📐 Setting</p>
        
      </div>
      <div className="sidebar-switch">
          <label className="switch">
            <input type="checkbox" />
            <span className="slider round"></span>
          </label>
        </div>
    </div>
  );
};

export default Sidebar;

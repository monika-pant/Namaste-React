// just to explain a way to write CSS inside JSX
const styledFooter = {
  backgroundColor: "#f0f0f0",
};
export const Footer = () => {
  return (
    <div className="footer" style={styledFooter}>
      <ul>
        <li>copyright</li>
      </ul>
    </div>
  );
};

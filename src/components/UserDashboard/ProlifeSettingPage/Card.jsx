const Card = ({ title, children }) => (
    <div className="card border rounded-lg p-6 shadow-md bg-glass border-dark-gray backdrop-blur-md text-white mb-6">
      {title && <h2 className="text-lg font-semibold mb-4">{title}</h2>}
      {children}
    </div>
  );
  
  export default Card;
  
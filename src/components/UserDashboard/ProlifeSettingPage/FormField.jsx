const FormField = ({ label, type, value, onChange, placeholder, readOnly }) => (
    <div className="mb-4">
      <label className="block text-sm font-medium text-white">{label}</label>
      <input
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        readOnly={readOnly}
        className={`w-full mt-1 p-2 bg-gray border-dark-gray border rounded-md ${
          readOnly ? 'bg-dark-gray' : ''
        }`}
      />
    </div>
  );
  
  export default FormField;
  
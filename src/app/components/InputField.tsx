interface InputFieldProps {
  label: string;
  type: string;
  error?: string;
  [x: string]: any; // Permite pasar {...register(...)}
}

const InputField = ({ label, type, error, ...rest }: InputFieldProps) => (
  <div>
    <label className="block mb-1 font-medium">{label}</label>
    <input
      type={type}
      className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring focus:border-blue-400"
      {...rest}
    />
    {error && <p className="text-red-500 text-sm">{error}</p>}
  </div>
);

export default InputField;
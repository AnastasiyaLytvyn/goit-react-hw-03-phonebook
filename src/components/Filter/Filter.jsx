export const Filter = ({ onChange, value }) => {
  return (
    <label htmlFor="filter">
      Find contacts by name
      <input
        className=""
        type="text"
        name="filter"
        value={value}
        onChange={onChange}
      />
    </label>
  );
};

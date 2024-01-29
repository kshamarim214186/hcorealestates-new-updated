export default function SortFilter() {
  return <select className="form-select form-select-sm">
      <option value="">Newest</option>
      <option value="high_to_low">Price (High to Low)</option>
      <option value="low_to_high">Price (Low to High)</option>
      <option value="most_relevant">Most Relevant</option>
  </select>
}
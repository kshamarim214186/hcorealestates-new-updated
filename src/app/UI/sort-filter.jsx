export default function SortFilter() {
  return <select className="form-select form-select-sm">
    <option value="1">Most Relevant</option>
    <option value="2">Price (High to Low)</option>
    <option value="3">Price (Low to High)</option>
    <option value="3">Newest</option>
  </select>
}
export default function SortFilter({ sortObj }) {   
   const handleChange = (event) => {
      const selectedValue = event.target.value;
      if(event.target.value === ''){
         window.open(`/properties`, '_self');
      }else{
         window.open(`/properties?sort=${selectedValue}`, '_self');
      }
   };

   return (
      <select className="form-select form-select-sm" value={sortObj} onChange={handleChange}>
         <option value="">Newest</option>
         <option value="high_to_low">Price (High to Low)</option>
         <option value="low_to_high">Price (Low to High)</option>
         <option value="most_relevant">Most Relevant</option>
      </select>
   )
}
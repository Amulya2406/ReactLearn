import { Input } from "@/components/ui/input"
import { SearchIcon } from "lucide-react"
import { useState } from "react"
import { Button } from "./ui/button"

type props = {
  search : string;
  setSearch : (value : string) => void
}

export function ToDoSearch({setSearch}: props) {
  const defaultPlaceHolder = "Search todos..."
  const hoverPlaceHolder = "Type here..."
  const [placeholder, setPlaceholder] = useState(defaultPlaceHolder)
  const [localSearch, setLocalSearch] = useState('')

  const handleSearch = () => {
    setSearch(localSearch)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLocalSearch(e.target.value)
    if (e.target.value === '') {
        setSearch('')
    }
}
  return (
    <div className="m-5 flex items-center gap-2">
      <Input 
      value={localSearch}
      onChange={handleChange}
      className="transition-all" placeholder={placeholder} 
      onMouseEnter={() => setPlaceholder(hoverPlaceHolder)}
      onMouseLeave={() => setPlaceholder(defaultPlaceHolder)}/>
      <Button size="icon" variant={'secondary'} onClick={handleSearch}><SearchIcon/></Button>    
    </div>
  )
}

import { Input } from "@/components/ui/input"
import { SearchIcon } from "lucide-react"
import { useState } from "react"
import { Button } from "./ui/button"

export function ToDoSearch() {
  const defaultPlaceHolder = "Search todos..."
  const hoverPlaceHolder = "Type here..."
  const [placeholder, setPlaceholder] = useState(defaultPlaceHolder)

  return (
    <div className="m-5 flex items-center gap-2">
      <Input className="transition-all" placeholder={placeholder} 
      onMouseEnter={() => setPlaceholder(hoverPlaceHolder)}
      onMouseLeave={() => setPlaceholder(defaultPlaceHolder)}/>
      <Button size="icon" variant={'secondary'}><SearchIcon/></Button>    
    </div>
  )
}

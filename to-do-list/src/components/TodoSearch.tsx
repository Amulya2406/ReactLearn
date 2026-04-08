import { Input } from "@/components/ui/input"
import { useState } from "react"

export function ToDoSearch() {
  const defaultPlaceHolder = "Search todos..."
  const hoverPlaceHolder = "Type here..."
  const [placeholder, setPlaceholder] = useState(defaultPlaceHolder)

  return (
    <div className="m-5">
      <Input className="transition-all hover:border-red-500 hover:border-3" placeholder={placeholder} 
      onMouseEnter={() => setPlaceholder(hoverPlaceHolder)}
      onMouseLeave={() => setPlaceholder(defaultPlaceHolder)}/>
    </div>
  )
}

import React from 'react'
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from './ui/select'

interface DropDownProps{
    title:string;
    options:string[];
}

function Dropdown({title,options}:DropDownProps) {
  return (
    <Select>
      <SelectTrigger className="w-[180px] p-6">
        <SelectValue placeholder={title} />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>{title}</SelectLabel>
         { options.map((item,index) =><SelectItem key={index} value={item}>{item}</SelectItem>)}
         
        </SelectGroup>
      </SelectContent>
    </Select>
  )
}

export default Dropdown
"use client"
import * as React from "react"
import EquipmentCellProps from '../../Types/types';
import { DropdownMenuCheckboxItemProps } from "@radix-ui/react-dropdown-menu"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"


type Checked = DropdownMenuCheckboxItemProps["checked"]



const Cell: React.FC<EquipmentCellProps> = ({ value }) => (

    <td className="border-b border-[#DCDCDC] p-2">
      <div className={`h-11 cursor-pointer mx-auto flex justify-center items-center w-11 rounded-full ${
        value > 0 ? (value >= 10 ? 'bg-[red] text-white' : 'bg-[yellow] text-[black]') : ''
      }`}>
        {value > 0 ? value : '-'}
      </div>
    </td>
  );

  
  const EquipmentCell: React.FC<EquipmentCellProps> = ({ value }) => {
    const [showStatusBar, setShowStatusBar] = React.useState<Checked>(true)
    const [showActivityBar, setShowActivityBar] = React.useState<Checked>(false)
    const [showPanel, setShowPanel] = React.useState<Checked>(false)

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <td className="border-b border-[#DCDCDC] p-2">
            <div className={`h-11 cursor-pointer mx-auto flex justify-center items-center w-11 rounded-full ${
                 value > 0 ? (value >= 10 ? 'bg-[red] text-white' : 'bg-[yellow] text-[black]') : ''
                }`}>
                {value > 0 ? value : '-'}
            </div>
        </td>
      </DropdownMenuTrigger>

      <DropdownMenuContent className="w-72 bg-white h-[556px] rounded-[5px] border overflow-y-auto scrollbar-thin scrollbar-thumb-[#BBBBBB] scrollbar-track-white border-[#DCDCDC]">
        <div>
        <div className="space-y-2">
          <div >
              <img src="./preview.svg" alt="Image" />
          </div>
          <div className=" text-xs flex justify-between  pt-2">
              <h1 className="text-[#929292] font-normal">Comment</h1>
              <div className="flex items-center text-[#727272] text-[10px] font-medium gap-2">
                  <img src="./time.svg" alt="clock" />
                  <p>15/11/2022</p>
                  <p>10:34</p>
                  <p className="text-[black] font-medium">#03</p>
              </div>
          </div>
          <div className="bg-[#F8F8F8]  h-16 border flex items-center justify-center border-[#DCDCDC] rounded-[5px]">
              <p className="px-2 text-[11px] text-[#313131] ">consectetur adipiscing elit, do eiusmod tempor 
                incididunt ut labore et dolore magna aliqua 
                adipiscingdo eiusmod tempor incididunt labore</p>
          </div>
          <hr className="h-[1px]  bg-[#DCDCDC] border-0" />
        </div>
        <div className="space-y-2 mt-2">
          <div >
              <img src="./worker.svg" alt="Image" />
          </div>
          <div className=" text-xs flex justify-between  pt-2">
              <h1 className="text-[#929292] font-normal">Comment</h1>
              <div className="flex items-center text-[#727272] text-[10px] font-medium gap-2">
                  <img src="./time.svg" alt="clock" />
                  <p>15/11/2022</p>
                  <p>10:34</p>
                  <p className="text-[black] font-medium">#03</p>
              </div>
          </div>
          <div className="bg-[#F8F8F8]  h-16 border flex items-center justify-center border-[#DCDCDC] rounded-[5px]">
              <p className="px-2 text-[11px] text-[#313131] ">consectetur adipiscing elit, do eiusmod tempor 
                incididunt ut labore et dolore magna aliqua 
                adipiscingdo eiusmod tempor incididunt labore</p>
          </div>
          <hr className="bg-[#DCDCDC] border-0" />
        </div>
        </div>

      </DropdownMenuContent>
    </DropdownMenu>
  )
}


  export default EquipmentCell;
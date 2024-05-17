import { useState } from "react";
import DropDownMenu from "../components/DropDownMenu";
import PageHeader from "../components/PageHeader"
import { FaPen, FaEye } from "react-icons/fa";
import { MdOutlineKeyboardArrowDown, MdFilterList, MdKeyboardBackspace, MdOutlineRemoveRedEye } from "react-icons/md";

const ABTsProject = () => {
  const [myABTs, setMyABTs] = useState([])
  const [abtFilter, setAbtFilter] = useState('Yearly')
  const [openMint, setOpenMint] = useState(false)
  const [newAbtInfo, setNewAbtInfo] = useState({})

  const handleMinting = async (e) => {
    e.preventDefault();
    const formData = new FormData(event.target);
    const name = formData.get("name");
    const symbol = formData.get("symbol");
    const description = formData.get("description");
    const pdf = formData.get("pdf");

    console.log("Name:", name);
    console.log("Symbol:", symbol);
    console.log("Description:", description);
    console.log("PDF File:", pdf);
  }

  if (openMint) {
    return (
      <MintPage setOpenMint={setOpenMint} handleMinting={handleMinting} />
    )
  }

  return (
    <>
      <PageHeader title={'ABTs Projects'} />
      <div className="w-full p-5 lg:px-10 lg:py-7 flex-col justify-center items-center">
        <div className="flex justify-center sm:justify-between items-center w-full mb-4">
          {
            myABTs.length > 0 &&
              <>
                <button onClick={() => setOpenMint(true)} className={`w-full sm:w-max sm:px-5 py-2 gap-3 rounded=sm flex justify-center items-center bg-[#7B61FF] text-white`}>
                  <div className='text-md lg:text-sm '>
                      <FaPen />
                  </div>
                  Create ABT
                </button>
                <div className="hidden sm:flex">
                  <DropDownMenu Icon={MdFilterList} flexDirection={'flex-row-reverse'} title={'Filter'} options={['Yearly', 'Monthly', 'Weekly', 'Daily']} setOptionState={setAbtFilter} />  
                </div>
              </>
          }
        </div>
        {
          myABTs.length > 0 ? (
            <div className={`border-b-2 border-slate-300 min-[1500px]:border-0  w-full flex justify-between items-center ${myABTs.length > 0 ? 'pb-4' : 'pb-8'} min-[1500px]:pb-2 sm:hidden`}>
              <div className="flex justify-start items-center gap-2">
                <p className="text-xl lg:text-2xl">Active Listing&apos;s</p>
                <div className='text-xs lg:text-sm min-[1500px]:hidden'>
                    <MdOutlineKeyboardArrowDown />
                </div>
              </div>
              <DropDownMenu Icon={MdFilterList} flexDirection={'flex-row-reverse'} title={'Filter'} options={['Yearly', 'Monthly', 'Weekly', 'Daily']} setOptionState={setAbtFilter} />
            </div>   
          ) : (
            <div className="flex justify-center items-center gap-6 flex-col border-[1px] rounded-sm border-slate-300 p-3 sm:p-12 md:p-18">
              <div className="w-full sm:w-80 md:w-96 flex justify-center items-center h-44 sm:h-52 md:h-64 bg-slate-100">
                image placeholder
              </div>
              <div className="flex flex-col justify-center items-center">
                <h1 className="text-md font-medium pb-1">Get started with ABTs</h1>
                <p className="text-center text-base">Create a dynamic token in NIOVLABS</p>
                <p className="text-center text-base leading-5">Create a new ABT with multiple interchangeable layers</p>
              </div>
              <button onClick={() => setOpenMint(true)} className="w-full sm:w-max sm:px-5 py-2 gap-3 rounded=sm flex justify-center items-center bg-[#7B61FF] text-white">
                <div className='text-md lg:text-sm'>
                    <FaPen />
                </div>
                Create ABT
              </button>
            </div>
          )

        }
      </div>
    </>
  )
}

export default ABTsProject

const MintPage = ({ setOpenMint, handleMinting}) => {
  return (
    <>
      <PageHeader title={'ABTs Projects'} />
      <div className="w-full p-5 lg:px-10 grid grid-col-">
        <div className="w-full pb-3">
          <h1 className="text-xl font-semibold mb-1">Create an ABT</h1>
          <p className="leading-5">Once your item has been minted, you will not be able to change any of its information</p>
        </div>
        <div className="bg-slate-100 w-48 h-44 border-slate-400 border-[1px] flex flex-col justify-center items-center gap-0 mb-5">
          <div className='text-2xl lg:text-3xl'>
            <MdOutlineRemoveRedEye />
          </div>
          <p className="">Live preview</p>
        </div>
        <form className="w-full" onSubmit={handleMinting}>
          <div className="mb-3 flex flex-col justify-start items-start ">
            <label className="text-gray-700 text-md mb-2 font-medium" htmlFor="name">
              Name
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="Name"
              name="name"
              type="text"
            />
          </div>
          <div className="mb-3 flex flex-col justify-start items-start ">
            <label className="text-gray-700 text-md mb-2 font-medium" htmlFor="symbol">
              Symbol
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="Symbol"
              name="symbol"
              type="text"
            />
          </div>
          <div className="mb-3 flex flex-col justify-start items-start ">
            <label className="text-gray-700 text-md mb-2 font-medium" htmlFor="pdf">
              Contract document
            </label>
            <label className="w-full flex justify-center gap-1 items-center bg-white text-blue rounded shadow tracking-wide border border-blue cursor-pointer py-[7px]">
              <span className="text-base leading-normal">Add document</span>
              <span className="text-base leading-normal text-slate-500">(pdf)</span>
              <input type='file' id="pdf" accept=".pdf" name="pdf" className="hidden" />
            </label>
          </div>
          <div className="mb-3 flex flex-col justify-start items-start ">
            <label className="text-gray-700 text-md mb-2 font-medium" htmlFor="description">
              Description
            </label>
            <textarea
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="description"
              name="description"
              rows="4"
            />
          </div>
          <button
            type="submit"
            className="mt-4 w-full bg-[#7B61FF] text-white font-medium py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Mint Asset
          </button>
          <button onClick={() => setOpenMint(false)} className={`w-full mt-4 px-5 py-2 gap-3 rounded flex justify-center items-center bg-[#f02b2b] text-white`}>
            Cancel
          </button>
        </form>
      </div>
    </>
  )
}
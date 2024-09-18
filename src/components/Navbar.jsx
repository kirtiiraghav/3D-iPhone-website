import { appleImg, bagImg, searchImg } from '../utils/index.js'
import { navLists } from '../constants'

export default function Navbar() {
    return (
        <header className='w-full py-5 px-5 sm:px-10 flex justify-between items-center'>
            <nav className='screen-max-width flex w-full'>
                <img className='w-4 h-5' src={appleImg} alt="apple logo" />
                <div className='flex justify-center flex-1 items-center max-sm:hidden'>
                    {/* dynamically rendering nav items */}
                    {navLists.map((nav) => {
                        return <div className='px-5 text-sm cursor-pointer text-gray hover:text-white transition-all' key={nav}>{nav}</div>
                    })}
                </div>
                <div className='flex items-baseline gap-7 max-sm:justify-end max-sm:flex-1'>
                    <img className='w-4 h-5' src={searchImg} alt="search icon" />
                    <img className='w-4 h-5' src={bagImg} alt="bag icon" />
                </div>
            </nav>
        </header>
    )
}

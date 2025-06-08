import { FaChevronRight } from "react-icons/fa";

function Email(){
    return(
        <> 
        <div className="flex justidy-center flex-col">
        <p className="text-lg text-center py-[1rem] ">
            Ready to watch? Enter your email to create or restart your membership
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <input
              type="email"
              placeholder="Email Address"
              className="w-[45vh] rounded border border-red-600 bg-transparent px-4 py-3 text-white placeholder-white"
            />
            <button className="flex items-center bg-red-600 px-8 py-3 rounded text-lg font-semibold">
              Get Started <FaChevronRight className="ml-2"/>
            </button>
          </div>
          </div>
         </>
    )
}
export default Email;
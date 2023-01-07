import React,{useState} from 'react'

function SubscribeSection() {
  return (
    <div className="p-[10px] md:p-[100px] bg-gray-200">
      <div className="w-[95%] m-auto bg-[#216583] p-20 rounded-md space-y-5">
        <div className='text-center'>
          <h3 className='text-white text-2xl font-semibold'>Subscribe to our newsletter</h3>
        </div>
        <div className='text-center'>
            <SubscribeForm />
        </div>
      </div>
    </div>
  );
}

export default SubscribeSection



const SubscribeForm = ()=>{


    const [userName,setName] = useState("");
    const [userEmail,setEmail] = useState("");

    const SubscribeHandler = (env)=>{
            
        env.preventDefault();
    }


    return (
      <form onSubmit={SubscribeHandler}>
        <div className="grid grid-rows-3 gap-5 md:flex md:flex-row md:justify-center md:items-center md:space-x-5">
          <input
            type="text"
            placeholder="First name"
            required
            className="outline-none border-0 rounded-md bg-[#6493A8] text-white"
            value={userName}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            type="text"
            placeholder="Email address"
            required
            className="outline-none border-0 rounded-md bg-[#6493A8] text-white"
            value={userEmail}
            onChange={(e) => setEmail(e.target.value)}
          />
          <button type="submit" className="bg-white px-3 py-3 rounded-md text-base">
            Subscribe Now
          </button>
        </div>
      </form>
    );
}
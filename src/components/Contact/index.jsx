import React,{useState} from 'react';
import ContactImage from "../../assets/images/contactImg.png";
import {Label,TextInput,Select,Textarea,Checkbox, Button} from 'flowbite-react';

function ContactSection() {
  return (
    <div className="mt-[40px] p-10 md:mt-[100px] md:p-[50px] md: shadow-2xl">
      <div className='mb-[50px]'>
        <Header />
      </div>
      <div className="flex flex-col justify-center md:grid md:grid-cols-2 md:items-center md:gap-10 ">
        <LeftContact />
        <ContactForm />
      </div>
    </div>
  );
}

export default ContactSection;


const Header = () => {
  return (
    <div className="flex justify-between flex-col space-y-2 md:grid md:grid-cols-2 md:gap-10">
      <div className="space-y-1 md:space-y-5">
        <h3 className="font-semibold text-2xl md:font-bold md:text-5xl ">
          MAKE AN <span className="text-[#FFD700]">APPOINMENT</span>
        </h3>
        <div className=" md:w-[95%] md:m-auto md:h-[2px] bg-gray-200 "></div>
      </div>
      <div className="text-left md:text-right md:space-y-2">
        <h3 className="font-semibold text-2xl md:font-bold md:text-3xl">
          Consult with our{" "}
        </h3>
        <h3 className="font-semibold text-2xl md:font-bold md:text-5xl">
          Doctor
        </h3>
      </div>
    </div>
  );
};



const LeftContact = ()=>{

    return (
      <div className='shrink-0'>
        <img className='aspect-square' src={ContactImage} alt="ContactImage"  />
      </div>
    );

}


const ContactForm = ()=>{

    const [name,setName]= useState();
    const [phone,setPhone] = useState();
    const [date,setDate] = useState();
    const [doctor,setDoctor] = useState();
    const [agreed,setAgreed] = useState(false);
    const [message,setMessage] = useState();
    
    
    const ContactFormSubmitHandler = (evn)=>{
        evn.preventDefault();
        console.log(name,phone,date,doctor,agreed,message)
    } 
    
    
    return (
      <div>
        <form onSubmit={ContactFormSubmitHandler}>
          <div className="grid grid-cols-2 gap-2">
            <div>
              <div className="mb-2 block">
                <Label htmlFor="Name" value="Name" />
              </div>
              <TextInput
                id="Name"
                type="text"
                sizing="md"
                required={true}
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div>
              <div className="mb-2 block">
                <Label htmlFor="Phone" value="Phone" />
              </div>
              <TextInput
                id="Phone"
                type="number"
                sizing="md"
                required={true}
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />
            </div>
          </div>
          <div className="grid grid-cols-2 gap-2 mt-[15px]">
            <div>
              <div className="mb-2 block">
                <Label htmlFor="Date" value="Date" />
              </div>
              <TextInput
                id="Date"
                type="date"
                sizing="md"
                required={true}
                value={date}
                onChange={(e) => setDate(e.target.value)}
              />
            </div>
            <div id="select">
              <div className="mb-2 block">
                <Label htmlFor="Doctor" value="Doctor" />
              </div>
              <Select
                id="Doctor"
                required={true}
                value={doctor}
                onChange={(e) => setDoctor(e.target.value)}
              >
                <option value="Dr. Jeanette Hoff">Dr. Jeanette Hoff</option>
                <option value="Dr. David Ambrose">Dr. David Ambrose</option>
                <option value="Dr. Jenelia Breton">Dr. Jenelia Breton</option>
                <option value="Dr. Jagajeet Aurora">Dr. Jagajeet Aurora</option>
              </Select>
            </div>
          </div>
          <div className="mt-[15px]">
            <div id="textarea">
              <div className="mb-2 block">
                <Label htmlFor="Message" value="Message" />
              </div>
              <Textarea
                id="Message"
                placeholder="Include a message..."
                required={true}
                rows={4}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              />
            </div>
          </div>
          <div className="mt-[20px]">
            <div className="flex items-center gap-2">
              <Checkbox
                id="agreed"
                value={agreed}
                onChange={(e) => setAgreed(e.target.value)}
              />
              <Label htmlFor="agreed">
                You agree to our friendly privacy policy.
              </Label>
            </div>
          </div>
          <div className="mt-[20px]">
            <Button type="submit" className="w-[100%]">
              Confirm Appoinment
            </Button>
          </div>
        </form>
      </div>
    );
}
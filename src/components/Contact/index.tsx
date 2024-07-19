import MsgForm from "./MsgForm"
import Bio from "./Bio"

function Contact() {
  return (
    <div className="px-6 max-w-screen-lg mx-auto md:my-12" id="contact">
      <div className="grid md:grid-cols-2 place-items-center md:gap-8">
        <Bio />
        <MsgForm />
      </div>
    </div>
  )
}

export default Contact

import { MdEmail, MdPhone, MdLocationOn, MdAccessTime } from "react-icons/md";

const ContactSupport = () => {
  return (
    <section className="h-full bg-gray-100 flex items-center justify-center px-4 py-12">
      <div className="w-full max-w-3xl bg-white shadow-md rounded-xl p-8 border border-amber-900">
        <h1 className="text-3xl underline font-mono font-bold text-center text-amber-900 uppercase mb-6">
          Contact Support
        </h1>

        <div className="space-y-6 text-lg text-gray-800">
          <div className="flex items-start gap-3">
            <MdEmail className="text-2xl text-amber-800 mt-1" />
            <div>
              <p className="font-semibold text-amber-900">Email</p>
              <p>support@example.com</p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <MdPhone className="text-2xl text-amber-800 mt-1" />
            <div>
              <p className="font-semibold text-amber-900">Phone</p>
              <p>+1 (555) 123-4567</p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <MdAccessTime className="text-2xl text-amber-800 mt-1" />
            <div>
              <p className="font-semibold text-amber-900">Office Hours</p>
              <p>Mon – Fri: 9:00 AM – 6:00 PM</p>
              <p>Sat – Sun: Closed</p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <MdLocationOn className="text-2xl text-amber-800 mt-1" />
            <div>
              <p className="font-semibold text-amber-900">Branch Offices</p>
              <ul className="list-disc ml-5">
                <li>New York, NY – 123 Main Street</li>
                <li>Los Angeles, CA – 456 Sunset Blvd</li>
                <li>Chicago, IL – 789 Lakeshore Drive</li>
              </ul>
            </div>
          </div>
        </div>

        <p className="text-center text-sm text-gray-500 font-semibold mt-8">
          We are here to help — feel free to reach out anytime.
        </p>
      </div>
    </section>
  );
};

export default ContactSupport;

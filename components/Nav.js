import requests from '../utils/requests';
function Nav() {
  return (
    <nav>
      <div className="flex px-10 space-x-10 overflow-x-scroll text-2xl sm:space-x-20 sm:px-20 whitespace-nowrap scrollbar-hide">
        {Object.entries(requests).map(([key, { title, url }]) => (
          <h2
            onClick={() => {
              router.push(`/?genre=${key}`);
            }}
            key={key}
            className="transition duration-100 cursor-pointer hover:scale-125 hover:text-white active:text-red-500 "
          >
            {title}
          </h2>
        ))}
      </div>
      <div className="top-0 right-0 absolute bg-gradient-to-l from-[#06202A] h10 w-1/12 " />
    </nav>
  );
}
export default Nav;

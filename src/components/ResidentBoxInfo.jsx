// import { FaEye } from 'react-icons/fa';

function ResidentBoxInfo({ name, value, showButton = true, linkUrl = '' }) {
    // const handleClick = () => {
    //     if (linkUrl) {
    //         window.open(linkUrl, '_blank', 'noopener,noreferrer');
    //     }
    // };

    return (
        <div className="border-b-2 border-gray-300 py-6 flex items-center">
            <div className="w-1/2 text-left font-bold text-md md:text-lg lg:text-xl">
                {name}
            </div>
            <div className="flex-1 flex items-center">
                <div className="text-[16px] md:text-lg lg:text-xl flex-1">
                    {value}
                </div>
                {/* {showButton && (
                    <button
                        onClick={handleClick}
                        className="bg-green-800 text-white hover:bg-green-700 rounded px-2 py-1 text-xs md:px-4 md:py-2 md:text-sm flex items-center ml-2"
                    >
                        <FaEye className="mr-1" />
                        Link
                    </button>
                )} */}
            </div>
        </div>
    );
}

export default ResidentBoxInfo;


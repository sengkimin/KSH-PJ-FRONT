function ResidentBoxInfo({ name, value }) {

    return (
        <>
            <div className="border-b-2 border-black-300 py-6  font-bold ">

                <div className="w-[300px] font-bold" >{name}</div>
                <div className="flex-1">{value}</div>


            </div>
        </>
    )
}
export default ResidentBoxInfo;
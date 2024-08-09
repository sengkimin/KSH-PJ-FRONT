function BoxInfo({ label, value }) {

    return (
        <>
            <div className="border-b-[3px] flex  py-8 px-8  ">

                <div className="w-[200px]  font-bold" >{label}</div>
                <div className="flex-1">{value}</div>


            </div>
        </>
    )
}
export default BoxInfo;
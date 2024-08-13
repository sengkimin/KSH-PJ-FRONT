function InfoBookIssue ({Label, Value}){
    return (
        <div className=" flex py-7 px-8">
            <div className=" w-[200px] font-bold">
                {Label}
            </div>
            <div className="flex-1">
                {Value}
            </div>
        </div>
    );
}
export default InfoBookIssue;
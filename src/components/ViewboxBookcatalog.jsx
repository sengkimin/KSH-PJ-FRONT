function Viewbox({ label, value }) {
    return (
        <div className="border-b-[3px] flex  py-6 px-8  ">

                <td className="w-[200px] font-bold" >{label}</td>
                <td className="flex-1">{value}</td>

      </div>
    )
}
export default Viewbox;
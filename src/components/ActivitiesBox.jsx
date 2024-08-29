const TaskCard = ({ id, title, image }) => {
  return (
    <div className="bg-white rounded-lg shadow-lg p-6 flex flex-col w-full max-w-md mx-auto md:max-w-2xl lg:max-w-3xl">
      <h2 className="text-xl font-bold mb-4 text-center md:text-left">{id} {title}</h2>
      <div className="flex flex-col md:flex-row items-center justify-center md:justify-around space-y-4 md:space-y-0 md:space-x-6">
        <img src={image} alt={title} className="w-46 h-46 object-cover rounded-md" />
        <div className="flex flex-col space-y-3 text-lg">
          <label className="flex items-center space-x-5">
            <input type="radio" name={`rating-${id}`} className="w-6 h-6" />
            <img src="/correct.jpg" alt="correct" className="w-12 h-12" />
          </label>
          <label className="flex items-center space-x-5">
            <input type="radio" name={`rating-${id}`} className="w-6 h-6" />
            <img src="/medium.jpeg" alt="medium" className="w-11 h-11" />
          </label>
          <label className="flex items-center space-x-5">
            <input type="radio" name={`rating-${id}`} className="w-6 h-6" />
            <img src="/incorrect.jpg" alt="incorrect" className="w-12 h-12" />
          </label>
        </div>
      </div>
    </div>
  );
};

export default TaskCard;

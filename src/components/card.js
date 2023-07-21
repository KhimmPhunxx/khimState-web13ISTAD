function Card({imageURL, desc, titlee, pricee, categor}){
    // destructuring object
    // const {imageURL , desc} = props
    return(
    <>
    {/* Create Attributes */}
        <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <a href="#">
                <img className="rounded-t-lg" src={imageURL} alt="" />
            </a>
            <div className="p-5">
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{titlee} </p>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400 line-clamp-2">{desc} </p>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400 line-clamp-2">{pricee} </p>
            </div>
        </div>
    </>
    )
}
export default Card


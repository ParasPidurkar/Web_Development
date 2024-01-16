import NetflixIndexComponent from "./NetflixIndexComponent";

export default function NetflixHeaderComponent(){
    return (
        <>
        <div className ="d-flex justify-content-between m-3 p-3">
            <div>
            <h2 className="text-danger">NETFLIX</h2>
            </div>
            <div className="input-group w-25">
                <select className ="form-select">
                <option>Language</option>
                <option>English</option>
                <option>Hindi</option>
                </select>
                <button className="btn btn-danger m-2">Signin</button>
            </div>
        </div>
        </>
    )
}
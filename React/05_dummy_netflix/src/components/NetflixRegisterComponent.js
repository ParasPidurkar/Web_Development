export function NetflixRegisterComponent()
{
   return (
    <div>
    <p className="text-center">Ready to register</p>
    <div>
        <input type="email" className="form-control"></input>
        <button className ="btn btn-danger">
            Get started
            <span className="bi bi-chevron-right"></span>
        </button>
    </div>
    </div>
   );
}
export function Register()
{
   return (
    <div className="container-fluid text-center mt-3 bg-dark p-3 text-white w-75">
    <p>Ready to register</p>
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
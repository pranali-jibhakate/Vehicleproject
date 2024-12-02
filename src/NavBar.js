function NavBar(){
    return(
        <>
        <nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid">
    <a class="navbar-brand" href="/home">AutoMobile</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div class="navbar-nav">
        <a class="nav-link active" aria-current="page" href="/home">Home</a>
        <a class="nav-link active" aria-current="page" href="/about">About</a>
        <a class="nav-link active" aria-current="page" href="/vehiclelist">VehicleList</a>
        <a class="nav-link active" aria-current="page" href="/addvehicle">AddVehicle</a>



    
        
      </div>
    </div>
  </div>
</nav>




        </>
    )
}
export default NavBar;
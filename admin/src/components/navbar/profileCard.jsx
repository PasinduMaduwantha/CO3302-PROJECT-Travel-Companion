import "./profileCard.css";

const userDetails = JSON.parse(localStorage.getItem('user'));

const profileCard = (userDetails) => {
    console.log("profileCard",userDetails);
    return (
        <div className="card">
  <img src={userDetails.img} alt={userDetails.username} style="width:100%"/>
  <h1>{userDetails.username}</h1>
    <p className="email">{userDetails.email}</p>
    <p className="phone">{userDetails.phone}</p>
    <p className="address">{userDetails.address}</p>
    <p className="city">{userDetails.city}</p>
            
  {/* <a href="#"><i class="fa fa-dribbble"></i></a>
  <a href="#"><i class="fa fa-twitter"></i></a>
  <a href="#"><i class="fa fa-linkedin"></i></a>
  <a href="#"><i class="fa fa-facebook"></i></a> */}
  <p><button>Contact</button></p>
</div>
    )

}
export default profileCard;



import Categories from "./components/categories/Categories";
import Navbar from "./components/navbar/Navbar";


function App() {
  return (
    <div>
      <Navbar />
      <Categories />
      <main className="main">
        <section className="post-list">
        <div className="card-one">
          <div className="card-top">
            <span className="date">March 23 2023</span>
           <div className="icons">
           <span><i class="fab fa-facebook"></i></span>
            <span><i class="fab fa-youtube"></i></span>
            <span><i class="fab fa-instagram"></i></span>
            <span><i class="fab fa-twitter"></i></span>
           </div>
          </div>
          <div className="card-title">
            <h2>Card Title one</h2>
            <h3>Card Title Two</h3>
          </div>
          <div className="card-content">
            <img alt="pic" src="https://images.pexels.com/photos/1763075/pexels-photo-1763075.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
            <p>‘We’ve made this programme for Black parents,’ Mike Phillips said, introducing ‘Black Teachers’ on BBC2 in 1973. ‘We’ve got no intention of wasting our time on proving things that we all know.’ ‘Black Teachers’ was an episode of Open Door, a product of the BBC’s Community Programme Unit, founded a year earlier to profile groups and causes that had been ‘unheard or neglected’ by the media establishment. Its archive has been inaccessible for decades, but People Make Television, an exhibition at Raven Row in Spitalfields until 25 March, aims to change that, presenting a tightly curated – but still vast – selection of the material produced by the unit and its offshoots.</p>
          </div>
        </div>
        <div className="card-one">
          <div className="card-top">
            <span>Date</span>
            <span>Date</span>
          </div>
          <div className="card-title">
            <h2>Card Title one</h2>
            <h3>Card Title Two</h3>
          </div>
          <div className="card-content">
            <img alt="pic" src="https://images.pexels.com/photos/1763075/pexels-photo-1763075.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
            <p>Post Content will go here</p>
          </div>
        </div>
        <div className="card-one">
          <div className="card-top">
            <span>Date</span>
            <span>Date</span>
          </div>
          <div className="card-title">
            <h2>Card Title one</h2>
            <h3>Card Title Two</h3>
          </div>
          <div className="card-content">
            <img alt="pic" src="https://images.pexels.com/photos/1763075/pexels-photo-1763075.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
            <p>Post Content will go here</p>
          </div>
        </div>
        <div className="card-one">
          <div className="card-top">
            <span>Date</span>
            <span>Date</span>
          </div>
          <div className="card-title">
            <h2>Card Title one</h2>
            <h3>Card Title Two</h3>
          </div>
          <div className="card-content">
            <img alt="pic" src="https://images.pexels.com/photos/1763075/pexels-photo-1763075.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
            <p>Post Content will go here</p>
          </div>
        </div>

      </section>
      </main>
    </div>
  );
}

export default App;

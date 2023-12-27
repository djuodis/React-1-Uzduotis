const App = () => {
    return (
      <>
          <img src="logo.png" alt="" />

          <nav>
            <a href="#">Home</a>
            <a href="#">Product</a>
            <a href="#">Company</a>
            <a href="#">Contact</a>
          </nav>

          <header>
            <h1> Header image</h1>
          </header>

          <div className="cards">

            <div className="card">
              <h1>About</h1>
              <p>Lorem ipsum dolor sit amet
                consectetur adipisicing elit.
                Alias impedit veritatis, rem sit
                praesentium harum labore
                repellendus omnis error!</p>
            </div>

            <div className="card">
            <h1>Company</h1>
            <p>Lorem ipsum dolor sit amet
              consectetur adipisicing elit.
              Alias impedit veritatis, rem sit
              praesentium harum labore
              repellendus omnis error!</p>
            </div>

            <div className="card">
            <h1>Services</h1>
            <p>Lorem ipsum dolor sit amet
              consectetur adipisicing elit.
              Alias impedit veritatis, rem sit
              praesentium harum labore
              repellendus omnis error!</p>
            </div>

          </div>

          <footer>
            <div className="content">
            <h1>Content</h1>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odit nemo ipsa molestiae eveniet! Quae
              nemo sunt explicabo itaque natus consequatur, maiores cum eveniet incidunt possimus, odit quos vero
              voluptate? Non!</p>
            <h2>Sub header</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae sed quam laboriosam aperiam suscipit
              blanditiis in tenetur cupiditate porro, enim quidem excepturi, eligendi deleniti ipsam autem dolorem
              quasi asperiores eaque eveniet iusto tempore amet voluptates. Facilis officia consequuntur odit atque
              deleniti, similique quisquam libero perferendis earumnesciunt, rerum explicabo rem.</p>
            </div>
            <div className="navigation">
              <h1>Navigation</h1>
              <div className="links">
                <a href="#">Home</a>
                <a href="#">Product</a>
                <a href="#">Company</a>
                <a href="#">Contact</a>
              </div>
           
            </div>
           
          </footer>

      </>
    );
  };

  ReactDOM.createRoot(document.getElementById('app')).render(<App />);
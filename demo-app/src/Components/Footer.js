import React from "react";

class Footer extends React.Component {
    render(){
        return (
            <div className="footer">
              <footer class="py-5 bg-dark fixed-bottom">
                <div class="container">
                  <p class="m-0 text-center text-white">
                    Copyright &copy; Your Website 2020
                  </p>
                </div>
              </footer>
            </div>
          );
    }  
}

export default Footer;
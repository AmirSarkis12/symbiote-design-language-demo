import React from 'react';
import './styles/main.scss';

function App() {
  return (
    <div className="App">
      <header className="App-header">

      </header>

          <div className="container">
              <div className="checkbox">
                  <p className="title">
                      Custom checkbox
		</p>
                  <label htmlFor="customCheckbox1" className="checkbox__label">
                      <div className="checkbox__group">
                          <input type="checkbox" className="checkbox__input" id="customCheckbox1" hidden />
                          <span className="checkbox__checked"></span>
                      </div>
                  </label>

                  <label htmlFor="customCheckbox2" className="checkbox__label">
                      <div className="checkbox__group">
                          <input type="checkbox" className="checkbox__input" id="customCheckbox2" hidden />
                          <span className="checkbox__checked"></span>
                      </div>
                  </label>

                  <label htmlFor="customCheckbox3" className="checkbox__label">
                      <div className="checkbox__group">
                          <input type="checkbox" className="checkbox__input" id="customCheckbox3" hidden />
                          <span className="checkbox__checked"></span>
                      </div>
                  </label>
              </div>

              <div className="radio">
                  <p className="title">
                      Custom radio
		</p>
                  <label htmlFor="customRadio1" className="radio__label">
                      <div className="radio__group">
                          <input type="radio" className="radio__input" id="customRadio1" name="customRadio" hidden />
                          <span className="radio__checked"></span>
                      </div>
                  </label>

                  <label htmlFor="customRadio2" className="radio__label">
                      <div className="radio__group">
                          <input type="radio" className="radio__input" id="customRadio2" name="customRadio" hidden />
                          <span className="radio__checked"></span>
                      </div>
                  </label>

                  <label htmlFor="customRadio3" className="radio__label">
                      <div className="radio__group">
                          <input type="radio" className="radio__input" id="customRadio3" name="customRadio" hidden />
                          <span className="radio__checked"></span>
                      </div>
                  </label>
              </div>

              <div className="toggle">
                  <p className="title">
                      Custom toggle
		</p>
                  <label htmlFor="customToggle" className="toggle__label">
                      <input type="checkbox" className="toggle__input" id="customToggle" hidden />
                      <div className="toggle__group">
                          <span className="toggle__checked"></span>
                      </div>
                  </label>
              </div>
          </div>

          <div className="accordion">
              <div className="tab">
                  <input type="checkbox" id="chck1"></input>
                      <label className="tab-label" htmlFor="chck1">Item 1</label>
                      <div className="tab-content">
                          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsum, reiciendis!
                    </div>

      </div>
                  <div className="tab">
                  <input type="checkbox" id="chck2"></input>
                          <label className="tab-label" htmlFor="chck2">Item 2</label>
                          <div className="tab-content">
                              Lorem ipsum dolor sit amet consectetur adipisicing elit. A, in!
                        </div>

      </div>
                  </div>


    </div>

  );
}

export default App;

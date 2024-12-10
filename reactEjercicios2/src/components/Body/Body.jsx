import React from "react";

const Body = (props) => {
  return (
    <>
      <div className="container py-4">
        <div className="row mb-5">
          <div className="col-12">
            <div className="lc-block text-center">
              <div>
                <h2 className="">Our full menu</h2>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse a lacus est.
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="row row-cols-1 row-cols-lg-2 g-4 g-xxl-5">
      {
        props.plates.map(plate => {
            return (
                <div key={plate.id}>
              
                {/* Cada elemento ocupa el 50% del espacio */}
                <div className="col-6">
                  <div className="d-grid d-sm-flex gap-3 gap-xl-4">
                    <div className="d-flex lc-block d-sm-block flex-shrink-0 col-sm-3"></div>
                    <div className="lc-block w-100">
                      <div className="d-flex gap-2 align-items-baseline">
                        <div>
                          <h3 className="h5 fw-bold">{plate.name}</h3>
                        </div>
                        <div className="flex-grow-1 border_restaurant opacity-25"></div>
                        <div>
                          <strong className="h5">{plate.price}</strong>
                        </div>
                      </div>
                      <div className="lc-block opacity-50">
                        {plate.description}
                      </div>
                    </div>
                  </div>
                </div>
              
            </div>
            )
        })
    }
    </div>
    </>
  );
};

export default Body;

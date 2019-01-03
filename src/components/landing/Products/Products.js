
import React, { Component, Fragment } from 'react'
import { Pagination, PaginationItem, PaginationLink } from 'reactstrap';
import Footer from '../footer/Footer'
import SmallNav from '../SmallNav/SmallNav'
import Navigator from '../../navigation/Navigator'
import Authenticated from '../../misc/auth/Authenticated'
import Product from './Product/Product'



class Products extends Component {
    render() {





        return (
            <Fragment>
                <SmallNav />
                <Navigator />

                <div className="container my-5">

                    <h4 className="display-4 py-4 my-3 text-center">Shop Products Now</h4>
                    <div className="row">
                        <div className="col-12">
                            <div class="form-group">
                                <div class="input-group mb-4">
                                    <div class="input-group-prepend">
                                        <span class="input-group-text"><i class="ni ni-zoom-split-in"></i></span>
                                    </div>
                                    <input class="form-control" placeholder="Search" type="text" />
                                </div>

                            </div>

                        </div>


                    </div>
                    <div className="row">

                        <div className="col-lg-3">
                            <div class="card">
                                <article class="card-group-item">
                                    <header class="card-header">
                                        <h6 class="title"> Categories </h6>
                                    </header>
                                    <div class="card-body">
                                        <form>
                                            <label class="form-check">
                                                <input class="form-check-input" type="checkbox" value="" />
                                                <span class="form-check-label">
                                                    Washing Machine
				  </span>
                                            </label>
                                            <label class="form-check">
                                                <input class="form-check-input" type="checkbox" value="" />
                                                <span class="form-check-label">
                                                    Camera
				  </span>
                                            </label>
                                            <label class="form-check">
                                                <input class="form-check-input" type="checkbox" value="" />
                                                <span class="form-check-label">
                                                    Motors
				  </span>
                                            </label>
                                            <label class="form-check">
                                                <input class="form-check-input" type="checkbox" value="" />
                                                <span class="form-check-label">
                                                    Motors
				  </span>
                                            </label>
                                        </form>
                                    </div>
                                </article>

                                <article class="card-group-item">
                                    <header class="card-header">
                                        <h6 class="title"> Price </h6>
                                    </header>
                                    <div class="card-body">
                                        <label class="form-check">
                                            <input class="form-check-input" type="radio" name="exampleRadio" value="" />
                                            <span class="form-check-label">
                                                1000
			  </span>
                                        </label>
                                        <label class="form-check">
                                            <input class="form-check-input" type="radio" name="exampleRadio" value="" />
                                            <span class="form-check-label">
                                                2000
			  </span>
                                        </label>
                                        <label class="form-check">
                                            <input class="form-check-input" type="radio" name="exampleRadio" value="" />
                                            <span class="form-check-label">
                                                3000
			  </span>
                                        </label>
                                    </div>
                                </article>
                                <article class="card-group-item">
                                    <header class="card-header">
                                        <h6 class="title"> Situations  </h6>
                                    </header>
                                    <div class="card-body">
                                        <label class="form-check">
                                            <input class="form-check-input" type="radio" name="exampleRadio" value="" />
                                            <span class="form-check-label">
                                                Featured
			  </span>
                                        </label>
                                        <label class="form-check">
                                            <input class="form-check-input" type="radio" name="exampleRadio" value="" />
                                            <span class="form-check-label">
                                                New Arrivals
			  </span>
                                        </label>
                                        <label class="form-check">
                                            <input class="form-check-input" type="radio" name="exampleRadio" value="" />
                                            <span class="form-check-label">
                                                Promotions
			  </span>
                                        </label>
                                    </div>
                                </article>
                            </div>


                        </div>
                        <div className="col-lg-9">

                            <div className="row">

                                <div className="col-md-4 col-lg-4">
                                    <Product />


                                </div>
                                <div className="col-md-4 col-lg-4">
                                    <Product />


                                </div>
                                <div className="col-md-4 col-lg-4">
                                    <Product />


                                </div>
                                <div className="col-md-4 col-lg-4">
                                    <Product />


                                </div>
                                <div className="col-md-4 col-lg-4">
                                    <Product />


                                </div>
                                <div className="col-md-4 col-lg-4">
                                    <Product />


                                </div>

                            </div>
                            <div className="row py-4">
                                <div className="col-lg-12 col-md-12 text-center">
                                    <Pagination aria-label="Page navigation example">
                                        <PaginationItem>
                                            <PaginationLink previous href="#" />
                                        </PaginationItem>
                                        <PaginationItem>
                                            <PaginationLink href="#">
                                                1
          </PaginationLink>
                                        </PaginationItem>
                                        <PaginationItem>
                                            <PaginationLink href="#">
                                                2
          </PaginationLink>
                                        </PaginationItem>
                                        <PaginationItem>
                                            <PaginationLink href="#">
                                                3
          </PaginationLink>
                                        </PaginationItem>
                                        <PaginationItem>
                                            <PaginationLink href="#">
                                                4
          </PaginationLink>
                                        </PaginationItem>
                                        <PaginationItem>
                                            <PaginationLink href="#">
                                                5
          </PaginationLink>
                                        </PaginationItem>
                                        <PaginationItem>
                                            <PaginationLink next href="#" />
                                        </PaginationItem>
                                    </Pagination>
                                </div>
                            </div>

                        </div>




                    </div>




                </div>








                <Footer />
            </Fragment>
        )
    }
}





export default Authenticated(Products, true);
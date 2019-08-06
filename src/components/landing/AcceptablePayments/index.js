import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import styles from './index.module.css'



class index extends Component {










    render() {

        const imgWrapper = this.props.browser.orientation === 'landscape' ? `${styles.wrapper}` : `${styles.wrapperResponsive}`;
        const fontSize = this.props.browser.orientation === 'landscape' ? '20px' : '15px'




        const payments = [
            {
                url: "https://is3-ssl.mzstatic.com/image/thumb/Purple124/v4/b5/ee/f7/b5eef799-b16c-804b-edcb-c7a5e948f012/source/512x512bb.jpg",

            },
            {
                url: "https://img8.androidappsapk.co/300/9/8/d/mm.com.telenor.mfs.customer.png",

            },
            {
                url: "https://banner2.kisspng.com/20180418/wqe/kisspng-credit-card-debit-card-mastercard-logo-visa-go-vector-5ad7b9e0375ca0.1499166915240872642268.jpg",

            },
            {
                url: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/Mastercard_2019_logo.svg/1200px-Mastercard_2019_logo.svg.png",

            },
            {
                url: "data:image/png;base64,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",

            },

        ]



        const renderPaymentLogos = () => {

            return payments.map((payment) => {

                return (
                    <div className="mx-3">

                        <img
                            className={`${styles.imgStyle}`}
                            style={{ height: '60px', width: '60px' }}
                            src={payment.url}
                        />
                    </div>

                )
            })
        }


        return (




            <Fragment>
                <section
                    className="section-sm bg-green-grediant"
                    style={{ backgroundColor: '#e9ecef' }}
                >

                    <div className={imgWrapper}>

                        <div className="mx-3">
                            <span className="" style={{ fontSize: fontSize, }}>We accept : </span>
                        </div>


                        {
                            renderPaymentLogos()
                        }


                    </div>


                </section>
            </Fragment>
        )
    }
}





const mapStateToProps = (state) => ({
    browser: state.browser
})

const mapDispatchToProps = {

}




export default connect(mapStateToProps, mapDispatchToProps)(index)
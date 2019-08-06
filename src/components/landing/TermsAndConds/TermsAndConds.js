
import React, { Component, Fragment } from 'react'
import Term from './Term/Term'
import { ListGroup } from 'reactstrap';
import { connect } from 'react-redux'





class TermsAndConds extends Component {





    render() {


        const faqs = [
            {
                question: 'Sample FAQ1',
                answer: `Answer sample 1 `
            },
            {
                question: 'Sample FAQ2',
                answer: `Answer sample 2`
            },
            {
                question: 'Sample FAQ3',
                answer: `Answer sample 3 `
            },
            {
                question: 'Sample FAQ4',
                answer: `Answer sample 4 `
            },


        ]

        const renderFAQs = () => {



            if (this.props.faqs && this.props.faqs.length > 0) {

                return this.props.faqs.map((faq, i) => {

                    return (
                        <Term
                            key={i}
                            question={faq.question}
                            answer={faq.answer}
                        />
                    )

                })

            } else {

                return faqs.map((faq, i) => {

                    return (
                        <Term
                            key={i}
                            question={faq.question}
                            answer={faq.answer}
                        />
                    )

                })

            }





        }

        return (





            <section className="section-lg" style={{ backgroundColor: '#ced4da' }}>
                <div className="container">
                    <h3 className="display-4 text-center py-3">FAQ Questions</h3>


                    <ListGroup>
                        {renderFAQs()}

                    </ListGroup>





                </div>
            </section>
        )
    }
}


const mapStateToProps = (state) => ({
    faqs: state.customers ? state.customers.faqs : []
})

const mapDispatchToProps = {

}



export default connect(mapStateToProps, mapDispatchToProps)(TermsAndConds);
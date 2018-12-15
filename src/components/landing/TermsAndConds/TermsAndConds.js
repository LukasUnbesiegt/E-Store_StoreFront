
import React, { Component, Fragment } from 'react'
import Term from './Term/Term'
import { ListGroup } from 'reactstrap';





class TermsAndConds extends Component {





    render() {


        const faqs = [
            {
                question: 'Do you refund for products?',
                answer: `No we don't `
            },
            {
                question: 'Can i come and see Products',
                answer: `Yes You can. always welcome `
            },
            {
                question: 'Do you refund for products?',
                answer: `No we don't `
            },
            {
                question: 'Do you refund for products?',
                answer: `No we don't `
            },


        ]

        const renderFAQs = () => {


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

        return (





            <section className="section-lg">
                <div className="container">
                    <h3 className="display-4 text-center py-3">E-Store FAQ Questions</h3>


                    <ListGroup>
                        {renderFAQs()}

                    </ListGroup>





                </div>
            </section>
        )
    }
}





export default TermsAndConds;
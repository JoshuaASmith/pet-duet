var React = require('react')
var Carousel = require('nuka-carousel')

const QuoteCarousel = React.createClass({
    mixins: [Carousel.ControllerMixin],
    render() {
        return (
            <Carousel>
                <div>
                    <article className="dt w-100 bg-dark-gray">
                        <div className="dtc tc white ph3 ph4-l tc center">
                            <blockquote className="pv4 helvetica mt2 white ">
                                <p className="f5 f5-m f3-l measure mt0 center tc">
                                    "Documenting procedures has never been easier. Choosing categories, or even adding them to specific pets has never been easier that with Pet Duet."
                                </p>
                                <cite className="f6 ttu tracked fs-normal">―Mount Pleasant Animal Hospital</cite>
                            </blockquote>
                        </div>
                    </article>
                </div>
                <div>
                    <article className="vh-25 dt w-100 bg-dark-gray">
                        <div className="dtc v-mid tc white ph3 ph4-l tc center">
                            <blockquote className="pv4 helvetica mt2 white ">
                                <p className="f5 f5-m f3-l measure mt0 center tc">
                                    "Pet Duet makes it so much easier to care for our pets! We love how simple it is."
                                </p>
                                <cite className="f6 ttu tracked fs-normal">―Pet Vet Animal Hospital</cite>
                            </blockquote>
                        </div>
                    </article>
                </div>
                <div>
                    <article className="vh-30 dt w-100 bg-dark-gray">
                        <div className="dtc v-mid tc white ph3 ph4-l tc center">
                            <blockquote className="pv4 helvetica mt2 white ">
                                <p className="f5 f5-m f3-l measure mt0 center tc">
                                    "Pet Duet has brought our clinic into the digital age. Patients love the new system of pet files."
                                </p>
                                <cite className="f6 ttu tracked fs-normal">―Tidewater Veterinary</cite>
                            </blockquote>
                        </div>
                    </article>
                </div>
            </Carousel>
        )
    }
})

module.exports = QuoteCarousel

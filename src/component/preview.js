import React from 'react';


var listOfImages = [];


class Preview extends React.Component {

    importAll(r) {
        return r.keys().map(r);
    }
    componentWillMount() {
        listOfImages = this.importAll(require.context('../country/Croatia/images', false, /\prev.(png|jpe?g|svg)$/));
    }
    render() {
        return (
            <>
                <p className="mini-headline">preview</p>
                <div className="beauti-citi-col d-flex justify-content-between scrollbar" id="style-3">
                    {
                        listOfImages.map(
                            (image, index) =>
                                <div className="beauti-citi-div">
                                    <img key={index} src={image} className="img-fluid last-dest-img" alt="beispiele"></img>
                                </div>
                        )
                    }
                </div>
            </>
        );
    }

}

export default Preview;

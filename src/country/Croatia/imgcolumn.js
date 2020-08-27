import React from 'react';


var listOfImages = [];


class IMGColumn extends React.Component {

    importAll(r) {
        return r.keys().map(r);
    }
    componentWillMount() {
        listOfImages = this.importAll(require.context('./images', false, /\.(png|jpe?g|svg)$/));
    }
    render() {
        return (
            <><br />
                <p className="mini-headline">photos</p>
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

export default IMGColumn;

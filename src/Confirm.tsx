import * as React from 'react';
import { connect } from 'react-redux';
import './Confirm.css';
import { getProducts } from './actions/productActions';

interface IProps {
    title: string;
    content: string;
    cancelCaption?: string;
    okCaption?: string;
    fetchProducts: typeof getProducts;
}

class Confirm extends React.Component<IProps> {

    public static defaultProps = {
        cancelCaption: 'Cancel',
        okCaption: 'Okay'
    };

    public static getDerivedStateFromProps(props: {}, state: {}) {
        console.log('getDerivedStateFromProps', props, state);
        return null;
    }

    public render() {
        const { title, content, cancelCaption, okCaption } = this.props;

        return (
            <div className="confirm-wrapper confirm-visible">
                <div className="confirm-container">
                    <div className="confirm-title-container">
                        <span>{title}o</span>
                    </div>
                    <div className="confirm-content-container">
                        <p>{content}</p>
                    </div>
                    <div className="confirm-buttons-container">
                        <button className="confirm-cancel">{cancelCaption}</button>
                        <button className="confirm-ok" onClick={this.handleOkClick}>{okCaption}</button>
                    </div>
                </div>
            </div>
        );
    }

    private handleOkClick = () => {
        this.props.fetchProducts();
        console.log('Ok clicked');
    }
}

const mapDispatchToProps = (dispatch: any) => ({
    fetchProducts: () => dispatch(getProducts()),
});

export default connect(null, mapDispatchToProps)(Confirm);

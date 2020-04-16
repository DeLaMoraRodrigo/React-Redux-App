import React, { useEffect } from "react";
import { connect } from "react-redux";
import Loader from "react-loader-spinner";

import { fetchCard } from "../store/actions/yugiohActions";

const YugiohCard = props => {
    useEffect(() => {
        // call an action creator
        props.fetchCard();
      }, []);

    return (
        <div className="cardDiv">
            <h1>YU-GI-OH</h1>
            {props.isFetching && (
                <Loader type="Puff" color="#00BFFF" height={100} width={100} />
            )}
            <div className="imgDiv">
              {props.image && <img src={props.image} />}
            </div>
            <div className="infoDiv">
                {props.name && <h2>{props.name}</h2>}
                {props.type && <span>{props.type}</span>}
                {props.desc && <p>{props.desc}</p>}
                {props.error && <p className="error">{props.error}</p>}
                <button onClick={props.fetchCard}>Fetch a new card</button>
            </div>
        </div>
    )
}

const mapStateToProps = state => {
    console.log(state);
    return {
      name: state.yugiohReducer.name,
      image: state.yugiohReducer.image,
      type: state.yugiohReducer.type,
      desc: state.yugiohReducer.desc,
      isFetching: state.yugiohReducer.isFetching,
      error: state.yugiohReducer.error
    };
  };

export default connect(mapStateToProps, { fetchCard })(YugiohCard);
import { useEffect } from "react";
import PropTypes from 'prop-types';

import fetchUser from './helpers/fetchUser';
import { connect } from "react-redux";
import { authSuccess, authFail } from "../../store/actions/Auth";

const hashRegExp = /.*access_token=(.*)&expires_in=(.*)&user_id=(.*)&state=(.*)/;

function VKController({ location, history, authSuccess, authFail }) {
  useEffect(() => {
    try {
      const { hash } = location;
      const [token, expired, userId] = hash.match(hashRegExp);

      fetchUser(userId).then(response => {
        // TODO: send to server firstname, lastname, userId, photo from response
        // or move it to store
      })

      history.replace('/');

      authSuccess(token);
    } catch(error) {
      authFail(error);
    }
  }, []);

  return null;
}

VKController.propTypes = {
  location: PropTypes.object,
  authSuccess: PropTypes.func.isRequired,
  authFail: PropTypes.func.isRequired,
}

const mapDispatchToProps = {
  authSuccess,
  authFail,
}

export default connect(
  null,
  mapDispatchToProps,
)(VKController) ;

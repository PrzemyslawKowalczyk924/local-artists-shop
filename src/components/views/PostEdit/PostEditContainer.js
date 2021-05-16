import { connect } from 'react-redux';
import PostEdit from './PostEdit';
import { getProductById, getSinglePost, EditPostRequest, fetchPublishedById } from '../../../redux/productsRedux';
import { getUserInfo } from '../../../redux/userRedux';

const mapStateToProps = (state, props) => ({
  ...getProductById(state, props.match.params.id),
});

/* const mapStateToProps = (state) => ({
  user: getUserInfo(state),
  ...getSinglePost(state),
}); */

/* const mapDispatchToProps = (dispatch, props) => ({
  editPost: (post) => dispatch(EditPostRequest(post)),
  getPostById: () => dispatch(fetchPublishedById(props.match.params.id)),
}); */

export default connect(mapStateToProps /* , mapDispatchToProps */)(PostEdit);

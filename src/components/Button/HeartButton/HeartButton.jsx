import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useAddFavoriteNoticeMutation } from 'redux/Notices/noticesApi';
import { addFavorite } from 'redux/Notices/noticesSlice';

import { HeartBtn } from './HeartBtn.styled';
import { ReactComponent as IconHeart } from '../../../images/icons/heart.svg';

export const HeartButton = ({
  //onClick,
  className,
  children = '',
  text = '',
  noticesId,
}) => {
  const token = useSelector(state => state.auth.token);
  const navigete = useNavigate();
  const dispatch = useDispatch();
  const favoriteNotices = useSelector(state => state.notices.favoriteNotices);

  const [addNotices] = useAddFavoriteNoticeMutation();

  const handleClick = e => {
    e.preventDefault();

    if (token && token !== null) {
      if (favoriteNotices.length > 0) {
        const favoriteId = favoriteNotices.find(elem => elem._id === noticesId);
        if (!favoriteId) {
          addNotices(noticesId);
          dispatch(addFavorite(noticesId));
        }
      }
    }
    if (!token || token === null) {
      navigete('/login');
    }
  };
  return (
    <HeartBtn onClick={handleClick} className={className}>
      <IconHeart />
      {children}
      {text}
    </HeartBtn>
  );
};

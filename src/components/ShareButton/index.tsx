import { FaShareAlt } from 'react-icons/fa';
import { useState } from 'react';
import copyToClipboard from '../../utils/copyToClipboard';

type ShareButtonProps = {
  newsURL: string;
};

export default function ShareButton({ newsURL }: ShareButtonProps) {
  const [isShowCopiedMessage, setIsShowCopiedMessage] = useState(false);

  const handleShowCopiedMessage = () => {
    setIsShowCopiedMessage(true);

    setTimeout(() => {
      setIsShowCopiedMessage(false);
    }, 2000);
  };

  return (
    <>
      <div className="favorite_button ms-2">
        <FaShareAlt
          onClick={ () => {
            copyToClipboard(newsURL);
            handleShowCopiedMessage();
          } }
          data-testid="share-button"
        />
      </div>
      <div
        className={ `copied_message ${isShowCopiedMessage && 'show_copied_message '}` }
        data-testid="copied-message"
      >
        Link copiado!
      </div>
    </>
  );
}

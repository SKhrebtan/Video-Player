import { createPortal } from 'react-dom';
import { motion, AnimatePresence } from 'framer-motion';
const modal = document.querySelector('#modal');
export const DeleteModal = ({
  isOpen,
  handleCloseModal,
  btnDeleteStyles,
  btnStyles,
  handleDelete,
  id,
}) => {
  return createPortal(
    <AnimatePresence>
      {isOpen && (
        <motion.div
          onClick={e => {
            if (e.currentTarget !== e.target) return;
            handleCloseModal();
          }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.35 }}
          className="fixed top-0 left-0 w-full h-full bg-[rgba(0,0,0,0.3)] flex justify-center items-center"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.4 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.4 }}
            transition={{ duration: 0.35 }}
            className="w-[300px] h-[200px] border-[2px] border-red-300 bg-blue-100 rounded-xl p-10 flex flex-col gap-[50px] items-center"
          >
            <p>Are you sure?</p>
            <div className="flex gap-[30px]">
              <button
                type="button"
                onClick={handleCloseModal}
                className={btnDeleteStyles}
              >
                Cancel
              </button>
              <button
                type="button"
                className={btnStyles}
                onClick={() => {
                  handleDelete(id);
                  handleCloseModal();
                }}
              >
                Confirm
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>,
    modal
  );
};

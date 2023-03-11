import '../styles/style.css';
import MicroModal from 'micromodal';

document.addEventListener('DOMContentLoaded', function () {
  MicroModal.init({
    openTrigger: 'data-custom-open-m',
    onShow: (modal, trigger) => {
      console.info(`I'm opened ${modal.id} - my trigger was`);
      console.log(trigger);
      // console.log(modal);
    },
  });

  const programmaticallyOpenButton = document.getElementById('open-button');

  programmaticallyOpenButton.addEventListener('click', () => {
    MicroModal.show('modal-1', {
      onShow: (modal) => console.log(`open via listener ${modal.id}`),
    });
  });
});

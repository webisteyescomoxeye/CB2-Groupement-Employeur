document.addEventListener('DOMContentLoaded', function () {
  const recommendationButtons = document.querySelectorAll('.btn-recommendation');
  const thanksButtons = document.querySelectorAll('.btn-thanks');
  const submitRecommendationButton = document.getElementById('submitRecommendation');
  const submitThanksButton = document.getElementById('submitThanks');
  const loggedInUserName = 'Yescom'; // Nom de l'entreprise qui recommande ou remercie

  recommendationButtons.forEach(function (button) {
    button.addEventListener('click', function () {
      const memberCard = button.closest('.member-card') || document.querySelector('.profile-info');
      const memberNameElement = memberCard.querySelector('h5') || memberCard.querySelector('a'); // Select h5 or a elements

      // Vérifiez que l'élément du nom est bien trouvé et récupérez son contenu
      if (memberNameElement) {
        console.log('Member name element found:', memberNameElement);
        const memberName = memberNameElement.textContent.trim(); // Remove extra spaces
        console.log('Member name:', memberName);
        document.getElementById('recommendedName').textContent = memberName;
      } else {
        console.log('Member name element not found');
      }

      const memberImage = memberCard.querySelector('img').src;
      document.getElementById('recommendedImage').src = memberImage;
      $('#recommendationModal').modal('show');
    });
  });

  thanksButtons.forEach(function (button) {
    button.addEventListener('click', function () {
      const memberCard = button.closest('.member-card') || document.querySelector('.profile-info');
      const memberNameElement = memberCard.querySelector('h5') || memberCard.querySelector('a'); // Select h5 or a elements

      // Vérifiez que l'élément du nom est bien trouvé et récupérez son contenu
      if (memberNameElement) {
        console.log('Member name element found:', memberNameElement);
        const memberName = memberNameElement.textContent.trim(); // Remove extra spaces
        console.log('Member name:', memberName);
        document.getElementById('thanksRecommendedName').textContent = memberName;
      } else {
        console.log('Member name element not found');
      }

      const memberImage = memberCard.querySelector('img').src;
      document.getElementById('thanksImage').src = memberImage;
      $('#thanksModal').modal('show');
    });
  });

  submitRecommendationButton.addEventListener('click', function (event) {
    const recommendationSubject = document.getElementById('recommendationSubject').value;
    if (recommendationSubject === '') {
      alert('Veuillez remplir le champ Objet.');
      return;
    }
    alert('Recommandation envoyée avec succès !');
    $('#recommendationModal').modal('hide');
  });

  submitThanksButton.addEventListener('click', function (event) {
    const thanksSubject = document.getElementById('thanksSubject').value;
    if (thanksSubject === '') {
      alert('Veuillez remplir le champ Objet.');
      return;
    }
    alert('Remerciement envoyé avec succès !');
    $('#thanksModal').modal('hide');
  });
});

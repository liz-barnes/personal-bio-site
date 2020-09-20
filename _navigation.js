
const showBio = () => {
    $('#navToTechnologies').addClass('hide');
    $('#navToProjects').addClass('hide');
}

const navbarEvents = () => {
    // $('#navToBio').on('click', (e) => {
    //     console.log(e);
    // });
    $('#navToBio').on('click', showbio());
}

export default { navbarEvents };

document.addEventListener("DOMContentLoaded", function () {
    const getFriendsButton = document.getElementById("getFriendsButton");
    const friendList = document.getElementById("friendList");

    getFriendsButton.addEventListener("click", function () {
        const accessToken = 'EAAU9UnVpvnkBO8HRQTLz2SFZBMtHaFQSWifvXKAap6ZCXpEMIW0402xe3agjZCZCxKIZBPm7FAsZAfQocZCBjPmEMbtzS7QWAat8np3mtkqIgSk3e3k7tonTYWu4locqrYNMxp4N0dB3Bozu6SRQpfRhzQZB2PhwNHRD4JJ2nei6ZAZAhZAs3yiBimc5jpLRDqwOtrSGpEKCXXclSwKekaeu9ztJtvDZCvLw6ZBgqw7K824pdRyI8UFu8vhNakAjdT01UhAZDZD'; // Gantilah dengan token akses Anda.
        const userId = 'me'; // Ini akan mengambil teman dari profil Anda sendiri.

        fetch(`https://graph.facebook.com/v10.0/${userId}/friends?access_token=${accessToken}`)
            .then(response => response.json())
            .then(data => {
                const friends = data.data;
                const friendsListHTML = friends.map(friend => `<li>${friend.name}</li>`).join('');
                friendList.innerHTML = friendsListHTML;
            })
            .catch(error => {
                console.error(error);
            });
    });
});


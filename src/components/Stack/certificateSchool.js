const importAll = (r) => r.keys().map(r);
let imagesSertiv = importAll(require.context('../../assets/img/certificate/school/', false, /\.(png|jpe?g|svg)$/));

const certificateSchool = [

    {
        title: "Sertifikat Paskibra Juara II Mula dalam LKBB Sakti Se-JawaTimur",
        img: imagesSertiv[0],
        link: "https://drive.google.com/file/d/1sKfDVY9iEcnQuioHRtowTY6LfzKV0cPV/view"
    },
    {
        title: "Sertifikat Paskibra Juara Umum dalam LKBB Patriot Se-JawaTimur",
        img: imagesSertiv[1],
        link: "https://drive.google.com/file/d/19XKFH8tB44AAQqeIjTeGKuYTj_9LTGWS/view"
    },
    {
        title: "Sertifikat Paskibra Juara II Utama dalam LKBB Patriot Se-JawaTimur",
        img: imagesSertiv[2],
        link: "https://drive.google.com/file/d/1L2baZUdgMH-3_EPI0Nd04AVsXEGl3fX8/view"
    },
    {
        title: "Sertifikat Paskibra BEST PBB dalam LKBB Patriot Se-JawaTimur",
        img: imagesSertiv[3],
        link: "https://drive.google.com/file/d/1RnDDkcRVbTPvLHv09bY_tswjjuKt3Zjg/view"
    },
    {
        title: "Sertifikat Paskibra Juara II Mula dalam LKBB Agra Se-Pulau Jawa (Open)",
        img: imagesSertiv[4],
        link: "https://drive.google.com/file/d/1Gw-zoViEM9TtnBAPa0u4QKALzl_QzOmJ/view"
    },
    {
        title: "Sertifikat Paskibra Juara II Caraka dalam LKBB Aura Se-JawaTimur (Open)",
        img: imagesSertiv[5],
        link: "https://drive.google.com/file/d/1CEiD1cSfYE9tDIXEHjmCWSoisJdS9R7_/view"
    },
    {
        title: "Sertifikat Paskibra Juara Utama III dalam LKBB Joko tingkir se-JawaTimur",
        img: imagesSertiv[6],
        link: "https://drive.google.com/file/d/1OrfbEOkQx0vlVBjPGw7HIG540JFag45A/view"
    },
    {
        title: "Sertifikat Paskibra BEST PBB II dalam LKBB Joko tingkir se-JawaTimur",
        img: imagesSertiv[7],
        link: "https://drive.google.com/file/d/1PmXMMGUgjJmy6Razq5VMxXa7brj4HDi2/view"
    },
    {
        title: "Sertifikat Paskibra BEST VARFOR Madya 3 dalam LKBB Joko tingkir se-JawaTimur",
        img: imagesSertiv[8],
        link: "https://drive.google.com/file/d/18I9rura8R_fv4TzCNzoFArKjLumwDKpS/view"
    }
]

export default certificateSchool;
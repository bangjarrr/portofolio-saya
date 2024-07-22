const importAll = (r) => r.keys().map(r);
let imagesSertiv = importAll(require.context('../../assets/img/certificate/bootcamp/', false, /\.(png|jpe?g|svg)$/));

const certificateBootcamp = [
    {
        title: "Belajar Dasar AI",
        img: imagesSertiv[0],
        link: "https://www.dicoding.com/dicodingassets/coursecertificate/d2a743e25f63fef75bfed7e16b8de3d1ad5961af/view"
    },
    {
        title: "Belajar Dasar Visualisasi Data",
        img: imagesSertiv[1],
        link: "https://www.dicoding.com/dicodingassets/coursecertificate/55fcb5219bb99704b4f5d97abf7e91ba2307d721/view"
    },
    {
        title: "Alibaba Cloud Certivication",
        img: imagesSertiv[2],
        link: "https://aliyun-aps-cloud-public.oss-cn-hangzhou.aliyuncs.com/img_6d66fc092b104c3e531a640a604f9a42.png"
    }
]

export default certificateBootcamp;
const express = require('express')
const app = express()

const router = express.Router()

router.use(express.static('public/images'))
router.get('/', (req,res)=> {
    const imageList = [
        {
            file: "/images/forest-igg.jpg",
            description: "Deer Lake Park"
        },
        {
            file: "/images/growth.jpg",
            description: "View from Apple Vancouver"
        },
        {
            file: "/images/sakuras.jpg",
            description: "Pink blossoms"
        },
        {
            file: "/images/snow.jpg",
            description: "A snowy day in vancouver"
        },
        {
            file: "/images/vanc-glass.jpg",
            description: "A glass of wine in Downtown Vancouver"
        }
    ]
    res.json(imageList);
}
);

app.use("/images", router);

let PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`server operational at port ${PORT} `));
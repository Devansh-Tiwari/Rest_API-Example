const product = require("../model/product");

const getallprod1 = async (req ,res ) =>{
    const {company , name , sort , select} = req.query;
    const queryObject = {};
    console.log(req.query)
    if(company){
        queryObject.company = company;
    }
    if(name){
        queryObject.name = {$regex: name, $options : "i"};
    }

    // if(featured){
    //     queryObject.featured = featured;
    // }

    let apidata = product.find(queryObject);
    if(sort){
        let sortfix = sort.replace("," ," " )
        apidata = apidata.sort(sortfix)
    }
    if(select){
        let selectfix = select.split(",").join(" ");

        apidata = apidata.select(selectfix)
    }
    
    let page = Number(req.query.page) || 1;
    let limit = Number(req.query.limit) || 10;

    let skip = (page-1)*limit;
    apiData = apidata.skip(skip).limit(limit);

    const myData = await apidata;
    if(!myData){
        res.send('Nothing');
    }
    
    res.status(200).json({myData});


} 


const getallprod2 = async (req ,res) => {
    res.status(200).json({ msg: " All products testing "});
}

module.exports =  { getallprod1 , getallprod2};
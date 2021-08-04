const regex = new RegExp(/([\/api]\/v1\/cars\/\d)/);
regex.test(req.url);
console.log(regex.test(req.url))
console.log('jimmy')
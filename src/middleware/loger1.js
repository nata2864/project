
function loger1(request, response, next) {
console.log('Log 1');
  next();
}

module.exports = loger1;
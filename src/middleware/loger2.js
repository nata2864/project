function loger2(request, response, next) {
console.log('Log 2');
  next();
}

module.exports = loger2;
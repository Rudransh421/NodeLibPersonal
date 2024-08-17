 
 function data(req, resp) {
    resp.write("{name:'RD',email:'rudransh@gmail.com'}");
    resp.end();
}
http.createServer(data).listen(5000);

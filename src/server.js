const express = require('express');
const config = require('./configs');
const fileOperations = require('./file');

const server = express();

server.get('/write/:filename', function(req, res){
  fileOperations.write(req.params.filename, req.query.content)
      .then(function (data) {
        res.json({
          message: 'success',
          params: req.params,
          query: req.query
        });
      })
      .catch(function(err){
        res.json({
          message: err,
          params: req.params,
          query: req.query
        });
      });
});

server.get('/read/:filename', function(req, res){
  fileOperations.read(req.params.filename)
      .then(function (data) {
        res.json({
          message: 'success',
          params: req.params,
          content: data
        });
      })
      .catch(function(err){
        res.json({
          message: err,
          params: req.params,
        });
      });
});

server.get('/rename/:oldname/:newname', function(req, res){
  fileOperations.rename(req.params.oldname, req.params.newname)
      .then(function (data) {
        res.json({
          message: 'success',
          params: req.params,
        });
      })
      .catch(function(err){
        res.json({
          message: err,
          params: req.params,
        });
      });
});

server.get('/deletefile/:filename', function(req, res){
  fileOperations.deleteFile(req.params.filename)
      .then(function (data) {
        res.json({
          message: 'success',
          params: req.params,
        });
      })
      .catch(function(err){
        res.json({
          message: err,
          params: req.params,
        });
      });
});

server.listen(config.port, function(){
  console.log('server running on port ', config.port);
})

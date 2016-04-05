var test = require('tape')
  , tensorflow = require('../index')

test('Tensorflow Version', function(t){

  console.log(tensorflow.NewStatus());

  t.equal(tensorflow.version, '0.6.0')
  t.end()
})

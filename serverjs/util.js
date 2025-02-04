function add_word(obj, word) {
  if(word.length <= 0)
  {
    return;
  }
  else if(word.length == 1)
  {
    if(!obj[word.charAt(0)])
    {
      obj[word.charAt(0)] = {'$':{}};
    }
    else
    {
      obj[word.charAt(0)]['$']={};
    }
  }
  else
  {
    character = word.charAt(0);
    word = word.substr(1, word.length)
    if(!obj[character])
    {
      obj[character] = {};
    }
    add_word(obj[character], word)
  }
}

function binaryInsert(value, array, startVal, endVal) {
  var length = array.length;
  var start = typeof(startVal) != 'undefined' ? startVal : 0;
  var end = typeof(endVal) != 'undefined' ? endVal : length - 1;//!! endVal could be 0 don't use || syntax
  var m = start + Math.floor((end - start)/2);

  if(length == 0){
    array.push(value);
    return;
  }

  if(value > array[end]){
    array.splice(end + 1, 0, value);
    return;
  }

  if(value < array[start]){//!!
    array.splice(start, 0, value);
    return;
  }

  if(start >= end){
    return;
  }

  if(value < array[m]){
    binaryInsert(value, array, start, m - 1);
    return;
  }

  if(value > array[m]){
    binaryInsert(value, array, m + 1, end);
    return;
  }
}

var methods = {
  shuffle: function (array) {
    var currentIndex = array.length;
    var temporaryValue, randomIndex;
    while (0 !== currentIndex) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }

    return array;

  },
  turnToTree: function (arr) {
    var res = {};
    arr.forEach(function (item, index)
    {
      //add_word(cardnames, card);
      add_word(res, item);
    });
    return res;
  },
  binaryInsert: binaryInsert,
  arraysEqual: function (a, b) {
    if (a === b) return true;
    if (a == null || b == null) return false;
    if (a.length != b.length) return false;

    for (var i = 0; i < a.length; ++i) {
      if (a[i] !== b[i]) return false;
    }
    return true;
  },
  CSVtoArray: function(text) {
    let ret = [''], i = 0, p = '', s = true;
    for (let l in text)
    {
      l = text[l];
      if ('"' === l)
      {
        s = !s;
        if ('"' === p)
        {
          ret[i] += '"';
          l = '-';
        }
        else if ('' === p)
        {
          l = '-';
        }
      }
      else if (s && ',' === l)
      {
        l = ret[++i] = '';
      }
      else
      {
        ret[i] += l;
      }
      p = l;
    }
    return ret;
  }
}

module.exports = methods;

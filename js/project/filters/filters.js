newsFeed.filter('objectProplimitTo', function() {
  return function(obj, count) {
    var res = [];

    for (var p in obj) {
      if (res.length == count) return res;
      res.push(obj[p]);
    }
  }

  return res;
})



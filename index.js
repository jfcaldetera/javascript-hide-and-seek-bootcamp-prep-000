function getFirstSelector(selector)
{
  return document.querySelector(selector)
}

function nestedTarget()
{
  return document.querySelector('#nested.target')
}

function increaseRankBy(n)
{
  var list = document.getElementById('app').querySelector('ul.ranked-list li')

  for (let i = 0; i < lis.length; i++)
  {
    lis[i].innerHTML = parseInt(lis[i].innerHTML) + n
  }
}

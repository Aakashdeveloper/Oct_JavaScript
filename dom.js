document.getElementsByTagName('h1')
HTMLCollection [h1]
document.getElementsByTagName('h1')[0]
<h1>​I'm AAKASH HANDA​</h1>​
document.getElementsByTagName('h1')[0].innerText
"I'm AAKASH HANDA"
document.getElementsByTagName('h1')[0].innerText="NareshIt"
"NareshIt"

document.getElementsByClassName('scroll')
HTMLCollection(4) [a.scroll, a.scroll, a.scroll, a.scroll]
document.getElementsByClassName('scroll')[1]
<a href=​"#work" class=​"scroll">​Experience​</a>​
document.getElementsByClassName('scroll')[1].innerText="Role"
"Role"

document.getElementById('add').click()
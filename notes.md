```js
<a href="../views/school.html">
    <li>Πληροφορική</li>
</a>
```

```
"https://cors-everywhere.tk/get?q=https://unpkg.com/node-html-parser/dist/index.js&ct=text/javascript"
```

Copyright code:
```js
const copyright = document.createElement("a");
copyright.innerText = `© Copyright ${new Date().getFullYear()} Jasonkaranik`;
copyright.setAttribute("style", "float: right; text-align: right;");
copyright.setAttribute("href", "https://en.wikipedia.org/wiki/Copyright");
copyright.setAttribute("target", "_blank");
copyright.setAttribute("rel", "noreferrer");
```

```html
<div style="display: flex; align-items: center; justify-content: center;">
			<div style="overflow-y: scroll; height: 270px; width: 900px;">
				<iframe width="900" height="250" src="/embeds/school-schedule.html?class=A1" frameborder="0"
					scrolling="no" marginheight="0" marginwidth="0"></iframe>
				<iframe width="900" height="250" src="/embeds/school-schedule.html?class=A2" frameborder="0"
					scrolling="no" marginheight="0" marginwidth="0"></iframe>
				<iframe width="900" height="250" src="/embeds/school-schedule.html?class=A3" frameborder="0"
					scrolling="no" marginheight="0" marginwidth="0"></iframe>
			</div>
		</div>
```

```js
const STUDENT = {
			name: "Iasonas",
			last_name: "Karanikolas",
			age: 15,
			tel_number: "+3069",
			introduce: function () { console.log(`My full-name is ${this.name} ${STUDENT.last_name}, I'm ${STUDENT.age} years old and my telephone number is ${STUDENT.tel_number}`); }
		}
```
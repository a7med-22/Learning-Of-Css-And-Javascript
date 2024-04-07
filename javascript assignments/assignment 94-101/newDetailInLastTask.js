[...document.body.children].forEach(el =>
    el.onclick = _ => console.log(el.localName)
    );
    
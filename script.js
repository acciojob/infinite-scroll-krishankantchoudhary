//your code here!
const list=document.getElementById("infi-list");

function createListitem(index){
	const li=document.createElement('li');
	li.textContent=`Item ${index}`;
	return li;
}

let itemcount=10;
for(let i=1; i<itemcount; i++){
	list.appendChild(createListitem(i));
}

function addmoreItem(){
	for(let i=1; i<=2; i++){
		itemcount++;
		list.appendChild(createListitem(itemcount));
	}
}

window.addEventListener('scroll', () => {
  const { scrollTop, scrollHeight, clientHeight } = document.documentElement;

  if (scrollTop + clientHeight >= scrollHeight - 5) {
    addmoreItem(); // user reached bottom, so add more items
  }
});

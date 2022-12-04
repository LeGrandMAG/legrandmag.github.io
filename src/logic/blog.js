import {db} from './index'
import {setDoc, collection, doc, getDoc} from 'firebase/firestore'


function saveBlog(title, data, topics){
    let blogD = collection(db, topics)
    let docData = {
        topic:topics,
        name: title,
        date: new Date().toLocaleDateString(),
        content: data

    }
    setDoc(doc(blogD,title), docData)
    .then(()=>console.log("Document successfully added"))
    .catch(err => console.log("Error", err))
}


// this update the state if a data is changed (works for the select and the input)
function dataChange(e,setData){
    setData(e.target.value)

}


function getBlog(title, topics){
    let col = collection(db, topics)
  let name = doc(col, title)

  const docSnap = getDoc(name)
  .then(res => console.log(docSnap))
  if (docSnap.exists()){
    console.log("Document data", docSnap.data())
  }
  else{
    console.log("not such a document")
  }
}



export {saveBlog, dataChange, getBlog}



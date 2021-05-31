---
Layout:
Title: "preventing duplicates in firebase"
date: 2021-05-31
---

## Introduction

I will share about add the feature to preventing duplicates in the tcg-student-tracker app and which was a problem that I was not able to solve for some time now.

## Body

This was in the issue list that we were supposed to fix so the issue had to do with preventing the ability to add duplicates for a new daily report. So this was a problem that I have been trying to solve for some time but was failing to do because I tried to research on how to prevent duplicate in firebase but didn't find the result that I was looking for and also watched some tutorial on youtube but still did not help that much. So for me to try and find the solution was understanding that I needed to compare form data that I was submitting with the data in firestore and I was comparing them by their date's. So Collin helped me in finding the clue to solve the problem because he said to me that I was supposed to fetch the data in the firestore when the component mounts instead of fetching the data in the submit method and compare the data that I was submitted with that in that database. So in the CaptureProgressForm component, I added useEffect which was responsible for fetch in the firestore. So in the useEffect, I created an empty array with the name 'data' and a const variable result which was responsible forget the data in firestore and looped through the result variable and in the forEach method I pushed the doc. data to the data array. And I also had a state for progressList which initial was empty and after looping through the result variable I setProgressList to the data array.

useEffect(()=>{
let data = []
const result = firestore.collection('tcg-student-progress).get()
result.forEach(doc=>{
data.push(doc.data())
})
setProgressList(data)
})

So in the submit method I created a variable called checkDuplicates and assigned it to some method which method tests whether at least one element in the array passes the test implemented by the provided function and compared the date of each document in the firestore with the one that is being submitted to is not the same. So finally created an if statement that checks checkDuplicates is false it should submit the data else it should show an error that says 'Document exists'.

const submit =(e)=>{
e.preventDefault()
let newDate = new Date(currentDate)toLocaleDateString("zh-Hans-CN")
let checkDuplicates = progressList.some(progress=>{
return new Date(
progress.date.seconds \* 1000 +
progress.date.nanoseconds / 1000000
).toLocaleDateString("zh-Hans-CN") === newDate
})
if(!checkDuplicate){
fireStore
.collection("tcg-student-progress")
.add({
...formData,
user_id: state.authUser.uid,
date: new Date(currentDate),
time: moment().format("LT"),
})
.then((response) => {
console.log(response);
history.push("/progress-list");
})
.catch((e) => console.log(e));
}else{
setError('Document exists')
}
}

## Conclusion

In conclusion, so what I have learned through doing this was that I was too focused on finding the solution and forgot to fully understand what the problem required.

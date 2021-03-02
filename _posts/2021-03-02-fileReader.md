---
Layout:
Title: "FileReader"
date: 2021-03-02
---

## Introduction

I want to share what I learned today when I was supposed to do an input that uploads an image as a file which part of the Activity that Moral gave us.

## Body

### Problem

We were expected to create a form that has an input that can upload an image when you click on the submit button also we expect to display the image as for another component.

### Solve

For me to be able to solve the problem I start by creating an input with a type of "file" which accepts image type of "jpeg, png, jpg" and also the input has an onChange with a method of imageHandler and set the image state to an empty string initial.
Created the imageHandler method as an es6 function which has a parameter of "e". Inside method started by creating a const variable of reader which I other assigned it to FileReader object. So the FileReader object lets web applications asynchronously read the contents of files stored on the user's computer, using File or Blob objects to specify the file or data to read, and the FileReader returns a new FileReader constructor.

And I then added an event handler of "onload" to the reader which handler's the load event and this event is triggered each time the reading operation is completed. And in the "onload" handler created the if statement that checks if the reader.readyState is strictly equal to 2, I call the setRegisterFrom which copies all data in the registerForm but only updates the image value with FilReader.result.

So the "onload" event handler is for the abort event which is triggered each time the reading operation has ended. And also the readyState is a property that provides the current state of the reading operation a FileReader is in.

### Examples of FileReader state:

-The value '0' its state is equal to "Empty", Which means that the Reader has been created and none of the read methods are yet called.

-The value '1' its state is equal to "Loading", which means that a read method has been called.

-The value '2" state is equal to "Done", which means that the operation is complete.

The "FileReader.result" returns the file's contents. This property is only valid after the read operation is complete, and the format of the data depends on which of the methods was used to initiate the read operation.

And so for the browser to be able to read the file that I upload I had to use FileReader.readAsDataURL method which I passed the e.target.files[0] to it as an argument. So what the fileReader.readASDataURL method does is that is used to read the contents of the specified Blob or File. And the e.target.files[0] triggers a specific file from the FileList object provided by the DOM lists all of the files selected by the user, each specified as a file object.

### Complete solve for image upload

import React, {useState} from 'react';

function RegisterForm (){
const [registerForm, setRegisterForm] = useState({
brand: "",
model: "",
period: "",
price: "",
contact: "",
location: "",
image: "",
});
const imageHandler = (e) => {
let selectedImg = e.target.files[0];
let reader = new FileReader();
reader.onload = () => {
if (reader.readyState === 2) {
setRegisterForm({ ...registerForm, image: reader.result });
}
};
reader.readAsDataURL(selectedImg);
};

    return(
        <div>
         <input
          type="file"
          name="image"
          onChange={imageHandler}
          accept="image/png, image/jpeg, image/jpg"
          required
        />
        </div>
    )

}

## Conclusion

So what I have found is that every time moral gives us some work to do I am learning new things every time. So this activity help me understand file and how to work to them in a form and also gain knowledge on fileReader and fileList.

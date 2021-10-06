var stdname=document.getElementById('name');
var stdusn=document.getElementById('usn');


function uploadFileToServer()
{
  
   var reader = new FileReader();
   reader.readAsBinaryString(file);
   reader.onload = function () {
       var dataUri = "data:" + file.type + ";base64," + btoa(reader.result);
       Email.send({
        Host : "smtp.elasticemail.com",
    Username : "udithbkl100@gmail.com",
    Password : "74147921516EF7C467099972619D883386CD",
    To : "udithbkl100@gmail.com",
    From : "udithbkl100@gmail.com",
           Subject : "Send with base64 attachment",
           Body : "Sending file:" + file.name,
           Attachments : [
          	{
          		name : file.name,
          		data : dataUri
          	}]
       }).then(
         message => alert(message)
       );
   };
   reader.onerror = function() {
       console.log('there are some problems');
   };
}
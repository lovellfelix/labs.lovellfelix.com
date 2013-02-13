<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN"
"http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html>
<head>
<title>hide/show iframe</title>
<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1"/>

<style type="text/css">
<!--
html,body {
     height:100%;
     background-color:#eef;
 }
#click {
     width:300px;
     line-height:30px;
     font-family:verdana,arial,helvetica,sans-serif;
     font-size:16px;
     color:#666;
     text-align:center;
     background-color:#fff;
     border:3px double #666;
     cursor:pointer;
     margin:20px auto;
 }
#frDocViewer {
     width:100%;
     height:75%;
 }
-->
</style>

<script type="text/javascript">
<!--
function HideFrame() {
  var fr = document.getElementById ("frDocViewer");
if(fr.style.display=="none") {
   fr.style.display="block";
}
else {
   fr.style.display="none";
  }
 }
//-->
</script>

</head>
<body>

<div id="click" onclick="HideFrame()">hide/show iframe</div>


<iframe id="frDocViewer" src="http://www.codingforums.com/showthread.php?t=65683" frameborder="1" ></iframe>


</body>
</html>
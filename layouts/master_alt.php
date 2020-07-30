<!DOCTYPE html>
<html lang="en">
<head>
<?req('layouts/header');?>

<style>
.bg-login-image{
  background-image: url(<?=url('img/grey-fab.jpg');?>);
}

.bg-register-image {
  background-image : url(<?=url('img/garments-workers.jpg');?>);
}
</style>

</head>

<body id="page-top">

          <!-- Include template layout -->
          <?inc("views/{$_view}");?>
    
<?
req('layouts/footer_ext');
req('layouts/scripts');
?>
<script></script>

</body>
</html>
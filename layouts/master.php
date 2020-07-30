<!DOCTYPE html>
<html lang="en">
<head>
<?req('layouts/header');?>

<style></style>

</head>

<body id="page-top">

  <!-- Page Wrapper -->
  <div id="wrapper">

    <!-- Include template layout -->
    <?req('layouts/sidebar');?>

    <!-- Content Wrapper -->
    <div id="content-wrapper" class="d-flex flex-column">
      <!-- Main Content -->
      <div id="content">

        
        <!-- Include template layout -->
        <?req('layouts/topbar');?>

        <!-- Begin Page Content -->
        <div class="container-fluid">

          <!-- Include template layout -->
          <?inc("views/{$_view}");?>
          

        </div>
        <!-- /.container-fluid -->
      </div>
      <!-- End of Main Content -->

    
    <?req('layouts/footer');?>

    </div>
    <!-- End of Content Wrapper -->
  </div> <!-- Page Wrapper -->
  <!-- End of Page Wrapper -->

<?
req('layouts/footer_ext');
req('layouts/scripts');
?>
<script></script>

</body>
</html>